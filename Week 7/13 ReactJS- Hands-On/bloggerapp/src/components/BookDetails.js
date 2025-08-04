import React from 'react';
import '../App.css';

function BookDetails() {
  const books = [
    { title: 'JavaScript Deep Dive', price: 599 },
    { title: 'Understanding Vue.js', price: 750 },
    { title: 'Node.js Essentials', price: 499 }
  ];

  return (
    <div className="section">
      <h2>Book Details</h2>
      {books.map((book, index) => (
        <div key={index}>
          <h3>{book.title}</h3>
          <p>{book.price}</p>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;
