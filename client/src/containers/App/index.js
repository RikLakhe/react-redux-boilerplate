import React, {Fragment} from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';

import PublicRoute from '../../routes/PublicRoute';
import PrivateRoute from '../../routes/PrivateRoute';
import MainLayout from '../../components/Layout/Layout/Main'
import StaticLayout from '../../components/Layout/Layout/Static'

import {
    AsyncHome,AsyncLogin,AsyncNotFound
} from './AsyncComponent';

const App = () => (
    <Fragment>
        <Switch>

            <PublicRoute exact path='/' layout={StaticLayout} component={AsyncLogin} />

            <PrivateRoute  path='/home' layout={MainLayout} component={AsyncHome}/>

            <Route component={AsyncNotFound} />

        </Switch>
    </Fragment>
)

export default withRouter(App);