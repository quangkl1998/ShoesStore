import React, { Component } from 'react';

class ProductDetail extends Component {
    render() {
        const { product } = this.props;
        
        if(!product) return;

        return (
            <div className='row mt-5 bg-light'>
                <h1 className='text-center text-uppercase'>Chi tiết sản phẩm</h1>
                <div className='col-sm-4'>
                    <h4>{product.name}</h4>
                    <img width="60%" src={product.image} alt={product.image}></img>
                </div>
                <div className='col-sm-8'>
                    <h3>Thông tin sản phẩm</h3>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <td>Tên</td>
                                <td>{product.name}</td>
                            </tr>
                            <tr>
                                <td>Bí danh</td>
                                <td>{product.alias}</td>
                            </tr>
                            <tr>
                                <td>Giá</td>
                                <td>{product.price} $</td>
                            </tr>
                            <tr>
                                <td>Mô tả</td>
                                <td>{product.shortDescription}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ProductDetail;