import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import fallbackFoodSrc from "../images/fallbackFoodSrc.png";

class EditRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileWidth: false,
      imgError: false,
    };
    this.onImgError = this.onImgError.bind(this);
    this.sumbittedEdit = this.sumbittedEdit.bind(this);
  }

  componentDidMount() {
    this.fadeIn = setTimeout(() => {
      document.getElementsByClassName("recipe")[0].classList.add("fadeIn");
    }, 0);

    this.mobileLayout();
  }

  onImgError() {
    this.setState({ imgError: true });
  }

  sumbittedEdit(e) {
    const { handleEditRecipeSubmit } = this.props;

    handleEditRecipeSubmit(e);
    const editName = document.querySelector(".edit-name");
    const editNameLink = editName.value.replace(/\W/g, "");

    this.props.history.replace(`/${editNameLink}`);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.mobileLayout);
  }

  mobileLayout = () => {
    const browserWidth = window.innerWidth;
    if (browserWidth >= 605) this.setState({ mobileWidth: false });
    else this.setState({ mobileWidth: true });

    window.addEventListener("resize", this.mobileLayout);
  };

  render() {
    const {
      name,
      img,
      ingredients,
      source,
      nameLink,
      measurements,
      instructions,
    } = this.props.food;

    const { mobileWidth } = this.state;

    return (
      <div style={{ opacity: 0 }} className="recipe information clearfix">
        {mobileWidth && (
          <>
            <Link to={`/${nameLink}`}>
              <button className="edit-information-close">X</button>
            </Link>
            <h2>Edit {name}</h2>
          </>
        )}
        <div className="edit-information-image">
          <img
            src={this.state.imgError ? fallbackFoodSrc : img}
            onError={this.onImgError}
            alt={name}
          />
        </div>
        <div className="edit-information-text">
          {!mobileWidth && (
            <>
              <Link to={`/${nameLink}`}>
                <button className="edit-information-close">X</button>
              </Link>
              <h2>Edit {name}</h2>
            </>
          )}

          <form
            className="edit-recipe-form"
            id={name}
            onSubmit={this.sumbittedEdit}
          >
            <label className="edit-recipe-label">New Name</label>
            <input
              className="edit-recipe-input edit-name"
              name="name"
              type="text"
              defaultValue={name}
            />

            <label className="edit-recipe-label">New Ingredients</label>
            <textarea
              className="edit-recipe-input edit-ingredients"
              name="ingredients"
              type="text"
              defaultValue={ingredients}
            />

            <label className="edit-recipe-label">
              New Ingredients Measurements
            </label>
            <textarea
              className="edit-recipe-input edit-measurements"
              name="measurements"
              type="text"
              defaultValue={measurements}
            />

            <label className="edit-recipe-label">New Instructions</label>
            <textarea
              className="edit-recipe-input edit-instructions"
              name="instructions"
              type="text"
              defaultValue={instructions}
            />

            <label className="edit-recipe-label">New Image Url</label>
            <input
              className="edit-recipe-input edit-img"
              name="img"
              type="text"
              defaultValue={img}
            />

            <label className="edit-recipe-label">New Recipe Source</label>
            <input
              className="edit-recipe-input edit-source"
              name="source"
              type="text"
              defaultValue={source}
            />
            <button className="edit-recipe-submit">submit changes</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(EditRecipe);
