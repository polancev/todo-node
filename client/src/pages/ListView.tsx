import * as React from 'react';
import CategoriesContainer from '../containers/CategoriesContainer';

const ListView = () => {
  return (
    <div className="app">
      <h1>List View</h1>
      <div className="container">
        <div className="left-panel">
          <CategoriesContainer parent={null} />
        </div>
        <div className="rigth-panel" />
      </div>
    </div>
  );
};

export default ListView;
