import Link from "next/link";
import Layout from "../components/Layout";

const Nosotros = () => {
  return (
    <Layout pagina="Nosotros">
      <h1>Desde nosotros</h1>
      <Link href="/">ir a inicio</Link>
    </Layout>
  );
};

export default Nosotros;
