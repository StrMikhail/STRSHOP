import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Cart from '../components/Cart/Cart/Cart';
import Empty from '../components/Cart/CartEmpty.jsx/Empty';
import CartItem from '../components/Cart/CartItem/CartItem';
import { clearCart, getItemsList, getTotalPrice } from '../store/cart';

const CartPage = () => {
    const products = useSelector(getItemsList());
    console.log(products);
    return (
        <div className="container cart">
            {products.length === 0 ? <Empty /> : <Cart products={products} />}
        </div>
    );
};

export default CartPage;
