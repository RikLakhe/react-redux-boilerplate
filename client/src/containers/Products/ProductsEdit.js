import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Import custom components
import EditProducts from '../../components/Product/EditProducts';
import * as productService from '../../services/productService';

export class EditContainer extends Component {
    /**
     * Fetch product item records with search criteria.
     *
     * @param {string} ID
     */
    fetchProductsByID = (ID) => {
        this.props.actions.fetchProductsByID(ID);
    };

    /**
     * Fetch global item records with search criteria.
     *
     * @param {object} formData
     */
    editProduct = (formData) => {
        this.props.actions.editProduct(formData);
    };

    render() {
        return <EditProducts
            editProduct={this.editProduct}
            fetchProductsByID={this.fetchProductsByID}
            {...this.props}
        />;
    }
}

/**
 * Map the state to props.
 */
const mapStateToProps = state => ({
    selectedProducts: state.selectedProduct.payload,
    selectedProductsErrors: state.selectedProduct.errors,
    selectedProductsLoading: state.selectedProduct.loading,
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
)(EditContainer);
