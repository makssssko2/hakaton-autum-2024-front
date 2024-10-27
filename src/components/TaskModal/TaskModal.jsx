import Modal from "../Modal/Modal.jsx";
import TextEditor from "../Canban/components/TextEditor/TextEditor.jsx";
import Pencil from "../../assets/icons/Modal/Pencil.jsx";
import parse from 'html-react-parser';
import { useEffect, useState } from "react";
import Cross from "../../assets/icons/Modal/Cross.jsx";
import './TaskModal.scss';
import ModalStore from "../../store/ModalStore.js";

import TaskStore from "../../store/TaskStore.js";

const TaskModal = () => {
    const [showTitleChange, setShowTitleChange] = useState(false);
    const [prevValue, setPrevValue] = useState("");
    const [showDescChange, setShowDescChange] = useState(false);
    const [prevDesc, setPrevDesc] = useState("");
    const [showAuthorChange, setShowAuthorChange] = useState(false);
    const [prevAuthor, setPrevAuthor] = useState("");

    const toggleTitleChange = () => {
        setShowTitleChange(true);
    }
    const toggleDescChange = () => {
        
        setShowDescChange(true);
    }
    const toggleAuthorChange = () => {
        setShowAuthorChange(true);
    }
    useEffect(() => {
        setPrevValue(parse(taskData.name));
        setPrevDesc(parse(taskData.description));
        setPrevAuthor(parse(taskData.author));
    },[]);


    const closeHandler = () => {
        ModalStore.hideModal();
    }
    return (
        <Modal className={'TaskModal'}>
            <div className="TaskModal__head">

                <h2 className="TaskModal__title">{TaskStore.currentTask.name}</h2>

            {showTitleChange ? <TextEditor prevValue={TaskStore.currentTask.name} setPrevValue={setPrevValue} setShowTitleChange={setShowTitleChange}/> : 
                
            <div className="TaskModal__headWithPencil">
                <h2 className="TaskModal__title">{prevValue}</h2>
                <button onClick={toggleTitleChange}><Pencil /></button> 
            </div>
            }
                

                <nav className="TaskModal__nav">
                    <p className="TaskModal__createDate">{TaskStore.currentTask.createDate}</p>
                    <button onClick={closeHandler}><Cross /></button>
                </nav>
            </div>
            <div className="TaskModal__body">

                
                

                <button onClick={toggleDescChange}><Pencil /></button> 
                {showDescChange ? <TextEditor prevValue={TaskStore.currentTask.descryption} setPrevValue={setPrevDesc} setShowTitleChange={setShowDescChange}/> : 
                <p className="TaskModal__field">{parse(prevDesc)}</p>
                }
                <button onClick={toggleAuthorChange}><Pencil /></button> 
                {showAuthorChange ? <TextEditor prevValue={TaskStore.currentTask.employee || 'Не назначен исполнитель'} setPrevValue={setPrevAuthor} setShowTitleChange={setShowAuthorChange}/> : 
                <p className="TaskModal__field">{parse(prevAuthor)}</p>
                }

            </div>
            <div className="TaskModal__comments">
                {/* <TextEditor/> */}
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