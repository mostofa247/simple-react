import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalBudget = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        totalBudget = totalBudget + Number(player.budget);
    }
  
    return (
        <div>
            <h2>This is Cart: {cart.length}</h2>
            <p>Total budget: {totalBudget}</p>
        </div>
    );
};

export default Cart;