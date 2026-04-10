import React from 'react'
import { Link } from 'react-router-dom';
import notfound from '../assets/notfound.jpg';

function NotFoundPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#f5b9c9] px-4 text-center">
        
        <img
            src={notfound}
            alt="Page Not Found"
            className="w-64 h-64 object-contain"
        />
        
        <h1 className="mt-6 text-4xl font-bold text-black">
            Page Not Found
        </h1>
        <p className="pt-3 mt-3 text-sm text-black max-w-sm leading-6">
            The link you followed to get here must be broken...
        </p>

        <Link
            to="/"
            className="mt-6 rounded-full border-2 border-zinc-900 px-6 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors"
        >
            Back to Home
        </Link>
    </div>
    )
}

export default NotFoundPage;