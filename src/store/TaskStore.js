import { makeAutoObservable, runInAction } from "mobx";
import api from "../services/axios/api.js";
import {CANBAN_GET} from "../constants/endpoints/endpointConst.js";

class TaskStore {
    filters;
    searchValue;
    canbanObj;
    currentTask;
    taskDragging;
    constructor() {
        this.filters = {};
        this.searchValue = '';
        this.canbanObj = {};
        this.currentTask = {};
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

    async getCanban() {
        const response = await api.get(CANBAN_GET);
        runInAction(() => {
            this.canbanObj = response.data;
        })
    }

    async getTask(id) {
        const response = await api.get(`${CANBAN_GET}${id}`);
        runInAction(() => {
            this.currentTask = response.data;
        })
        console.log(JSON.stringify(this.currentTask));
    }


}
export default new TaskStore();
