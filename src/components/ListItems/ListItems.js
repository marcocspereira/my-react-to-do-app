import React from 'react';
import './ListItems.css';

function ListItems({ items, setUpdate, deleteItem }) {
  const listItems = items.map(item => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input type="text" id={item.key} value={item.text}
            onChange={(e) => { setUpdate(e.target.value, item.key) }} />
          <span>
            <button onClick={() => deleteItem(item.key)}>Delete</button>
          </span>
        </p>
      </div>
    )
  })

  return (
    <div>{listItems}</div>
  )
}

export default ListItems;