import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        const { product, onSelect } = this.props;
        return (
            <div className='card'>
                <img src={product.image} alt={product.image} />
                <div className='card-body'>
                    <h4 className='card-title'>{product.name}</h4>
                    <p className='card-text'>{product.price} $</p>
                    <button className='btn btn-dark' onClick={() => onSelect(product)} data-bs-toggle="modal" data-bs-target={`#item-${product.id}`}>Xem chi tiết</button>
                </div>
            </div>
        );
    }
}

export default ProductItem;