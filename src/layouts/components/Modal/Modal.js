import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import ReactDOM from 'react-dom';
import Button from '../../../components/Button/Button';

const cx = classNames.bind(styles);

function Modal({ isShowing, hide }) {
    return isShowing
        ? ReactDOM.createPortal(
              <div>
                  <div className={cx('modal-wrapper')} aria-modal aria-hidden tabIndex={-1} role="dialog">
                      <div className={cx('modal')}>
                          <div className={cx('grid', 'wide')}>
                              <div className={cx('col l-12 m-0 c-0')}>
                                  <div className={cx('row')}>
                                      <div className={cx('col l-5 m-0 c-0')}>
                                          <div className={cx('product-left')}>
                                              <div className={cx('view-full-size')}>
                                                  <a className={cx('img-product')} href="/">
                                                      <img
                                                          className={cx('product-featured-image-quickview')}
                                                          src="https://bizweb.dktcdn.net/100/318/614/products/mt-2.jpg?v=1692784174187"
                                                          alt="quickview"
                                                      />
                                                  </a>
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
                  </div>
              </div>,
              document.body,
          )
        : null;
}

export default Modal;
