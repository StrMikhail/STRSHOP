import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import productsService from '../../../services/products.service';
import { addItem, removeAllItem, removeItem } from '../../../store/cart';
import { roundNumber } from '../../../utils/roundNumber';
import Button from '../../Button/Button';
import styles from './CartItem.module.scss';

const CartItem = ({ product }) => {
    const dispatch = useDispatch();
    const [item, setItem] = useState();
    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const data = await productsService.getOne(product.productId);
            setItem(data);
        } catch (error) {
            console.log(error);
        }
    };
    const onClickAdd = () => {
        dispatch(addItem(item));
    };
    const onClicRemove = () => {
        dispatch(removeItem(item));
    };
    const onClickDelete = () => {
        console.log('Делете');
        dispatch(removeAllItem({ ...product, price: item.price }));
    };

    return (
        <div className={styles.cart_item}>
            {item && (
                <>
                    <div className={styles.cart_image}>
                        <img src={item.image} alt="product" />
                    </div>
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.category}</p>
                    </div>
                    <div className={styles.cart_item_count}>
                        <Button setting="button_cart" handleClick={onClickAdd}>
                            <span>+</span>
                        </Button>
                        <span>{product.quantity}</span>
                        <Button
                            setting="button_cart"
                            handleClick={onClicRemove}
                            className="button button--outline button--circle cart__item-count-plus">
                            <span>-</span>
                        </Button>
                    </div>
                    <div className={styles.cart_price}>
                        <span>{roundNumber(product.quantity * item.price, 2)} $</span>
                    </div>
                    <div className="cart__item-remove">
                        <div
                            onClick={onClickDelete}
                            className="button button--outline button--circle">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.5 5H4.16667H17.5"
                                    stroke="#ffff"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                                    stroke="#ffff"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M8.33337 9.16667V14.1667"
                                    stroke="#ffff"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M11.6666 9.16667V14.1667"
                                    stroke="#ffff   "
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartItem;
