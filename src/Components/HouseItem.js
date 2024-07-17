import React from 'react';

// Functional component to display a single house item
const HouseItem = ({ house, onEdit, onDelete }) => {
  return (
    <div>
      {/* Display the name of the house */}
      <h3>{house.name}</h3>
      {/* Edit button to trigger the onEdit function with the current house */}
      <button onClick={() => onEdit(house)}>Edit</button>
      {/* Delete button to trigger the onDelete function with the house ID */}
      <button onClick={() => onDelete(house._id)}>Delete</button>
    </div>
  );
};

export default HouseItem;