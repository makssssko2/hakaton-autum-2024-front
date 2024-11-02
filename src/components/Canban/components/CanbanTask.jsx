import {observer} from "mobx-react-lite";
import '../Canban.scss';
import ModalStore from "../../../store/ModalStore.js";
import LoaderStore from "../../../store/LoaderStore.js";
import TaskStore from "../../../store/TaskStore.js";
import taskStore from "../../../store/TaskStore.js";
import {runInAction} from "mobx";
const CanbanTask = ({...props}) => {
    const {
        name,
        id,
        priority,
        employee
    } = props;

    const dragHandler = (e) => {
        setTimeout(() => {
            if(TaskStore.taskClicked) TaskStore.setClicked(false);
            else {
                TaskStore.setDragPosition(e.clientX,e.clientY);
                runInAction(() => {
                    TaskStore.taskDragging = id;
                    console.log(TaskStore.taskDragging)
                })
            }
        },100)

    }

    const clickHandler = async () => {
        LoaderStore.showLocalLoader();
        TaskStore.setClicked(true);
        await TaskStore.getTask(id);
        TaskStore.currentTask.id = id;
        LoaderStore.hideLocalLoader();
        ModalStore.showModal('task');
    }

    return (
        <div style={TaskStore.taskDragging === id ? {top: taskStore.dragTaskY, left: taskStore.dragTaskX} : null}
             className={`Canban__task Canban-task ${TaskStore.taskDragging === id ? 'Canban-task_drag' : null}`}
             onMouseDown={dragHandler}
             onClick={clickHandler}
        >
            <h3 className="Canban-task__title">{name}</h3>
            <div className="Canban-task__footer">
                <button className="Canban-task__menu">
                    <div className="Canban-task__menu_line"/>
                </button>
                <p className="Canban-task__author">{employee || 'Не назначен'}</p>
            </div>
            <div className={`Canban-task__priority Canban-task__priority_${priority}`}/>
        </div>
    )
}

export default observer(CanbanTask);