import React, {Fragment, useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import ReactTable from 'react-table';
import {Form, Formik, withFormik} from 'formik';
import 'react-table/react-table.css';

const AddProducts = props => {

    const {
        handleSubmit,
        handleChange,
        //     setFieldValue,
        //     globalItemsErrors,
        //     globalItemsLoading,
        //     globalItems,
        //     values,
        //     globalItemsPagination,
    } = props;

    return (
        <Fragment>
            <div>
                <div className="row mb-3 align-items-center">
                    <div className="col-md-5">
                        <h2 className="h4 bold mb-0">Product Add</h2>
                    </div>
                </div>
                <div className="col-md-12">
                    <Formik onSubmit={handleSubmit}>
                        <Form>
                            <table>
                                <tr>
                                    <td className="col-md-2">Product Name</td>
                                    <td className="col-md-10">
                                        <input name="product_name"
                                               onChange={handleChange}
                                               style={{width: "100%"}}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="col-md-2">Product Company</td>
                                    <td className="col-md-10">
                                        <input name="product_company"
                                               onChange={handleChange}
                                               style={{width: "100%"}}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="col-md-2">Product Price</td>
                                    <td className="col-md-10">
                                        <input name="product_price"
                                               onChange={handleChange}
                                               style={{width: "100%"}}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="col-md-2">Company Email</td>
                                    <td className="col-md-10">
                                        <input name="product_email"
                                               onChange={handleChange}
                                               style={{width: "100%"}}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="col-md-2">Company Phone</td>
                                    <td className="col-md-10">
                                        <input name="product_phone"
                                               onChange={handleChange}
                                               style={{width: "100%"}}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="col-md-2">Company Address</td>
                                    <td className="col-md-10">
                                        <input
                                            name="product_address"
                                            onChange={handleChange}
                                            style={{width: "100%"}}/>
                                    </td>
                                </tr>
                                {/*<tr>*/}
                                {/*    <td className="col-md-2">Company Registered</td>*/}
                                {/*    <td className="col-md-4">*/}
                                {/*        Approved :<input name="approved"*/}
                                {/*                         onChange={handleChange}*/}
                                {/*                         type="date"*/}
                                {/*                         style={{*/}
                                {/*                             width: "25%",*/}
                                {/*                             marginRight: '50px',*/}
                                {/*                             paddingLeft: '50px'*/}
                                {/*                         }}/>*/}
                                {/*        Expired :<input name="expire"*/}
                                {/*                        onChange={handleChange}*/}
                                {/*                        type="date"*/}
                                {/*                        style={{*/}
                                {/*                            width: "25%",*/}
                                {/*                            paddingLeft: '50px'*/}
                                {/*                        }}/>*/}
                                {/*    </td>*/}
                                {/*</tr>*/}
                                <tr>
                                    <td className="col-md-2">Product Status</td>
                                    <td className="col-md-10">
                                        <input
                                            type="checkbox"
                                            name="isActive"
                                            onChange={handleChange}
                                        />Active
                                    </td>
                                </tr>
                                <tr>
                                    <td className="col-md-2">Product About</td>
                                    <td className="col-md-10">
                                <textarea name="about"
                                          onChange={handleChange}
                                          style={{width: "100%"}}/>
                                    </td>
                                </tr>
                            </table>
                            <div className="row">
                                <div className="col-md-5">
                                    <button type={'submit'} className="btn btn-block btn-outline-success">Add</button>
                                </div>
                                <div className="col-md-5">
                                    <Link to={`products/add`} className="btn btn-block btn-outline-danger">Cancel</Link>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </Fragment>
    )
}

export default withFormik({
    enableReinitialize: true,
    handleSubmit: (values, {props}) => {
        console.log(values)
        props.addProduct(values);
    },
    mapPropsToValues: props => ({
        product_name: '',
        product_company: '',
        product_price: '',
        product_email: '',
        product_address: '',
        // product_approved: '',
        // product_expire: '',
        product_phone: '',
        product_isActive: '',
        product_about: '',
    })
})(AddProducts);