import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Import custom components
import ListProducts from '../../components/Product/ListProducts';
import * as productService from '../../services/productService';

export class ListContainer extends Component {
    /**
     * Fetch global item records with search criteria.
     *
     *
     * @param {object} formData
     */
    fetchProducts = (formData) => {
        this.props.actions.fetchProducts(formData);
    };

    /**
     * delete product item
     *
     *@param {string} Id
     */
    deleteProduct = (Id) => {
        this.props.actions.deleteProduct(Id);
    };

    render() {
        return <ListProducts fetchProducts={this.fetchProducts} deleteProduct={this.deleteProduct} {...this.props} />;
    }
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
)(ListContainer);
