import React, { useState } from 'react';
import { Input } from 'antd';
import FoodBox from './FoodBox';

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFoods = props.foodList.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Input.Search
        placeholder="Search for a food"
        onChange={handleSearch}
        value={searchTerm}
        style={{ width: 300 }}
      />
      <div className='foodlist'>
            {filteredFoods.map((food) => (
                <FoodBox  food={ {
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

export default SearchBar;