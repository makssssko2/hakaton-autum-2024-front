import DatePickerComponent from './DatePickerComponent';
import { Input } from 'rsuite';
import { observer } from "mobx-react-lite";
import './FilterDropDown.scss';
import TaskStore from '../../store/TaskStore';
const FilterDropDown = ({...props}) => {
    const {
        isActive
    } = props;
    const setResponsible = (e) => {
        
        TaskStore.setFilters({
            filter2: e
        });
        console.log(TaskStore.filters);
    }
    return(
        <div className={isActive ? 'FilterDropDownDiv' : 'FilterDropDownDiv hidden'}>
            <div className='FilterDropDownDiv__list'>
                <p>Выберите период:</p>
                <DatePickerComponent />
                <p>Выберите ответственного:</p>
                <Input onChange={setResponsible}/>
            </div>
        </div>
    );
}
export default observer(FilterDropDown);