import React from "react";
import { Link } from "react-router-dom";

function TextRecipes(props) {
  const { recipes } = props;

  return (
    <div className="text-recipes-container">
      {recipes.map((food) => {
        return (
          <Link to={food.nameLink} key={food.nameLink}>
            <button className="text-recipes-button">{food.name}</button>
          </Link>
        );
      })}
    </div>
  );
}

export default TextRecipes;
