import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem, getProduct, removeItem } from '../store/cart';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const counter = useSelector(getProduct(product.id));
    const onClickAdd = () => {
        dispatch(addItem(product));
    };
    const onClicRemove = () => {
        dispatch(removeItem(product));
    };
    console.log(counter);
    return (
        <div className="good-block-center">
            <div className="good-block">
                <Link to={`/goods/${product.id}`} className='"good-bloc main'>
                    <img className="main__image" src={product.image} alt="good" />
                    <div>
                        <h4 className="main__title">{product.title}</h4>
                        <div className="main__statistic">
                            <span>Ratign: {product.rating.rate}</span>
                            <span>{product.rating.count} times bought</span>
                        </div>
                    </div>
                </Link>
                <div className="good-block__bottom">
                    <div className="good-block__price">{product.price}$</div>
                    <div className="button-counter">
                        {!counter ? (
                            <div className="button" onClick={onClickAdd}>
                                <span>+</span>
                                <span>Buy</span>
                            </div>
                        ) : (
                            <div className="button">
                                <span onClick={onClickAdd}>+</span>
                                <span>{counter.quantity}</span>
                                <span onClick={onClicRemove}>-</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
