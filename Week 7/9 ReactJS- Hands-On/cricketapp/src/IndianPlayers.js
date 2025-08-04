import React from 'react';

const IndianPlayers = () => {
  // Real cricketer names for demo (odd and even team)
  const oddPlayers = ['Sachin Tendulkar', 'Virat Kohli', 'Yuvraj Singh'];
  const evenPlayers = ['MS Dhoni', 'Rohit Sharma', 'Suresh Raina'];

  // Merged list with real names and proper labels
  const mergedPlayers = [
    'Mr. Rahul Dravid',
    'Mr. Shikhar Dhawan',
    'Mr. KL Rahul',
    'Mr. Ajinkya Rahane',
    'Mr. Ravindra Jadeja',
    'Mr. Jasprit Bumrah',
  ];

  return (
    <div>
      <h2>Odd Players</h2>
      <ul>
        <li>First : {oddPlayers[0]}</li>
        <li>Third : {oddPlayers[1]}</li>
        <li>Fifth : {oddPlayers[2]}</li>
      </ul>

      <h2>Even Players</h2>
      <ul>
        <li>Second : {evenPlayers[0]}</li>
        <li>Fourth : {evenPlayers[1]}</li>
        <li>Sixth : {evenPlayers[2]}</li>
      </ul>

      <h2>List of Indian Players Merged:</h2>
      <ul>
        {mergedPlayers.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;

