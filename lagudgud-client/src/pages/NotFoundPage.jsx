import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../assets/notfound.jpg';

function NotFoundPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#f5b9c9] px-6 text-center">
            <div className="flex max-w-md flex-col items-center rounded-[2.5rem] border-4 border-zinc-900 bg-[#f6f4f2] p-10 shadow-[12px_12px_0px_0px_rgba(24,24,27,1)]">
                <div className="mb-8 overflow-hidden rounded-2xl border-2 border-zinc-900 bg-zinc-100 shadow-sm">
                    <img
                        src={notfound}
                        alt="Page Not Found"
                        className="h-64 w-64 object-cover"
                    />
                </div>
                
                {/* Structured Text */}
                <h1 className="text-6xl font-black tracking-tighter text-zinc-900">
                    404
                </h1>
                
                <h2 className="mt-2 text-xl font-bold uppercase tracking-[0.2em] text-zinc-900">
                    Page Not Found
                </h2>

                <p className="mt-4 text-sm leading-6 text-zinc-600 max-w-xs">
                    The link you followed to get here must be broken, or the coordinates have changed.
                </p>

                {/* Styled Navigation Link */}
                <Link
                    to="/"
                    className="mt-8 inline-block rounded-full border-2 border-zinc-900 px-8 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-900 transition-all hover:bg-zinc-900 hover:text-white"
                >
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
}

export default NotFoundPage;