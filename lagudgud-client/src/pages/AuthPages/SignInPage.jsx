import { Link } from 'react-router-dom';
import Button from '../../components/Button';

import apple from '../../assets/logos/apple.png';
import googleIcon from '../../assets/logos/googleIcon.png';

const inputClasses = 
  'mt-2 w-full rounded-3xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-zinc-50';

const actionButtonClassName = 'w-full py-3 text-[11px] tracking-[0.2em]';

const SignInPage = () => {
  return (
    <>
        <h1 className="mt-6 mb-5 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Log In</h1>
        <p className="mt-3 text-sm leading-6 text-zinc-600">
            Access your account using the same monochrome wireframe language used across the site.
        </p>

        <form className="mt-8 space-y-5">
            <div>
                <label htmlFor="signin-email" className="text-sm ml-2 font-medium text-zinc-700">
                    Email Address
                </label>
            
            <input
                id="signin-email"
                type="email"
                placeholder=""
                autoComplete="email"
                className={inputClasses}
            />
            </div>
      
            <div>
                <label htmlFor="signin-password" className="text-sm ml-2 font-medium text-zinc-700">
                Password
                </label>
            
                <input
                    id="signin-password"
                    type="password"
                    placeholder=""
                    autoComplete="current-password"
                    className={inputClasses}
                />
            
                <p className="mt-2 ml-2 text-xs leading-5 text-zinc-500">
                    It must be a combination of minimum 8 letters, numbers, and symbols.
                </p>
            </div>
        
            <div className="flex items-center justify-between gap-4 text-sm">
                <label className="flex items-center gap-2 text-zinc-600">
                    <input type="checkbox" className="h-4 w-4 ml-2 rounded border-zinc-300 accent-zinc-900" />
                    <span>Remember me</span>
                </label>
            
                <button type="button" className="font-medium text-zinc-700 transition hover:text-zinc-900">
                    Forgot Password?
                </button>
            </div>

            <Button type="submit" variant="primary" className={actionButtonClassName}>
                Log In
            </Button>

            <div className="grid gap-3 pt-2 sm:grid-cols-2">
    <Button 
        type="button" 
        variant="secondary" 
        className={`${actionButtonClassName} flex w-full items-center justify-center gap-2 rounded-full border-2 border-zinc-900 bg-transparent px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-zinc-900 transition-all hover:bg-zinc-100`}
    >
        <img src={googleIcon} alt="Google" className="h-4 w-4 object-contain" />
        Log In with Google
    </Button>

    <Button 
        type="button" 
        variant="secondary" 
        className={`${actionButtonClassName} flex w-full items-center justify-center gap-2 rounded-full border-2 border-zinc-900 bg-transparent px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-zinc-900 transition-all hover:bg-zinc-100`}
    >
        <img src={apple} alt="Apple" className="h-4 w-4 object-contain" />
        Log In with Apple
    </Button>
</div>
        </form>
    
        <div className="mt-8 ml-2 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
            No account yet?{' '}
        
            <Link to="/auth/signup" className="font-semibold text-zinc-900 transition hover:text-zinc-600">
                Sign Up
            </Link>
            
            <div className="mb-8">
                <Link to="/">
                
                <Button 
                    type="button" 
                    variant="secondary" 
                    className="mt-6 pt-2.5 pb-2.5 border-2 border-zinc-900 px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition hover:bg-zinc-900 hover:text-white"
                >
                    ← Back to Home
                </Button>
                </Link>
            </div>
        </div>
    </>
    );
};

export default SignInPage;