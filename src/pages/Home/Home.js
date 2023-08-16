import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col l-3 c-6 m-3')}>
                            <div className={cx('product-box')}>
                                <div className={cx('item-product')}>
                                    <img
                                        className={cx('img-item')}
                                        src="https://bizweb.dktcdn.net/thumb/1024x1024/100/318/614/products/mt-compressed-2.jpg?v=1691044523150"
                                        alt=""
                                    />
                                </div>

                                <div className={cx('product-info')}>
                                    <h3 className={cx('product-name')}>
                                        <a
                                            href="/buggy-car-tee-black"
                                            title="BUGGY CAR TEE - BLACK"
                                            className={cx('product-title')}
                                        >
                                            BUGGY CAR TEE - BLACK
                                        </a>
                                    </h3>

                                    <div className={cx('product-item-price')}>
                                        <span className={cx('special-price')}>
                                            <span className={cx('product-price')}>395.000₫</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cx('col l-3 c-6 m-3')}>
                            <div className={cx('product-box')}>
                                <div className={cx('item-product')}>
                                    <img
                                        className={cx('img-item')}
                                        src="https://bizweb.dktcdn.net/thumb/1024x1024/100/318/614/products/mt-compressed-2.jpg?v=1691044523150"
                                        alt=""
                                    />
                                </div>

                                <div className={cx('product-info')}>
                                    <h3 className={cx('product-name')}>
                                        <a
                                            href="/buggy-car-tee-black"
                                            title="BUGGY CAR TEE - BLACK"
                                            className={cx('product-title')}
                                        >
                                            BUGGY CAR TEE - BLACK
                                        </a>
                                    </h3>

                                    <div className={cx('product-item-price')}>
                                        <span className={cx('special-price')}>
                                            <span className={cx('product-price')}>395.000₫</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cx('col l-3 c-6 m-3')}>
                            <div className={cx('product-box')}>
                                <div className={cx('item-product')}>
                                    <img
                                        className={cx('img-item')}
                                        src="https://bizweb.dktcdn.net/thumb/1024x1024/100/318/614/products/mt-compressed-2.jpg?v=1691044523150"
                                        alt=""
                                    />
                                </div>

                                <div className={cx('product-info')}>
                                    <h3 className={cx('product-name')}>
                                        <a
                                            href="/buggy-car-tee-black"
                                            title="BUGGY CAR TEE - BLACK"
                                            className={cx('product-title')}
                                        >
                                            BUGGY CAR TEE - BLACK
                                        </a>
                                    </h3>

                                    <div className={cx('product-item-price')}>
                                        <span className={cx('special-price')}>
                                            <span className={cx('product-price')}>395.000₫</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cx('col l-3 c-6 m-3')}>
                            <div className={cx('product-box')}>
                                <div className={cx('item-product')}>
                                    <img
                                        className={cx('img-item')}
                                        src="https://bizweb.dktcdn.net/thumb/1024x1024/100/318/614/products/mt-compressed-2.jpg?v=1691044523150"
                                        alt=""
                                    />
                                </div>

                                <div className={cx('product-info')}>
                                    <h3 className={cx('product-name')}>
                                        <a
                                            href="/buggy-car-tee-black"
                                            title="BUGGY CAR TEE - BLACK"
                                            className={cx('product-title')}
                                        >
                                            BUGGY CAR TEE - BLACK
                                        </a>
                                    </h3>

                                    <div className={cx('product-item-price')}>
                                        <span className={cx('special-price')}>
                                            <span className={cx('product-price')}>395.000₫</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
