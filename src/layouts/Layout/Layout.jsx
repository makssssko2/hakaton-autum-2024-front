import './Layout.scss';
import TaskStore from "../../store/TaskStore.js";
const Layout = ({children,...props}) => {
    const {
        type,
        className,
    } = props;

    const onMouseMove = (e) => {
        if(!TaskStore.taskDragging) return;
        TaskStore.setDragPosition(e.clientX,e.clientY);
    }

    const onDrop = () => {
        if(TaskStore.taskDragging) {
            TaskStore.stopDrag();
        }
    }

    return (
        <div className={`Layout Layout_${type === 'wide' ? 'wide' : 'thin'} ${className}`}
             onMouseMove={onMouseMove}
             onMouseUp={onDrop}
             onCopy={() => false}
             onDragStart={() => false}
        >
            {children}
        </div>
    )
}

export default Layout;