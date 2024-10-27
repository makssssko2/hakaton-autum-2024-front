import TaskStore from "../../store/TaskStore.js";

const dateFilter = (value) => {
    const [day, month, year] = value.split('.').map(Number);
    const date = new Date(year, month - 1, day); // месяц в JavaScript начинается с 0, поэтому вычитаем 1
    return date >= TaskStore.filters.dateFilter.date1 && date <= TaskStore.filters.dateFilter.date2;
}

const valueFilter = (value,valueToCompare) => {
    return value.includes(valueToCompare)
}


export {dateFilter,valueFilter}