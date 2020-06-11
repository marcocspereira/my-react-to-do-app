import React from 'react';
import { Header } from '../Header/Header';
import ListItems from '../ListItems/ListItems';

export class ToDo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      /** Items to be displayed inside the list */
      items: [],
      /** The most recent item */
      currentItem: { text: '', key: '' }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  /**
   * Allows to update the current item value
   * @param {object} e input value to update the current item
   */
  handleInput(e) {
    // change state in other to handle the new valie
    this.setState({
      currentItem: {
        text: e.target.value,
        // key must be unique, so we use a timestamp
        key: Date.now()
      }
    })
  }

  /**
   * Add a new task to the to do list
   * @param {object} e new item
   */
  addItem(e) {
    // canceling the event of submit to avoid to submit the form
    e.preventDefault();
    // use state to get current item sinde handleInput already updates the state
    const newItem = this.state.currentItem;
    if (newItem.text !== '') {
      // update items with currentItem and restart the current item
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: { text: '', key: '' }
      })
    }
  }

  /**
   * Allows to update the text of a given task
   * @param {string} text the new text to update
   * @param {object} key the key of the required task to be updated
   */
  setUpdate(text, key) {
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        item.text = text;
      }
    })
    this.setState({
      items: items
    })
  }

  /**
   * Allows to delete a given task from the to do list
   * @param {object} key task key to delete
   */
  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    })
  }

  render() {
    return (
      <div>
        <Header currentItem={this.state.currentItem}
          handleInput={this.handleInput} addItem={this.addItem} />
        <ListItems items={this.state.items}
          deleteItem={this.deleteItem} setUpdate={this.setUpdate} />
      </div>
    )
  }
}