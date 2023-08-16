/* eslint-disable jsx-a11y/anchor-has-content */
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faBars, faSearch, faBagShopping } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-header')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row', 'header')}>
                        <div className={cx('col l-6 m-6 c-6')}>
                            <div className={cx('hotline')}>
                                Hotline: <span className={cx('phone-number')}>0933.782.768</span>
                            </div>
                        </div>

                        <div className={cx('col l-6 m-6 c-6')}>
                            <ul className={cx('list-right')}>
                                <li className={cx('list-item')}>Tài khoản</li>
                                <li className={cx('list-item')}>Đăng xuất</li>
                                <li className={cx('list-item')}>Liên hệ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('header-logo')}>
                <div className={cx('menu-bar')}>
                    <FontAwesomeIcon icon={faBars} />
                    <div className="search-box"></div>
                </div>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col l-12 m-12 c-12')}>
                            <div className={cx('header-main')}>
                                <Link to="/" className={cx('logo-banner')}>
                                    <img
                                        className={cx('logo')}
                                        src="//bizweb.dktcdn.net/100/318/614/themes/667160/assets/logo.png?1681444077990"
                                        alt="logo "
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className={cx('search-cart')}>
                    <div className={cx('search_menu')}>
                        <div className={cx('search-inner')}>
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                    </div>
                    <div className={cx('top-cart')}>
                        <FontAwesomeIcon icon={faBagShopping} />
                    </div>
                </div> */}
            </div>

            <div className={cx('header-nav')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col l-11 m-0 c-0')}>
                            <div className={cx('menu_hed')}>
                                <ul className={cx('nav-1')}>
                                    <li className={cx('nav-item')}>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className={cx('nav-item')}>
                                        <Link to="/clothing">
                                            clothing
                                            <span className={cx('icon-caret-down')}>
                                                <FontAwesomeIcon icon={faCaretDown} />
                                            </span>
                                        </Link>
                                    </li>
                                    <li className={cx('nav-item')}>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                    <li className={cx('nav-item')}>
                                        <Link to="/sale">Clearance sale</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={cx('col l-1 m-0 c-0')}>
                            <div className={cx('search-cart')}>
                                <div className={cx('search_menu')}>
                                    <div className={cx('search-inner')}>
                                        <FontAwesomeIcon icon={faSearch} />
                                    </div>
                                </div>
                                <div className={cx('top-cart')}>
                                    <FontAwesomeIcon icon={faBagShopping} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col l-12 m-12 c-12')}>
                        <div className={cx('line-straight')}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
