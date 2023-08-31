import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import Button from '../../../components/Button/Button';
import useModal from '../../../hooks/useModal';
import Modal from '../Modal/Modal';

const cx = classNames.bind(styles);

function ProductItem({ isSalePrice, decPercent }) {
    const { isShowing, toggle } = useModal();

    return (
        <>
            <div className={cx('product-box')}>
                {isSalePrice && <div className={cx('sale-top-right')}>- 52%</div>}
                <div className={cx('item-product')}>
                    <img
                        className={cx('img-item')}
                        src="https://bizweb.dktcdn.net/100/318/614/products/mt-2.jpg?v=1692784174187"
                        alt=""
                    />

                    <img
                        className={cx('img-item-back')}
                        src="https://bizweb.dktcdn.net/100/318/614/products/ms.jpg?v=1692784175863"
                        alt=""
                    />
                    <div className={cx('btn-group')}>
                        <Button primary>Tùy chọn</Button>
                        <Button primary onClick={toggle}>
                            Xem nhanh
                        </Button>
                        <Modal isShowing={isShowing} hide={toggle} />
                    </div>
                </div>

                <div className={cx('product-info')}>
                    <h3 className={cx('product-name')}>
                        <a href="/buggy-car-tee-black" title="BUGGY CAR TEE - BLACK" className={cx('product-title')}>
                            BUGGY CAR TEE - BLACK
                        </a>
                    </h3>

                    <div className={cx('product-item-price')}>
                        <span className={cx('special-price')}>
                            <span className={cx('product-price')}>395.000₫</span>
                        </span>
                        {decPercent && (
                            <span classNames={cx('product-item-price-sale')}>
                                <span className={cx('product-price-old')}>395.000₫</span>
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductItem;
