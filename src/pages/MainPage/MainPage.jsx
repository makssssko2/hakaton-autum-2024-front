import {observer} from "mobx-react-lite";
import './MainPage.scss';
import Layout from "../../layouts/Layout/Layout.jsx";
import {useNavigate} from "react-router-dom";
const MainPage = () => {
    const navigate = useNavigate();
        const handleClick = () => {
            navigate('/login');
        }
        return (
            <Layout type={'wide'} className={'MainPage'}>
                <div className="MainPage__content">
                    <h1 className={'MainPage__title'}>Добро пожаловать!</h1>
                    <button onClick={handleClick} className={'MainPage__button'}>Начать работу</button>
                </div>
            </Layout>
        )
}

export default observer(MainPage);