import classNames from 'classnames/bind';
import styles from './DetailProduct.module.scss';
import Button from '../../components/Button/Button';
import { useState } from 'react';

const cx = classNames.bind(styles);

function DetailProduct() {
    const [currentImage, setCurrentImage] = useState(
        'https://bizweb.dktcdn.net/100/318/614/products/mt-2.jpg?v=1692784174187',
    );

    const handleChangeImg = (event) => {
        const newImageUrl = event.target.src;
        if (newImageUrl) {
            setCurrentImage(newImageUrl);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('col l-12 m-12 c-12')}>
                    <div className={cx('row')}>
                        <div className={cx('col l-5 m-5 c-12')}>
                            <div className={cx('product-left')}>
                                <div className={cx('product-left-top')}>
                                    <div className={cx('view-full-size')}>
                                        <a className={cx('img-product')} href="/">
                                            <img
                                                className={cx('product-featured-image-quickview')}
                                                src={currentImage}
                                                alt="quickview"
                                                id={cx('main-img')}
                                            />
                                        </a>
                                    </div>
                                </div>

                                <div className={cx('thumb-gallary')}>
                                    <div className={cx('owl-item')} onClick={handleChangeImg}>
                                        <img
                                            className={cx('product-slick')}
                                            src="https://bizweb.dktcdn.net/thumb/large/100/318/614/products/mt-2-compressed-2.jpg"
                                            alt=""
                                        />
                                    </div>

                                    <div className={cx('owl-item')} onClick={handleChangeImg}>
                                        <img
                                            className={cx('product-slick')}
                                            src="https://bizweb.dktcdn.net/thumb/large/100/318/614/products/ms-compressed-3.jpg"
                                            alt=""
                                        />
                                    </div>

                                    <div className={cx('owl-item')} onClick={handleChangeImg}>
                                        <img
                                            className={cx('product-slick')}
                                            src="https://bizweb.dktcdn.net/thumb/large/100/318/614/products/details-2-compressed-3.jpg"
                                            alt=""
                                        />
                                    </div>

                                    <div className={cx('owl-item')} onClick={handleChangeImg}>
                                        <img
                                            className={cx('product-slick')}
                                            src="https://bizweb.dktcdn.net/thumb/large/100/318/614/products/details-1-compressed-3.jpg"
                                            alt=""
                                        />
                                    </div>

                                    <div className={cx('owl-item')} onClick={handleChangeImg}>
                                        <img
                                            className={cx('product-slick')}
                                            src="https://bizweb.dktcdn.net/thumb/large/100/318/614/products/5-compressed-1-7b9cef71-495d-4e12-875d-6fed0cf45f0e.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cx('col l-7 m-7 c-12')}>
                            <div className={cx('head-product-view')}>
                                <h3>
                                    <a
                                        className={cx('text2line')}
                                        href="/line-boxy-raglan-tee-cream"
                                        title="LINE BOXY RAGLAN TEE - CREAM"
                                    >
                                        LINE BOXY RAGLAN TEE - CREAM
                                    </a>
                                </h3>
                            </div>
                            <div className={cx('quickview-product')}>
                                <span className={cx('vender-title')}>
                                    Thương hiệu:
                                    <span className={cx('vender-name')}> NEEDS OF WISDOM®</span>
                                </span>

                                <span className={cx('vender-status')}>
                                    Tình trạng:
                                    <span className={cx('status-name')}> Còn hàng</span>
                                </span>

                                <span className={cx('prices')}>
                                    <span className={cx('price')}>380.000₫</span>
                                </span>
                            </div>

                            <div className={cx('product-description')}>
                                <div className={cx('product-from')}>
                                    NEEDS OF WISDOM® / Streetwear / Based in Saigon / Made in Vietnam
                                </div>
                                {/* <a href="/line-boxy-raglan-tee-cream" className={cx('view-more')}>
                                    Xem chi tiết
                                </a> */}
                            </div>

                            <div className={cx('swatch-clearfix')}>
                                <div className={cx('header')}>Kích thước</div>
                                <div className={cx('form-size')}>
                                    <div className={cx('swatch-element')}>
                                        <input
                                            id="swatch-0-s"
                                            type="radio"
                                            name="option-0"
                                            value="S"
                                            defaultChecked=""
                                        />
                                        <label htmlFor="swatch-0-s">S</label>
                                    </div>

                                    <div className={cx('swatch-element')}>
                                        <input
                                            id="swatch-0-m"
                                            type="radio"
                                            name="option-0"
                                            value="M"
                                            defaultChecked=""
                                        />
                                        <label htmlFor="swatch-0-m">M</label>
                                    </div>

                                    <div className={cx('swatch-element')}>
                                        <input
                                            id="swatch-0-l"
                                            type="radio"
                                            name="option-0"
                                            value="L"
                                            defaultChecked=""
                                        />
                                        <label htmlFor="swatch-0-l">L</label>
                                    </div>

                                    <div className={cx('swatch-element')}>
                                        <input
                                            id="swatch-0-xl"
                                            type="radio"
                                            name="option-0"
                                            value="XL"
                                            defaultChecked=""
                                        />
                                        <label htmlFor="swatch-0-xl">XL</label>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('header-count')}>Số lượng:</div>
                            <div className={cx('quantity-wanted-p')}>
                                <div className={cx('input-number-product')}>
                                    <input className={cx('input-left')} defaultValue="1" />
                                    <span className={cx('input-right')}>
                                        <div className={cx('upper')}>+</div>
                                        <div className={cx('lower')}>-</div>
                                    </span>
                                </div>

                                <Button primary bold>
                                    THÊM VÀO GIỎ HÀNG
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('row')}>
                    <div className={cx('tab-width-full')}>
                        <div className={cx('col l-12 m-12 c-12')}>
                            <div className={cx('header-decription')}>MÔ TẢ</div>
                        </div>

                        <div className={cx('col l-12 m-12 c-12')}>
                            <div className={cx('tab-float')}>
                                <div className={cx('tab-content')}>
                                    <div className={cx('rte')}>
                                        <p>NEEDS OF WISDOM®</p>
                                        <p>Streetwear</p>
                                        <p>Based in Saigon</p>
                                        <p>Made in Vietnam</p>
                                        <p>
                                            <strong>Hệ Thống Cửa Hàng</strong>
                                        </p>
                                        <p>- CN 1: 445 Sư Vạn Hạnh, P.12, Q.10&nbsp;</p>
                                        <p>- CN 2: 48 Trần Quang Diệu, P.14, Q.3</p>
                                        <p>- CN 3: 463 Quang Trung, P.10, Q. Gò Vấp</p>
                                        <p>- CN 4: 350 Điện Biên Phủ, P.17, Q. Bình Thạnh (GTOWN 1)</p>
                                        <p>- CN 5: 136 Nguyễn Hồng Đào, P14, Q. Tân Bình (GTOWN 2)</p>
                                        <p>- CN 6: TNP - 26 Lý Tự Trọng, P. Bến Nghé, Q.1.</p>
                                        <p>
                                            - CN 7: TNP (Sense Market) - Đối Diện Số 90 Lê Lai,&nbsp;P. Bến Nghé, Q.1.
                                        </p>
                                        <p>Viet Street Culture x Streetwear</p>
                                        <p>SIZE CHART</p>
                                        <p>
                                            <img
                                                alt=""
                                                data-thumb="original"
                                                original-height="1739"
                                                original-width="1812"
                                                src="//bizweb.dktcdn.net/100/318/614/files/tee-mo-i-4sz-8ec84e9b-e4d3-489e-8df7-e441fc36a4a2.jpg?v=1659346598014"
                                            />
                                        </p>
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

export default DetailProduct;
