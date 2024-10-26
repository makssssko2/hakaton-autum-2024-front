import { makeAutoObservable, runInAction } from "mobx";

class TaskStore {
    filter;
    searchValue;
    canbanObj;
    constructor() {
        this.filter = false;
        this.searchValue = '';
        this.canbanObj = {};
        makeAutoObservable(this, {}, { autoBind: true });
    }

    setSearchValue(value) {
        runInAction(() => {
            this.searchValue = value;
        })
    }


}
export default new TaskStore();
