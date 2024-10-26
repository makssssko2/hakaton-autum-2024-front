import Layout from "../../layouts/Layout/Layout.jsx";
import Canban from "../../components/Canban/Canban.jsx";
import './DeskPage.scss';
const DeskPage = () => {
    const tasks = [1,23,4];
    return (
        <Layout type={'wide'} className={'DeskPage'}>
            <h1>ХЭДЕР</h1>
            <Canban/>
        </Layout>
    )
}

export default DeskPage;