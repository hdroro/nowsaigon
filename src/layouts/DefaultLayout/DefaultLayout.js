import Header from '../components/Header/Header';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Footer from '../components/Footer/Footer';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <Breadcrumb />
            <div>
                <div>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
