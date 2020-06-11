import React from 'react';
import { Header } from './Header';

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