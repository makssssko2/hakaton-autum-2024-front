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
            this.filters = {...this.filters,...value};
        });
        console.log(JSON.stringify(this.filters));
    }


}
export default new TaskStore();
