import classNames from 'classnames/bind';
import styles from './ModalRegister.module.scss';
import ModalLoginRegister from '../ModalLoginRegister';
import Button from '../../../../components/Button/Button';

const cx = classNames.bind(styles);

function ModalLogin({ isShowing, hide }) {
    return (
        <ModalLoginRegister isShowing={isShowing}>
            <div className={cx('modal')}>
                <p>Đăng ký tài khoản</p>
                <form method="post" action="/account/register">
                    <div className={cx('row')}>
                        <div className={cx('col l-12 m-12 c-12')}>
                            <div className={cx('row')}>
                                <div className={cx('col l-6 m-6 c-6')}>
                                    <input
                                        type="text"
                                        className={cx('input-control')}
                                        placeholder="Họ tên"
                                        name="hoten"
                                    />
                                </div>
                                <div className={cx('col l-6 m-6 c-6')}>
                                    <input type="text" className={cx('input-control')} placeholder="Tên" name="name" />
                                </div>
                            </div>
                        </div>
                        <div className={cx('col l-12 m-12 c-12')}>
                            <div className={cx('row')}>
                                <div className={cx('col l-6 m-6 c-6')}>
                                    <input
                                        type="email"
                                        className={cx('input-control')}
                                        placeholder="Email"
                                        name="email"
                                    />
                                </div>

                                <div className={cx('col l-6 m-6 c-6')}>
                                    <input
                                        type="password"
                                        className={cx('input-control')}
                                        placeholder="Mật khẩu"
                                        name="password"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={cx('col l-12 m-12 c-12')}>
                            <Button primary>ĐĂNG KÝ</Button>
                        </div>
                    </div>
                </form>

                <div className={cx('row')}>
                    <div className={cx('col l-12 m-12 c-12')}>
                        <div className={cx('more-log')}>
                            Nếu bạn đã có tài khoản, vui lòng đăng nhập{' '}
                            <span className={cx('login-form')}>tại đây</span>
                        </div>
                    </div>
                </div>
            </div>
        </ModalLoginRegister>
    );
}

export default ModalLogin;
