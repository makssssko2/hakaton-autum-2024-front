import {observer} from "mobx-react-lite";
import './SearchField.scss';
import Filter from '../../assets/icons/Header/Filter.jsx';
import ProfileIcon from '../../assets/icons/Header/ProfileIcon.jsx';
import SearchInput from '../SearchInput/SearchInput.jsx';
import UploadIcon from '../../assets/icons/Header/UploadIcon.jsx';
import AuthStore from "../../store/AuthStore.js";
import LoaderStore from "../../store/LoaderStore.js";
const SearchField = () => {

    const clickHandler = async () => {
        LoaderStore.showLocalLoader();
        await AuthStore.logout();
        LoaderStore.hideLocalLoader();
    }

    return(
        <div className='searchBlock'>
            <UploadIcon/>
            <Filter/>
            <SearchInput/>
            <button onClick={clickHandler}>
                <ProfileIcon/>
            </button>
        </div>
    );
    
}
export default observer(SearchField);