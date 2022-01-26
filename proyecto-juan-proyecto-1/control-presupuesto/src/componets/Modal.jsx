import React from "react";
import { useForm } from "../hooks/useForm";
import BorrarBtn from "../img/cerrar.svg";

const Modal = ({ setModal, animarModal, setAnimarModal }) => {
  const [values, handleInputChange] = useForm({
    nombre: "",
    cantidad: "",
    categoria: "",
  });

  const { nombre, cantidad, categoria } = values;

  const ocultarModal = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 350);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={BorrarBtn} alt="cerrar" onClick={ocultarModal} />
      </div>

      <form
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
        action=""
      >
        <legend> Nuevo Gasto</legend>
        <div className="campo">
          <label htmlFor="nombre">Nombre de Gasto</label>
          <input
            type="text"
            placeholder="Añade el nombre del gasto"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={handleInputChange}
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            type="number"
            placeholder="Añade la cantidad de gasto, ej: 300"
            id="cantidad"
            name="cantidad"
            value={cantidad}
            onChange={handleInputChange}
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Categoria</label>
          <select
            className=""
            id="categoria"
            name="categoria"
            value={categoria}
            onChange={handleInputChange}
          >
            <option value="">-- Seleccione --</option>
            <option value="ahorro">-- Ahorro --</option>
            <option value="comida">-- Comida --</option>
            <option value="gastos-varios">-- Gastos Varios --</option>
            <option value="salud">-- Salud --</option>
            <option value="suscripciones">-- Suscripciones --</option>
          </select>
        </div>
        <input type="submit" value="Añadir Gastos" />
      </form>
    </div>
  );
};

export default Modal;
