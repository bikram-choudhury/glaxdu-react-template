import { combineReducers } from "redux";
import { createSelector } from 'reselect';
import * as news from "./news.reducer";
import * as products from "./products.reducer";
import * as auth from "./auth.reducer";

export const reducers = combineReducers({ news: news.NewsReducer, products: products.ProductReducer, auth: auth.AuthReducer });

const getSelectedNewsTitle = (state) => news.getSelectedNewsTitle(state.news);

export const getNewsTag = (state) => news.getNewsTag(state.news);
export const getNewsList = (state) => news.getNewsList(state.news);
export const getSelectedNews = createSelector(
    getNewsList,
    getSelectedNewsTitle,
    (newsList, selectedTitle) => newsList.find(adhoc => adhoc.title === selectedTitle)
);
export const getReletedNewsList = createSelector(
    getNewsList,
    getSelectedNews,
    (newsList, selectedNews) => {
        const relatedNewsList = newsList.filter(adhoc => adhoc.source.name === selectedNews.source.name);
        return relatedNewsList.slice(0, 5);
    }
);

export const getProductList = (state) => products.getProductList(state.products);
export const getProductTotalCount = (state) => products.getProductTotalCount(state.products);
export const getSelectedProductSku = (state) => products.getSelectedProductSku(state.products);
export const getSelectedProduct = createSelector(
    getProductList,
    getSelectedProductSku,
    (productList, selectedSku) => productList.find(product => product.sku === selectedSku)
);
export const getRelatedProducts = createSelector(
    getProductList,
    getSelectedProductSku,
    (productList, selectedSku) => {
        const selected = productList.find(product => product.sku === selectedSku);
        if (selected) {
            const selectedProductTags = selected.tags;
            return productList.filter(product => {
                const tags = product.tags;
                const isRelated = tags.find(tag => selectedProductTags.includes(tag));
                return !!isRelated;
            });
        } else {
            return [];
        }

    }
);

export const getAccessToken = (state) => auth.getAccessToken(state.auth);
export const getRefreshToken = (state) => auth.getRefreshToken(state.auth);
export const getTokenType = (state) => auth.getTokenType(state.auth);