import React from 'react';
import './Header.css';

export const Header = ({ currentIem, addItem, handleInput }) => {

  return (
    <form id="to-do-form" onSubmit={addItem}>
      <input type="text" placeholder="Add task..."
        value={currentIem.text}
        onChange={handleInput} />
      <button type="submit">Add</button>
    </form>
  );
}