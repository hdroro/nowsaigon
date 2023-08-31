import classNames from 'classnames/bind';
import styles from './NavHeaderProduct.module.scss';

const cx = classNames.bind(styles);

function NavHeaderProduct({ isSale }) {
    return (
        <div className={cx('category-products')}>
            <div className={cx('row')}>
                <div className={cx('col l-6 m-6 c-12')}>
                    {isSale ? (
                        <h1 className={cx('title_page')}>CLEARANCE SALE</h1>
                    ) : (
                        <h1 className={cx('title_page')}>Tất cả sản phẩm</h1>
                    )}
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
    );
}

export default NavHeaderProduct;
