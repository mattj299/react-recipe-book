import React from "react";

function SearchRecipe(props) {
  const {
    textRecipes,
    displaySearchRecipe,
    searchBar,
    onSearchBarChange,
    handleAddSearchRecipe,
  } = props;

  let searchedMeals, searchBarRecipes;

  // Checks if searchBar contains anything
  if (searchBar && searchBar.meals) {
    // Checks if meals that got searched is > 10, if so then cut it down to 10 recipes
    searchBarRecipes = [...searchBar.meals];
    if (searchBar.meals.length > 10) {
      // Checks if width >= 645, if true return 10 items otherwise check if >= 360, if true return 5, else return 3
      searchBarRecipes.length =
        window.innerWidth >= 645 ? 10 : window.innerWidth >= 360 ? 5 : 3;
    }
    // Checks if textRecipes is true, if true then display recipes names, if false then display the cards w/ the image
    searchedMeals = textRecipes
      ? searchBarRecipes.map((meal) => {
          return (
            <div className="searched-meal-text" key={meal.idMeal}>
              <div style={{ position: "relative" }}>
                <button className="text-recipes-button">{meal.strMeal}</button>
                <div
                  className="save-overlay save-overlay-text"
                  onClick={() => {
                    handleAddSearchRecipe(meal);
                    displaySearchRecipe();
                  }}
                >
                  <p>Save</p>
                </div>
              </div>
            </div>
          );
        })
      : searchBarRecipes.map((meal) => {
          return (
            <div className="searched-meal" key={meal.idMeal}>
              <div className="recipe-container">
                <div className="recipe">
                  <img
                    className="recipe-img searched-meal-recipe-img"
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                  />
                  <p className="recipe-caption">{meal.strMeal}</p>
                  <div
                    className="save-overlay"
                    onClick={() => {
                      handleAddSearchRecipe(meal);
                      displaySearchRecipe();
                    }}
                  >
                    <p>Save</p>
                  </div>
                </div>
              </div>
            </div>
          );
        });
  } else if (searchBar !== "") {
    searchedMeals = (
      <div className="no-recipe">
        <p>No Recipes found</p>
      </div>
    );
  }

  return (
    <div className="search-recipe-container clearfix hide">
      <div className="search-recipe">
        <div className="search-recipe-header">
          <label>Search new recipe</label>
          <button className="close-search-recipe" onClick={displaySearchRecipe}>
            X
          </button>
        </div>
        <form>
          <input
            className="search-recipe-input"
            name="search"
            placeholder="Search for a recipe"
            onChange={onSearchBarChange}
            defaultValue=""
          />
        </form>
        <ul className="search-recipe-ul">{searchedMeals}</ul>
      </div>
    </div>
  );
}

export default SearchRecipe;
