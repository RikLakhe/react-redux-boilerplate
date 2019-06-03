import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import custom components
import ListProducts from '../../components/Product/ListProducts';
import * as productService from '../../services/productService';

export class AddContainer extends Component {
    /**
     * Fetch global item records with search criteria.
     *
     * @param {string} globalItem
     * @param {object} formData
     */
    fetchProducts = (formData) => {
        this.props.actions.fetchProducts(formData);
    };

    render() {
        return <ListProducts fetchProducts={this.fetchProducts} {...this.props} />;
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
