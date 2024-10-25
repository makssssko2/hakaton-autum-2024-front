import {useState, useEffect} from "react";
import Layout from "../../layouts/Layout/Layout.jsx";
import Input from "../../components/Input/Input.jsx";
import AuthForm from "../../components/AuthForm/AuthForm.jsx";
import AuthStore from "../../store/AuthStore.js";
import {useInput} from "../../hooks/authHooks.js";
import LoaderStore from "../../store/LoaderStore.js";
import {useNavigate} from "react-router-dom";
const LoginPage = () => {
    const [serverResponse,setServerResponse] = useState(null);
    const navigate = useNavigate();
    const login = useInput('',{isEmpty: true,maxLength: 30});
    const password = useInput('',{isEmpty: true,maxLength: 40});

    useEffect(() => {
        if(AuthStore.isAuth) {
            navigate('/desk')
        }
    },[AuthStore.isAuth]);

    const submitHandler = async (e,inputs) => {
        e.preventDefault();
        let correctFlag = true;
        for(let input in inputs) {
            inputs[input].onBlur();
            correctFlag = inputs[input].correct ? correctFlag && true : false;
        }
        if(!correctFlag) return;
        LoaderStore.showLocalLoader();
        const res = await AuthStore.login({login: inputs.login.value, password: inputs.password.value});
        setServerResponse(res);
        LoaderStore.hideLocalLoader();
    }
    return (
        <Layout type={'thin'}>
            <AuthForm
                title={'Авторизация'}
                submitText={'Войти'}
                onSubmit={(e) => submitHandler(e,{login,password})}
                serverResponse={serverResponse}
            >
                <Input className="AuthForm__input" name="login" type='text' input={login}>Логин</Input>
                <Input className="AuthForm__input" name="pass" type='password' input={password}>Пароль</Input>
            </AuthForm>
        </Layout>
    )
}

export default LoginPage;