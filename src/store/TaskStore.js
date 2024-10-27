import { makeAutoObservable, runInAction } from "mobx";
import api from "../services/axios/api.js";
import {CANBAN_GET, CANBAN_CREATE, CANBAN_CHANGE_STATEMENT} from "../constants/endpoints/endpointConst.js";

class TaskStore {
    filters;
    searchValue;
    canbanObj;
    currentTask;
    taskDragging;

    dragTaskX;
    dragTaskY;
    constructor() {
        this.filters = {};
        this.searchValue = '';
        this.canbanObj = {};
        this.currentTask = {};
        this.dragTaskY = null;
        this.dragTaskX = null;
        this.taskDragging = null;
        makeAutoObservable(this, {}, { autoBind: true });
    }
    stopDrag() {
        runInAction(() => {
            this.dragTaskY = null;
            this.dragTaskX = null;
            this.taskDragging = null;
        })
    }

    setDragPosition(x,y) {
        this.dragTaskY = y;
        this.dragTaskX = x;
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
    }
    
    async sumbitChanges(){
        await api.put('',this.changingValues);
    }

    async createTask({name,description}) {
        const res = await api.post(CANBAN_CREATE,{name,description});
    }

    async changeStatement({id,statement}) {
        const res = await api.put(CANBAN_CHANGE_STATEMENT,{id,statement})
    }


}
export default new TaskStore();
