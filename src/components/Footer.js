import React from "react";
import { Link } from "react-router-dom";

function Footer({ textRecipes }) {
  return (
    <footer>
      <Link to={textRecipes ? "/textRecipes" : "/"}>
        <div className="left-header">
          <i className="fas fa-utensils"></i>
          <p>recipe box</p>
          <i className="fas fa-utensil-spoon spoon"></i>
        </div>
      </Link>
    </footer>
  );
}

export default Footer;
