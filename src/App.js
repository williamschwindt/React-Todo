import React from 'react';

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
      todoItems: this.state.todoItems.filter(item => item.purchased === false)
    });
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
