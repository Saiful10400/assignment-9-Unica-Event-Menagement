 
import { Outlet } from 'react-router-dom';
import DaisyuiNavbar from './DaisyuiNavbar';
const Navbar = () => {
    return (
        <>
        <div>
            <DaisyuiNavbar></DaisyuiNavbar>
           
        </div>

        <Outlet></Outlet>
        
        
        </>
    );
};

export default Navbar;