import {observer} from "mobx-react-lite";
import '../Canban.scss';
import ModalStore from "../../../store/ModalStore.js";
const CanbanTask = ({...props}) => {
    const {
        name,
        id,
        priority,
        author
    } = props;

    const clickHandler = () => {
        ModalStore.showModal('task')
    }

    return (
        <div className="Canban__task Canban-task">
            <h3 className="Canban-task__title">{name}</h3>
            <div className="Canban-task__footer">
                <button className="Canban-task__menu" onClick={clickHandler}>
                    <div className="Canban-task__menu_line"/>
                </button>
                <p className="Canban-task__author">{author}</p>
            </div>
            <div className={`Canban-task__priority Canban-task__priority_${priority}`}/>
        </div>
    )
}

export default observer(CanbanTask);