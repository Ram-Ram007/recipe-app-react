import React, { useState } from 'react';
import './App.css';
import AddRecipe from './components/Addrecipe';
import Home from './components/Home';
import './components/Addrecipe.css'; 

function App() {
  const [recipes, setRecipes] = useState([]);
  const [showAddRecipe, setShowAddRecipe] = useState(false);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div className="app">
      <nav>
        <ul>
          <button>
            <a href="#add-recipe" onClick={() => setShowAddRecipe(true)}>
              Add
            </a>
          </button>
          <button>
            <a href="#home" onClick={() => setShowAddRecipe(false)}>
              Home
            </a>
          </button>
        </ul>
      </nav>
      {showAddRecipe ? (
        <AddRecipe addRecipe={addRecipe} />
      ) : (
        <Home recipes={recipes} />
      )}
    </div>
  );
}

export default App;
