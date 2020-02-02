import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { getProductList } from "../../redux/reducers";
import { fetchProducts } from "../../redux/actions/products.action";
import SingleTableViewProduct from "./SingleTableViewProduct.jsx";
import SingleListViewProduct from "./SingleListViewProduct.jsx";

function ProductListContainer(props) {
    const [productTabView, changeProductTabView] = useState('table-view');
    const { productList } = props;
    useEffect(() => {
        if (productList && productList.length === 0) {
            props.getProductList();
        }
    }, [])
    return (
        <div className="event-area pt-130 pb-130">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="shop-top-bar">
                            <div className="shop-tab-wrap">
                                <div className="shop-tab nav">
                                    <a
                                        className={`${productTabView === 'table-view' ? 'active' : ''}`}
                                        onClick={() => changeProductTabView('table-view')}
                                        data-toggle="tab"
                                    >
                                        <i className="fa fa-table"></i>
                                    </a>
                                    <a
                                        className={`${productTabView === 'list-view' ? 'active' : ''}`}
                                        onClick={() => changeProductTabView('list-view')}
                                        data-toggle="tab">
                                        <i className="fa fa-list-ul"></i>
                                    </a>
                                </div>
                                <p>Showing 1–12 of 20 result</p>
                            </div>
                            <div className="shop-select">
                                <select>
                                    <option value="">Sort By Popularity</option>
                                    <option value="">A to Z</option>
                                    <option value=""> Z to A</option>
                                    <option value="">In stock</option>
                                </select>
                            </div>
                        </div>
                        <div className="shop-bottom-area mt-30">
                            <div className="tab-content jump">
                                <div id="shop-1" className={`tab-pane ${productTabView === 'table-view' ? 'active' : ''}`}>
                                    <div className="row">
                                        {
                                            productList.map((product, index) => {
                                                return (
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
                                                        <SingleTableViewProduct {...product} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div id="shop-2" className={`tab-pane ${productTabView === 'list-view' ? 'active' : ''}`}>
                                    {
                                        productList.map((product, index) => {
                                            return (
                                                <SingleListViewProduct {...product} key={index} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pro-pagination-style text-center mt-30">
                    <ul>
                        <li><a className="prev" href="#"><i className="fa fa-angle-double-left"></i></a></li>
                        <li><a className="active" href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a className="next" href="#"><i className="fa fa-angle-double-right"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        productList: getProductList(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getProductList: () => { dispatch(fetchProducts()) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);