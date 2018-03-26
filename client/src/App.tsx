import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

import { CategoryI } from './types/Category';

interface State {
  categories: Array<CategoryI>;
}

interface Props {
}

class App extends React.Component {
  state: State;
  constructor(props: Props) {
    super(props);
    this.state = { categories: new Array<CategoryI>()};
  }

  handler = () => {
    fetch('http://localhost:7777/category')
    .then(res => res.json())
    .then(res => this.setState({ categories: res })); 
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" onClick={this.handler}>
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
