import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function DetallePersona() {
  const { id } = useParams();
  const [saveData, setsaveData] = useState({});

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/" + id) //Solicito con el id la persona concreta
      .then((res) => setsaveData(res.data));
  }, []);

  return (
    //retorno a people con sus atributos
    <div
      style={{
        margin: "50px",
        textAlign: "center",
        fontSize: "20px",
      }}
    >
      <h1>{saveData.name}</h1>
      <ul>
        <li>{saveData.height}</li>
        <li>{saveData.hair_color}</li>
        <li>{saveData.mass}</li>
      </ul>
    </div>
  );
}

export default DetallePersona;
