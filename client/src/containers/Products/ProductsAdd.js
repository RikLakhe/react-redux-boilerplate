import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import custom components
import AddProducts from '../../components/Product/AddProducts';
import * as productService from '../../services/productService';

export class AddContainer extends Component {
    /**
     * Fetch global item records with search criteria.
     *
     * @param {string} globalItem
     * @param {object} formData
     */
    addProduct = (formData) => {
        this.props.actions.addProduct(formData);
    };

    render() {
        return <AddProducts addProduct={this.addProduct} {...this.props} />;
    }s
}

/**
 * Map the state to props.
 */
const mapStateToProps = state => ({
    products: state.products.payload,
    productsErrors: state.products.errors,
    productsLoading: state.products.loading,
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(Object.assign({}, productService), dispatch),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddContainer);
