import {observer} from "mobx-react-lite";
import { useState } from "react";
import './SearchField.scss';
import { API_URL } from "../../constants/endpoints/endpointConst.js";
import Filter from '../../assets/icons/Header/Filter.jsx';
import ProfileIcon from '../../assets/icons/Header/ProfileIcon.jsx';
import SearchInput from '../SearchInput/SearchInput.jsx';
import UploadIcon from '../../assets/icons/Header/UploadIcon.jsx';
import FilterDropDown from "../FilterDropDown/FilterDropDown.jsx";
import ProfileDropDown from "../ProfileDropDown/ProfileDropDown.jsx";

const SearchField = () => {
    
    const [isDropDownActive, setDropDownActive] = useState(false);
    const [isProfileDropDownActive, setProfileDropDownActive] = useState(false);
    const toggleProfileDropDown = () => {
        setProfileDropDownActive(prevState => !prevState)
        // LoaderStore.showLocalLoader();
        // await AuthStore.logout();
        // LoaderStore.hideLocalLoader();
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
            <button onClick={toggleProfileDropDown}>
                <ProfileIcon/>
            </button>
            <ProfileDropDown isActive={isProfileDropDownActive}/>
        </div>
    );
    
}
export default SearchField;