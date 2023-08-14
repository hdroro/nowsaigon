import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/components/Header';
import Sidebar from '~/components/Sidebar';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function HeaderSidebar({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

HeaderSidebar.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderSidebar;
