import './App.css';
import { Button } from 'antd';
import foods from './foods.json';
import React, { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [showForm, setShowForm] = useState(false);

  const addFood = (food) => {
    setFoodList([...foodList, food]);
  };

  const handleDelete = (food) => {
    const filteredList = foodList.filter((item) => item.name !== food.name);
    setFoodList(filteredList);
  };

  const handleSearch = (query) => {
    const filteredList = foods.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    setFoodList(filteredList);
  };

  return (
    <div className="App">
      <h1>IronNutrition</h1>

      <Button type="primary" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Form' : 'Add Food'}
      </Button>

      {showForm && <AddFoodForm addFood={addFood} />}

      <SearchBar foodList={foodList} handleSearch={handleSearch} />

    </div>
  );
}

export default App;
