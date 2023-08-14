//Layouts
import config from '../config';

//Pages
import Home from '../pages/Home/Home';

//public routes
const publicRoutes = [{ path: config.routes.home, component: Home }];

//private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
