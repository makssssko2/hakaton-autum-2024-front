import { observer } from "mobx-react-lite";
import CanbanTask from "./CanbanTask.jsx";
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
                .filter((value) => value.name.toLowerCase().includes(TaskStore.searchValue.toLowerCase()))
                //.filter((value) => value.author.toLowerCase().includes(TaskStore.filters.filter2.toLowerCase()))
                /*const filteredData = data.filter(item => 
  item.date >= startDate && item.date <= endDate
); */
                .map((value,index) =>
                    <CanbanTask
                        name={value.name}
                        author={value.author}
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