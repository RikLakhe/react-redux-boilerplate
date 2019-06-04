import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import custom components
import ListProducts from '../../components/Product/ListProducts';
import * as productService from '../../services/productService';

export class ViewContainer extends Component {
    /**
     * Fetch global item records with search criteria.
     *
     * @param {string} globalItem
     * @param {object} formData
     */
    fetchProductsByID = (formData) => {
        this.props.actions.fetchProductsByID(formData);
    };

    render() {
        return <ListProducts fetchProductsByID={this.fetchProductsByID} {...this.props} />;
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
)(ViewContainer);
