import React from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
  const cartItems = [{ id: 'c1', name: 'ambru', amount: 3, price: 13.0 }].map(
    (item) => <li> {item.name} </li>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span> Total Amount</span>
        <span> 356.78 </span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close{' '}
        </button>
        <button className={classes.button}>Order </button>
      </div>
    </Modal>
  );
};

export default Cart;
