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

    login = async ({email,password}) => {
        let errorMessage;
        try {
            const response = await api.post(AUTH_LOGIN, {email,password});
            localStorage.setItem('token',(response).data.accessToken);
            runInAction(() => {
                this.IsAuth = true;
            });
        } catch(err) {
            errorMessage = err.response?.data?.message;
        } finally {
            console.log(5)
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
            console.log('Auth Loading - false')
        }
    }

    registration = async ({email,password,birthday,name}) => {
        let errorMessage;
        try {
            const response = await api.post(AUTH_REG,{email,password,birthday,name});
            localStorage.setItem('token',(response).data.accessToken);
            runInAction(() => {
                this.isAuth = true;
            })
            console.log(response);
        } catch(err) {
            console.log(err.response?.data?.message);
            errorMessage = err.response?.data?.message;
        } finally {
            console.log('Auth Loading - false')
        }
        return errorMessage || null;
    };

    checkAuth = async () => {
        console.log('Сработал CheckAuth')
        try {
            const response = await api.post(
                API_URL + AUTH_REFRESH,
                undefined,{withCredentials: true}
            );
            localStorage.setItem('token',(response).data.accessToken);
            runInAction(() => {
                this.isAuth = true;
            })
        } catch(err) {
            console.log(err.response?.data?.message);
        } finally {
            console.log('Auth Loading - false')
        }
    }
}
export default new AuthStore();
