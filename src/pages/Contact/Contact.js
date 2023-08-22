import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('grid', 'wide')}>
            <div className={cx('row')}>
                <div className={cx('col l-12 m-12 c-12')}>
                    <h1 className={cx('title-head')}>
                        <Link to="/contact">Contact</Link>
                    </h1>

                    <div className={cx('content-page')}>
                        <div className={cx('content-top')}>
                            <p>• Hotline: 0933782768</p>
                            <p>• IG: @nowsaigon</p>
                            <p>• FB: fb.com/nowsaigon</p>
                            <p>• Store I: 445 Sư Vạn Hạnh, P.12, Q.10, TP.HCM.</p>
                            <p>• Store II: 48 Trần Quang Diệu, P.14, Q.3, TP.HCM.</p>
                            <p>• Store II: 48 Trần Quang Diệu, P.14, Q.3, TP.HCM.</p>
                            <p>• Store IV: G-Town 2, 136 Nguyễn Hồng Đào, P.14, Q.Tân Bình, TP.HCM.</p>
                            <p>• Store V: 463 Quang Trung, P.10, Q. Gò Vấp, TP.HCM.</p>
                            <p>• Store VI: TNP - 26 Lý Tự Trọng, P. Bến Nghé, Q.1, TP.HCM.</p>
                        </div>
                        <div className={cx('content-bottom')}>
                            <span>
                                <p>Công Ty TNHH Needs Of Wisdom/ Needs Of Wisdom Company Limited</p>
                            </span>
                            <span>
                                <p>Địa chỉ: 110 Trần Hưng Đạo,Phường 07, Quận 05, Tp.Hồ Chí Minh,Việt Nam</p>
                            </span>
                            <span>
                                <p>MST: 0314959862</p>
                            </span>
                            <span>
                                <p>Ngày cấp: 02-04-2018</p>
                            </span>
                            <span>
                                <p>Email: Needsofwisdom@nowsaigon.com</p>
                            </span>
                            <span>
                                <p>Số Hotline/CSKH: 0933782768</p>
                            </span>
                        </div>
                        <div className={cx('line')}>______________________</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
