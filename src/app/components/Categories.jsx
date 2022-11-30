import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Categories = ({ onChangeCategory, active }) => {
    const [categories, setCategories] = useState(['all']);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const { data } = await axios.get('https://fakestoreapi.com/products/categories');
            setCategories((prev) => [prev, ...data]);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="categories">
            <ul>
                {categories.length > 2 &&
                    categories.map((category) => (
                        <li
                            onClick={() => onChangeCategory(String(category))}
                            key={category}
                            className={active === String(category) ? 'active' : null}>
                            {category}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Categories;
