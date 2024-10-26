import { makeAutoObservable, runInAction } from "mobx";

class TaskStore {
    filters;
    searchValue;
    canbanObj;
    constructor() {
        this.filters = {};
        this.searchValue = '';
        this.canbanObj = {};
        makeAutoObservable(this, {}, { autoBind: true });
    }

    setSearchValue(value) {
        runInAction(() => {
            this.searchValue = value;
        });
    }

    setFilters(value){
        runInAction(() => {
            this.filters = value;
        });
    }


}
export default new TaskStore();
