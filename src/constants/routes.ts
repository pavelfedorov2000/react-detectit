import { Route } from '../interfaces/Route';
import { Home, NotFound } from '../Pages';
import { Pages } from '../enums/Page';

export const routes: Route[] = [{
    id: 1,
    path: Pages.Home.path,
    component: Home
}, {
    id: 2,
    ...Pages.NotFound,
    component: NotFound
}];