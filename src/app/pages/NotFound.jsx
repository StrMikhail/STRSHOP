import React from 'react';
import pic from '../img/NotFound.png';
const NotFound = () => {
    return (
        <div className="not-found">
            <div>
                <h2>Page Not Found</h2>
                <p>Unfortunately this page is not available in our online store</p>
            </div>

            <img src={pic} alt="picture" />
        </div>
    );
};

export default NotFound;
