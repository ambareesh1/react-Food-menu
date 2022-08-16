import React, { Fragment, useState } from 'react';
import CartProvider from './Store/CartProvider';
import './style.css';

import Header from './Component/Layout/Header';
import Meals from './Component/Meals/Meals';
import Cart from './Component/Cart/Cart';
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}> </Header>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
