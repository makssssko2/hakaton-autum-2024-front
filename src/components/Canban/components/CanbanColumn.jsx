import CanbanTask from "./CanbanTask.jsx";

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
                {tasks.map((value,index) =>
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

export default CanbanColumn;