import React, { Component } from 'react';

export default function Pagination(props) {
    const { currentPage, totalPageCount } = props;
    const renderPageCount = [];
    for (let i = 1; i <= totalPageCount; i++) {
        const pageNumberLi = (
            <li key={i}>
                <span onClick={() => props.changePageNumber(i)} className={currentPage == i ? 'active' : ''}>{i}</span>
            </li>
        );
        renderPageCount.push(pageNumberLi);
    }
    const renderPrevBtn = currentPage !== 1 ? (
        <li>
            <span onClick={() => props.changePageNumber(1)} className="prev">
                <i className="fa fa-angle-double-left"></i>
            </span>
        </li>
    ) : '';
    const renderNextBtn = currentPage !== totalPageCount ? (
        <li>
            <span onClick={() => props.changePageNumber(totalPageCount)} className="next">
                <i className="fa fa-angle-double-right"></i>
            </span>
        </li>
    ) : '';

    return (
        <ul>
            {renderPrevBtn}
            {renderPageCount}
            {renderNextBtn}
        </ul>
    )

}