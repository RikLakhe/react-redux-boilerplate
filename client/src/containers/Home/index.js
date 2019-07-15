import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from '../Exception/NotFoundContainer';
// Import custom components
import HomeContainer from './HomeContainer'

const Products = ({ match }) => (
    <Fragment>
        <Switch>
            <Route exact path={`${match.url}`} component={HomeContainer} />
            <Route component={NotFound} />
        </Switch>
    </Fragment>
);

export default Products;