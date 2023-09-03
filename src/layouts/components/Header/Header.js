/* eslint-disable jsx-a11y/anchor-has-content */
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faBars, faSearch, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PropperWrapper } from '../../../components/Popper';
import Search from '../../../components/Popper/Search/Search';
import Clothing from '../../../components/Popper/Clothing/Clothing';
import { ModalLogin, ModalRegister } from '../ModalLoginRegister';
import { useState } from 'react';
const cx = classNames.bind(styles);

const MENU_NAV = [
    {
        type: 'HOME',
        link: '/',
    },
    {
        type: 'CLOTHING',
        link: '/clothing',
    },
    {
        type: 'CONTACT',
        link: '/contact',
    },
    {
        type: 'CLEARANCE SALE',
        link: '/sale',
    },
];

const HEADER_ACC = [
    {
        title: 'Tài khoản',
        link: '/account',
    },
    {
        title: 'Đăng xuất',
        link: '/',
    },
    {
        title: 'Liên hệ',
        link: '/lien-he',
    },
];

// const HEADER_NO_ACC = [
//     {
//         title: 'Đăng ký',
//         link: '#',
//         toggle: false,
//     },
//     {
//         title: 'Đăng nhập',
//         link: '#',
//         toggle: true,
//     },
//     {
//         title: 'Liên hệ',
//         link: '/lien-he',
//     },
// ];

function Header() {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    };

    let haveAcc = false;

    const renderResultSearch = (attrs) => (
        <div className={cx('menu')} tabIndex="-1" {...attrs}>
            <PropperWrapper className={cx('menu-popper')}>
                <Search />
            </PropperWrapper>
        </div>
    );

    const renderResultClothing = (attrs) => (
        <div className={cx('menu')} tabIndex="-1" {...attrs}>
            <PropperWrapper className={cx('menu-popper')}>
                <Clothing />
            </PropperWrapper>
        </div>
    );

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    // Function to toggle the login modal
    const toggleLoginModal = () => {
        setShowLoginModal(!showLoginModal);
    };

    // Function to toggle the register modal
    const toggleRegisterModal = () => {
        setShowRegisterModal(!showRegisterModal);
    };

    return (
        <div>
            <div className={cx('wrapper-header')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col l-6 m-6 c-6')}>
                            <div className={cx('hotline')}>
                                Hotline: <span className={cx('phone-number')}>0933.782.768</span>
                            </div>
                        </div>

                        <div className={cx('col l-6 m-6 c-6')}>
                            <ul className={cx('list-right')}>
                                {haveAcc ? (
                                    HEADER_ACC.map((item, key) => (
                                        <Link to={item.link} className={cx('list-item')} key={key}>
                                            <li>{item.title}</li>
                                        </Link>
                                    ))
                                ) : (
                                    <>
                                        <Link to="#" className={cx('list-item')}>
                                            <li onClick={toggleRegisterModal}>Đăng ký</li>
                                            {showRegisterModal && (
                                                <ModalRegister
                                                    isShowing={showRegisterModal}
                                                    hide={toggleRegisterModal}
                                                />
                                            )}
                                        </Link>

                                        <Link to="#" className={cx('list-item')}>
                                            <li onClick={toggleLoginModal}>Đăng nhập</li>
                                            {showLoginModal && (
                                                <ModalLogin isShowing={showLoginModal} hide={toggleLoginModal} />
                                            )}
                                        </Link>

                                        <Link to="/lien-he" className={cx('list-item')}>
                                            <li>Liên hệ</li>
                                        </Link>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('header-logo')}>
                <div className={cx('menu-bar')}>
                    <FontAwesomeIcon icon={faBars} onClick={handleShow} />
                </div>

                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col l-12 m-12 c-12')}>
                            <div className={cx('header-main')}>
                                <Link to="/">
                                    <img
                                        src="//bizweb.dktcdn.net/100/318/614/themes/667160/assets/logo.png?1681444077990"
                                        alt="logo "
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {show && <Clothing data={MENU_NAV} />}

            <div className={cx('header-nav')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col l-11 m-0 c-0')}>
                            <ul className={cx('nav-1')}>
                                <li className={cx('nav-item')}>
                                    <Link to="/">Home</Link>
                                </li>
                                <Tippy
                                    interactive
                                    placement="bottom-end"
                                    delay={(0, 100)}
                                    offset={[1, 2]}
                                    render={renderResultClothing}
                                >
                                    <li className={cx('nav-item')}>
                                        <Link to="/clothing">
                                            clothing
                                            <span className={cx('icon-caret-down')}>
                                                <FontAwesomeIcon icon={faCaretDown} />
                                            </span>
                                        </Link>
                                    </li>
                                </Tippy>
                                <li className={cx('nav-item')}>
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li className={cx('nav-item', 'nav-item-sale')}>
                                    <Link to="/sale">Clearance sale</Link>
                                </li>
                            </ul>
                        </div>

                        <div className={cx('col l-1 m-0 c-0')}>
                            <div className={cx('search-cart')}>
                                <div className={cx('search_menu')}>
                                    <Tippy
                                        interactive
                                        placement="bottom-end"
                                        delay={(0, 100)}
                                        offset={[1, 2]}
                                        render={renderResultSearch}
                                    >
                                        <div>
                                            <FontAwesomeIcon icon={faSearch} />
                                        </div>
                                    </Tippy>
                                </div>
                                <div className={cx('top-cart')}>
                                    <Link to="/cart">
                                        <FontAwesomeIcon icon={faBagShopping} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
