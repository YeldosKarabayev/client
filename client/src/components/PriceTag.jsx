import React from 'react'


const PriceTag = ({ productName, description, price }) => {
    return (
        <div className="price-tag">
            <h2 className="product-name">{productName}</h2>
            <p className="product-description">{description}</p>
            <div className="product-price">${price}</div>
        </div>
    )
}

export default PriceTag