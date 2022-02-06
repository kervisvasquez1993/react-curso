import Link from "next/link";
import Layout from "../components/Layout";
import Listado from "../components/Listado";

const Tienda = ({ guitarras }) => {
  return (
    <Layout pagina="Tienda">
      <main className="contenedor">
        <h1 className="heading">Nuetra colleciones</h1>
        <Listado guitarras={guitarras} />
      </main>
    </Layout>
  );
};

export default Tienda;

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/products`;
  const response = await fetch(url);
  const guitarras = await response.json();

  return {
    props: { guitarras },
  };
}
