import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';


const Layout = () => (
    <div className="mainContainer">
        <NavBar />
        
        <Outlet />
    </div>
)

export default Layout;