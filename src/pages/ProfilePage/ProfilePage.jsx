import './ProfilePage.scss';
import Layout from '../../layouts/Layout/Layout';
const ProfilePage = () => {
    return(
        <Layout type={'wide'} className={'ProfilePage'}>
            <h1 className='header-text'>Профиль пользователя</h1>
            <div className='profile-div'>
            
                <div className='firstline'>
                    <div className='profile-pic'><img src='src/assets/images/ivanNotFound.png'/>
                    
                    </div>
                    <div className='data-grid'>
                        <div className='data'>
                                <h3>ФИО:</h3>
                                <div className='fio'>Запара Иван Александрыч</div>
                        </div>
                        <div className='data'>
                                <h3>Роль:</h3>
                                <div className='fio'>Олег Олег Олег</div>
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>
        </Layout>
    );
}
export default ProfilePage;