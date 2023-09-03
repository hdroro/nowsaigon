import classNames from 'classnames/bind';
import styles from './ModalLogin.module.scss';
import ModalLoginRegister from '../ModalLoginRegister';
import Button from '../../../../components/Button/Button';

const cx = classNames.bind(styles);

function ModalLogin({ isShowing, hide, isCheck }) {
    console.log(isCheck);
    return (
        <ModalLoginRegister isShowing={isShowing}>
            <div className={cx('modal')}>
                <p>Đăng nhập tài khoản</p>
                <form method="post" action="/account/login">
                    <div className={cx('row')}>
                        <div className={cx('col l-12 m-12 c-12')}>
                            <input type="text" className={cx('input-control')} placeholder="Email" name="email" />
                        </div>
                        <div className={cx('col l-12 m-12 c-12')}>
                            <input
                                type="password"
                                className={cx('input-control')}
                                placeholder="Mật khẩu"
                                name="password"
                            />
                        </div>
                        <div className={cx('col l-12 m-12 c-12')}>
                            <Button primary>ĐĂNG NHẬP</Button>
                        </div>
                    </div>
                </form>

                <div className={cx('row')}>
                    <div className={cx('col l-12 m-12 c-12')}>
                        <div className={cx('more-log')}>
                            Nếu bạn chưa có tài khoản, vui lòng đăng ký{' '}
                            <span className={cx('register-form')}>tại đây</span>
                        </div>
                    </div>
                </div>
            </div>
        </ModalLoginRegister>
    );
}

export default ModalLogin;
