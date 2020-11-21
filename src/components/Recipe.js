import React from "react";
import { Link } from "react-router-dom";

function Recipe(props) {
  const { food } = props;
  const foodMapped = food.map((food) => {
    const { name, img, nameLink } = food;
    return (
      <Link className="recipe-link" to={"/" + nameLink} key={name}>
        <div className="recipe-container">
          <div className="recipe">
            <img className="recipe-img" src={img} alt={name} />
            <p className="recipe-caption">{name}</p>
          </div>
        </div>
      </Link>
    );
  });

  return <div className="home-container">{foodMapped}</div>;
}

export default Recipe;
