// App.js
import React, { useState } from 'react';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';
import FlightDetails from './components/FlightDetails';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Ticket Booking App</h1>

      <FlightDetails />

      {isLoggedIn ? <UserPage /> : <GuestPage />}

      <div style={{ marginTop: '20px' }}>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>
    </div>
  );
}

export default App;
