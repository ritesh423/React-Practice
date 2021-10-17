import React, { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./components/Recipe";

const App = () => {
  //All  States
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${query}&number=4&addRecipeInformation=true`;

  // Creating a function to fetch the data

  const onSubmit = (e) => {
    e.preventDefault();
    // setQuery for the finished search recipe
    setQuery(search);
    setSearch("");
  };

  const getData = async () => {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results.results);
    setRecipes(results.results);
  };

  useEffect(() => {
    getData();
  }, [query]);

  return (
    <div>
      <h1 className="heading">FoodMainia 🍕</h1>
      <form onClick={onSubmit}>
        <input
          className="search_food"
          type="text"
          placeholder="Search for recipes"
          onChange={(e) => setSearch(e.target.value)}
        />
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
