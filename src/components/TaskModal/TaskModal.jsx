import Modal from "../Modal/Modal.jsx";
import Cross from "../../assets/icons/Modal/Cross.jsx";
import './TaskModal.scss';
import ModalStore from "../../store/ModalStore.js";
import {taskData} from "../../constants/Canban/mock-data.js";

const TaskModal = () => {

    const closeHandler = () => {
        ModalStore.hideModal();
    }
    return (
        <Modal className={'TaskModal'}>
            <div className="TaskModal__head">
                <h2 className="TaskModal__title">{taskData.name}</h2>
                <nav className="TaskModal__nav">
                    <p className="TaskModal__createDate">{taskData.date}</p>
                    <button onClick={closeHandler}><Cross /></button>
                </nav>
            </div>
            <div className="TaskModal__body">
                <p className="TaskModal__field">{taskData.description}</p>
                <p className="TaskModal__field">{taskData.employee}</p>
            </div>
            <div className="TaskModal__comments">

            </div>
            <div className="TaskModal__footer">
                <nav className="TaskModal__nav">
                    <button className="Canban-task__menu">
                        <div className="Canban-task__menu_line"/>
                    </button>
                    <p className="TaskModal__text">Меню</p>
                </nav>
                <button className="TaskModal__button">Сохранить</button>
            </div>
        </Modal>
    )
}

export default TaskModal;