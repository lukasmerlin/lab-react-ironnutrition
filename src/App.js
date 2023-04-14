import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import React, { useState } from 'react';
import FoodBox from './components/FoodBox';

function App() {

  const [foodList, setFoodList] = useState(foods);
  const firstTenFoodList = foodList.slice(0, 10);

  return (
    <div className="App">
      <h1>IronNutrition</h1>
      {firstTenFoodList.map((food, index) => (
        
          <FoodBox food={ {
            name: food.name,
            calories: food.calories,
            image: food.image,
            servings: food.servings
          }} />

      ))}


    </div>
  );
}

export default App;
