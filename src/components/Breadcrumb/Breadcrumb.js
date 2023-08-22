import classNames from 'classnames/bind';
import styles from './Breadcrumb.module.scss';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function Breadcrumb() {
    const location = useLocation();

    const crumbs = location.pathname.split('/');
    return (
        <div>
            {location.pathname !== '/' ? (
                <div className={cx('wrapper-content')}>
                    <div className={cx('grid', 'wide')}>
                        <div className={cx('row')}>
                            <div className={cx('col l-12 c-12 m-12')}>
                                <div className={cx('bread-crumb-container')}>
                                    <span className={cx('home-page')}>
                                        <a href="/">Trang chủ</a>
                                    </span>
                                    <span> / </span>
                                    <span className={cx('crumb-name')}>{crumbs}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col l-12 m-12 c-12')}>
                            <div className={cx('line-straight')}></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Breadcrumb;
