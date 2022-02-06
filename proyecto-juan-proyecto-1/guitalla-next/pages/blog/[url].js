import Image from "next/image";
import Layout from "../../components/Layout";
import { formatearFecha } from "../../helpers";
import style from "../../styles/Entradas.module.css";
const EntradaBlog = ({ entrada }) => {
  const { titulo, imagen, contenido, published_at } = entrada[0];

  return (
    <Layout pagina={titulo}>
      <main className="contenedor">
        <h2 className="heading">{titulo}</h2>
        <article className={style.entrada}>
          <Image
            layout="responsive"
            width={800}
            height={600}
            src={imagen.url}
            alt={`imagen entrada ${titulo}`}
          />
          <div className={style.contenido}>
            <p className={style.fecha}>{formatearFecha(published_at)}</p>
            <p className={style.texto}> {contenido}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs`;
  const respuestas = await fetch(url);
  const entradas = await respuestas.json();
  const paths = entradas.map((entrada) => ({
    params: { url: entrada.url },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { url } }) {
  const ruta = `${process.env.API_URL}/blogs?url=${url}`;
  const respuesta = await fetch(ruta);
  const entrada = await respuesta.json();
  return {
    props: { entrada: entrada },
  };
}

// export async function getServerSideProps({ query: { id } }) {
// const url = `${process.env.API_URL}/blogs/${id}`;
//   const respuesta = await fetch(url);
//   const entrada = await respuesta.json();
//   return {
//     props: { entrada },
//   };
// }
export default EntradaBlog;
