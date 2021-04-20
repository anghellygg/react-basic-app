import React from 'react';
import ProductCategoryRow from '../product-category-row/product-category-row.comp';
import ProductRow from '../product-row/product-row.comp';
import ProductRowTwo from '../product-row/products-rowTwo.comp';
import ProductRowOne from '../product-row/products-rowOne.comp';
import ProductRowThree from '../product-row/products-rowThree.comp';
import ProductRowFour from '../product-row/products-rowFour.comp';
import ProductRowFive from '../product-row/products-rowFive.comp';
import ProductCategoryRowElec from '../product-category-row/product-category-rowElec.comp';
import './product-table.style.css';


const ProductTable = () => {
    return (
        <div className="product-table-container">
            Name           Price

        <ProductCategoryRow/>
        <ProductRow/>
        <ProductRowOne/>
        <ProductRowTwo/>
        <ProductCategoryRowElec/>
        <ProductRowThree/>
        <ProductRowFour/>
        <ProductRowFive/>
        </div>
    );
}

export default ProductTable;