import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import ReactDOM from 'react-dom';
import Button from '../../../components/Button/Button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function Modal({ isShowing, hide }) {
    const slickSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: (
            <div>
                <div className={cx('next-slick-arrow')}> ⫸ </div>
            </div>
        ),
        prevArrow: (
            <div>
                <div className={cx('prev-slick-arrow')}> ⫷ </div>
            </div>
        ),
    };

    const [currentImage, setCurrentImage] = useState(
        'https://bizweb.dktcdn.net/100/318/614/products/mt-2.jpg?v=1692784174187',
    );

    const handleChangeImg = (event) => {
        const newImageUrl = event.target.src;
        if (newImageUrl) {
            setCurrentImage(newImageUrl);
        }
    };

    const [value, setValue] = useState(1);
    const handleUp = () => {
        setValue(value + 1);
    };

    const handleDown = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    };
    useEffect(() => {
        // Chỉ xử lý sự kiện click bên ngoài modal khi modal được hiển thị
        if (isShowing) {
            const handleOutsideClick = (e) => {
                if (e.target.classList.contains(cx('modal-wrapper'))) {
                    hide();
                }
            };

            // Thêm event listener cho sự kiện click
            document.addEventListener('click', handleOutsideClick);

            return () => {
                // Loại bỏ event listener khi component unmount
                document.removeEventListener('click', handleOutsideClick);
            };
        }
    }, [isShowing, hide]);
    return isShowing
        ? ReactDOM.createPortal(
              <div className={cx('modal-wrapper')} aria-modal aria-hidden tabIndex={-1} role="dialog">
                  <div className={cx('modal')}>
                      <div className={cx('grid', 'wide')}>
                          <div className={cx('col l-12 m-0 c-0')}>
                              <div className={cx('row')}>
                                  <div className={cx('col l-5 m-0 c-0')}>
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
                                              <Slider {...slickSettings}>
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
                                              </Slider>
                                          </div>
                                      </div>
                                  </div>

                                  <div className={cx('col l-7 m-0 c-0')}>
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
                                          <a href="/line-boxy-raglan-tee-cream" className={cx('view-more')}>
                                              Xem chi tiết
                                          </a>
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

                                      <div className={cx('quantity-wanted-p')}>
                                          <div className={cx('input-number-product')}>
                                              <input className={cx('input-left')} value={value} />
                                              <span className={cx('input-right')}>
                                                  <div className={cx('upper')} onClick={handleUp}>
                                                      +
                                                  </div>
                                                  <div className={cx('lower')} onClick={handleDown}>
                                                      -
                                                  </div>
                                              </span>
                                          </div>

                                          <Button primary bold>
                                              THÊM VÀO GIỎ HÀNG
                                          </Button>
                                      </div>
                                  </div>

                                  <button
                                      type="button"
                                      className={cx('modal-close-button')}
                                      data-dismiss="modal"
                                      aria-label="Close"
                                      onClick={hide}
                                  >
                                      <span aria-hidden="true">×</span>
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>,
              document.body,
          )
        : null;
}

export default Modal;
