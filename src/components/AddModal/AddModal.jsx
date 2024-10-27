import Modal from "/src/components/Modal/Modal.jsx";
import './AddModal.scss';
import Cross from "/src/assets/icons/Modal/Cross.jsx";
import '/src/components/TaskModal/TaskModal.scss';
import '/src/components/AddModal/AddModal.scss';
import ModalStore from "/src/store/ModalStore.js";
import {useInput} from "../../hooks/authHooks.js";
import Input from "../Input/Input.jsx";
import LoaderStore from "../../store/LoaderStore.js";
import TaskStore from "../../store/TaskStore.js";

const AddModal = () => {
    const name = useInput('',{isEmpty: true,maxLength: 30,cyrillicError: true});
    const description = useInput('',{isEmpty: true,maxLength: 40, cyrillicError: true});


    const closeHandler = () => {
        ModalStore.hideModal();
    }

    const submitHandler = (inputs) => {
        let correctFlag = true;
        for(let input in inputs) {
            inputs[input].onBlur();
            correctFlag = inputs[input].correct ? correctFlag && true : false;
        }
        if(!correctFlag) return;
        LoaderStore.showLocalLoader();
        TaskStore.createTask({name: name.value,description: description.value});
        ModalStore.hideModal();
        TaskStore.getCanban();
        LoaderStore.hideLocalLoader();
    }
    return (
        <Modal className={'AddModal'}>
            <div className="TaskModal__head">
                <h2 className="TaskModal__title">Создание задачи</h2>
                <button onClick={closeHandler}><Cross/></button>
            </div>
            <div className="TaskModal__body">
                <form className="AddModal__form">
                    <Input className="AuthForm__input" name="name" type='text' input={name}>Название задачи</Input>
                    <Input className="AuthForm__input" name="description" type={'text'} input={description}>Описание задачи</Input>
                </form>
            </div>
            <div className="TaskModal__footer">
                <button className="TaskModal__button" onClick={() => submitHandler({name,description})}>Создать</button>
            </div>
        </Modal>
    )
}

export default AddModal;