
import { DateRangePicker } from "rsuite";

const DatePickerComponent = () => {
    const ivan = (e) => {
        console.log(e[0]);
    }
    return(
        <DateRangePicker onOk={ivan} format="dd/MM/yyyy" character=" - "/>
    );
}
export default DatePickerComponent;