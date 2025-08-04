import React from 'react';
import './App.css';
import officeImage from './office_picture.jpg';


function App() {
  const office = {
    name: "DBS",
    rent: 50000,
    address: "Chennai"
  };

  const rentStyle = {
    color: office.rent < 60000 ? 'red' : 'green'
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Office Space , at Affordable Range</h1>
      <img src={officeImage} alt="Office Space" width="200" />
      <h2>Name: {office.name}</h2>
      <h3 style={rentStyle}>Rent: Rs. {office.rent}</h3>
      <p>Address: {office.address}</p>
    </div>
  );
}

export default App;
