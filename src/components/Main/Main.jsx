// import RegistrationPage from '../RegistrationPage/RegistrationPage';
// import AddProductForm from '../AddProductForm/AddProductForm';
import Product from '../Products';
import Coctails from '../Coctails';

import './main.css'

const Main = () => {

    return (
        <div className='main'>
            <div className='main-wrapper'>
                {/* <Product /> */}
                <Coctails />
                {/* <AddProductForm /> */}
                {/* <RegistrationPage /> */}
            </div>
        </div>
    )
}

export default Main;