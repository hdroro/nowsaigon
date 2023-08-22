import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('wrapper')}>
            <form className={cx('input-group')}>
                <input name="query" placeholder="Tìm kiếm sản phẩm... " className={cx('search-text')} />

                <button className={cx('btn_search')}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        </div>
    );
}

export default Search;
