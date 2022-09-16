import { Link, Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Layout = () => (
    <div>
        <NavBar />
        
        <Outlet />
    </div>
)

export default Layout;