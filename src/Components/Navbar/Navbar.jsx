 
import { Outlet } from 'react-router-dom';
import DaisyuiNavbar from './DaisyuiNavbar';
const Navbar = () => {
    return (
        <>
        <div className='relative z-10'>
            <DaisyuiNavbar></DaisyuiNavbar>
           
        </div>

        <div className='relative z-0'>
        <Outlet></Outlet>
        </div>
        
        
        </>
    );
};

export default Navbar;