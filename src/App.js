import React, { Fragment } from 'react';
import './style.css';

import Header from './Component/Layout/Header';
import Meals from './Component/Meals/Meals';
function App() {
  return (
    <Fragment>
      <Header> </Header>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
