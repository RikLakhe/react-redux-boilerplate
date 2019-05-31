import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

// Import custom components
import ProductsList from './ProductsList'

const Products = ({ match }) => (
    <Fragment>
        <Switch>
            <Route exact path={`${match.url}`} component={ProductsList} />
        </Switch>
    </Fragment>
);

export default Products;