import { makeAutoObservable, runInAction } from "mobx";
import api from "../services/axios/api.js";
import {API_URL, AUTH_LOGIN, AUTH_LOGOUT, AUTH_REFRESH, AUTH_REG} from "../constants/endpoints/endpointConst.js";

class AuthStore {
    isAuth;
    userData;
    constructor() {
        this.isAuth = false;
        this.userData = {};
        makeAutoObservable(this, {}, { autoBind: true });
    }

    login = async ({login,password}) => {
        let errorMessage;
        try {
            const response = await api.post(AUTH_LOGIN, {login, password});
            localStorage.setItem('token',response.data.token);
            console.log(response);
            runInAction(() => {
                this.isAuth = true;
            });
            console.log()
        } catch(err) {
            errorMessage = err.response?.data?.message;
        } finally {

        }
        return errorMessage || null;
    }

    logout = async () => {
        try {
            await api.post(AUTH_LOGOUT);
            localStorage.removeItem('token');
            runInAction(() => {
                this.isAuth = false;
            })
        } catch(err) {
            console.log(err.response?.data?.message);
        } finally {

        }
    }

    registration = async ({fio, login,password}) => {
        let errorMessage;
        try {
            const response = await api.post(AUTH_REG,{fio, login, password});
            console.log(response)
            localStorage.setItem('token',response.data.token);
            runInAction(() => {
                this.isAuth = true;
            })
            console.log(response);
        } catch(err) {
            console.log(err.response?.data?.message);
            errorMessage = err.response?.data?.message;
        } finally {

        }
        return errorMessage || null;
    };

    checkAuth = async () => {
        try {
            const response = await api.get(
                API_URL + AUTH_REFRESH, {withCredentials: true}
            );
            localStorage.setItem('token',response.data.token);
            runInAction(() => {
                this.isAuth = true;
            })
        } catch(err) {
            console.log(err.response?.data?.message);
        } finally {
        }
    }
}
export default new AuthStore();
