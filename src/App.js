import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import React, { useState } from 'react';

function App() {

  const [foodList, setFoodList] = useState(foods);
  const firstTenFoodList = foodList.slice(0, 10);

  return (
    <div className="App">
      <h1>IronNutrition</h1>
      {firstTenFoodList.map((food, index) => (
      <div>
        <p><b>{index}</b> - {food.name} </p>
        <img src={food.image} width={100} />
      </div>
      ))}

    </div>
  );
}

export default App;
