import React, { Component } from 'react';
import data from './data.json';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';

class ShoesStore extends Component {
    state = {
        selectedProduct: null,
    }

    handleSelectProduct = (product) => {
        this.setState({
            selectedProduct: product,
        });
    }

    render() {
        return (
            <div className='container'>
                <h1 className='text-center'>Shoes Store</h1>
                <ProductList products={data} onSelect={this.handleSelectProduct} />
                <ProductDetail product={this.state.selectedProduct} />
            </div>
        );
    }
}

export default ShoesStore;