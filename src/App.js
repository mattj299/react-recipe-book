import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Popup from "./components/Popup";
import Header from "./components/Header";
import AddRecipe from "./components/AddRecipe";
import SearchRecipe from "./components/SearchRecipe";
import TextRecipes from "./components/TextRecipes";
import Recipe from "./components/Recipe";
import RecipeInformation from "./components/RecipeInformation";
import EditRecipe from "./components/EditRecipe";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [],
      textRecipes: false,
      popupText: "",
    };
    this.displayTextRecipes = this.displayTextRecipes.bind(this);
    this.handlePopupText = this.handlePopupText.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditRecipeSubmit = this.handleEditRecipeSubmit.bind(this);
    this.handleAddRecipeSubmit = this.handleAddRecipeSubmit.bind(this);
    this.handleAddRandomRecipe = this.handleAddRandomRecipe.bind(this);
    this.handleAddSearchRecipe = this.handleAddSearchRecipe.bind(this);
  }

  componentDidMount() {
    let localFood = localStorage.getItem("food");

    if (localFood != null) {
      // Parses it from json string to js object then set the state to it
      this.setState({ food: JSON.parse(localFood) });
    }
    // If null is true that means local storage is empty, so call function 4 times to populate the screen with random recipes
    else {
      this.handleAddRandomRecipe();
      this.handleAddRandomRecipe();
      this.handleAddRandomRecipe();
      this.handleAddRandomRecipe();
    }

    if (document.URL.includes("/textRecipes")) {
      this.setState({ textRecipes: true });
    }
  }

  displayTextRecipes() {
    this.setState({ textRecipes: !this.state.textRecipes });
  }

  handlePopupText(newText) {
    this.setState({ popupText: newText }, () => {
      const popupContainer = document.querySelector(".popup-container");
      popupContainer.classList.remove("hide");
      popupContainer.classList.add("fadeIn");
      document.body.classList.add("stop-scrolling");

      setTimeout(() => {
        popupContainer.classList.remove("fadeIn");
      }, 2000);
      setTimeout(() => {
        popupContainer.classList.add("hide");
        document.body.classList.remove("stop-scrolling");
      }, 2500);
    });
  }

  handleDeleteClick(name) {
    const newFood = this.state.food.filter((food) => {
      return name !== food.name;
    });

    localStorage.setItem("food", JSON.stringify(newFood));
    this.setState({
      food: newFood,
    });
  }

  handleEditRecipeSubmit(e) {
    e.preventDefault();

    const updatedFood = [...this.state.food];

    const editName = document.querySelector(".edit-name");
    const editIngredients = document.querySelector(".edit-ingredients");
    const editMeasurements = document.querySelector(".edit-measurements");
    const editInstructions = document.querySelector(".edit-instructions");
    const editImg = document.querySelector(".edit-img");
    const editSource = document.querySelector(".edit-source");

    const index = this.state.food.findIndex((food) => {
      return food.name === e.target.id;
    });

    if (
      editName.value &&
      editIngredients.value &&
      editMeasurements.value &&
      editInstructions.value &&
      editImg.value &&
      editSource.value
    ) {
      let ingredientsArray = editIngredients.value.trim().split(",");
      let measurementsArray = editMeasurements.value
        .trim()
        .split(",")
        .map((measurement) => measurement.trim());
      while (measurementsArray.length < ingredientsArray.length) {
        measurementsArray.push("");
      }
      measurementsArray = measurementsArray.map((measurement) => {
        if (!measurement) {
          measurement = "to serve";
          return measurement;
        } else {
          return measurement;
        }
      });

      updatedFood[index].name = editName.value.trim();
      updatedFood[index].nameLink = editName.value.replace(/\W/g, "");
      updatedFood[index].ingredients = ingredientsArray;
      updatedFood[index].measurements = measurementsArray;
      updatedFood[index].instructions = editInstructions.value.trim();
      updatedFood[index].img = editImg.value.trim();
      updatedFood[index].source = editSource.value.trim();

      // Sets the item in the local storage
      localStorage.setItem("food", JSON.stringify(updatedFood));

      this.handlePopupText("Changes saved!");

      this.setState({ food: updatedFood });
    } else {
      this.handlePopupText("All inputs need to be filled out.");
    }
  }

  handleAddRecipeSubmit(e) {
    e.preventDefault();
    const updatedFood = [...this.state.food];

    const addName = document.querySelector(".add-name");
    const addtIngredients = document.querySelector(".add-ingredients");
    const addMeasurements = document.querySelector(".add-measurements");
    const addInstructions = document.querySelector(".add-instructions");
    const addImg = document.querySelector(".add-img");
    const addSource = document.querySelector(".add-source");

    if (
      addName.value &&
      addtIngredients.value &&
      addMeasurements.value &&
      addInstructions.value &&
      addImg.value &&
      addSource.value
    ) {
      const ingredientsArray = addtIngredients.value.trim().split(",");
      let measurementsArray = addMeasurements.value
        .trim()
        .split(",")
        .map((measurement) => measurement.trim());

      while (measurementsArray.length < ingredientsArray.length) {
        measurementsArray.push("");
      }
      measurementsArray = measurementsArray.map((measurement) => {
        if (!measurement || measurement === " ") {
          measurement = "to serve";
          return measurement;
        } else {
          measurement = measurement.trim();
          return measurement;
        }
      });

      const newFood = {
        name: addName.value.trim(),
        nameLink: addName.value.replace(/\W/g, ""),
        ingredients: ingredientsArray,
        measurements: measurementsArray,
        instructions: addInstructions.value.trim(),
        img: addImg.value.trim(),
        source: addSource.value.trim(),
      };

      updatedFood.push(newFood);
      document
        .getElementsByClassName("add-recipe-container")[0]
        .classList.add("hide");

      localStorage.setItem("food", JSON.stringify(updatedFood));

      this.handlePopupText("Recipe added!");

      this.setState({ food: updatedFood });
    } else {
      document.querySelector(".add-recipe-container").classList.add("hide");
      document
        .querySelector(".add-recipe")
        .classList.remove("add-recipe-fadeIn");
      this.handlePopupText("All inputs need to be filled out.");
    }
  }

  async handleAddRandomRecipe() {
    this.handlePopupText("Created Random Recipe!");
    const mealDb = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data = await mealDb.json();
    const meal = data.meals[0];

    const newFood = {};
    newFood.name = meal.strMeal;
    newFood.nameLink = newFood.name.replace(/\W/g, "");
    newFood.img = meal.strMealThumb;

    let ingredientsArray = [];
    let measurementsArray = [];

    ingredientsArray.push(
      meal.strIngredient1,
      meal.strIngredient2,
      meal.strIngredient3,
      meal.strIngredient4,
      meal.strIngredient5,
      meal.strIngredient6,
      meal.strIngredient7,
      meal.strIngredient8,
      meal.strIngredient9,
      meal.strIngredient10,
      meal.strIngredient11,
      meal.strIngredient12,
      meal.strIngredient13,
      meal.strIngredient14,
      meal.strIngredient15,
      meal.strIngredient16,
      meal.strIngredient17,
      meal.strIngredient18,
      meal.strIngredient19,
      meal.strIngredient20
    );

    ingredientsArray = ingredientsArray.filter((ingredient) => {
      return ingredient;
    });

    measurementsArray.push(
      meal.strMeasure1,
      meal.strMeasure2,
      meal.strMeasure3,
      meal.strMeasure4,
      meal.strMeasure5,
      meal.strMeasure6,
      meal.strMeasure7,
      meal.strMeasure8,
      meal.strMeasure9,
      meal.strMeasure10,
      meal.strMeasure11,
      meal.strMeasure12,
      meal.strMeasure13,
      meal.strMeasure14,
      meal.strMeasure15,
      meal.strMeasure16,
      meal.strMeasure17,
      meal.strMeasure18,
      meal.strMeasure19,
      meal.strMeasure20
    );

    measurementsArray.length = ingredientsArray.length;
    measurementsArray = measurementsArray.map((measurement) => {
      if (!measurement || measurement === " ") {
        measurement = "to serve";
        return measurement;
      } else {
        measurement = measurement.trim();
        return measurement;
      }
    });

    newFood.ingredients = ingredientsArray;
    newFood.measurements = measurementsArray;
    newFood.instructions = meal.strInstructions;
    newFood.source = meal.strSource;

    const updatedFood = [...this.state.food];
    updatedFood.push(newFood);

    // Sets the item in the local storage
    localStorage.setItem("food", JSON.stringify(updatedFood));

    this.setState({ food: updatedFood });
  }

  handleAddSearchRecipe(meal) {
    const newFood = {};
    newFood.name = meal.strMeal;
    newFood.nameLink = newFood.name.replace(/\W/g, "");
    newFood.img = meal.strMealThumb;

    let ingredientsArray = [];
    let measurementsArray = [];

    ingredientsArray.push(
      meal.strIngredient1,
      meal.strIngredient2,
      meal.strIngredient3,
      meal.strIngredient4,
      meal.strIngredient5,
      meal.strIngredient6,
      meal.strIngredient7,
      meal.strIngredient8,
      meal.strIngredient9,
      meal.strIngredient10,
      meal.strIngredient11,
      meal.strIngredient12,
      meal.strIngredient13,
      meal.strIngredient14,
      meal.strIngredient15,
      meal.strIngredient16,
      meal.strIngredient17,
      meal.strIngredient18,
      meal.strIngredient19,
      meal.strIngredient20
    );

    ingredientsArray = ingredientsArray.filter((ingredient) => {
      return ingredient;
    });

    measurementsArray.push(
      meal.strMeasure1,
      meal.strMeasure2,
      meal.strMeasure3,
      meal.strMeasure4,
      meal.strMeasure5,
      meal.strMeasure6,
      meal.strMeasure7,
      meal.strMeasure8,
      meal.strMeasure9,
      meal.strMeasure10,
      meal.strMeasure11,
      meal.strMeasure12,
      meal.strMeasure13,
      meal.strMeasure14,
      meal.strMeasure15,
      meal.strMeasure16,
      meal.strMeasure17,
      meal.strMeasure18,
      meal.strMeasure19,
      meal.strMeasure20
    );

    measurementsArray.length = ingredientsArray.length;
    measurementsArray = measurementsArray.map((measurement) => {
      if (!measurement || measurement === " ") {
        measurement = "to serve";
        return measurement;
      } else {
        measurement = measurement.trim();
        return measurement;
      }
    });

    newFood.ingredients = ingredientsArray;
    newFood.measurements = measurementsArray;
    newFood.instructions = meal.strInstructions;
    newFood.source = meal.strSource;

    const updatedFood = [...this.state.food];
    updatedFood.push(newFood);

    // Sets the item in the local storage
    localStorage.setItem("food", JSON.stringify(updatedFood));

    this.handlePopupText("New Recipe Added!");
    this.setState({ food: updatedFood });
  }

  render() {
    return (
      <Router basename="/recipe-book">
        <>
          <div className="no-footer-content">
            <Popup popupText={this.state.popupText} />
            <Header
              textRecipes={this.state.textRecipes}
              displayTextRecipes={this.displayTextRecipes}
              handleAddRecipeSubmit={this.handleAddRecipeSubmit}
              AddRecipe={AddRecipe}
              SearchRecipe={SearchRecipe}
              handlePopupText={this.handlePopupText}
              handleAddRandomRecipe={this.handleAddRandomRecipe}
              handleAddSearchRecipe={this.handleAddSearchRecipe}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => <Recipe food={this.state.food} />}
              />

              <Route
                path="/textRecipes"
                render={(props) => <TextRecipes recipes={this.state.food} />}
              />

              {this.state.food.map((food) => {
                return (
                  <Route
                    exact
                    key={food.nameLink}
                    path={`/${food.nameLink}`}
                    render={(props) => (
                      <RecipeInformation
                        textRecipes={this.state.textRecipes}
                        food={food}
                        handleDeleteClick={this.handleDeleteClick}
                        handlePopupText={this.handlePopupText}
                      />
                    )}
                  />
                );
              })}

              {this.state.food.map((food) => {
                return (
                  <Route
                    key={food.nameLink}
                    path={`/${food.nameLink}/edit`}
                    render={(props) => (
                      <EditRecipe
                        food={food}
                        handleEditRecipeSubmit={this.handleEditRecipeSubmit}
                      />
                    )}
                  />
                );
              })}
            </Switch>
          </div>
          <Footer textRecipes={this.state.textRecipes} />
        </>
      </Router>
    );
  }
}

export default App;
