import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import React, { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [showForm, setShowForm] = useState(false);
  const [filteredFoodList, setFilteredFoodList] = useState(foods);

  const addFood = (food) => {
    setFoodList([...foodList, food]);
  };

  const handleSearch = (query) => {
    const filteredList = foods.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFoodList(filteredList);
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
