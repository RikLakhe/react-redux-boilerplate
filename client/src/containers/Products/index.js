import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from '../Exception/NotFoundContainer';
// Import custom components
import ProductsList from './ProductsList'
import ProductsAdd from './ProductsAdd'
import ProductsEdit from './ProductsEdit'

const Products = ({ match }) => (
    <Fragment>
        <Switch>
            <Route exact path={`${match.url}`} component={ProductsList} />
            <Route exact path={`${match.url}/add`} component={ProductsAdd} />
            <Route exact path={`${match.url}/:id`} component={ProductsList} />
            <Route exact path={`${match.url}/:id/edit`} component={ProductsEdit} />
            <Route component={NotFound} />
        </Switch>
    </Fragment>
);

export default Products;