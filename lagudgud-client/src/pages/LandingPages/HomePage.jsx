import Button from '../../components/Button';

import bpImg from '../../assets/homepage_images/bpImg.jpg';

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
                    <Button to="/about" variant="secondary" className="rounded-full bg-[#f6f4f2] px-3 py-2.5 transition-all duration-300 hover:-translate-y-1.5 active:translate-y-0.5 active:shadow-lg">
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
                    <p className="pl-8 pr-8 text-[12px] font-bold uppercase tracking-[0.28em] text-[#f6f4f2]">
                        <b className="text-[#C11C84]">BLACKPINK</b> AREA SECTION
                    </p>
                    
                    <h2 className="mt-2 pl-8 text-2xl font-semibold text-[#f6f4f2]">
                        Quick Overview
                    </h2>
                </div>
                
                {/* section 1 */}
                <div className="pl-8 pr-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-3xl bg-[#f8e5e5] p-5 relative overflow-hidden hover:scale-102 transition-transform duration-300">
                    <p className="text-2xl font-bold text-center text-zinc-900">04</p>
                    <p className="mt-3 mb-2 text-[14px] text-center font-[ttnorms] uppercase tracking-[0.24em] text-zinc-900">Active Members</p>
                </div>
                
                {/* section 2 */}
                <div className="rounded-3xl bg-[#f8e5e5] p-5 relative overflow-hidden hover:scale-102 transition-transform duration-300">
                    <p className="text-2xl font-bold text-center text-zinc-900">05</p>
                    <p className="mt-3 mb-2 text-[14px] text-center font-[ttnorms] uppercase tracking-[0.24em] text-zinc-900">Albums</p>
                </div>
                
                {/* section 3 */}
                <div className="rounded-3xl bg-[#f8e5e5] p-5 relative overflow-hidden hover:scale-102 transition-transform duration-300">
                    <p className="text-2xl font-bold text-center text-zinc-900">42</p>
                    <p className="mt-3 mb-2 text-[14px] text-center font-[ttnorms] uppercase tracking-[0.24em] text-zinc-900">Songs</p>
                </div>
                
                {/* section 4 */}
                <div className="rounded-3xl bg-[#f8e5e5] p-5 relative overflow-hidden hover:scale-102 transition-transform duration-300">
                    <p className="text-2xl font-bold text-center text-zinc-900">201</p>
                    <p className="mt-3 mb-2 text-[14px] text-center font-[ttnorms] uppercase tracking-[0.24em] text-zinc-900">Achievements</p>
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
            
            <Button className="mt-4 rounded-full bg-[#FFA6C9] px-2.5 py-2 transition-all duration-300 hover:-translate-y-1.5 active:translate-y-0.5 active:shadow-lg" variant="tertiary">
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
                
            <Button className="mt-4 rounded-full bg-[#FFA6C9] px-2.5 py-2 transition-all duration-300 hover:-translate-y-1.5 active:translate-y-0.5 active:shadow-lg" variant="tertiary">
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
            
            <Button className="mt-4 rounded-full bg-[#FFA6C9] px-2.5 py-2 transition-all duration-300 hover:-translate-y-1.5 active:translate-y-0.5 active:shadow-lg" variant="tertiary">
                View More
            </Button>
        </article>
    </div>
        
    </div>
    );
};

export default HomePage;