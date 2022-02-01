import Link from "next/link";
import Layout from "../components/Layout";

const Tienda = () => {
  return (
    <Layout pagina="Tienda">
      <h1>Desde Tienda</h1>
      <Link href="/">ir a inicio</Link>
    </Layout>
  );
};

export default Tienda;
