import Link from "next/link";
import Layout from "../components/Layout";

const Blog = () => {
  return (
    <Layout pagina="Blog">
      <h1>Desde Blog</h1>
      <Link href="/">ir a inicio</Link>
    </Layout>
  );
};

export default Blog;
