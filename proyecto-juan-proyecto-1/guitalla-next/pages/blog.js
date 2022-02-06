import { useEffect } from "react";
import Entrada from "../components/Entrada";
// import Link from "next/link";
import Layout from "../components/Layout";
import style from "../styles/Blog.module.css";

const Blog = ({ entradas }) => {
  // useEffect(() => {
  //   const consultarApi = async () => {
  //     const url = "http://localhost:1337/blogs";
  //     const respuesta = await fetch(url);
  //     const resultado = await respuesta.json();
  //     console.log(resultado);
  //   };
  //   consultarApi();
  // }, []);

  // forma de consumir api en next
  // getStaticProps- obtener datos cuando se crea el build
  // getStaticPaths - Obtener el listado de pagina cuando se realiza build
  //  getServerSideProps - los datos se optiene en cada request

  // console.log(entradas);
  return (
    <Layout pagina="Blog">
      <main className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className={style.blog}>
          {entradas.map((entrada) => (
            <Entrada key={entrada.id} entrada={entrada} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/blogs`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();
  return {
    props: {
      entradas,
    },
  };
}

export default Blog;
