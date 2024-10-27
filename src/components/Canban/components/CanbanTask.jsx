import {observer} from "mobx-react-lite";
import '../Canban.scss';
import ModalStore from "../../../store/ModalStore.js";
import {useState} from "react";
import LoaderStore from "../../../store/LoaderStore.js";
import TaskStore from "../../../store/TaskStore.js";
const CanbanTask = ({...props}) => {
    const [drag,setDrag] = useState(false);
    const {
        name,
        id,
        priority,
        employee
    } = props;

    const clickHandler = async () => {
        LoaderStore.showLocalLoader();
        await TaskStore.getTask(id);
        LoaderStore.hideLocalLoader();
        ModalStore.showModal('task');
    }

    return (
        <div className={`Canban__task Canban-task`}>
            <h3 className="Canban-task__title">{name}</h3>
            <div className="Canban-task__footer">
                <button className="Canban-task__menu" onClick={clickHandler}>
                    <div className="Canban-task__menu_line"/>
                </button>
                <p className="Canban-task__author">{employee || 'Не назначен'}</p>
            </div>
            <div className={`Canban-task__priority Canban-task__priority_${priority}`}/>
        </div>
    )
}

export default observer(CanbanTask);