import {observer} from "mobx-react-lite";
import CanbanColumn from "./components/CanbanColumn.jsx";
import {useEffect} from "react";
import LoaderStore from "../../store/LoaderStore.js";
import TaskStore from "../../store/TaskStore.js";
import ModalStore from "../../store/ModalStore.js";

const Canban = () => {
    useEffect(() => {
        if(ModalStore.isOpen) return;
        console.log(222222)
        async function fetch() {
            LoaderStore.showLocalLoader();
            await TaskStore.getCanban();
            LoaderStore.hideLocalLoader();
        }
        fetch();
    }, [ModalStore.isOpen])


    return (
        <div className="Canban">
            {Object.keys(TaskStore.canbanObj).length && TaskStore.canbanObj.map(
                (value,index) => <CanbanColumn
                    name={value.columnName}
                    tasks={value.tasks}
                    addable={index === 0}
                    key={index}
                />
            )}
        </div>
    )
}

export default observer(Canban);