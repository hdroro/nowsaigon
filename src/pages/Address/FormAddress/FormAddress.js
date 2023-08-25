import classNames from 'classnames/bind';
import styles from './FormAddress.module.scss';
import Button from '../../../components/Button/Button';

const cx = classNames.bind(styles);

function FormAddress({ text }) {
    return (
        <div className={cx('add-address')}>
            <form action="/account/addresses">
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col l-12 m-12 c-12')}>
                            <div className={cx('form-group')}>
                                <label>Tên*</label>
                                <input
                                    type="text"
                                    className={cx('form-control')}
                                    placeholder="Nhập tên của bạn"
                                ></input>
                            </div>
                        </div>

                        <div className={cx('col l-12 m-12 c-12')}>
                            <div className={cx('form-group')}>
                                <label>Họ*</label>
                                <input type="text" className={cx('form-control')} placeholder="Nhập họ của bạn"></input>
                            </div>
                        </div>

                        <div className={cx('col l-12 m-12 c-12')}>
                            <div className={cx('form-group')}>
                                <label>Công ty</label>
                                <input
                                    type="text"
                                    className={cx('form-control')}
                                    placeholder="Nhập công ty của bạn"
                                ></input>
                            </div>
                        </div>

                        <div className={cx('col l-12 m-12 c-12')}>
                            <div className={cx('form-group')}>
                                <label>Địa chỉ*</label>
                                <input
                                    type="text"
                                    className={cx('form-control')}
                                    placeholder="Nhập địa chỉ của bạn"
                                ></input>
                            </div>
                        </div>

                        <div className={cx('col l-12 m-12 c-12')}>
                            <div className={cx('form-group')}>
                                <label>Địa chỉ 2</label>
                                <input
                                    type="text"
                                    className={cx('form-control')}
                                    placeholder="Nhập địa chỉ của bạn"
                                ></input>
                            </div>
                        </div>

                        <div className={cx('col l-12 m-12 c-12')}>
                            <div className={cx('form-group')}>
                                <label>Thành phố*</label>
                                <input
                                    type="text"
                                    className={cx('form-control')}
                                    placeholder="Nhập thành phố của bạn"
                                ></input>
                            </div>
                        </div>

                        <div className={cx('col l-12 m-12 c-12')}>
                            <div className={cx('form-group')}>
                                <label>Quốc gia*</label>
                                <select>
                                    <option value="Abkhazia">Abkhazia</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Vietnam">Vietnam</option>
                                </select>
                            </div>
                        </div>

                        <div className={cx('col l-12 m-12 c-12')}>
                            <div className={cx('form-group')}>
                                <label>Số điện thoại*</label>
                                <input
                                    type="number"
                                    className={cx('form-control')}
                                    placeholder="Nhập số điện thoại của bạn"
                                ></input>
                            </div>
                        </div>

                        <div className={cx('col l-12 m-12 c-12')}>
                            <div className={cx('checkbox-input')}>
                                <input type="checkbox" value={true}></input>
                                <span className={cx('text-query')}>Đặt là địa chỉ mặc định?</span>
                            </div>
                        </div>

                        <div className={cx('col l-12 m-12 c-12')}>
                            <div className={cx('btn-group')}>
                                <Button primary>{text}</Button>
                                <Button primary small>
                                    Hủy
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormAddress;
