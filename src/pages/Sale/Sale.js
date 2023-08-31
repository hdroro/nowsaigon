import classNames from 'classnames/bind';
import styles from './Sale.module.scss';
import NavHeaderProduct from '../../layouts/components/NavHeaderProduct/NavHeaderProduct';
import ProductItem from '../../layouts/components/ProductItem/ProductItem';

const cx = classNames.bind(styles);

function Sale() {
    return (
        <div className={cx('wrapper')}>
            <NavHeaderProduct isSale={true} />

            <div className={cx('products-list')}>
                <div className={cx('row')}>
                    <div className={cx('col l-4 m-4 c-6')}>
                        <ProductItem isSalePrice={true} decPercent={true} />
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

export default Sale;
