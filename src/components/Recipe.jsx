import React from "react";
import "./Recipe.css";
const Recipe = ({ label, image }) => {
  return (
    <div className="recipe">
      <div className="recipe-column">
        <div className="content">
          <h2>{label}</h2>
          <ul>
            <li>Ingredients</li>
          </ul>
          <a href={image} target="_blank">
            URL
          </a>
        </div>
        <div className="recipe-img">
          <img />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
