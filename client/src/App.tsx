import * as React from 'react';
import axios from 'axios';
import './App.css';

const logo = require('./logo.svg');

import { CategoryI } from './types/Category';
import { TodoI } from './types/Todo';

interface State {
  categories: Array<CategoryI>;
  todos: Array<TodoI>;
}

interface Props {
}

class App extends React.Component {
  state: State;
  constructor(props: Props) {
    super(props);
    this.state = { 
      categories: [],
      todos: []
    };
  }

  getCategories = () => {
    axios
      .get('http://localhost:7777/category')
      .then(res => res.data)
      .then(categories => this.setState({ categories })); 
  }

  getTodos = () => {
    axios
      .get('http://localhost:7777/todo')
      .then(res => res.data)
      .then(todos => this.setState({ todos })); 
  }

  render() {
    const { categories, todos } = this.state;
    return (
      <div className="App">
        <header className="App-header" onClick={this.getTodos}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>
          {todos.map((i: TodoI) => <li key={i.name}>{i.name}</li>)}
        </ul>
        <p className="App-intro" onClick={this.getCategories}>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ul>
          {categories.map((i: CategoryI) => <li key={i.name}>{i.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
