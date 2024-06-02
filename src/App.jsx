import { useState } from "react";

export default function App() {
  const [employeeCode, setEmmployeeCode] = useState();
  function handleChangeEmployeeCode(event) {
    setEmmployeeCode(event.target.value);
  }
  const [tab, setTab] = useState();
  const handleClickCustomers = () => {
    setTab("clientes");
  };
  const handleClickEmployees = () => {
    setTab("empleados");
  };
  const handleClickCards = () => {
    setTab("tarjetas");
  };
  const handleClickTicket = () => {
    setTab("boletos");
  };
  return (
    <div>
      <h1 className="title">Bienvenido</h1>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            value={employeeCode}
            onChange={handleChangeEmployeeCode}
            type="text"
            placeholder="Ingresa tu código de empleado"
          />
        </div>
      </div>
      <div>
        <div className="buttons are-medium">
          <button className="button" onClick={handleClickEmployees}>
            Empleados
          </button>
          <button className="button" onClick={handleClickCustomers}>
            Clientes
          </button>
          <button className="button" onClick={handleClickCards}>
            Tarjetas
          </button>
          <button className="button" onClick={handleClickTicket}>
            Boletos
          </button>
        </div>
      </div>
      {tab === "empleados" && <p>Contenido de los Empleados</p>}
      {tab === "clientes" && <p>Contenido de los clientes</p>}
      {tab === "tarjetas" && <p>Contenido de los Tarjetas</p>}
      {tab === "boletos" && <p>Contenido de los Boletos</p>}
    </div>
  );
}
