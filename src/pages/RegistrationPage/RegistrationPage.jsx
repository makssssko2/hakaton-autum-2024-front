import {useState, useEffect} from "react";
import Layout from "../../layouts/Layout/Layout.jsx";
import Input from "../../components/Input/Input.jsx";
import AuthForm from "../../components/AuthForm/AuthForm.jsx";
import AuthStore from "../../store/AuthStore.js";
import {useInput} from "../../hooks/authHooks.js";
import LoaderStore from "../../store/LoaderStore.js";
import {useNavigate, Link} from "react-router-dom";
const RegistrationPage = () => {
    const [serverResponse,setServerResponse] = useState(null);
    const navigate = useNavigate();
    const fio = useInput('',{isEmpty: true,maxLength: 50, cyrillicError: true});
    const login = useInput('',{isEmpty: true,maxLength: 20});

    const password = useInput('',{isEmpty: true, minLength: 8, maxLength: 20});
    const repPassword = useInput('',{isEmpty: true, maxLength: 20, passEqual: password.value});

    useEffect(() => {
        if(AuthStore.isAuth) {
            navigate('/desk')
        }
    },[AuthStore.isAuth])

    const submitHandler = async (e,inputs) => {
        e.preventDefault();
        let correctFlag = true;
        for(let input in inputs) {
            inputs[input].onBlur();
            correctFlag = inputs[input].correct ? correctFlag && true : false;
        }
        if(!correctFlag) return;
        console.log(111111111111111)
        LoaderStore.showLocalLoader();
        const res = await AuthStore.registration({fio: inputs.fio.value, login: inputs.login.value, password: inputs.password.value})
        setServerResponse(res);
        LoaderStore.hideLocalLoader();
    }

    const footerText = (
        <p className="AuthForm__footer">Уже есть аккаунт?
            <Link to="/login" className="AuthForm__footer_link"> Войти</Link>
        </p>
    )

    return (
        <Layout type={'thin'}>
            <AuthForm
                title={'Регистрация'}
                submitText={'Зарегистрироваться'}
                onSubmit={(e) => submitHandler(e,{fio, login, password})}
                serverResponse={serverResponse}
                footer={footerText}
            >   
                <Input className="AuthForm__input" name="fio" type='text' input={fio}>ФИО</Input>
                <Input className="AuthForm__input" name="login" type='text' input={login}>Логин</Input>
                <Input className="AuthForm__input" name="pass" type='password' input={password}>Пароль</Input>
                <Input className="AuthForm__input" name="passRep" type='password' input={repPassword}>Повторите пароль</Input>
            </AuthForm>
        </Layout>
    )
}

export default RegistrationPage;