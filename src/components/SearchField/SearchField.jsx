import {observer} from "mobx-react-lite";
import { useState } from "react";
import './SearchField.scss';
import axios from 'axios';
import { API_URL } from "../../constants/endpoints/endpointConst.js";
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

    const getFile = async () => {
        const url = API_URL + '/export-file/download';

        try {
            window.open(url, '_blank');
            setTimeout(() => window.URL.revokeObjectURL(url), 100);
        }
        catch (error) {
            console.error('Хуйня:', error);
          }
    }
        

    return(
        <div className='searchBlock'>
            <button onClick={getFile}>
                <UploadIcon/>
            </button>
            
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