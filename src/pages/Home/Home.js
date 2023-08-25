import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import ProductItem from '../../layouts/components/ProductItem/ProductItem';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col l-3 c-6 m-3')}>
                            <ProductItem />
                        </div>

                        <div className={cx('col l-3 c-6 m-3')}>
                            <ProductItem />
                        </div>

                        <div className={cx('col l-3 c-6 m-3')}>
                            <ProductItem />
                        </div>

                        <div className={cx('col l-3 c-6 m-3')}>
                            <ProductItem />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
