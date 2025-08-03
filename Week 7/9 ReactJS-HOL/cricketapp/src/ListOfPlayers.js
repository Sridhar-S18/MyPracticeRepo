import React from 'react';

const ListOfPlayers = () => {
  const players = [
    { name: 'Mr. Sachin Tendulkar', score: 95 },
    { name: 'Mr. Virat Kohli', score: 85 },
    { name: 'Mr. MS Dhoni', score: 60 },
    { name: 'Mr. Yuvraj Singh', score: 55 },
    { name: 'Mr. Rohit Sharma', score: 75 },
    { name: 'Mr. KL Rahul', score: 65 },
    { name: 'Mr. Shikhar Dhawan', score: 50 },
    { name: 'Mr. Rishabh Pant', score: 80 },
    { name: 'Mr. Ravindra Jadeja', score: 68 },
    { name: 'Mr. Jasprit Bumrah', score: 90 },
    { name: 'Mr. Hardik Pandya', score: 73 },
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {players.map((p, index) => (
          <li key={index}>{p.name} {p.score}</li>
        ))}
      </ul>

      <h2>List of Players having Scores Less than 70</h2>
      <ul>
        {lowScorers.map((p, index) => (
          <li key={index}>{p.name} {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfPlayers;
