import classNames from 'classnames/bind';
import styles from './HeaderSidebar.module.scss';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Footer from '../components/Footer/Footer';

const cx = classNames.bind(styles);

function HeaderSidebar({ children }) {
    return (
        <div>
            <Header />
            <Breadcrumb />
            <div>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col l-3 c-0 m-0')}>
                            <Sidebar />
                        </div>
                        <div className={cx('col l-9 c-12 m-12')}>{children}</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

HeaderSidebar.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderSidebar;
