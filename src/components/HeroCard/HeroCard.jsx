import "./HeroCard.css";

export const HeroCard = ({ hero, addHero }) => {
  
  return (
    <div className="card">
      <h5 className="card-title">{hero.name}</h5>

      <img className="card-img-top" src={hero.image} alt="slka " />

      <div className="card-body">
        <button className="card-link">Info</button>
        <button className="card-link" onClick={() => addHero(hero)}>
          Add
        </button>
      </div>
    </div>
  );
};
