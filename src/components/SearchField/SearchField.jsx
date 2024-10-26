import './SearchField.scss';
import Filter from '../../assets/icons/Header/Filter.jsx';
import ProfileIcon from '../../assets/icons/Header/ProfileIcon.jsx';
import SearchInput from '../SearchInput/SearchInput.jsx';
import UploadIcon from '../../assets/icons/Header/UploadIcon.jsx';
const SearchField = () => {
    return(
        <div className='searchBlock'>
            <UploadIcon/>
            <Filter/>
            <SearchInput/>
            <ProfileIcon/>
        </div>
    );
    
}
export default SearchField;