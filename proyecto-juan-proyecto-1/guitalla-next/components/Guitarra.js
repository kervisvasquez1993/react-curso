import Image from "next/image";
import Link from "next/link";
const Guitarra = ({ guitarra }) => {
  const { description, price, title, image, slug } = guitarra;
  console.log(slug);
  return (
    <div>
      <Image
        priority="true"
        layout="responsive"
        width={500}
        height={350}
        src={image.url}
        alt={`Imagen Guitarra ${title}`}
      />
      <div>
        <p>{title}</p>
        <p>{price}</p>
        <p>{description}</p>
        <Link href={`/guitarra/${slug}`}>
          <a>Ver Más</a>
        </Link>
      </div>
    </div>
  );
};

export default Guitarra;
