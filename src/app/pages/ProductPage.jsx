import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../store/filter';
import { addItem, getProduct, removeItem } from '../store/cart';
import { roundNumber } from '../utils/roundNumber';
import Button from '../components/Button/Button';

const ProductPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [product, setProduct] = useState();
    const counter = useSelector(getProduct(Number(id)));

    useEffect(() => {
        fetchGood();
    }, []);

    const fetchGood = async () => {
        try {
            const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(data);
        } catch (error) {}
    };

    const onClickAdd = () => {
        dispatch(addItem(product));
    };
    const onClicRemove = () => {
        dispatch(removeItem(product));
    };

    return (
        <div className="container">
            <Button setting="button_back">
                <Link to="/">
                    <span>{'<'}</span>
                    <span>Back</span>
                </Link>
            </Button>
            {product && (
                <div className=" good-page">
                    <div className="good-page__title">
                        <h2>{product.title}</h2>
                    </div>
                    <div className="good-page__content">
                        <div className="good-page__info">
                            <img className="" src={product.image} alt="good" />
                        </div>
                        <div className="good-page__about">
                            <h2>Description</h2>
                            <p>{product.description}</p>
                            <div className="good-page__statistic">
                                <span>Ratign: {product.rating.rate}</span>
                                <span>{product.rating.count} times bought</span>
                            </div>
                            <Link
                                className="good-page__other"
                                to="/"
                                onClick={() => dispatch(setCategory(product.category))}>
                                Other goods from category <span>{product.category}</span>
                            </Link>
                            <div className="good-page__money">
                                <div className="good-page__price">
                                    <h2>Price: {product.price}$</h2>
                                </div>
                                <div className="good-page__price">
                                    <h2>
                                        Total:{' '}
                                        {counter
                                            ? roundNumber(counter.quantity * product.price, 2)
                                            : 0}
                                        $
                                    </h2>
                                </div>
                            </div>
                            <div className="buttons-line">
                                <div className=" button-counter">
                                    {counter === undefined ? (
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
                                <Link to="/cart" className="button">
                                    <span>
                                        Go to cart{' '}
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                                                stroke="white"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                                                stroke="white"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                                                stroke="white"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductPage;
