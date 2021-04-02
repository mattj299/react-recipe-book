import React from "react";
import ReactDOM from "react-dom";
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

import LoadedGuacTacos from "./images/loaded-guac-veg-tacos.jpg";
import GreenCurry from "./images/thai-green-curry.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [
        {
          name: "Loaded Guacamole Tacos",
          nameLink: "LoadedGuacamoleTacos",
          ingredients: [
            "fresh avocados",
            "black beans",
            "jalapenos",
            "tomatoes or tomatillos",
            "corn or small flour tortillas",
            "corn",
            "lime",
            "cilantro",
          ],
          measurements: [
            "2",
            "1/2 cup",
            "1 tablespoon",
            "1",
            "3",
            "1/2 cup",
            "1/2",
            "4 tablespoons",
          ],
          instructions:
            "Mash the avocado in a medium bowl with a fork (or molcajete) until it reaches your desired consistency, chunky or smooth. Add a small squeeze each of lime and lemon juice. Mix well and taste. Add more lime juice, lemon juice, and salt as you like. Add the black bean ingredients to a 2 quart sauce pot and heat over medium-low until hot. Turn off the heat and allow to cool to a very warm, eatable temp. If tortillas aren't soft and pliable (or if you like your tortillas warm), stack them on microwaveable plate, separate with paper towels, heat for 20 to 30 seconds. Line half of each tortilla with lettuce. Spoon the black bean mixture over the lettuce (on half of the tortilla). Spoon guacamole on the other half. Top with a few shakes of hot sauce (optional) and a sprinkle of cilantro. Serve with lemon and lime wedges.",
          img: LoadedGuacTacos,
          source:
            "http://soupaddict.com/2014/06/loaded-guacamole-vegetarian-tacos/",
        },
        {
          name: "Green Curry",
          nameLink: "GreenCurry",
          ingredients: [
            "rice",
            "coconut milk",
            "carrots",
            "onions",
            "garlic",
            "green curry paste",
            "asparagus",
            "cilantro",
          ],
          measurements: [
            "1 cup",
            "1/2 cup",
            "4",
            "1",
            "3",
            "3 tablespoons",
            "5",
            "4 tablespoons",
          ],
          instructions:
            "To cook the rice, bring a large pot of water to boil. Add the rinsed rice and continue boiling for 30 minutes, reducing heat as necessary to prevent overflow. Remove from heat, drain the rice and return the rice to pot. Cover and let the rice rest for 10 minutes or longer, until you’re ready to serve. Warm a large skillet with deep sides over medium heat. Once it’s hot, add a couple teaspoons of oil. Cook the onion, ginger and garlic with a sprinkle of salt for about 5 minutes, stirring often. Add the asparagus and carrots and cook for 3 more minutes, stirring occasionally. Then add the curry paste and cook, stirring often, for 2 minutes. Pour the coconut milk into the pan, along with ½ cup water and 1 ½ teaspoons sugar. Bring the mixture to a simmer. Reduce heat as necessary to maintain a gentle simmer and cook until the carrots and asparagus are tender and cooked through, about 5 to 10 minutes. Once the vegetables are done cooking, stir the spinach into the mixture and cook until the spinach has wilted, about 30 seconds. Remove the curry from heat and season with rice vinegar and soy sauce. Add salt and red pepper flakes (optional), to taste. Divide rice and curry into bowls and garnish with chopped cilantro and a sprinkle of red pepper flakes, if you’d like.",
          img: GreenCurry,
          source:
            "http://cookieandkate.com/2015/thai-green-curry-with-spring-vegetables/",
        },
      ],
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
      console.log(measurementsArray);

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

      setTimeout(() => {
        window.location.pathname = `/${updatedFood[index].nameLink}`;
      }, 1500);
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
          <Footer />
        </>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
