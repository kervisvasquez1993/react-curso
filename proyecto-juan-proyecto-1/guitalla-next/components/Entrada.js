import Link from "next/link";
import Image from "next/image";
import style from "../styles/Entradas.module.css";
import { formatearFecha } from "../helpers";

const Entrada = ({ entrada }) => {
  const { titulo, resumen, imagen, published_at, id } = entrada;
//   console.log(imagen.url);
  return (
    <article className={style.contenido}>
      <Image
        priority="true"
        layout="responsive"
        width={800}
        height={600}
        src={imagen.url}
        alt=""
      />
      <h3>{titulo}</h3>
      <p className={style.fecha}>{formatearFecha(published_at)}</p>
      <p className={style.resumen}>{resumen}</p>
      <Link href={`/blogs/${id}`}>
        <a className={style.enlace}>Leer entrada</a>
      </Link>
    </article>
  );
};

export default Entrada;
