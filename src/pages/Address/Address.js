import classNames from 'classnames/bind';
import styles from './Address.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import FormAddress from './FormAddress/FormAddress';
import Button from '../../components/Button/Button';

const cx = classNames.bind(styles);

function Address() {
    const [show, setShow] = useState(false);
    const [update, setUpdate] = useState(false);

    const handleShow = () => {
        setShow(!show);
    };

    const handleUpdate = () => {
        setUpdate(!update);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('address-page')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('col l-12 m-12 c-12')}>
                        <div className={cx('head-title')}>
                            <h1 className={cx('title-head')}>Địa chỉ của bạn </h1>
                            <Link className={cx('back-account')} to="/account">
                                <FontAwesomeIcon className={cx('icon-arrow-left')} icon={faArrowLeft} />
                                Trang tài khoản
                            </Link>
                        </div>
                    </div>

                    <div className={cx('col l-12 m-12 c-12')}>
                        <div className={cx('btn-add-addresses')}>
                            <Button primary onClick={handleShow}>
                                + Thêm địa chỉ
                            </Button>
                        </div>
                    </div>

                    {show && <FormAddress text="Thêm địa chỉ" />}

                    <div className={cx('total-addresses')}>
                        <div className={cx('grid', 'wide')}>
                            <div className={cx('row')}>
                                <div className={cx('col l-6 m-6 c-6')}>
                                    <div className={cx('address-info')}>
                                        <p>
                                            <strong>Tên tài khoản:</strong> Diễm Nguyễn Thị
                                            <small>(Địa chỉ mặc định)</small>
                                        </p>
                                        <p>
                                            <strong>Công ty:</strong>{' '}
                                        </p>
                                        <p>
                                            <strong>Địa chỉ: </strong>
                                            60, Ngô Sĩ Liên, Đà Nẵng, Vietnam
                                        </p>
                                        <p>
                                            <strong>Quốc tịch:</strong> Vietnam
                                        </p>
                                        <p>
                                            <strong>Số điện thoại:</strong> 0353905691
                                        </p>
                                    </div>

                                    <div className={cx('btn-update-address')}>
                                        <p className={cx('btn-row')}>
                                            <Button primary onClick={handleUpdate}>
                                                Chỉnh sửa địa chỉ
                                            </Button>
                                        </p>
                                    </div>
                                </div>

                                <div className={cx('col l-6 m-6 c-6')}>
                                    <div className={cx('address-update-form')}>
                                        {update && <FormAddress text="Cập nhật địa chỉ" />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Address;
