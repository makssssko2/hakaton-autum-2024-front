import './SearchInput.scss';
import { observer } from "mobx-react-lite";
import SearchIcon from '../../assets/icons/Header/SearchIcon';
import TaskStore from '../../store/TaskStore';
const SearchInput = () => {
    const search = (e) => {
        TaskStore.setSearchValue(e.target.value);
    }
    return(
        <div className='SearchInput'>
            <div>
                <SearchIcon/>
                <input onChange={search}></input>
            </div>
        </div>
    );
}
export default observer(SearchInput);