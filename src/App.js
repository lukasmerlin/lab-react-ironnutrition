import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import React, { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {

  const [foodList, setFoodList] = useState(foods);
  const [showForm, setShowForm] = useState(false);

  const addFood = (food) => {
    setFoodList([...foodList, food]);
  };

  return (
    <div className="App">
      <h1>IronNutrition</h1>

      <Button type="primary" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Form' : 'Add Food'}
      </Button>

      {showForm && <AddFoodForm addFood={addFood} />}

      <div className='foodlist'>
        {foodList.map((food, index) => (
          
            <FoodBox food={ {
              name: food.name,
              calories: food.calories,
              image: food.image,
              servings: food.servings
            }} />

        ))}
      </div>  

    </div>
  );
}

export default App;
