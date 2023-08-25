import classNames from 'classnames/bind';
import styles from './Clothing.module.scss';
import ProductItem from '../../layouts/components/ProductItem/ProductItem';

const cx = classNames.bind(styles);

function Clothing() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('category-products')}>
                <div className={cx('row')}>
                    <div className={cx('col l-6 m-6 c-12')}>
                        <h1 className={cx('title_page')}>Tất cả sản phẩm</h1>
                    </div>
                    <div className={cx('col l-6 m-6 c-12')}>
                        <div className={cx('sortpage')}>
                            <label className={cx('sort-left')}>Sắp xếp: </label>
                            <div className={cx('border_sort')}>
                                <select name="sortBy" id="sortBy" fdprocessedid="oi6s5o">
                                    <option value="default" defaultValue="">
                                        Mặc định
                                    </option>
                                    <option value="alpha-asc">A → Z</option>
                                    <option value="alpha-desc">Z → A</option>
                                    <option value="price-asc">Giá tăng dần</option>
                                    <option value="price-desc">Giá giảm dần</option>
                                    <option value="created-desc">Hàng mới nhất</option>
                                    <option value="created-asc">Hàng cũ nhất</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
