import { Outlet } from 'react-router-dom';

import blackpink from '../assets/blackpink.jpg';


const AuthLayout = () => {
    return (
    <section className="min-h-screen bg-zinc-100 text-zinc-900">
        <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
            <div className="relative hidden lg:block border-zinc-300 bg-zinc-200">
                <img 
                    src={blackpink}
                    alt="Blackpink"
                    className="absolute inset-0 h-full w-full object-cover object-[50%_80%]"
                />
            </div>
            
            <main className="flex items-center bg-[#f8e5e5] px-6 py-10 sm:px-10 lg:px-16">
                <div className="mx-auto w-full max-w-md">
                    <Outlet />
                </div>
            </main>
        </div>
    </section>
    );
};

export default AuthLayout;