import React from 'react';
import './components/Todo.css';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todos = [
  {
    task: 'Code stuff',
    id: 1,
    completed: false
  },
  {
    task: 'Check localhost',
    id: 2,
    completed: false
  },
  {
    task: 'Test user interface',
    id: 3,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todos: todos,
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  toggleItem = (clickedOnId) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === clickedOnId) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };

  addItem = (itemName) => {
    const newItem = {
      task: itemName,
      id: new Date(),
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newItem],
    });
  };

  itemsCompleted = () => {
    this.setState({
      todos: this.state.todos.filter((item) => {
        return (!item.completed);
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList
          toggleItem={this.toggleItem}
          todos={this.state.todos}
          itemsCompleted={this.itemsCompleted}
        />
        <div>
          <TodoForm addItem={this.addItem} />
        </div>
      </div>
    );
  }
}

export default App;
