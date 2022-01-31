import Link from "next/link";
import Layout from "../components/Layout";
export default function Home() {
  return (
    <Layout pagina="Home">
      <h1>Desde index</h1>
      <Link href="/nosotros">Ir a nosotros</Link>
    </Layout>
  );
}
