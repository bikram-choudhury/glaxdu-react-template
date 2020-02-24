import React, { useState } from 'react';
import { connectAdvanced } from 'react-redux';
import Slider from "react-slick";
import { sliderSettings, MAXRATINGS } from '../../../glaxdu-settings';
import { Ratings } from '../../Ratings/Ratings.jsx';
import SocialButtons from '../../SocialButtons/SocialButtons.jsx';
import { addToCart } from '../../../redux/actions/cart.action';

function SingleProduct(props) {
    const settings = {
        ...sliderSettings.SingleProductImageSlider,
        nextArrow: '<button class="product-dec-icon product-dec-prev"><i class="fa fa-angle-left"></i></button>',
        prevArrow: '<div class="product-dec-icon product-dec-next"><i class="fa fa-angle-right"></i></div>'
    };

    const {
        rating,
        reviews,
        price,
        name,
        description,
        availableColors,
        availableSizes,
        like,
        sku,
        categories,
        tags,
        images,
        id
    } = props;

    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [itemQty, updateItemQty] = useState(0);
    const [isLiked, updateIsLiked] = useState(!!like);

    const addItemToCart = () => {
        if (itemQty) {
            const itemToAdd = {
                productDetail: {
                    images, id, name, price, sku
                },
                qty: itemQty,
                size: selectedSize,
                color: selectedColor,
                shipping: 0
            };
            props.addItem(itemToAdd);
        }
    }
    return (
        <div className="single-product-area pt-130 pb-130">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="product-details-img">
                            <img
                                className="zoompro"
                                src={require('./../../../assets/img/product-details/product-detalis-l2.jpg')}
                                data-zoom-image={require('./../../../assets/img/product-details/single-product-bl2.jpg')}
                                alt="zoom"
                            />

                            <Slider {...settings} id="gallery">
                                <a
                                    className="active"
                                    data-image={require('./../../../assets/img/product-details/product-detalis-l2.jpg')}
                                    data-zoom-image={require('./../../../assets/img/product-details/single-product-bl2.jpg')}
                                >
                                    <img src={require('./../../../assets/img/product-details/product-detalis-s1.jpg')} alt="" />
                                </a>
                                <a
                                    data-image={require('./../../../assets/img/product-details/product-detalis-l2.jpg')}
                                    data-zoom-image={require('./../../../assets/img/product-details/single-product-bl3.jpg')}
                                >
                                    <img src={require('./../../../assets/img/product-details/product-detalis-s2.jpg')} alt="" />
                                </a>
                                <a
                                    data-image={require('./../../../assets/img/product-details/product-detalis-l2.jpg')}
                                    data-zoom-image={require('./../../../assets/img/product-details/single-product-bl1.jpg')}
                                >
                                    <img src={require('./../../../assets/img/product-details/product-detalis-s3.jpg')} alt="" />
                                </a>
                                <a
                                    data-image={require('./../../../assets/img/product-details/product-detalis-l2.jpg')}
                                    data-zoom-image={require('./../../../assets/img/product-details/single-product-bl2.jpg')}
                                >
                                    <img src={require('./../../../assets/img/product-details/product-detalis-s1.jpg')} alt="" />
                                </a>
                                <a
                                    data-image={require('./../../../assets/img/product-details/product-detalis-l2.jpg')}
                                    data-zoom-image={require('./../../../assets/img/product-details/single-product-bl3.jpg')}
                                >
                                    <img src={require('./../../../assets/img/product-details/product-detalis-s2.jpg')} alt="" />
                                </a>
                            </Slider>

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-7">
                        <div className="product-details-content pl-30">
                            <h2>{name}</h2>
                            <div className="pro-details-rating-wrap">
                                <Ratings
                                    maxRating={MAXRATINGS}
                                    rating={rating}
                                    className="pro-details-rating"
                                />
                                <span className="ml-10">
                                    ({reviews ? reviews.length : 0} customer review)
                                </span>
                            </div>
                            <h3>{'$' + price}</h3>
                            <p>{description}</p>
                            <div className="pro-details-size-color2 mt-30">
                                {
                                    availableColors && availableColors.length && (
                                        <div className="pro-details-color2-wrap">
                                            <span>Color</span>
                                            <div className="pro-details-color2-content">
                                                <ul>
                                                    {
                                                        availableColors.map(
                                                            (color, index) => {
                                                                let className = color;
                                                                if (selectedColor === color)
                                                                    className += ' active';
                                                                return (
                                                                    <li
                                                                        key={index}
                                                                        className={className}
                                                                        onClick={() => setSelectedColor(color)}
                                                                    ></li>
                                                                )
                                                            }
                                                        )
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                }

                                {
                                    availableSizes && availableSizes.length && (
                                        <div className="pro-details-size2">
                                            <span>Size</span>
                                            <div className="pro-details-size2-content">
                                                <ul>
                                                    {
                                                        availableSizes.map(
                                                            (size, index) => {
                                                                let className = '';
                                                                if (selectedSize === size)
                                                                    className += 'active';
                                                                return (
                                                                    <li
                                                                        key={index}
                                                                        onClick={() => setSelectedSize(size)}
                                                                    >
                                                                        <span className={className}>{size}</span>
                                                                    </li>
                                                                )
                                                            }
                                                        )
                                                    }

                                                </ul>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="pro-details-quality mt-50 mb-45">
                                <div className="cart-plus-minus">

                                    <div
                                        className={`dec qtybutton ${itemQty === 0 ? 'disabled' : ''}`}
                                        disabled={itemQty === 0}
                                        onClick={() => {
                                            if (itemQty > 0) {
                                                updateItemQty(itemQty - 1);
                                            }
                                        }}
                                    >-</div>
                                    <input
                                        className="cart-plus-minus-box"
                                        type="text"
                                        name="qtybutton"
                                        value={itemQty}
                                        onChange={
                                            (e) => {
                                                const qty = parseInt(e.target.value);
                                                if (!isNaN(qty)) {
                                                    updateItemQty(qty);
                                                }
                                            }
                                        }
                                    />
                                    <div
                                        className="inc qtybutton"
                                        onClick={() => updateItemQty(itemQty + 1)}
                                    >+</div>
                                </div>
                                <div className="pro-details-cart">
                                    <span
                                        className="default-btn btn-hover"
                                        onClick={addItemToCart}
                                    >Add To Cart</span>
                                </div>
                                <div className="pro-details-wishlist">
                                    <span
                                        className={`btn-hover${isLiked ? ' active' : ''}`}
                                        onClick={() => updateIsLiked(!isLiked)}
                                    ><i className="fa fa-heart-o"></i></span>
                                </div>
                            </div>
                            <div className="pro-details-info-wrap">
                                <div className="pro-details-info-list">
                                    <ul>
                                        <li className="pro-details-info-title">SKU</li>
                                        <li>{sku}</li>
                                    </ul>
                                </div>
                                {
                                    categories && categories.length && (
                                        <div className="pro-details-info-list">
                                            <ul>
                                                <li className="pro-details-info-title">Categories</li>
                                                <li>{categories.join(', ')}</li>
                                            </ul>
                                        </div>
                                    )
                                }
                                {
                                    tags && tags.length && (
                                        <div className="pro-details-info-list">
                                            <ul>
                                                <li className="pro-details-info-title">Tags</li>
                                                <li>{tags.join(', ')}</li>
                                            </ul>
                                        </div>
                                    )
                                }

                            </div>
                            <SocialButtons
                                sharedUrl={location.href}
                                title={name}
                                description={description}
                                sourceName={location.host}
                                className="pro-details-social"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function selectorFactory(dispatch) {
    const addItem = (product) => dispatch(addToCart(product));

    return (state, ownProps) => {
        return { ...ownProps, addItem };
    }
}

export default connectAdvanced(selectorFactory)(SingleProduct);