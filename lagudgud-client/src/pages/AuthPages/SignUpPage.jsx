import { Link } from 'react-router-dom';
import Button from '../../components/Button';

import apple from '../../assets/logos/apple.png';
import googleIcon from '../../assets/logos/googleIcon.png';

const inputClasses = 
  'mt-2 w-full rounded-3xl border border-zinc-300 bg-[#f6f4f2] px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-zinc-50';

const actionButtonClassName = 'w-full py-3 text-[11px] tracking-[0.2em]';

const SignUpPage = () => {
    return (
    <>  
        <h1 className="mt-3 mb-5 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Sign Up</h1>
        <p className="mt-3 text-sm leading-6 text-zinc-600">
            Create your account with the same monochrome layout pattern and shared button treatment.
        </p>
      
        <form className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
                <div>
                    <label htmlFor="first-name" className="ml-2 text-sm font-medium text-zinc-700">
                        First Name
                    </label>
                    
                    <input
                        id="first-name"
                        type="text"
                        placeholder=""
                        autoComplete="given-name"
                        className={inputClasses}
                    />
                </div>
                
                <div>
                    <label htmlFor="last-name" className="ml-2 text-sm font-medium text-zinc-700">
                        Last Name
                    </label>
                    
                    <input
                        id="last-name"
                        type="text"
                        placeholder=""
                        autoComplete="family-name"
                        className={inputClasses}
                    />
                </div>
            </div>
            
            <div>
                <label htmlFor="signup-email" className="ml-2 text-sm font-medium text-zinc-700">
                    Email
                </label>
                
                <input 
                    id="signup-email"
                    type="email"
                    placeholder=""
                    autoComplete="email"
                    className={inputClasses}
                />
            </div>
            
            <div>
                <label htmlFor="signup-password" className="ml-2 text-sm font-medium text-zinc-700">
                    Password
                </label>
                
                <input
                    id="signup-password"
                    type="password"
                    placeholder=""
                    autoComplete="new password"
                    className={inputClasses}
                />
                
                <p className="mt-2 ml-2 text-xs leading-5 text-zinc-500">
                    Use a secure password with letters, numbers, and symbols.
                </p>
            </div>
            
            <Button type="submit" variant="tertiary" className={`${actionButtonClassName} flex w-full items-center justify-center gap-2 rounded-full border-2 border-zinc-900 bg-transparent px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-zinc-50 transition-all hover:bg-[#000000]`}>
                Create Account
            </Button>
            
            <div className="grid gap-3 pt-2 sm:grid-cols-2">
                <Button type="button" variant="tertiary" className={`${actionButtonClassName} flex w-full items-center justify-center gap-2 rounded-full border-2 border-zinc-900 bg-transparent px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-zinc-50 transition-all hover:bg-[#000000]`}>
                    <img src={googleIcon} alt="Google" className="h-4 w-4 object-contain" />
                    Sign Up with Google
                </Button>
                
                <Button type="button" variant="tertiary" className={`${actionButtonClassName} flex w-full items-center justify-center gap-2 rounded-full border-2 border-zinc-900 bg-transparent px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-zinc-50 transition-all hover:bg-[#000000]`}>
                    <img src={apple} alt="Apple" className="h-4 w-4 object-contain" />
                    Sign Up with Apple
                </Button>
            </div>
        </form>
        
        <div className="mt-8 ml-2 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
            Already have an account?{' '}
            
            <Link to="/auth/signin" className="font-semibold text-zinc-900 transition hover:text-zinc-600">
                Log In
            </Link>

            <div className="mb-8">
                <Link to="/">
                
                <Button 
                    type="button" 
                    variant="tertiary" 
                    className="mt-6 mb-6 pt-2.5 pb-2.5 border-2 border-zinc-900 px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition hover:bg-[#000000] hover:text-white"
                >
                    ← Back to Home
                </Button>
                </Link>
            </div>
        </div>
    </>
    );
};

export default SignUpPage;