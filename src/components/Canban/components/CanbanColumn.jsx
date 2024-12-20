import { observer } from "mobx-react-lite";
import CanbanTask from "./CanbanTask.jsx";
import {valueFilter,dateFilter} from "../../../utils/Filters/index.js";
import TaskStore from "../../../store/TaskStore.js";
import ModalStore from "../../../store/ModalStore.js";
import LoaderStore from "../../../store/LoaderStore.js";
const CanbanColumn = ({...props}) => {
    const {
        tasks,
        name,
        addable
    } = props;

    const statements = {
        "Новые": "BACKLOG",
        "В процессе": "INBOX",
        "Завершенные": "COMPLETED"
    }

    const addHandler = () => {
        ModalStore.showModal('addTask');
    }

    const dropHandler = async () => {
        if(!TaskStore.taskDragging) return;
        LoaderStore.showLocalLoader();
        await TaskStore.changeStatement({id: TaskStore.taskDragging, statement: statements[name]});
        await TaskStore.getCanban()
        TaskStore.stopDrag();
        LoaderStore.hideLocalLoader();
    }

    return (
        <div className="Canban__column Canban-column" onMouseUp={dropHandler}>
            <div className="Canban-column__head">
                <h2 className="Canban-column__title">{name}</h2>
                {addable && <button className="Canban-column__add" onClick={addHandler}>+</button>}
            </div>
            <div className="Canban-column__content">
                {tasks
                    .filter((value) => valueFilter(value.name.toLowerCase(),TaskStore.searchValue.toLowerCase()))
                    .filter((value) =>
                        TaskStore.filters.employeeFilter && value.employee ?
                        valueFilter(value.employee.toLowerCase(),TaskStore.filters.employeeFilter.toLowerCase()) :
                        !TaskStore.filters.employeeFilter
                    )
                    .filter((value) =>
                        TaskStore.filters.dateFilter ?
                        dateFilter(value.createDate) :
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