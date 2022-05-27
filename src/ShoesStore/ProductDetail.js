import React, { Component } from 'react';

class ProductDetail extends Component {
    render() {
        const { product } = this.props;
        
        if(!product) return;

        return (
            <div className="modal fade" id={`item-${product.id}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Chi tiết sản phẩm</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className='row mt-5'>
                                <div className='col-sm-4'>
                                    <h4>{product.name}</h4>
                                    <img width="60%" src={product.image} alt={product.image}></img>
                                </div>
                                <div className='col-sm-8'>
                                    <h3>Chi tiết sản phẩm</h3>
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
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetail;