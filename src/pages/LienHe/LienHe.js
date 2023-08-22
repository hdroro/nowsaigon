import classNames from 'classnames/bind';
import styles from './LienHe.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function LienHe() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col l-12 m-12 c-12')}>
                        <h1 className={cx('title-head')}>NOWSAIGON</h1>

                        <ul className={cx('content-page')}>
                            <li>
                                <span className={cx('block_fonticon')}>
                                    <FontAwesomeIcon className={cx('icon-li')} icon={faLocationDot} />
                                </span>
                                <span>Store I: 445 Sư Vạn Hạnh, P.12, Q.10</span>
                            </li>

                            <li>
                                <span className={cx('block_fonticon')}>
                                    <FontAwesomeIcon className={cx('icon-li')} icon={faLocationDot} />
                                </span>
                                <span>Store II: 118/47 Trần Quang Diệu, P.14, Q.3</span>
                            </li>

                            <li>
                                <span className={cx('block_fonticon')}>
                                    <FontAwesomeIcon className={cx('icon-li')} icon={faLocationDot} />
                                </span>
                                <span>Store III: 350 Điện Biên Phủ, P.17, Q. Bình Thạnh</span>
                            </li>

                            <li>
                                <span className={cx('block_fonticon')}>
                                    <FontAwesomeIcon className={cx('icon-li')} icon={faLocationDot} />
                                </span>
                                <span>Store IV: G-Town 1, 350 Điện Biên Phủ, P.17, Q.Bình Thạnh, TP.HCM</span>
                            </li>

                            <li>
                                <span className={cx('block_fonticon')}>
                                    <FontAwesomeIcon className={cx('icon-li')} icon={faLocationDot} />
                                </span>
                                <span>Store V: G-Town 2, 136 Nguyễn Hồng Đào, P.14, Q.Tân Bình, TP.HCM</span>
                            </li>

                            <li>
                                <span className={cx('block_fonticon')}>
                                    <FontAwesomeIcon className={cx('icon-li')} icon={faLocationDot} />
                                </span>
                                <span>Store VI: TNP 26LTT - 26 Lý Tự Trọng, P.Bến Nghé, Q.1, TP.HCM</span>
                            </li>

                            <li>
                                <span className={cx('block_fonticon')}>
                                    <FontAwesomeIcon className={cx('icon-li')} icon={faLocationDot} />
                                </span>
                                <span>
                                    Store VII: TNP - Sense Market, Đối diện số 90 Lê Lai, P.Bến Nghé, Q.1, TP.HCM.
                                </span>
                            </li>

                            <li>
                                <span className={cx('block_fonticon')}>
                                    <FontAwesomeIcon className={cx('icon-li')} icon={faLocationDot} />
                                </span>
                                <span>
                                    Biên Hoà: Vincom Biên Hoà - Shop House, PG2-06, 1096 Phạm Văn Thuận, Tân Mai, Biên
                                    Hoà.
                                </span>
                            </li>

                            <li>
                                <span className={cx('block_fonticon')}>
                                    <FontAwesomeIcon className={cx('icon-li')} icon={faLocationDot} />
                                </span>
                                <span>
                                    Cần Thơ: Vincom Xuân Khánh - Shop House, PG2-08, Đường 30 tháng 4, Xuân Khánh, Cần
                                    Thơ.
                                </span>
                            </li>

                            <li>
                                <span className={cx('block_fonticon')}>
                                    <FontAwesomeIcon className={cx('icon-li')} icon={faMobile} />
                                </span>
                                <span>
                                    Hotline: <span className={cx('phone-number')}>0933.782.768</span>
                                </span>
                            </li>

                            <li>
                                <span className={cx('block_fonticon')}>
                                    <FontAwesomeIcon className={cx('icon-li')} icon={faInstagram} />
                                </span>
                                <span>Instagram: @nowsaigon</span>
                            </li>

                            <li>
                                <span className={cx('block_fonticon')}>
                                    <FontAwesomeIcon className={cx('icon-li')} icon={faFacebook} />
                                </span>
                                <span>Facebook: facebook.com/nowsaigon</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LienHe;
