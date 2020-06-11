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