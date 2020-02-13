import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './index.css';

let todoItems = [
  {
    name: 'feed dogs',
    id: 1,
    complete: false
  },

  {
    name: 'go to work',
    id: 2,
    complete: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems
    };
  };

  addItem = (e, item) => {
    e.preventDefault();

    const newItem = {
      name: item,
      id: Date.now(),
      complete: false
    };

    this.setState({
      todoItems: [ ...this.state.todoItems, newItem ]
    });
  };

  toggleItem = (itemID) => {
    this.setState({
      todoItems: this.state.todoItems.map(item => {
        if (itemID === item.id) {
          return {
            ...item,
            complete: !item.complete
          };
        };
        return item;
      })
    })
  }

  clearComplete = (e) => {
    e.preventDefault();

    this.setState({
      todoItems: this.state.todoItems.filter(item => item.complete === false)
    });
  }
  
  render() {
    return (
      <div className="app">
        <h1>Your Todo List</h1>
        <TodoForm addItem={this.addItem} />

        <div>
          <TodoList 
            todoItems={this.state.todoItems}
            toggleItem={this.toggleItem} 
            clearComplete={this.clearComplete}
          />
        </div>
      </div>
    );
  }
}

export default App;
