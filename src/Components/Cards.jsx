import React from "react";

export default function Cards({ data, props }) {
  const item = props.split("/").slice(4, 5)[0];
  //console.log(data.detail);
  console.log(item);

  if (!data || data.err != undefined) {
    return (
      <div>
        <h1>Estos no son los droides que está buscando</h1>
        <img src="https://images.alphacoders.com/124/1244083.jpg" />
      </div>
    );
  } else {
    switch (item) {
      case "people":
        return (
          <div>
            <h1>{data.name}</h1>
            <ul>
              <li>{data.height}</li>
              <li>{data.hair_color}</li>
              <li>{data.mass}</li>
            </ul>
          </div>
        );
      case "planets":
        return (
          <div>
            <h1>{data.name}</h1>
            <ul>
              <li>{data.diameter}</li>
              <li>{data.climate}</li>
              <li>{data.terrain}</li>
            </ul>
          </div>
        );
      case "films":
        return (
          <div>
            <h1>{data.title}</h1>
            <ul>
              <li>{data.episode_id}</li>
              <li>{data.director}</li>
              <li>{data.producer}</li>
            </ul>
          </div>
        );
      case "species":
        return (
          <div>
            <h1>{data.name}</h1>
            <ul>
              <li>{data.classification}</li>
              <li>{data.homeworld}</li>
              <li>{data.language}</li>
            </ul>
          </div>
        );
      case "vehicles":
        return (
          <div>
            <h1>{data.name}</h1>
            <ul>
              <li>{data.model}</li>
              <li>{data.consumables}</li>
              <li>{data.passengers}</li>
            </ul>
          </div>
        );
      case "starships":
        return (
          <div>
            <h1>{data.name}</h1>
            <ul>
              <li>{data.model}</li>
              <li>{data.manufacturer}</li>
              <li>{data.length}</li>
            </ul>
          </div>
        );
    }
  }
}
