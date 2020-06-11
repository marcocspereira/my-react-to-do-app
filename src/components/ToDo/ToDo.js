import React from 'react';
import { Header } from '../Header/Header';

export class ToDo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: { text: '', key: '' }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

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

  render() {
    return (
      <div>
        <Header currentItem={this.state.currentItem}
          handleInput={this.handleInput} addItem={this.addItem} />
      </div>
    )
  }
}