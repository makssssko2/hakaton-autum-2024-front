import DatePickerComponent from './DatePickerComponent';
import { Input } from 'rsuite';
import './FilterDropDown.scss';
const FilterDropDown = ({...props}) => {
    const {
        isActive
    } = props;
    return(
        <div className={isActive ? 'FilterDropDownDiv' : 'FilterDropDownDiv hidden'}>
            <div className='FilterDropDownDiv__list'>
                <p>Выберите период:</p>
                <DatePickerComponent/>
                <p>Выберите ответственного:</p>
                <Input/>
            </div>
        </div>
    );
}
export default FilterDropDown;