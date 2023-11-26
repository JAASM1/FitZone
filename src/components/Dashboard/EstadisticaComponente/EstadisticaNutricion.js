import React, { useEffect, useState } from "react";
import axios from "axios";
import Wordcloud from "react-wordcloud";

function EstadisticaNutricion() {
  const [wordData, setWordData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const obtenerTopPalabras = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:8080/fitzone/topPalabrasNutricion"
        );
        console.log("Datos recibidos:", response.data.topPalabras);

        const formattedData = response.data.topPalabras.map((word, index) => ({
          text: word.word, // Usamos word.word para extraer la palabra
          value: word.frequency,
          key: index.toString(),
        }));

        setWordData(formattedData);
        console.log(wordData);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener las top palabras:", error);
        setLoading(false);
      }
    };

    obtenerTopPalabras();
  }, []);

  return (
    <div className="flex flex-col items-center md:gap-5 gap-3 font-Montserrat">
      <h3 className="md:text-4xl text-3xl font-semibold text-white">
        Nutrición
      </h3>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="border shadow-lg rounded-full md:w-[300px] md:h-[300px] w-[400px] h-[300px] bg-white">
          <Wordcloud
            words={wordData}
            options={{
              wordScale: "sqrt",
              fontFamily: "Montserrat",
              fontWeight: "bold",
            }}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px", // Ajusta el espaciado general
            }}
          />
        </div>
      )}
    </div>
  );
}

export default EstadisticaNutricion;
