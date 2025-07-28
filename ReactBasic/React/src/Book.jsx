// Book.js exmple of props
import React from 'react';

// 'props' object থেকে title এবং author কে নেওয়া হলো
function Book({ title, author, price }) {
  const cardStyle = {
    border: '1px solid #ccc',
    padding: '16px',
    margin: '10px',
    borderRadius: '8px',
    backgroundColor: 'green'
  };

  return (
    <div style={cardStyle}>
      <h2>বইয়ের নাম: {title}</h2>
      <h4>লেখক: {author}</h4>
      <p>দাম: {price} টাকা</p>
    </div>
  );
}

export default Book;