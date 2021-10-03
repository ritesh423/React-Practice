import React from "react";
import "./Recipe.css";
const Recipe = ({ label, image, healthScore, url }) => {
  return (
    <div className="recipe">
      <div className="recipe-column">
        <div className="content">
          <h2>{label}</h2>
          <h3>Health Score: {healthScore}</h3>
          <a href={url} target="_blank" rel="noreferrer noopener">
            About Recipe
          </a>
          <br />
          <br />
          <img src={image} alt="Food" />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
