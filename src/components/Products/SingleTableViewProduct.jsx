import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Ratings } from '../Ratings/Ratings.jsx';
import { MAXRATINGS } from '../../glaxdu-settings';
import { setSelectedProductSku } from '../../redux/actions/products.action';

function SingleTableViewProduct(props) {
    const history = useHistory();
    const { images, name, rating, category, price, sku } = props;

    const saveAndNavigateToDetailsview = () => {
        props.setSelectedProductSku(sku);
        history.push('/admin/product/details');
    }
    return (
        <div className="product-wrap mb-30">
            <div className="product-img">
                <label onClick={saveAndNavigateToDetailsview}>
                    <img src={require(`./../../assets/img/product/${images[0]}`)} alt={name} />
                </label>
                <span>Sale</span>
                <div className="product-action">
                    <ul>
                        <li>
                            <a title="Add To Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a>
                        </li>
                        <li>
                            <a title="Compare" href="#"><i className="fa fa-random"></i></a>
                        </li>
                        <li>
                            <a title="Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                        </li>
                        <li>
                            <a title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-eye"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="product-content">
                <div className="pro-title-rating-wrap">
                    <div className="product-title">
                        <h3><label onClick={saveAndNavigateToDetailsview}>{name}</label></h3>
                    </div>
                    <Ratings rating={rating} maxRating={MAXRATINGS} />
                </div>
                <div className="pro-category-price">
                    <span className="pro-category">{category}</span>
                    <span className="pro-price">${price}</span>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    setSelectedProductSku: setSelectedProductSku
}
export default connect(null, mapDispatchToProps)(SingleTableViewProduct);