import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

const MENU_CLOTHING = [
    {
        type: 'ALL ITEMS',
        link: '/collections/all',
    },
    {
        type: 'TEE',
        link: '/tee',
    },
    {
        type: 'BABY TEE',
        link: '/baby-tee',
    },
    {
        type: 'BOTTOM',
        link: '/pants',
    },
    {
        type: 'JACKET',
        link: '/jacket',
    },
    {
        type: 'HOODIE',
        link: '/hoodie',
    },
    {
        type: 'SWEATER',
        link: '/sweater',
    },
    {
        type: 'CAP',
        link: '/cap',
    },
    {
        type: 'SHIRTS',
        link: '/shirts',
    },
    {
        type: 'ACCESSORIES',
        link: '/accessories',
    },
    {
        type: 'WASH / TIE DYE',
        link: '/wash-tie-dye',
    },
    {
        type: 'SALE',
        link: '/sale',
    },
];

function Sidebar() {
    return (
        <div className={cx('sidebar')}>
            <div className={cx('title_module_arrow')}>
                <h2>
                    <span>Danh mục sản phẩm</span>
                </h2>
            </div>
            <div className={cx('aside-content')}>
                <ul className={cx('nav-ul')}>
                    {MENU_CLOTHING.map((item, index) => (
                        <li className={cx('nav-item')} key={index}>
                            <a className={cx('nav-link')} href={item.link}>
                                {item.type}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
