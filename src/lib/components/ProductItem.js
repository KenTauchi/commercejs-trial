import React, { Component } from 'react';
import stripHtml from 'string-strip-html';

const ProductItem = ({ product }) => {

    const {result} = stripHtml(product.description)
    return (
        <div className="product__cards">
            <img className="product__image" src={product.media.source} />
            <div className="product__info">
                <h3 className="product__name">{product.name}</h3>
                <p className="product__description">
                    {result}
                </p>
                <div className="products__details">
                <p className="products__price">
                    {product.price.formatted_with_symbol}
                </p>
                </div>
            </div>
            
            
        </div>
    );
}

export default ProductItem;