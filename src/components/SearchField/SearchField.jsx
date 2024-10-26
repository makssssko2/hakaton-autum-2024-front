import {observer} from "mobx-react-lite";
import { useState } from "react";
import './SearchField.scss';
import Filter from '../../assets/icons/Header/Filter.jsx';
import ProfileIcon from '../../assets/icons/Header/ProfileIcon.jsx';
import SearchInput from '../SearchInput/SearchInput.jsx';
import UploadIcon from '../../assets/icons/Header/UploadIcon.jsx';
import AuthStore from "../../store/AuthStore.js";
import LoaderStore from "../../store/LoaderStore.js";
import FilterDropDown from "../FilterDropDown/FilterDropDown.jsx";
const SearchField = () => {

    const [isDropDownActive, setDropDownActive] = useState(false);
    const clickHandler = async () => {
        LoaderStore.showLocalLoader();
        await AuthStore.logout();
        LoaderStore.hideLocalLoader();
    }

    const toggleDropDown = () => {
        setDropDownActive(prevState => !prevState);
    }

    return(
        <div className='searchBlock'>
            <UploadIcon/>
            <button onClick={toggleDropDown}>
                <Filter/>
            </button>
            <FilterDropDown isActive={isDropDownActive} />
            <SearchInput/>
            <button onClick={clickHandler}>
                <ProfileIcon/>
            </button>
        </div>
    );
    
}
export default observer(SearchField);