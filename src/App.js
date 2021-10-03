import React, { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./components/Recipe";

const App = () => {
  //All  States

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  // Creating a function to fetch the data
  const getData = async () => {
    const response = await fetch(
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=0e02b9ddd3ed4353b59878c141584697&query=pasta&maxFat=25&number=2&addRecipeInformation=true"
    );
    const results = await response.json();
    console.log(results.results);
    setRecipes(results.results);
  };

  return (
    <div>
      <h1>Food Recipe App </h1>
      <form>
        <input type="text" placeholder="Search for recipes" />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
      <div className="recipes">
        {/* map over our array and pass our data from API*/}
        {recipes !== [] &&
          recipes.map((recipe) => (
            <Recipe
              key={recipe.id}
              label={recipe.title}
              healthScore={recipe.healthScore}
              image={recipe.image}
              url={recipe.sourceUrl}
              // ingredients={recipe.analyzedInstructions.steps}
            />
          ))}
      </div>
    </div>
  );
};

export default App;
