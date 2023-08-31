import classNames from 'classnames/bind';
import styles from './Clothing.module.scss';
import ProductItem from '../../layouts/components/ProductItem/ProductItem';
import NavHeaderProduct from '../../layouts/components/NavHeaderProduct/NavHeaderProduct';

const cx = classNames.bind(styles);

function Clothing() {
    return (
        <div className={cx('wrapper')}>
            <NavHeaderProduct />

            <div className={cx('products-list')}>
                <div className={cx('row')}>
                    <div className={cx('col l-4 m-4 c-6')}>
                        <ProductItem />
                    </div>
                    <div className={cx('col l-4 m-4 c-6')}>
                        <ProductItem />
                    </div>
                    <div className={cx('col l-4 m-4 c-6')}>
                        <ProductItem />
                    </div>

                    <div className={cx('col l-4 m-4 c-6')}>
                        <ProductItem />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clothing;
