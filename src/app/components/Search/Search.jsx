import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setFilter } from '../../store/filter';
import styles from './Search.module.scss';
const Search = () => {
    const inputRef = useRef();
    const dispatch = useDispatch();
    const filter = useSelector(getFilter());

    const handleSearch = (e) => {
        dispatch(setFilter(e.target.value));
    };
    const onClear = (params) => {
        dispatch(setFilter(''));
        inputRef.current.focus();
    };
    return (
        <div className={styles.search}>
            <svg
                className={styles.search_icon}
                link="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0"
                y="0"
                viewBox="0 0 487.95 487.95"
                space="preserve">
                <path d="M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1    c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4    c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z" />
            </svg>
            <input
                className={styles.input}
                ref={inputRef}
                type="text"
                placeholder="Search product..."
                value={filter}
                onChange={(e) => handleSearch(e)}
            />
            {filter && (
                <svg
                    onClick={onClear}
                    className={styles.clear_icon}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24">
                    <path
                        fillRule="evenodd"
                        d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"
                    />
                    <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1    c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4    c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z"
                    />
                </svg>
            )}
        </div>
    );
};

export default Search;
