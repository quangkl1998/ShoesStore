import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductList extends Component {
    render() {
        const { products, onSelect } = this.props;
        return (
            <div className='row'>
                {products.map((product) => (
                    <div key={product.id} className='col-sm-4 mb-2'>
                        <ProductItem product={product} onSelect={onSelect} />
                    </div>
                ))}
            </div>
        );
    }
}

export default ProductList;