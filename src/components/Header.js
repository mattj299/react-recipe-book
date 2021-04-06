import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchBar: "",
      mobileNav: false,
      activeNav: false,
    };
  }

  componentDidMount() {
    this.toggleOpen();
  }

  toggleOpen = () => {
    const innerWidth = window.innerWidth;
    if (innerWidth <= 605) this.setState({ mobileNav: true });
    else this.setState({ mobileNav: false });

    window.addEventListener("resize", this.toggleOpen);
  };

  toggleActive = () => {
    this.setState({ activeNav: !this.state.activeNav });
  };

  onSearchBarChange = async (e) => {
    if (e.target.value) {
      const searchedMeals = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.value}`
      );
      const meals = await searchedMeals.json();

      this.setState({ searchBar: meals });
    } else {
      this.setState({ searchBar: "" });
    }
  };

  displayAddRecipe = () => {
    const hiddenElement = document.querySelector(".add-recipe-container");
    const fadeInElement = document.querySelector(".add-recipe");

    if (hiddenElement.classList.contains("hide")) {
      hiddenElement.classList.remove("hide");
      document.body.classList.add("stop-scrolling");
      setTimeout(() => {
        fadeInElement.classList.add("fadeIn");
      }, 0);
    } else {
      hiddenElement.classList.add("hide");
      document.body.classList.remove("stop-scrolling");
      setTimeout(() => {
        fadeInElement.classList.remove("fadeIn");
      }, 0);
    }
  };

  displaySearchRecipe = () => {
    const hiddenElement = document.querySelector(".search-recipe-container");
    const fadeInElement = document.querySelector(".search-recipe");

    if (hiddenElement.classList.contains("hide")) {
      hiddenElement.classList.remove("hide");
      document.body.classList.add("stop-scrolling");
      setTimeout(() => {
        fadeInElement.classList.add("fadeIn");
      }, 0);
    } else {
      hiddenElement.classList.add("hide");
      document.body.classList.remove("stop-scrolling");
      setTimeout(() => {
        fadeInElement.classList.remove("fadeIn");
      }, 0);
      this.setState({ searchBar: "" });
    }
  };

  render() {
    const {
      textRecipes,
      displayTextRecipes,
      handleAddRecipeSubmit,
      AddRecipe,
      handleAddRandomRecipe,
      SearchRecipe,
      handleAddSearchRecipe,
    } = this.props;

    const { searchBar, mobileNav, activeNav } = this.state;
    let LinkToTextRecipes;
    let LinkToTextRecipesMobile;

    LinkToTextRecipes = (
      <Link
        to={textRecipes ? "/" : "/textRecipes"}
        onClick={displayTextRecipes}
      >
        <i className={textRecipes ? "fas fa-th" : "fas fa-list-ul"}></i>
      </Link>
    );

    LinkToTextRecipesMobile = (
      <Link
        to={textRecipes ? "/" : "/textRecipes"}
        onClick={displayTextRecipes}
      >
        <li className="dropdown-ul-item" onClick={this.toggleActive}>
          Change home view
        </li>
      </Link>
    );

    return (
      <>
        <AddRecipe
          displayAddRecipe={this.displayAddRecipe}
          handleAddRecipeSubmit={handleAddRecipeSubmit}
        />
        <SearchRecipe
          displaySearchRecipe={this.displaySearchRecipe}
          searchBar={searchBar}
          onSearchBarChange={this.onSearchBarChange}
          textRecipes={textRecipes}
          handleAddSearchRecipe={handleAddSearchRecipe}
        />
        {!mobileNav && (
          <header className="main-header">
            <Link to={textRecipes ? "/textRecipes" : "/"}>
              <div className="left-header">
                <i className="fas fa-utensils"></i>
                <p>recipe box</p>
                <i className="fas fa-utensil-spoon spoon"></i>
              </div>
            </Link>
            <div className="right-header">
              {LinkToTextRecipes}
              <button onClick={this.displaySearchRecipe}>
                <i className="fas fa-search"></i>
              </button>
              <button onClick={handleAddRandomRecipe}>add random recipe</button>
              <button onClick={this.displayAddRecipe}>add recipe</button>
            </div>
          </header>
        )}
        {mobileNav && (
          <header className="collapsed-header">
            <Link to={textRecipes ? "/textRecipes" : "/"}>
              <div className="left-header">
                <i className="fas fa-utensils"></i>
                <p>recipe box</p>
                <i className="fas fa-utensil-spoon spoon"></i>
              </div>
            </Link>
            <div
              className="collapsed-header-toggle"
              onClick={this.toggleActive}
            >
              <i className={activeNav ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul
              className={activeNav ? "dropdown-ul active" : "dropdown-ul"}
              onClick={this.toggleActive}
            >
              {LinkToTextRecipesMobile}
              <li
                className="dropdown-ul-item"
                onClick={(() => this.toggleActive, this.displaySearchRecipe)}
              >
                Search For New Recipes
              </li>
              <li
                className="dropdown-ul-item"
                onClick={(() => this.toggleActive, handleAddRandomRecipe)}
              >
                Add Random Recipe
              </li>
              <li
                className="dropdown-ul-item"
                onClick={(() => this.toggleActive, this.displayAddRecipe)}
              >
                Add Recipe
              </li>
            </ul>
          </header>
        )}
      </>
    );
  }
}

export default Header;
