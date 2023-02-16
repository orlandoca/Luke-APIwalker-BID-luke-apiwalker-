import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "./Components/Cards";
import Cards from "./Components/Cards";

function App() {
  const [categorias, setCategorias] = useState([]);
  const [controllerCat, setControllercat] = useState("");
  const [controllerId, setControllerid] = useState("");
  const [saveData, setsaveData] = useState(null);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/")
      .then((res) => setCategorias(Object.entries(res.data)));

  }, []);

  function buscar() {
    console.log(controllerCat + controllerId);
    axios
      .get(`${controllerCat}${controllerId}`)
      //.get("https://swapi.dev/api/" ${ controllerCat + controllerId)
      .then((res) => setsaveData(res.data))
      .catch(err => setsaveData({err: err.message}))
  }
  return (
    <div className="App">
      <section>
        <div className="select-search">
          Search For:{" "}
          <select
            value={controllerCat}
            onChange={(e) => setControllercat(e.target.value)}
          >
            {categorias?.map((categor, i) => (
              <option key={i + 1} value={categor[1]}>
                {categor[0]}
              </option>
            ))}
          </select>
        </div>
        <div className="id-search">
          Id:
          <input
            onChange={(e) => setControllerid(e.target.value)}
            value={controllerId}
            type="number"
          />
          <button onClick={buscar}> Search:</button>
        </div>
      </section>
      <div>
        {saveData &&  <Cards data={saveData} props={controllerCat} />}
      </div>
    </div>
  );
}

export default App;
