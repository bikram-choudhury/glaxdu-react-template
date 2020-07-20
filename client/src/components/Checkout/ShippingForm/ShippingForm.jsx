import React, { forwardRef, createRef, useImperativeHandle } from 'react';
import { useForm } from 'react-hook-form';

const ShippingForm = forwardRef((props, ref) => {

    let shippingRef = createRef();
    const { Type, billingFormOnsubmit, Title } = props;
    const { register, handleSubmit, errors } = useForm();

    const validateEmail = email => {
        // eslint-disable-next-line
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    };
    const shippingFormOnsubmit = (formData) => {
        billingFormOnsubmit(formData)
    };
    useImperativeHandle(ref, () => {
        return {
            submitShippingDetailForm() {
                shippingRef.dispatchEvent(new Event('submit'));
                // billingForm.sumbit() will not work for onSubmit. Please refer: https://stackoverflow.com/a/53166131/3719000
            }
        }
    })

    return (
        <form ref={holder => shippingRef = holder} onSubmit={handleSubmit(shippingFormOnsubmit)}>
            <h3>{Title}</h3>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="billing-info mb-20">
                        <label>First Name</label>
                        <input type="text" name={`${Type}.firstName`} ref={register({ required: true })} />
                        {
                            errors &&
                                errors[Type] &&
                                errors[Type].firstName &&
                                errors[Type].firstName.type === 'required' ? (
                                    <small className="text-danger">First Name is required</small>
                                ) : null
                        }
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="billing-info mb-20">
                        <label>Last Name</label>
                        <input type="text" name={`${Type}.lastName`} ref={register({ required: true })} />
                        {
                            errors &&
                                errors[Type] &&
                                errors[Type].lastName &&
                                errors[Type].lastName.type === 'required' ? (
                                    <small className="text-danger">Last Name is required</small>
                                ) : null
                        }
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="billing-info mb-20">
                        <label>Company Name</label>
                        <input type="text" name={`${Type}.companyName`} ref={register({ required: true, maxLength: 10 })} />
                        {
                            errors &&
                                errors[Type] &&
                                errors[Type].companyName &&
                                errors[Type].companyName.type === 'required' ? (
                                    <small className="text-danger">Company Name is required</small>
                                ) : null
                        }
                        {
                            errors &&
                                errors[Type] &&
                                errors[Type].companyName &&
                                errors[Type].companyName.type === 'maxLength' ? (
                                    <small className="text-danger">Company Name can not be more than 10</small>
                                ) : null
                        }
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="billing-select mb-20">
                        <label>Country</label>
                        <select name={`${Type}.country`} ref={register({ required: true })}>
                            <option value="">Select a country</option>
                            <option value="azerbaijan">Azerbaijan</option>
                            <option value="bahamas">Bahamas</option>
                            <option value="bahrain">Bahrain</option>
                            <option value="bangladesh">Bangladesh</option>
                            <option value="barbados">Barbados</option>
                        </select>
                        {
                            errors &&
                                errors[Type] &&
                                errors[Type].country &&
                                errors[Type].country.type === 'required' ? (
                                    <small className="text-danger">Country is required</small>
                                ) : null
                        }
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="billing-info mb-20">
                        <label>Street Address</label>
                        <input
                            className="billing-address"
                            placeholder="House number and street name"
                            type="text"
                            name={`${Type}.billingAddress`}
                            ref={register({ required: true })}
                        />
                        {
                            errors &&
                                errors[Type] &&
                                errors[Type].billingAddress &&
                                errors[Type].billingAddress.type === 'required' ? (
                                    <small className="text-danger">Street Address is required</small>
                                ) : null
                        }
                        <input placeholder="Apartment, suite, unit etc." type="text" name={`${Type}.appartmentAddress`} ref={register()} />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="billing-info mb-20">
                        <label>Town / City</label>
                        <input type="text" name={`${Type}.city`} ref={register({ required: true })} />
                        {
                            errors &&
                                errors[Type] &&
                                errors[Type].city &&
                                errors[Type].city.type === 'required' ? (
                                    <small className="text-danger">Town / City is required</small>
                                ) : null
                        }
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="billing-info mb-20">
                        <label>State</label>
                        <input type="text" name={`${Type}.state`} ref={register({ required: true })} />
                        {
                            errors &&
                                errors[Type] &&
                                errors[Type].state &&
                                errors[Type].state.type === 'required' ? (
                                    <small className="text-danger">State is required</small>
                                ) : null
                        }
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="billing-info mb-20">
                        <label>Postcode / ZIP</label>
                        <input type="text" name={`${Type}.zip`} ref={register({ required: true })} />
                        {
                            errors &&
                                errors[Type] &&
                                errors[Type].zip &&
                                errors[Type].zip.type === 'required' ? (
                                    <small className="text-danger">Postcode / ZIP is required</small>
                                ) : null
                        }
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="billing-info mb-20">
                        <label>Phone</label>
                        <input type="text" name={`${Type}.contactNo`} ref={register({ required: true, pattern: /^[0-9]+$/g })} />
                        {
                            errors &&
                                errors[Type] &&
                                errors[Type].contactNo &&
                                errors[Type].contactNo.type === 'required' ? (
                                    <small className="text-danger">Phone is required</small>
                                ) : null
                        }
                        {
                            errors &&
                                errors[Type] &&
                                errors[Type].contactNo &&
                                errors[Type].contactNo.type === 'pattern' ? (
                                    <small className="text-danger">Phone is not valid</small>
                                ) : null
                        }
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="billing-info mb-20">
                        <label>Email Address</label>
                        <input type="text" name={`${Type}.email`} ref={register({ required: true, validate: validateEmail })} />
                        {
                            errors &&
                                errors[Type] &&
                                errors[Type].email &&
                                errors[Type].email.type === 'required' ? (
                                    <small className="text-danger">Email is required</small>
                                ) : null
                        }
                        {
                            errors &&
                                errors[Type] &&
                                errors[Type].email &&
                                errors[Type].email.type === 'validate' ? (
                                    <small className="text-danger">Email is not valid</small>
                                ) : null
                        }
                    </div>
                </div>
            </div>
            <div className="additional-info-wrap">
                <h4>Additional information</h4>
                <div className="additional-info">
                    <label>Order notes</label>
                    <textarea placeholder="Notes about your order, e.g. special notes for delivery. " name={`${Type}.message`} ref={register()}></textarea>
                </div>
            </div>
        </form>
    )
});

export default ShippingForm;