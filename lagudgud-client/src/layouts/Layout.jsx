import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Layout = () => {
    return (
        <div className="min-h-screen bg-[#f5b9c9] text-zinc-900">
            <NavBar />
            <main className="pb-0 pt-20">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;