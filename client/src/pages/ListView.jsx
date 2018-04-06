import React from 'react';
import CategoryListContainer from '../containers/CategoryListContainer/index';

const ListView = () => (
  <div className="app">
    <h1>List view</h1>
    <div className="container">
      <div className="left-panel">
        <CategoryListContainer
          parent={null}
          mode="edit"
        />
      </div>
      <div className="right-panel">
          Right panel
      </div>
    </div>
  </div>
);

export default ListView;
