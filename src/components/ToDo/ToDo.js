import React from 'react';
import { Header } from '../Header/Header';

export class ToDo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleInput(e) {

  }

  addItem(e) {

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