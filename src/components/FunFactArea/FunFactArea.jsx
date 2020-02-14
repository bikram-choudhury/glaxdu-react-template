import React from 'react';
import PropTypes from 'prop-types';

export default function FunFactArea(props) {
    return (
        <div className="fun-fact-area bg-img pt-130 pb-100" style={{ backgroundImage: `url(${require('./../../assets/img/bg/bg-6.jpg')})` }}>
            <div className="container">
                <div className="section-title-3 section-shape-hm2-2 white-text text-center mb-100">
                    <h2><span>Fun</span> Fact</h2>
                    <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br /> quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
                </div>
                <div className="row count-holder">
                    {
                        props.facts && props.facts.map((fact, index) => {
                            return (
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" key={index}>
                                    <div className={"single-count mb-30 count-white " + fact.className}>
                                        <div className="count-img">
                                            <img src={require(`./../../assets/img/${fact.image}`)} alt={fact.label} />
                                        </div>
                                        <div className="count-content">
                                            <h2 className="count">{fact.count}</h2>
                                            <span>{fact.label}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

FunFactArea.propTypes = {
    facts: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string,
            label: PropTypes.string,
            count: PropTypes.number,
            className: PropTypes.string
        })
    )
}