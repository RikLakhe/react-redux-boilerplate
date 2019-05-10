import React from 'react';
import {render} from 'react-dom';
// import {ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux';
// import {Router} from 'react-router-dom';

import './index.css';
import './styles/theme/bootstrap.min.css';

import App from './containers/App';
import store from './store'
import registerServiceWorker from './registerServiceWorker';

// const store = configureStore();

const mountNode = document.getElementById('root') || document.createElement('div');

// ReactDOM.render(<App />, document.getElementById('root'));

render(
    <Provider store={store}>
        {/*<ConnectedRouter history={history}>*/}
        {/*    <Router history={history}>*/}
                {/*<AuthProvider>*/}
                    <App/>
                {/*</AuthProvider>*/}
            {/*</Router>*/}
        {/*</ConnectedRouter>*/}
    </Provider>,
    mountNode
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
registerServiceWorker();
