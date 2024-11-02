import { makeAutoObservable, runInAction } from "mobx";
import api from "../services/axios/api.js";
import { PROFILE_GET } from "../constants/endpoints/endpointConst.js";

class ProfileStore {
    userData;
    constructor() {
        this.userData = {};
        makeAutoObservable(this, {}, { autoBind: true });
    }

    getProfile = async () => {
        try{
            const response = await api.get(PROFILE_GET);
            runInAction(() => {
                this.userData = response.data;
            });
            console.log(this.userData);
            
        }
        catch(err) {
            console.log(err.response?.data?.message);
        }
        finally{

        }
    }

    editName = async ({ name }) => {
        try{
            await api.put(PROFILE_GET + 'edit/name', name);
        }
        catch(err){
            console.log(err);
        }
        finally{

        }
        
    }

    editPosition = async ({ position }) => {
        try{
            await api.put(PROFILE_GET + 'edit/position', position);
        }
        catch(err){
            console.log(err);
        }
        finally{

        }
    }

    editAvatar = async ({ avatar }) => {
        try{
            await api.put(PROFILE_GET + 'edit/avatar', avatar);
        }
        catch(err){
            console.log(err);
        }
        finally{

        }
    }

}
export default new ProfileStore();
