import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import axios from 'axios';
import './index.css';
import ListView from '../../pages/ListView';
import { CategoryI } from '../../types/Category';
import { TodoI } from '../../types/Todo';

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

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ListView} />
          <Route path="/:category" component={ListView} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
