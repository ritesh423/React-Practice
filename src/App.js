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
    const res = await fetch(
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=0e02b9ddd3ed4353b59878c141584697&query=pasta"
    );
    const response = await res.json();
    console.log(response.results);
    setRecipes(response.results);
  };

  return (
    <div>
      <h1>🥔 FoodMania 🥔</h1>
      <form>
        <input type="text" placeholder="Search for recipes" />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} label={recipe.title} image={recipe.image} />
        ))}
      </div>
    </div>
  );
};

export default App;
