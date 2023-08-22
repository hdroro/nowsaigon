import classNames from 'classnames/bind';
import styles from './Account.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faHome, faLocationDot, faMobile, faPlane } from '@fortawesome/free-solid-svg-icons';
import { faYelp } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Account() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('col l-12 m-12 c-12')}>
                    <div className={cx('row')}>
                        <div className={cx('col l-9 m-12 c-12')}>
                            <div className={cx('title-head')}>
                                <h1 className={cx('title')}>
                                    <span className={cx('title-content ')}>Trang khách hàng</span>
                                </h1>
                            </div>
                            <div className={cx('account-name')}>
                                <strong>
                                    Xin chào, <a href="/account/address">Diễm Nguyễn Thị </a>!
                                </strong>
                            </div>
                            <div className={cx('col l-12 m-12 c-12')}>
                                <table className={cx('table-cart')}>
                                    <thead className={cx('thead-default')}>
                                        <tr>
                                            <th>Đơn hàng</th>
                                            <th>Ngày</th>
                                            <th>Chuyển đến</th>
                                            <th>Địa chỉ</th>
                                            <th>Giá trị đơn hàng</th>
                                            <th>Tình trạng thanh toán</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className={cx('content-table')} colSpan="6">
                                                <p>Không có đơn hàng nào.</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className={cx('col l-3 m-12 c-12')}>
                            <div className={cx('block-account')}>
                                <div className={cx('block-title-account')}>
                                    <h5>Tài khoản của tôi</h5>
                                </div>

                                <div className={cx('block-content')}>
                                    <p>
                                        Tên tài khoản: <strong> Diễm Nguyễn Thị!</strong>
                                    </p>
                                    <p>
                                        <FontAwesomeIcon className={cx('icon-account')} icon={faHome} />{' '}
                                        <span>Địa chỉ: </span>
                                    </p>
                                    <p>
                                        <FontAwesomeIcon className={cx('icon-account')} icon={faMobile} />
                                        <span>Điện thoại: </span>
                                    </p>
                                    <p>
                                        <FontAwesomeIcon className={cx('icon-account')} icon={faLocationDot} />
                                        <span> Địa chỉ 1: </span>
                                    </p>

                                    <p>
                                        <FontAwesomeIcon className={cx('icon-account')} icon={faYelp} />
                                        <span> Công ty: </span>
                                    </p>

                                    <p>
                                        <FontAwesomeIcon className={cx('icon-account')} icon={faPlane} />
                                        <span> Quốc gia :</span>
                                    </p>
                                    <p>
                                        <FontAwesomeIcon className={cx('icon-account')} icon={faCode} />
                                        <span> Zip code: </span>
                                    </p>

                                    <p>
                                        <a href="/account/addresses" className={cx('btn-readmore')}>
                                            Sổ địa chỉ 0
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
