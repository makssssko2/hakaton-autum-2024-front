import { observer } from "mobx-react-lite";
import CanbanTask from "./CanbanTask.jsx";
import {valueFilter,dateFilter} from "../../../utils/Filters/index.js";
import TaskStore from "../../../store/TaskStore.js";
const CanbanColumn = ({...props}) => {
    const {
        tasks,
        name
    } = props;
    return (
        <div className="Canban__column Canban-column">
            <div className="Canban-column__head">
                <h2 className="Canban-column__title">{name}</h2>
                <button className="Canban-column__add">+</button>
            </div>
            <div className="Canban-column__content">
                {tasks
                    .filter((value) => valueFilter(value.name.toLowerCase(),TaskStore.searchValue.toLowerCase()))
                    .filter((value) =>
                        TaskStore.filters.employeeFilter ?
                        valueFilter(value.employee.toLowerCase(),TaskStore.filters.employeeFilter.toLowerCase()) :
                        true
                    )
                    .filter((value) =>
                        TaskStore.filters.dateFilter ?
                        dateFilter(value.date) :
                        true
                    )
                    .map((value,index) =>
                    <CanbanTask
                        name={value.name}
                        employee={value.employee}
                        priority={value.priority}
                        id={value.id}
                        key={index}
                    />
                )}
            </div>
        </div>
    )
}

export default observer(CanbanColumn);