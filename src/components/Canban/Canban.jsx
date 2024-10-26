import CanbanColumn from "./components/CanbanColumn.jsx";
import {tasksFinish,tasksWork,tasksBack} from "../../constants/Canban/mock-data.js";

const Canban = ({...props}) => {
    return (
        <div className="Canban">
            <CanbanColumn
                name={'Беклог'}
                tasks={tasksBack}
            />
            <CanbanColumn
                name={'В процессе'}
                tasks={tasksWork}
            />
            <CanbanColumn
                name={'Выполнено'}
                tasks={tasksFinish}
            />
        </div>
    )
}

export default Canban;