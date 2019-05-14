import React, {Fragment} from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';

import PublicRoute from '../../routes/PublicRoute';
import MainLayout from '../../components/Layout/Layout/Main'
import StaticLayout from '../../components/Layout/Layout/Static'

import {
    AsyncHome,AsyncLogin
} from './AsyncComponent';

const App = () => (
    <Fragment>
        <Switch>
            <PublicRoute exact path='/home' layout={MainLayout} component={AsyncHome}/>
            <PublicRoute path='/' layout={StaticLayout} component={AsyncLogin} />
        </Switch>
    </Fragment>
)

export default App;