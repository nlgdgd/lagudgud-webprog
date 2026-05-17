import { Link } from "react-router-dom";

const Footer = () => {
  return (
  <footer className="bg-[#0A0A0B] p-10 text-zinc-50 shadow-2xl lg:p-13">
    <div className="grid gap-10 pl-4 sm:grid-cols-2 lg:grid-cols-5"> 
      <div>
        <h3 className="text-xl font-bold tracking-tight">
          BLACKPINK Area
        </h3>

        <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-400"> 
          Your daily fix of news and history for the world’s biggest girl group. Built for the global community, updated for every era.
        </p>
      </div>
      
      <div className="pl-22">
        <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Navigate</h4>
        <ul className="mt-6 space-y-4 text-sm font-medium text-zinc-300">
          <li><Link to="/about" className="transition hover:text-white cursor-pointer">About</Link></li>
          <li><Link to="/articles" className="transition hover:text-white cursor-pointer">Articles</Link></li>
          <li><Link to="/auth/signin" className="transition hover:text-white cursor-pointer">Account</Link></li>
        </ul>
      </div>
      
      <div>
        <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Contact Us</h4>
        <ul className="mt-6 space-y-4 text-sm font-medium text-zinc-300">
          <li className="transition hover:text-white cursor-pointer leading-relaxed">123 Street, Seoul City, South Korea</li>
          <li className="transition hover:text-white cursor-pointer">+82 123 4567890</li>
          <li className="transition hover:text-white cursor-pointer">ygentertainment@example.com</li>
        </ul>
      </div>
      
      <div>
        <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Follow Us</h4>
        <div className="mt-6 flex gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 transition hover:bg-zinc-800 cursor-pointer">FB</div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 transition hover:bg-zinc-800 cursor-pointer">IG</div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 transition hover:bg-zinc-800 cursor-pointer">YT</div>
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Legal</h4>
        <ul className="mt-6 space-y-4 text-sm font-medium text-zinc-300">
          <li><Link to="/privacy" className="transition hover:text-white cursor-pointer">Privacy Policy</Link></li>
          <li><Link to="/terms" className="transition hover:text-white cursor-pointer">Terms of Service</Link></li>
        </ul>
      </div>
    </div>
    
    <div className="mt-16 border-t border-zinc-900 pt-8 text-center text-[11px] font-medium text-zinc-500">
      <p className="mt-6 text-zinc-600">© 2026 BLACKPINK Area. All rights reserved.</p>
    </div>
  </footer>
  );
};

export default Footer;