import classNames from 'classnames/bind';
import styles from './ModalLoginRegister.module.scss';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function ModalLoginRegister({ isShowing, hide, children }) {
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
                  <div className={cx('modal')}>{children}</div>
              </div>,
              document.body,
          )
        : null;
}

export default ModalLoginRegister;
