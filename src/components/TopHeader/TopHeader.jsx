import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import headershape from './../../assets/img/icon-img/header-shape.png';
import { getAccessToken } from '../../redux/reducers';
import { logout } from '../../redux/actions/auth.action';

export function TopHeader(props) {
    
    const bgImg = { backgroundImage: `url(${headershape})` };
    return (
        <div className="header-top bg-img" style={bgImg}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-7 col-12 col-sm-8">
                        <div className="header-contact">
                            <ul>
                                <li><i className="fa fa-phone"></i> +98 558 547 589</li>
                                <li><i className="fa fa-envelope-o"></i><a href="#">education@email.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-5 col-12 col-sm-4">
                        <div className="login-register">
                            <ul>
                                {
                                    props.accessToken ? (
                                        <li className="logout">
                                            <span onClick={() => props.logout()}>Logout</span>
                                        </li>
                                    ) : (
                                            <Fragment>
                                                <li className="login">
                                                    <Link to="/sign-in">Login</Link>
                                                </li>
                                                <li className="register">
                                                    <Link to="/sign-up">Register</Link>
                                                </li>
                                            </Fragment>
                                        )
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({ accessToken: getAccessToken(state) });
/**
 * Multiple ways to dispatch actions
 * 1. const mapDispatchToProps = (dispatch) => {
 *      return {
 *          logout: dispatch(SingleAction)
 *      }
 *  }
 * 
 * 2. const mapDispatchToProps = {
 *      SingleAction1,
 *      SingleAction2,
 *      SingleAction3,
 *  }
 * 3. const mapDispatchToProps = dispatch => {
 *      return bindActionCreators(actionObject, dispatch);
 *      (or)
 *      return bindActionCreators(actionCreators, dispatch);
 * }
 * 4. const mapDispatchToProps = dispatch => {
 *      return bindActionCreators({
 *          SingleAction1,
 *          SingleAction2,
 *          SingleAction3,
 *      }, dispatch);
 * }
 * 5. const mapDispatchToProps = dispatch => {
 *      const dispatchedActions = bindActionCreators({
 *          SingleAction1,
 *          SingleAction2,
 *          SingleAction3,
 *      }, dispatch);
 *      return {  // bindActionCreators and Extend the Props
 *          ...dispatchedActions,
 *          otherService
 *      }
 * }
 */
const mapDispatchToProps = { logout };
export default connect(mapStateToProps, mapDispatchToProps)(TopHeader);