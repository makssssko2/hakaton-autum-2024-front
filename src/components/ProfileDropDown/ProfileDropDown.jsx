import Pencil from '../../assets/icons/Modal/Pencil';
import './ProfileDropDown.scss';
import ProfileStore from '../../store/ProfileStore';
import Checkmark from '../../assets/icons/Modal/Checkmark';
import { useEffect, useState } from 'react';
import { Input } from 'rsuite';
const ProfileDropDown = ({...props}) => {
    const {
        isActive
    } = props;
    const [nameValue, setNameValue] = useState(ProfileStore.userData.name);
    const [showNameChange, setShowNameChange] = useState(false);
    const [posValue, setPosValue] = useState(ProfileStore.userData.position);
    const [showPositionChange, setShowPositionChange] = useState(false);
    const changeName = () => {
        ProfileStore.editName({name: { name: nameValue}});
        toggleSetShowNameChange();
    }
    const changePosition = () => {
        ProfileStore.editPosition({position: { position: posValue}});
        toggleSetShowPositionChange();
    }
    const toggleSetShowNameChange = () => {
        setShowNameChange(prevState => !prevState);
    }
    const toggleSetShowPositionChange = () => {
        setShowPositionChange(prevState => !prevState);
    }
    useEffect(() => {
        async function fetch() {
            await ProfileStore.getProfile();
        }
        fetch();
    }, []);

    return(
        <div className={isActive ? 'ProfileDropDownDiv' : 'ProfileDropDownDiv hidden'}>
            
                <div className='elements'>
                    <div className='flex-elems'>{showNameChange ? <div className='prof-name'><Input value={nameValue} onChange={setNameValue}/> <button onClick={changeName}><Checkmark/></button> </div>: <h3>{nameValue}</h3>} <button onClick={toggleSetShowNameChange}><Pencil/></button></div>
                    <div className='flex-elems'><h3>Должность: {showPositionChange ? <div className='prof-name'><Input value={posValue} onChange={setPosValue}/> <button onClick={changePosition}><Checkmark/></button> </div>: <h3>{posValue}</h3>}</h3> <button onClick={toggleSetShowPositionChange}><Pencil/></button> </div>
                </div>
                
                <div className='profile-pic'><img src='src/assets/images/ivanNotFound.png'/><h6>uuid: {ProfileStore.userData.id}</h6></div>
            
        </div>
    );
}
export default ProfileDropDown;