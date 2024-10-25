import {observer} from "mobx-react-lite";
import {useEffect} from "react";
import AppRouting from "./AppRouting.jsx";
import Loader from "../../components/Loader/index.jsx";
import LoaderStore from "../../store/LoaderStore.js";
import AuthStore from "../../store/AuthStore.js";

const AppInitComponent = () => {
        useEffect(() => {
            (async () => {
                LoaderStore.showGlobalLoader();
                await AuthStore.checkAuth();
                LoaderStore.hideGlobalLoader();
            })();
        }, []);

        return (
            LoaderStore.globalLoaderLoading ?
                <Loader type={'global'} /> :
                <>
                    <AppRouting/>
                    {LoaderStore.localLoaderLoading && <Loader type={'local'}/>}
                </>
        )
}

export default observer(AppInitComponent);