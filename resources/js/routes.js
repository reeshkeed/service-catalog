import Home from './views/admin/Home';
import CategoryList from './views/admin/categories/List';
import ErrorNotFound from './views/errors/404';

export const routes = [
    {
        path: '/',
        component: Home,
    },

    {
        path: '/categories',
        component: CategoryList,
    },

    {
        component: ErrorNotFound,
    },
];
