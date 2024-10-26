import './SearchInput.scss';
import SearchIcon from '../../assets/icons/Header/SearchIcon';
const SearchInput = () => {

    return(
        <div className='SearchInput'>
            <div>
                <SearchIcon/>
                <input></input>
            </div>
        </div>
    );
}
export default SearchInput;