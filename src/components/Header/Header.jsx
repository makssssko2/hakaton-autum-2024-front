import './Header.scss';
import SearchField from '../SearchField/SearchField';

const Header = () => {
    return(
        <div className='headerBlock'>
            <h1>Разработка</h1>
            <SearchField/>
        </div>
    );
}

export default Header;