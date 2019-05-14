import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

const PublicRoute = ({component: Component, layout: Layout,...rest}) => (
    <Route {...rest} render={props => (
        <Fragment>
            <Layout>
            <Component {...props} />
            </Layout>
        </Fragment>
    )}/>
);

export default PublicRoute;
