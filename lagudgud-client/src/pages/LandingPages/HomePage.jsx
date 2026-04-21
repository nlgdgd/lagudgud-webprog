import Button from '../../components/Button';

import bpImg from '../../assets/homepage_images/bpImg.jpg';

{/* profiles */}
import jisoo from '../../assets/jisoo.png';
import jennie from '../../assets/jennie.png';
import rose from '../../assets/rose.png';
import lisa from '../../assets/lisa.png';

{/* achievements */}
import boombayah from '../../assets/boombayah.jpg';
import duddu from '../../assets/duddu.png';
import ytmillion from '../../assets/ytmillion.jpg';

{/* fonts */}
import ttnormsextra from '../../assets/fonts/ttnormsextra.ttf';
import grainfield from '../../assets/fonts/grainfield.ttf';
import gsans from '../../assets/fonts/gsans.ttf';
import ttnorms from '../../assets/fonts/ttnorms.ttf';

const HomePage = () => {
    return (
    <div className="flex w-full flex-col gap-6 bg-[#f5b9c9]">
        <div className="mt-17 mb-14 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
                <p className="mb-3 mt-7 pl-14 text-[13.5px] font-[ttnormsextra] uppercase tracking-[0.24em] text-zinc-900">
                    <b> YG ENTERTAINMENT </b>
                </p>
                
                <h1 className="pl-14 max-w-xl text-4xl font-bold leading-tight text-zinc-900 sm:text-6xl">
                    Welcome to <b className="text-[#C11C84]"> BLACKPINK </b> Area
                </h1>
                
                <p className=" pl-14 mt-4 max-w-lg text-sm leading-7 text-zinc-900 sm:text-base">
                    Stay connected with the latest news and world-class achievements of the global girl group <b>BLACKPINK</b>.
                </p>
                
                <div className="mt-6 pl-14">
                    <Button to="/about" variant="primary" className="rounded-full bg-zinc-900 px-3 py-2.5 transition-all duration-300 hover:-translate-y-1.5 active:translate-y-0.5 active:shadow-lg">
                        Learn More
                    </Button>
                </div>
            </div>
            
            <div className="mr-14 ml-8 mt-16 mb-16 rounded-3xl border-2 border-full border-zinc-1000 bg-[#f8e5e5] p-6 relative overflow-hidden">
                    <img 
                        src={bpImg}
                        alt="Blackpink image"
                        className="h-90 w-196 max-w-full rounded-2xl object-cover"
                    />
            </div>
        </div>

        {/* profiles section */}
        <div className="pb-32 mt-17 w-full bg-zinc-950 py-14">
            <div className="pl-8 pr-8">
                <div className="mt-14 mb-14">
                    <p className="pl-8 pr-8 text-[11.5px] font-bold uppercase tracking-[0.28em] text-[#f6f4f2]">
                        Profiles
                    </p>
                    
                    <h2 className="mt-2 pl-8 text-2xl font-semibold text-[#f6f4f2]">
                        <b className="text-[#C11C84]"> BLACKPINK </b> Members
                    </h2>
                </div>
                
                {/* jisoo */}
                <div className="pl-8 pr-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-3xl bg-[#f8e5e5] p-5 relative overflow-hidden hover:scale-102 transition-transform duration-300">
                        <img
                        src={jisoo}
                        alt="Blackpink Jisoo"
                        className="h-80 w-196 max-w-full rounded-2xl object-cover"
                    />
                    
                    <p className="mt-7 mb-2 text-[14px] text-center font-[ttnorms] uppercase tracking-[0.24em] text-zinc-1000">
                        <b> KIM JISOO </b>
                    </p>
                </div>
                
                {/* jennie */}
                <div className="rounded-3xl bg-[#f8e5e5] p-5 relative overflow-hidden hover:scale-102 transition-transform duration-300">
                    <img
                        src={jennie}
                        alt="Blackpink Jennie"
                        className="h-80 w-196 max-w-full rounded-2xl object-cover"
                    />
                    
                    <p className="mt-7 mb-2 text-[14px] text-center font-[ttnorms] uppercase tracking-[0.24em] text-zinc-1000">
                        <b> KIM JENNIE</b>
                    </p>
                </div>
                
                {/* rose */}
                <div className="rounded-3xl bg-[#f8e5e5] p-5 relative overflow-hidden hover:scale-102 transition-transform duration-300">
                    <img
                        src={rose}
                        alt="Blackpink Rose"
                        className="h-80 w-196 max-w-full rounded-2xl object-cover"
                    />
                    
                    <p className="mt-7 mb-2 text-[14px] text-center font-[ttnorms] uppercase tracking-[0.24em] text-zinc-1000">
                        <b> PARK ROSÉ </b>
                    </p>
                </div>
                
                {/* lisa */}
                <div className="rounded-3xl bg-[#f8e5e5] p-5 relative overflow-hidden hover:scale-102 transition-transform duration-300">
                    <img
                        src={lisa}
                        alt="Blackpink Lisa"
                        className="h-80 w-196 max-w-full rounded-2xl object-cover"
                    />
                    
                    <p className="mt-7 mb-2 text-[14px] text-center font-[ttnorms] uppercase tracking-[0.24em] text-zinc-1000">
                        <b> LISA MANOBAL </b>
                    </p>
                </div>
            </div>
        </div>
    </div>
    
    {/* achievements section */}
    <div className="mb-3.5 mt-10">
        <p className="pl-8 text-[11.5px] font-bold uppercase tracking-[0.28em] text-zinc-900">
            Achievements
        </p>
        
        <h2 className="mt-2 pl-8 text-2xl font-semibold text-zinc-900"> The <b className="text-[#C11C84]">BLACKPINK</b> Era: Record-Breaking Journey </h2>
    </div>
    
    <div className="pl-8 pr-8 mb-21 grid gap-4 md:grid-cols-3">
        
        {/* feature card 1 */}
        <article className="rounded-3xl border border-zinc-900 bg-[#f8e5e5] p-6 relative overflow-hidden hover:scale-102 transition-transform duration-300">
            <img
                src={boombayah}
                alt="Boombayah"
                className="h-87 w-196 max-w-full rounded-2xl object-cover"
            />
            
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">Blackpink Is First K-Pop Girl Group to Debut on Canadian Hot 100</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
                Blackpink is the first K-pop girl group to debut on Canadian Hot 100 thanks to new single 'Playing With Fire.' 
                <br></br>
                <br></br>
                By <b>Jeff Benjamin</b>
            </p>
            
            <Button className="mt-4 rounded-full bg-zinc-900 px-2.5 py-2 transition-all duration-300 hover:-translate-y-1.5 active:translate-y-0.5 active:shadow-lg" variant="primary">
                View More
            </Button>
        </article>
        
        {/* feature card 2 */}
        <article className="rounded-3xl border border-zinc-900 bg-[#f8e5e5] p-6 relative overflow-hidden hover:scale-102 transition-transform duration-300">
            <img
                src={duddu}
                alt="Duddu"
                className="h-87 w-196 max-w-full rounded-2xl object-cover"
            />
                
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">BLACKPINK Makes K-Pop History on Hot 100, Billboard 200 & More With ‘DDU-DU DDU-DU’</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
                BLACKPINK makes history on Billboard's charts, as, among other feats, the all-female quartet debuts the highest-charting hit ever...
                <br></br>
                <br></br>
                By <b>Xander Zellner</b>
            </p>
                
            <Button className="mt-4 rounded-full bg-zinc-900 px-2.5 py-2 transition-all duration-300 hover:-translate-y-1.5 active:translate-y-0.5 active:shadow-lg" variant="primary">
                View More
            </Button>
        </article>
        
        {/* feature card 3 */}
        <article className="rounded-3xl border border-zinc-900 bg-[#f8e5e5] p-6 relative overflow-hidden hover:scale-102 transition-transform duration-300">
            <img
                src={ytmillion}
                alt="YTMillion"
                className="h-87 w-196 max-w-full rounded-2xl object-cover"
            />
            
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">Blackpink Hits New K-Pop YouTube Record With 20 Million Subscribers</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
                Blackpink just reached another milestone on their road to total pop culture domination. On Thursday (March 21), YouTube...
                <br></br>
                <br></br>
                By <b>Glenn Rowley</b>
            </p>
            
            <Button className="mt-4 rounded-full bg-zinc-900 px-2.5 py-2 transition-all duration-300 hover:-translate-y-1.5 active:translate-y-0.5 active:shadow-lg" variant="primary">
                View More
            </Button>
        </article>
    </div>
        
    {/* footer */}
        <div className="bg-zinc-950 w-full">
            <footer className="mx-auto max-w-7xl border-t-4 border-zinc-900 bg-zinc-950 px-6 py-16 text-zinc-300 sm:px-10 lg:px-16">
                <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-3.5">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-[#f5b9c9] border-2 border-zinc-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-zinc-900 font-black">BP</div>
                                <h2 className="text-xl font-black uppercase tracking-tighter text-white"><b className="text-[#f5b9c9]">BLACKPINK Area</b></h2>
                            </div>
                            
                            <p className="text-sm text-justify leading-7 text-zinc-400">Your daily fix of news and history for the world’s biggest girl group. Built for the global community, updated for every era.</p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-[12.5px] font-bold uppercase tracking-[0.3em] text-white"><b>Navigate</b></h3>
                            <ul className="space-y-3.5 text-sm font-medium">
                                {['Debut Overview', 'Album Overview', 'Awards Overview', 'BP Featured Articles'].map(link => (
                                    <li key={link} className="hover:text-[#f5b9c9] cursor-pointer transition-colors">{link}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-[12.5px] font-bold uppercase tracking-[0.3em] text-white"><b>CONTACT US</b></h3>
                            <ul className="space-y-3.5 mr-3 text-sm font-medium">
                                {['123 Street, Seoul City, South Korea', '+82 123 4567890', 'ygentertainment@example.com'].map(member => (
                                    <li key={member} className="hover:text-[#f5b9c9] cursor-pointer transition-colors">{member}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-[12.5px] font-bold uppercase tracking-[0.3em] text-white"><b>Stay Updated</b></h3>
                            <div className="relative">
                                <input type="email" placeholder="Enter your email" className="w-full rounded-full border-2 border-zinc-800 bg-zinc-900 px-6 py-3 text-xs text-white focus:border-[#f5b9c9] outline-none" />
                                <button className="mt-4 w-full rounded-full bg-[#f5b9c9] py-3 text-[11px] font-black uppercase tracking-widest text-zinc-900 transition-all hover:-translate-y-1">Subscribe</button>
                            </div>

                            <div className="flex gap-4 pt-4">
                                {['IG', 'YT', 'IN'].map(social => (
                                    <div key={social} className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 hover:bg-white hover:text-black cursor-pointer transition-all">{social}</div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 border-t border-zinc-800 pt-10 text-center">
                        <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-zinc-500">
                            © 2026 BLACKPINK Area. All rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default HomePage;