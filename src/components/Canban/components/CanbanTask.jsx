import '../Canban.scss';
const CanbanTask = ({...props}) => {
    const {
        name,
        id,
        priority,
        author
    } = props;

    return (
        <div className="Canban__task Canban-task">
            <h3 className="Canban-task__title">{name}</h3>
            <div className="Canban-task__footer">
                <button className="Canban-task__menu">
                    <div className="Canban-task__menu_line"/>
                </button>
                <p className="Canban-task__author">{author}</p>
            </div>
            <div className={`Canban-task__priority Canban-task__priority_${priority}`}/>
        </div>
    )
}

export default CanbanTask;