import classNames from 'classnames/bind';
import styles from './ModalLoginRegister.module.scss';
import ReactDOM from 'react-dom';

const cx = classNames.bind(styles);

function ModalLoginRegister({ isShowing, hide, children }) {
    return isShowing
        ? ReactDOM.createPortal(
              <div>
                  <div className={cx('modal-wrapper')} aria-modal aria-hidden tabIndex={-1} role="dialog">
                      <div className={cx('modal')}>{children}</div>
                  </div>
              </div>,
              document.body,
          )
        : null;
}

export default ModalLoginRegister;
