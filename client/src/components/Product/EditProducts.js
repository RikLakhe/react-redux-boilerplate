import React, {Fragment, useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import ReactTable from 'react-table';
import {Form, Formik, withFormik} from 'formik';
import 'react-table/react-table.css';

const EditProducts = props => {

    const {
        handleSubmit,
        handleChange,
        selectedProducts,
        selectedProductsErrors,
        selectedProductsLoading,
        values,
        //     globalItemsPagination,
        editProduct,
        fetchProductsByID,
    } = props;

    useEffect(() => {
        fetchProductsByID(props.match.params.id)
    }, [])

    console.log(values)
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
                                <tbody>
                                <tr>
                                    <td className="col-md-2">Product Name</td>
                                    <td className="col-md-10">
                                        <input name="product_name"
                                               value={values.product_name}
                                               onChange={handleChange}
                                               style={{width: "100%"}}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="col-md-2">Product Company</td>
                                    <td className="col-md-10">
                                        <input name="company"
                                               value={values.company}
                                               onChange={handleChange}
                                               style={{width: "100%"}}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="col-md-2">Product Price</td>
                                    <td className="col-md-10">
                                        <input name="price"
                                               value={values.price}
                                               onChange={handleChange}
                                               style={{width: "100%"}}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="col-md-2">Company Email</td>
                                    <td className="col-md-10">
                                        <input name="email"                                               values={values.company}
                                               value={values.email}
                                               onChange={handleChange}
                                               style={{width: "100%"}}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="col-md-2">Company Phone</td>
                                    <td className="col-md-10">
                                        <input name="phone"
                                               value={values.phone}
                                               onChange={handleChange}
                                               style={{width: "100%"}}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="col-md-2">Company Address</td>
                                    <td className="col-md-10">
                                        <input
                                            name="address"
                                            onChange={handleChange}                                               values={values.company}
                                            value={values.address}
                                            style={{width: "100%"}}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="col-md-2">Company Registered</td>
                                    <td className="col-md-4">
                                        Approved :<input name="approved"
                                                         onChange={handleChange}
                                                         type="date"
                                                         value={values.approved}
                                                         style={{
                                                             width: "25%",
                                                             marginRight: '50px',
                                                             paddingLeft: '50px'
                                                         }}/>
                                        Expired :<input name="expire"
                                                        onChange={handleChange}
                                                        type="date"
                                                        value={values.expire}
                                                        style={{
                                                            width: "25%",
                                                            paddingLeft: '50px'
                                                        }}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="col-md-2">Product Status</td>
                                    <td className="col-md-10">
                                        <input
                                            value={values.isActive}
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
                                          value={values.about}
                                          onChange={handleChange}
                                          style={{width: "100%",height:'100px'}}/>
                                    </td>
                                </tr>
                                </tbody>
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
        props.editProduct(values);
    },
    mapPropsToValues: props => ({
        product_id: props.selectedProducts.product_id,
        product_name: props.selectedProducts.product_name,
        company: props.selectedProducts.company,
        price: props.selectedProducts.price,
        email: props.selectedProducts.email,
        address: props.selectedProducts.address,
        approved: props.selectedProducts.approved,
        expire: props.selectedProducts.expire,
        phone: props.selectedProducts.phone,
        isActive: props.selectedProducts.isActive,
        about: props.selectedProducts.about,
    })
})(EditProducts);