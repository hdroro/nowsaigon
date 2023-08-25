//Layouts
import config from '../config';
import Clothing from '../pages/Clothing/Clothing';
import { HeaderSidebar } from '../layouts';
//Pages
import Home from '../pages/Home/Home';
import Sale from '../pages/Sale/Sale';
import Contact from '../pages/Contact/Contact';
import LienHe from '../pages/LienHe/LienHe';
import Account from '../pages/Account/Account';
import Address from '../pages/Address/Address';

//public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.lienhe, component: LienHe },
    { path: config.routes.account, component: Account },
    { path: config.routes.address, component: Address },
    { path: config.routes.clothing, component: Clothing, layout: HeaderSidebar },
    { path: config.routes.sale, component: Sale, layout: HeaderSidebar },
];

//private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
