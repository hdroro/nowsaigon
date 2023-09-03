import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button/Button';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col l-12 m-12 c-12')}>
                        <h1 className={cx('title-header')}>
                            <span>Giỏ hàng của bạn</span>
                        </h1>
                    </div>

                    <div className={cx('col l-12 m-12 c-12')}>
                        <form action="/cart" method="post">
                            <div className={cx('form-cart')}>
                                <div className={cx('cart-thead')}>
                                    <div className={cx('row')}>
                                        <div className={cx('col l-2 m-0 c-0', 'cart-part')}>
                                            <div>Ảnh sản phẩm</div>
                                        </div>
                                        <div className={cx('col l-3 m-0 c-0', 'cart-part')}>
                                            <div>Tên sản phẩm</div>
                                        </div>
                                        <div className={cx('col l-2 m-0 c-0', 'cart-part')}>
                                            <div>Đơn giá</div>
                                        </div>
                                        <div className={cx('col l-2 m-0 c-0', 'cart-part')}>
                                            <div>Số lượng</div>
                                        </div>
                                        <div className={cx('col l-2 m-0 c-0', 'cart-part')}>
                                            <div>Thành tiền</div>
                                        </div>
                                        <div className={cx('col l-1 m-0 c-0', 'cart-part')}>
                                            <div>Xóa</div>
                                        </div>
                                    </div>
                                </div>

                                <div className={cx('cart-tbody')}>
                                    <div className={cx('row')}>
                                        <div className={cx('col l-2 m-0 c-0', 'cart-item')}>
                                            <div>
                                                <a
                                                    className={cx('product-image')}
                                                    title="LINE BOXY RAGLAN TEE - BLACK - S"
                                                    href="/line-boxy-raglan-tee-black"
                                                >
                                                    <img
                                                        alt="LINE BOXY RAGLAN TEE - BLACK - S"
                                                        src="https://bizweb.dktcdn.net/thumb/compact/100/318/614/products/mt-2-compressed-2.jpg"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <div className={cx('col l-3 m-0 c-0', 'cart-item')}>
                                            <div className={cx('item-name')}>
                                                <div className={cx('product-name')}>
                                                    <a className={cx('text2line')} href="/line-boxy-raglan-tee-black">
                                                        LINE BOXY RAGLAN TEE - BLACK
                                                    </a>
                                                </div>
                                                <span className={cx('variant-title')}>S</span>
                                            </div>
                                        </div>
                                        <div className={cx('col l-2 m-0 c-0', 'cart-item')}>
                                            <span className={cx('item-price')}>
                                                <span className={cx('price')}>380.000₫</span>
                                            </span>
                                        </div>
                                        <div className={cx('col l-2 m-0 c-0', 'cart-item')}>
                                            <div className={cx('up-down')}>
                                                <button className={cx('up-product')}>+</button>
                                                <input className={cx('count-product')} defaultValue={1} disabled />
                                                <button className={cx('down-product')}>-</button>
                                            </div>
                                        </div>
                                        <div className={cx('col l-2 m-0 c-0', 'cart-item')}>
                                            <span className={cx('item-price')}>
                                                <span className={cx('price')}>380.000₫</span>
                                            </span>
                                        </div>
                                        <div className={cx('col l-1 m-0 c-0', 'cart-item')}>
                                            <a className={cx('remove-item-cart')} title="Xóa" href="/">
                                                <span>
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className={cx('col l-12 m-12 c-12')}>
                        <div className={cx('row')}>
                            <div className={cx('col l-7 m-12 c-12')}>
                                <div className={cx('form-cart-button')}>
                                    <a href="/" className={cx('form-cart-continue')}>
                                        <Button normal text>
                                            Tiếp tục mua hàng
                                        </Button>
                                    </a>
                                </div>
                            </div>

                            <div className={cx('col l-5 m-12 c-12')}>
                                <div className={cx('form-cart-bill')}>
                                    <div className={cx('header-bill')}>
                                        <div className={cx('row')}>
                                            <div className={cx('col l-7 m-0 c-0')}>
                                                <span className={cx('template-bill')}>Tạm tính</span>
                                            </div>
                                            <div className={cx('col l-5 m-0 c-0')}>
                                                <span className={cx('prices')}>380.000₫</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={cx('body-bill')}>
                                        <div className={cx('row')}>
                                            <div className={cx('col l-7 m-0 c-0')}>
                                                <span className={cx('total-bill')}>Tổng tiền thanh toán</span>
                                            </div>
                                            <div className={cx('col l-5 m-0 c-0')}>
                                                <span className={cx('prices')}>380.000₫</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <Button primary className={cx('button-pay')}>
                                        Tiến hành thanh toán
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
