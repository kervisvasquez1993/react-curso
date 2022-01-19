import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../../helpers/getHeroById";

export const HeroScreen = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();
  const hero = getHeroById(heroId);

  if (!hero) {
    return <Navigate to="/error" />;
  }

  const handleReturn = () => {
    navigate(-1);
  };

  const { alter_ego, superhero, publisher, first_appearance, characters } =
    hero;
  let imgPath = `/assets/img/${heroId}.jpg`;
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img alt={superhero} className="img-thumbnail" src={imgPath} />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group ">
          <li className="list-group-item">
            <b>Alter ego :</b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher :</b> {publisher}
          </li>
          <li className="list-group-item">
            <b>first Appearance :</b> {first_appearance}
          </li>
        </ul>
        <h6>Characters</h6>
        <p>{characters}</p>
        <button className="btn btn-primary" onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};
