import loadable from 'react-loadable';
import LoadingComponent from '../../components/Loading';

export const AsyncHome = loadable({
    loader: () => import('./../Home'),
    loading: LoadingComponent,
});

export const AsyncProducts = loadable({
    loader: () => import('./../Products'),
    loading: LoadingComponent,
});


export const AsyncSetting = loadable({
    loader: () => import('./../Setting'),
    loading: LoadingComponent,
});


export const AsyncUsers = loadable({
    loader: () => import('./../Users'),
    loading: LoadingComponent,
});


export const AsyncLogin = loadable({
    loader: () => import('./../Auth'),
    loading: LoadingComponent,
});

export const AsyncNotFound = loadable({
    loader: () => import('./../Exception/NotFoundContainer'),
    loading: LoadingComponent,
});