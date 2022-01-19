import { useParams, Navigate } from "react-router-dom";
import { getHeroById } from "../../helpers/getHeroById";

export const HeroScreen = () => {
  const { heroId } = useParams();

  const hero = getHeroById(heroId);

  if (!hero) {
    return <Navigate to="/error" />;
  }
  return (
    <div>
      <h1>{hero.superhero}</h1>
    </div>
  );
};
