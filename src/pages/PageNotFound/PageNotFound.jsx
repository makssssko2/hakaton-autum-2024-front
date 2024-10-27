
import Layout from "../../layouts/Layout/Layout";
import './PageNotFound.scss';
const PageNotFound = () =>{

    return(
        <Layout type={'wide'} className={'PageNotFound'}>
                <div className="PageNotFound__content">
                    <h1 className={'PageNotFound__title'}>404 <br /><span>Страница не найдена...</span></h1>
                </div>
            </Layout>
    )
}
export default PageNotFound;