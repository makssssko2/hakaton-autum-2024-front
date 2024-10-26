import Layout from "../../layouts/Layout/Layout.jsx";
import Header from "../../components/Header/Header.jsx";
import Canban from "../../components/Canban/Canban.jsx";
import './DeskPage.scss';
const DeskPage = () => {
    return (
        <Layout type={'wide'} className={'DeskPage'}>
            <Header/>
            <Canban/>
        </Layout>
    )
}

export default DeskPage;