import React from "react";
import { Link } from "react-router-dom";

class RecipeInformation extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      document.getElementsByClassName("recipe")[0].classList.add("fadeIn");
    }, 0);
  }

  render() {
    const {
      name,
      img,
      ingredients,
      nameLink,
      source,
      instructions,
      measurements,
    } = this.props.food;
    const { handleDeleteClick, textRecipes, handlePopupText } = this.props;

    const difficulty =
      ingredients.length > 10
        ? "Advanced"
        : ingredients.length > 5
        ? "Intermediate"
        : "Beginner";
    // Split ingredients into two separate columns to make the page a bit shorter and also gets rid of white space on the right side of the container
    const foodSplit = Math.round(ingredients.length / 2);
    const ingredientsFirstHalf = ingredients.slice(0, foodSplit);
    const ingredientsSecondHalf = ingredients.slice(foodSplit);
    const measurementsFirstHalf = measurements.slice(0, foodSplit);
    const measurementsSecondHalf = measurements.slice(foodSplit);

    // If instructions are too long change layout of page
    const instructionsLength = instructions.length;

    if (instructionsLength >= 1750) {
      return (
        <div style={{ opacity: 0 }} className="recipe information clearfix">
          <div className="information-image">
            <div className="information-header">
              <Link to={textRecipes === false ? "/" : "/textRecipes"}>
                <button className="information-close">X</button>
              </Link>
              <h2>{name}</h2>
              <div className="information-buttons">
                <a target="_blank" rel="noopener noreferrer" href={source}>
                  <button className="information-button">source</button>
                </a>
                <Link to={`${nameLink}/edit`}>
                  <button className="information-button">edit</button>
                </Link>
                <Link to={textRecipes === false ? "/" : "/textRecipes"}>
                  <button
                    onClick={() => {
                      handleDeleteClick(name);
                      handlePopupText("Recipe deleted!");
                    }}
                    className="information-button"
                  >
                    delete
                  </button>
                </Link>
              </div>
              <div className="information-subcontainer">
                Difficulty: <span style={{ float: "right" }}>{difficulty}</span>
              </div>
              <div className="information-subcontainer clearfix">
                <p className="information-subcontainer-header">Ingredients</p>
                <ul className="ingredients">
                  <div className="ingredients-left">
                    {ingredientsFirstHalf.map((ingredient, index) => {
                      return (
                        <li
                          key={`${ingredient}/${measurementsFirstHalf[index]}`}
                          className="ingredient"
                        >
                          {ingredient} ({measurementsFirstHalf[index]})
                        </li>
                      );
                    })}
                  </div>
                  <div className="ingredients-right">
                    {ingredientsSecondHalf.map((ingredient, index) => {
                      return (
                        <li
                          key={`${ingredient}/(${measurementsSecondHalf[index]})`}
                          className="ingredient"
                        >
                          {ingredient} ({measurementsSecondHalf[index]})
                        </li>
                      );
                    })}
                  </div>
                </ul>
              </div>
            </div>
            <img src={img} alt={name} />
          </div>
          <div className="information-text">
            <div className="information-subcontainer">
              <p className="information-subcontainer-header">Instructions</p>
              <p className="instructions">{instructions}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ opacity: 0 }} className="recipe information clearfix">
          <div className="information-image">
            <div className="information-header">
              <Link to={textRecipes === false ? "/" : "/textRecipes"}>
                <button className="information-close">X</button>
              </Link>
              <h2>{name}</h2>
              <div className="information-buttons">
                <a target="_blank" rel="noopener noreferrer" href={source}>
                  <button className="information-button">source</button>
                </a>
                <Link to={`${nameLink}/edit`}>
                  <button className="information-button">edit</button>
                </Link>
                <Link to={textRecipes === false ? "/" : "/textRecipes"}>
                  <button
                    onClick={() => {
                      handleDeleteClick(name);
                      handlePopupText("Recipe deleted!");
                    }}
                    className="information-button"
                  >
                    delete
                  </button>
                </Link>
              </div>
              <div className="information-subcontainer">
                Difficulty: <span style={{ float: "right" }}>{difficulty}</span>
              </div>
            </div>
            <img src={img} alt={name} />
          </div>
          <div className="information-text">
            <div className="information-subcontainer clearfix">
              <p className="information-subcontainer-header">Ingredients</p>
              <ul className="ingredients">
                <div className="ingredients-left">
                  {ingredientsFirstHalf.map((ingredient, index) => {
                    return (
                      <li
                        key={`${ingredient}/${measurementsFirstHalf[index]}`}
                        className="ingredient"
                      >
                        {ingredientsFirstHalf[index]} (
                        {measurementsFirstHalf[index]})
                      </li>
                    );
                  })}
                </div>
                <div className="ingredients-right">
                  {ingredientsSecondHalf.map((ingredient, index) => {
                    return (
                      <li
                        key={`${ingredient}/${measurementsFirstHalf[index]}`}
                        className="ingredient"
                      >
                        {ingredientsSecondHalf[index]} (
                        {measurementsSecondHalf[index]})
                      </li>
                    );
                  })}
                </div>
              </ul>
            </div>
            <div className="information-subcontainer">
              <p className="information-subcontainer-header">Instructions</p>
              <p className="instructions">{instructions}</p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default RecipeInformation;
