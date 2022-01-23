import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";


function App(){

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  },[query])

  function updateSearch(e){
    setSearch(e.target.value);
    console.log(search)
  }

  function getQuery(e){
    e.preventDefault();
    setQuery(search);
  }

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=${query}&app_id=147bac06&app_key=78f4b151a8cf851a09ca6299d085e333&ingr=5-8`)
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  return(
    <>
      <div className="App">
        <h1>Food Recipe App</h1>
        <form onSubmit={getQuery} className="search-form">
          <input type="text" className="search-bar" value={search} onChange={updateSearch}></input>
          
          <button type="submit" className="search-button">Search</button>
        </form>
        {recipes.map(data => (
          <Recipe key={data.recipe.calories} title={data.recipe.label} calories={data.recipe.calories} image={data.recipe.image} ingredients={data.recipe.ingredients} />
        ))}
      </div>
    </>
  )
  
}


export default App;