import DatePickerComponent from './components/DatePickerComponent.jsx';
import { Input } from 'rsuite';
import { observer } from "mobx-react-lite";
import './FilterDropDown.scss';
import TaskStore from '../../store/TaskStore';
const FilterDropDown = ({...props}) => {
    const {
        isActive
    } = props;
    const onChange = (value) => {
        TaskStore.setFilters({
            employeeFilter: value
        });
    }
    return(
        <div className={isActive ? 'FilterDropDownDiv' : 'FilterDropDownDiv hidden'}>
            <div className='FilterDropDownDiv__list'>
                <p>Выберите период:</p>
                <DatePickerComponent />
                <p>Выберите ответственного:</p>
                <Input onChange={onChange}/>
            </div>
        </div>
    );
}
export default observer(FilterDropDown);