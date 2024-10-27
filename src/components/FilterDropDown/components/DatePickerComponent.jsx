
import { DateRangePicker } from "rsuite";
import { observer } from "mobx-react-lite";
import TaskStore from "../../../store/TaskStore.js";

const DatePickerComponent = () => {
    const setDateRange = (e) => {
        TaskStore.setFilters({
            dateFilter: { date1: e[0], date2: e[1] },
        });
    }
    return(
        <DateRangePicker onOk={setDateRange} format="dd/MM/yyyy" character=" - "/>
    );
}
export default observer(DatePickerComponent);