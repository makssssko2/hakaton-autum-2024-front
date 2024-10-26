
import Layout from "../../layouts/Layout/Layout";
import ivanNotFound from '/src/assets/images/ivan404.jpg';
import './PageNotFound.scss';
const PageNotFound = () =>{

    return(
        <Layout type={'wide'} className={'PageNotFound'}>
                <div className="PageNotFound__content">
                    <h1 className={'PageNotFound__title'}>404 <br /><span>Страница не найдена...</span></h1>
                    <img className={"PageNotFound__image"} src={ivanNotFound} />
                </div>
            </Layout>
    )
}
export default PageNotFound;