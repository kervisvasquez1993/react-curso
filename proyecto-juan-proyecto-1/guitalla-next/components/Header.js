import Link from "next/link";
import style from "../styles/Header.module.css";
const Header = () => {
  return (
    <header className={style.header}>
      <div></div>
      <nav className={style.navegacion}>
        <Link href="/">Inicio</Link>
        <Link href="/nosotros">nosotros</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/tienda">Tienda</Link>
      </nav>
    </header>
  );
};

export default Header;
