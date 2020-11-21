import React from "react";

function AddRecipe(props) {
  const { displayAddRecipe, handleAddRecipeSubmit } = props;

  return (
    <div className="add-recipe-container clearfix hide">
      <div className="add-recipe">
        <div className="add-recipe-header">
          <label>add new recipe</label>
          <button className="close-add-recipe" onClick={displayAddRecipe}>
            X
          </button>
        </div>
        <form className="add-recipe-form" onSubmit={handleAddRecipeSubmit}>
          <input
            className="add-recipe-input add-name"
            name="name"
            placeholder="recipe name"
            defaultValue=""
          />
          <input
            className="add-recipe-input add-source"
            name="source"
            placeholder="recipe source"
            defaultValue=""
          />
          <input
            className="add-recipe-input add-img"
            name="img"
            placeholder="recipe image"
            defaultValue=""
          />
          <textarea
            className="add-recipe-input add-ingredients"
            name="ingredients"
            placeholder="ingredients, separated by a comma"
            defaultValue=""
          />
          <textarea
            className="add-recipe-input add-measurements"
            name="measurements"
            placeholder="measurement in order of ingredient, comma separated"
            defaultValue=""
          />
          <textarea
            className="add-recipe-input add-instructions"
            name="instructions"
            placeholder="instructions on how to make the dish"
            defaultValue=""
          />
          <button className="add-new-recipe">add</button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipe;
