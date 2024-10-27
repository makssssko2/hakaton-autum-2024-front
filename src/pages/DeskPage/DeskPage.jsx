import {observer} from "mobx-react-lite";
import Layout from "../../layouts/Layout/Layout.jsx";
import Header from "../../components/Header/Header.jsx";
import Canban from "../../components/Canban/Canban.jsx";
import './DeskPage.scss';
import TaskModal from "../../components/TaskModal/TaskModal.jsx";
import ModalStore from "../../store/ModalStore.js";
import AddModal from "../../components/AddModal/AddModal.jsx";
const DeskPage = () => {
    return (<>
        <Layout type={'wide'} className={'DeskPage'}>
            <Header/>
            <Canban/>
        </Layout>
        {ModalStore.isOpen && ModalStore.type === 'task' ? <TaskModal /> : null}
            {ModalStore.isOpen && ModalStore.type === 'addTask' ? <AddModal /> : null}
        </>
    )
}

export default observer(DeskPage);