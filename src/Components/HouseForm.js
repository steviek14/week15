import React, { useState, useEffect } from 'react';

// Functional component for adding or updating a house
const HouseForm = ({ currentHouse, onAdd, onUpdate }) => {
  // State to manage the form inputs
  const [house, setHouse] = useState({ name: '', address: '' });

  // useEffect hook to update the form when currentHouse changes
  useEffect(() => {
    if (currentHouse) {
      setHouse(currentHouse); // If there's a currentHouse, populate the form with its data
    } else {
      setHouse({ name: '', address: '' }); // Otherwise, reset the form
    }
  }, [currentHouse]);

  // Handle input changes and update the house state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHouse({ ...house, [name]: value }); // Update the specific field in the house state
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (currentHouse) {
      onUpdate(house); // If there's a currentHouse, call onUpdate
    } else {
      onAdd(house); // Otherwise, call onAdd
    }
    setHouse({ name: '', address: '' }); // Reset the form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={house.name} // Bind the input value to the house state
          onChange={handleChange} // Handle input changes
        />
      </div>
      {/* Submit button text changes based on whether we're adding or updating */}
      <button type="submit">{currentHouse ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default HouseForm;