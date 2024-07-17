import React, { useState, useEffect } from 'react';
import HouseList from './Components/HouseList';
import HouseForm from './Components/HouseForm';

const App = () => {
  // State to store the list of houses
  const [houses, setHouses] = useState([]);
  // State to store the current house being edited or null if none
  const [currentHouse, setCurrentHouse] = useState(null);

  // useEffect hook to fetch houses data when the component mounts
  useEffect(() => {
    fetchHouses();
  }, []);

  // Function to fetch houses data from the API
  const fetchHouses = async () => {
    try {
      const response = await fetch('https://ancient-taiga-31359.herokuapp.com/api/houses');
      const data = await response.json();
      setHouses(data); // Update the houses state with fetched data
    } catch (error) {
      console.error('Error fetching houses', error);
    }
  };

  // Function to add a new house to the API
  const addHouse = async (house) => {
    try {
      const response = await fetch('https://ancient-taiga-31359.herokuapp.com/api/houses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(house), // Send the house data as JSON
      });
      const data = await response.json();
      setHouses([...houses, data]); // Add the new house to the houses state
      setCurrentHouse(null); // Reset form after adding a house
    } catch (error) {
      console.error('Error adding house', error);
    }
  };

  // Function to update an existing house in the API
  const updateHouse = async (house) => {
    try {
      const response = await fetch(`https://ancient-taiga-31359.herokuapp.com/api/houses/${house._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(house), // Send the updated house data as JSON
      });
      const data = await response.json();
      // Update the house in the houses state
      setHouses(houses.map(h => h._id === house._id ? data : h));
      setCurrentHouse(null); // Reset form after updating a house
    } catch (error) {
      console.error('Error updating house', error);
    }
  };

  // Function to delete a house from the API
  const deleteHouse = async (id) => {
    try {
      await fetch(`https://ancient-taiga-31359.herokuapp.com/api/houses/${id}`, {
        method: 'DELETE',
      });
      // Remove the deleted house from the houses state
      setHouses(houses.filter(h => h._id !== id));
    } catch (error) {
      console.error('Error deleting house', error);
    }
  };

  return (
    <div className="App">
      <h1>House Management</h1>
      {/* HouseForm component for adding and updating houses */}
      <HouseForm
        currentHouse={currentHouse}
        onAdd={addHouse}
        onUpdate={updateHouse}
      />
      {/* HouseList component for displaying the list of houses */}
      <HouseList
        houses={houses}
        onEdit={setCurrentHouse}
        onDelete={deleteHouse}
      />
    </div>
  );
};

export default App;