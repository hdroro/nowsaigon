import classNames from 'classnames/bind';
import styles from './Clothing.module.scss';

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

function Clothing({ data }) {
    return (
        <div className={cx('menu-hover')}>
            <ul>
                {!data ? (
                    MENU_CLOTHING.map((item, index) => (
                        <a className={cx('nav-link')} href={item.link} key={index}>
                            <li className={cx('nav-item')}>{item.type}</li>
                        </a>
                    ))
                ) : (
                    <div>
                        <div className={cx('row')}>
                            <div className={cx('col l-0 m-12 c-12')}>
                                <a className={cx('nav-link-special')} href="/">
                                    <li className={cx('nav-item-special')}>Tất cả danh mục</li>
                                </a>
                                {data.map((item, index) => (
                                    <a className={cx('nav-link')} href={item.link} key={index}>
                                        <li className={cx('nav-item-clothing')}>{item.type}</li>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </ul>
        </div>
    );
}

export default Clothing;
