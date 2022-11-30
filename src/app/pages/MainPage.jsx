import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import ProductCard from '../components/ProductCard';
import SkeletonGoods from '../components/SkeletonGoods';
import { fetchAllProducts, getProducts, getProductsLoading } from '../store/products';
import Pagination from '../components/Pagination';
import { paginate } from '../utils/paginate';

import { getCategory, getFilter, getSort, setCategory, setFilter } from '../store/filter';

const MainPage = () => {
    const dispatch = useDispatch();
    const products = useSelector(getProducts());
    const category = useSelector(getCategory());
    const sort = useSelector(getSort());
    const filter = useSelector(getFilter());
    const productsLoading = useSelector(getProductsLoading());
    const pageSize = 8;
    const [currentPage, setCurrentPage] = useState(1);
    let productCrop;
    let filtered;
    useEffect(() => {
        dispatch(fetchAllProducts(category, sort));
        setCurrentPage(1);
    }, [category, sort, filter]);
    if (!productsLoading && products) {
        filtered = products.filter((product) =>
            product.title.toLowerCase().includes(filter.toLowerCase()),
        );

        if (sort.sortProperty === 'rating') {
            filtered = filtered.sort((a, b) => b.rating.rate - a.rating.rate);
        }
        if (sort.sortProperty === 'price') {
            filtered = filtered.sort((a, b) => b.price - a.price);
        }
        if (sort.sortProperty === 'title') {
            filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
        }
        productCrop = paginate(filtered, currentPage, pageSize);
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    active={category}
                    onChangeCategory={(category) => dispatch(setCategory(category))}
                />
                <Sort />
            </div>
            <h2 className="content__title">{category}</h2>
            <div className="content__items">
                {productsLoading
                    ? [...Array(6)].map((_, i) => <SkeletonGoods key={i} />)
                    : productCrop.map((product) => (
                          <ProductCard key={product.id} product={product} />
                      ))}
            </div>
            {!productsLoading && (
                <Pagination
                    itemsCount={filtered.length}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            )}
        </div>
    );
};

export default MainPage;
