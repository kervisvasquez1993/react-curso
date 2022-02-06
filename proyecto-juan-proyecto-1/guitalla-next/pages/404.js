import Link from "next/link";
import Layout from "../components/Layout";
import style from "../styles/NoFout.module.css";

const NoEncontrada = () => {
  return (
    <Layout>
      <dvi className={style.noEncontrada}>
        <h1 className="heading"> Pagina no encontrada</h1>
        <Link href="/">Volver al Inicio</Link>
      </dvi>
    </Layout>
  );
};

export default NoEncontrada;
