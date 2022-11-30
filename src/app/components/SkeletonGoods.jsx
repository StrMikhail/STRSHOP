import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonGoods = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={526}
        viewBox="0 0 280 526"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}>
        <rect x="10" y="315" rx="20" ry="20" width="260" height="50" />
        <rect x="10" y="374" rx="10" ry="10" width="80" height="21" />
        <rect x="150" y="376" rx="10" ry="10" width="120" height="21" />
        <rect x="10" y="417" rx="10" ry="10" width="95" height="26" />
        <rect x="128" y="430" rx="19" ry="19" width="144" height="43" />
        <rect x="10" y="3" rx="19" ry="19" width="260" height="290" />
    </ContentLoader>
);

export default SkeletonGoods;
