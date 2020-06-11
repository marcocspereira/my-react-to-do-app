import React from 'react';
import './ListItems.css';

/**
 * 
 * @param {Array} items
 * @param {object} setUpdate
 * @param {object} deleteItem 
 */
function ListItems({ items, setUpdate, deleteItem }) {
  /** listItems are the items to be displayed as a list  */
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