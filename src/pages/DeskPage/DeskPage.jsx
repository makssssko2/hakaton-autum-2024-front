import {observer} from "mobx-react-lite";
import Layout from "../../layouts/Layout/Layout.jsx";
import Header from "../../components/Header/Header.jsx";
import Canban from "../../components/Canban/Canban.jsx";
import './DeskPage.scss';
import TaskModal from "../../components/TaskModal/TaskModal.jsx";
import ModalStore from "../../store/ModalStore.js";
const DeskPage = () => {
    return (<>
        <Layout type={'wide'} className={'DeskPage'}>
            <Header/>
            <Canban/>
        </Layout>
        {ModalStore.isOpen && ModalStore.type === 'task' ? <TaskModal /> : null}
        </>
    )
}

export default observer(DeskPage);