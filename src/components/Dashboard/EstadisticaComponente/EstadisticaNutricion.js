import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import * as d3 from "d3";
import cloud from "d3-cloud";

function EstadisticaNutricion() {
  const [wordData, setWordData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tooltip, setTooltip] = useState({
    show: false,
    text: "",
  });
  const svgRef = useRef(null);

  useEffect(() => {
    const obtenerTopPalabras = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:8080/fitzone/topPalabrasNutricion"
        );

        const formattedData = response.data.topPalabras.map((word, index) => ({
          text: word.word,
          value: word.frequency,
          key: index.toString(),
        }));

        setWordData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener las top palabras:", error);
        setLoading(false);
      }
    };

    obtenerTopPalabras();
  }, []);

  useEffect(() => {
    if (svgRef.current && wordData.length > 0) {
      const colorScale = d3.interpolateRainbow;
  
      const layout = cloud()
        .size([300, 300])
        .words(wordData)
        .rotate(() => 0)
        .font("Montserrat")
        .fontWeight("bold")
        .fontSize((d) => Math.min(d.value * 2, 30))
        .spiral("rectangular")
        .on("end", (words) => {
          d3.select(svgRef.current).selectAll("*").remove();
  
          const containerWidth = 300;
          const containerHeight = 300;
          const centerX = containerWidth / 2;
          const centerY = containerHeight / 2;
  
          const wordGroup = d3
            .select(svgRef.current)
            .append("g")
            .attr("transform", `translate(${centerX},${centerY})`);
  
          wordGroup
            .selectAll("text")
            .data(words)
            .enter()
            .append("text")
            .style("font-family", "Montserrat")
            .style("font-weight", "bold")
            .style("font-size", (d) => d.size)
            .style(
              "transform",
              (d) => `translate(${d.x}px, ${d.y}px) rotate(${d.rotate}deg)`
            )
            .style("text-anchor", "middle")
            .style("fill", () => colorScale(Math.random())) // Asigna color aleatorio
            .text((d) => d.text)
            .on("mouseover", (event, d) => {
              const [x, y] = [d.x + centerX, d.y + centerY];
              setTooltip({ show: true, text: `Buscada: ${d.value}`, x, y });
            })
            .on("mouseout", () => {
              setTooltip({ show: false, text: "" });
            });
        });
  
      layout.start();
    }
  }, [wordData]);

  return (
    <div className="flex flex-col items-center md:gap-5 gap-3 font-Montserrat">
      <h3 className="md:text-4xl text-3xl font-semibold">
        Nutrición
      </h3>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className=" shadow-xl rounded-md md:w-[300px] md:h-[300px] w-[250px] h-[250px] relative">
          <svg
            className="capitalize"
            ref={svgRef}
            width="100%"
            height="100%"
            style={{ padding: "1px" }}
          />
          {tooltip.show && (
            <div
              className="absolute text-black p-1"
              style={{
                top: tooltip.y + "px",
                left: tooltip.x + "px",
              }}
            >
              {tooltip.text}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default EstadisticaNutricion;
