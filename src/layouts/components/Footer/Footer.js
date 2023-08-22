import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('top-footer')}>
                    <div className={cx('grid', 'wide')}>
                        <div className={cx('row')}>
                            <div className={cx('col l-2 l-o-3 m-2 m-o-1 c-12')}>
                                <h4>
                                    <span>Follow Us</span>
                                </h4>
                                <div className={cx('social')}>
                                    <a href="https://www.facebook.com/nowsaigon">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>

                                    <a href="https://www.instagram.com/nowsaigon">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </div>
                            </div>
                            <div className={cx('col l-2 m-3 c-12')}>
                                <h4>
                                    <span>About Us</span>
                                </h4>
                                <ul>
                                    <li>
                                        <a href="/gioi-thieu">Giới thiệu</a>
                                    </li>

                                    <li>
                                        <a href="/huong-dan">Hướng dẫn mua hàng</a>
                                    </li>

                                    <li>
                                        <a href="/chinh-sach-doi-tra-hang">Chính sách đổi trả hàng</a>
                                    </li>

                                    <li>
                                        <a href="/chinh-sach-giao-nhan">Chính sách giao - nhận</a>
                                    </li>

                                    <li>
                                        <a href="/chinh-sach-thanh-toan">Chính sách thanh toán</a>
                                    </li>

                                    <li>
                                        <a href="/dieu-khoan">Điều khoản sử dụng website</a>
                                    </li>

                                    <li>
                                        <a href="/chinh-sach">Bảo mật thông tin KH</a>
                                    </li>
                                </ul>
                            </div>

                            <div className={cx('col l-4 m-4 c-12')}>
                                <h4>
                                    <span>Contact Us</span>
                                </h4>
                                <div>
                                    <div className={cx('fot_contact_item')}>
                                        <span className={cx('icon-contact')}>
                                            <FontAwesomeIcon icon={faLocationDot} />
                                        </span>
                                        <p>Store I: 445 Sư Vạn Hạnh, P.12, Q.10.</p>
                                    </div>

                                    <div className={cx('fot_contact_item')}>
                                        <span className={cx('icon-contact')}>
                                            <FontAwesomeIcon icon={faLocationDot} />
                                        </span>
                                        <p>Store II: 48 Trần Quang Diệu, P.14, Q.3, TP.HCM</p>
                                    </div>

                                    <div className={cx('fot_contact_item')}>
                                        <span className={cx('icon-contact')}>
                                            <FontAwesomeIcon icon={faLocationDot} />
                                        </span>
                                        <p>Store III: 463 Quang Trung, P.10, Q.Gò Vấp, TP.HCM</p>
                                    </div>

                                    <div className={cx('fot_contact_item')}>
                                        <span className={cx('icon-contact')}>
                                            <FontAwesomeIcon icon={faLocationDot} />
                                        </span>
                                        <p>Store IV: G-Town 1, 350 Điện Biên Phủ, P.17, Q.Bình Thạnh, TP.HCM</p>
                                    </div>

                                    <div className={cx('fot_contact_item')}>
                                        <span className={cx('icon-contact')}>
                                            <FontAwesomeIcon icon={faLocationDot} />
                                        </span>
                                        <p>Store V: G-Town 2, 136 Nguyễn Hồng Đào, P.14, Q.Tân Bình, TP.HCM</p>
                                    </div>

                                    <div className={cx('fot_contact_item')}>
                                        <span className={cx('icon-contact')}>
                                            <FontAwesomeIcon icon={faLocationDot} />
                                        </span>
                                        <p>Store VI: TNP 26LTT - 26 Lý Tự Trọng, P.Bến Nghé, Q.1, TP.HCM</p>
                                    </div>

                                    <div className={cx('fot_contact_item')}>
                                        <span className={cx('icon-contact')}>
                                            <FontAwesomeIcon icon={faLocationDot} />
                                        </span>
                                        <p>
                                            Store VII: TNP - Sense Market, Đối diện số 90 Lê Lai, P.Bến Nghé, Q.1,
                                            TP.HCM.
                                        </p>
                                    </div>

                                    <div className={cx('fot_contact_item')}>
                                        <span className={cx('icon-contact')}>
                                            <FontAwesomeIcon icon={faPhone} />
                                        </span>
                                        <p>0933782768</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('bottom-fot')}>
                    <div className={cx('grid', 'wide')}>
                        <div className={cx('row')}>
                            <div className={cx('col l-12 m-12 c-12')}>
                                <div className={cx('copyright')}>
                                    <span>Needs Of Wisdom® All Rights Reserved. </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
