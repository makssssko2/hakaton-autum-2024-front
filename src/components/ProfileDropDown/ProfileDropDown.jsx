import Pencil from '../../assets/icons/Modal/Pencil';
import './ProfileDropDown.scss';
const ProfileDropDown = ({...props}) => {
    const {
        isActive
    } = props;
    return(
        <div className={isActive ? 'ProfileDropDownDiv' : 'ProfileDropDownDiv hidden'}>
            
                <div className='elements'>
                    <div className='flex-elems'><h3>Запара Иван Александрыч</h3> <Pencil/></div>
                    <div className='flex-elems'><h3>Роль: Иван Православный</h3> <Pencil/> </div>
                </div>
                
                <div className='profile-pic'><img src='src/assets/images/ivanNotFound.png'/><h6>uuid: </h6></div>
            
        </div>
    );
}
export default ProfileDropDown;