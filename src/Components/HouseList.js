import React from 'react';
import HouseItem from './HouseItem';

// Functional component to display a list of houses
const HouseList = ({ houses, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Houses</h2>
      {/* Iterate over the houses array and render a HouseItem for each house */}
      {houses.map(house => (
        <HouseItem
          key={house._id} // Unique key for each house item
          house={house} // Pass the house data as a prop
          onEdit={onEdit} // Pass the onEdit function as a prop
          onDelete={onDelete} // Pass the onDelete function as a prop
        />
      ))}
    </div>
  );
};

export default HouseList;