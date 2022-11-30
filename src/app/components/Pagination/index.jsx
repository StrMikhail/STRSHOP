import React from 'react';
import { useState } from 'react';
import styles from './Pagination.module.scss';

const Pagination = ({ itemsCount, pageSize, currentPage, setCurrentPage }) => {
    const pagesCount = Math.ceil(itemsCount / pageSize);
    const pages = [...Array(pagesCount)];

    const onPageChange = (page) => {
        setCurrentPage(page);
    };
    const onPageUp = () => {
        if (currentPage !== pagesCount) {
            setCurrentPage(currentPage + 1);
        }
    };
    const onPageDown = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    return (
        <>
            {pagesCount > 1 ? (
                <div className={styles.pagination}>
                    <span onClick={onPageDown}>{'<'}</span>
                    <ul className="">
                        {pages.map((_, index) => (
                            <li key={'page_' + index}>
                                <a
                                    className={index + 1 === currentPage ? styles.active : ''}
                                    onClick={() => onPageChange(index + 1)}>
                                    {index + 1}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <span onClick={onPageUp}>{'>'}</span>
                </div>
            ) : null}
        </>
    );
};

export default Pagination;
