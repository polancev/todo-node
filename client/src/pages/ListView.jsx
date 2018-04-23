import React from 'react';
import Header from '../components/Header';
import CategoryListContainer from '../containers/CategoryListContainer';

const ListView = () => (
  <div className="app">
    <Header title="To-Do List" />
    <div className="container">
      <div className="left-panel">
        <CategoryListContainer />
      </div>
      <div className="right-panel">
        <span>Right panel</span>
      </div>
    </div>
  </div>
);

export default ListView;
