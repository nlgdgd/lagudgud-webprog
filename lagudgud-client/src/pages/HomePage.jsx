import Button from '../components/Button';
import bpImg from '../assets/bpImg.jpg';
import jisoo from '../assets/jisoo.png';
import jennie from '../assets/jennie.png';
import rose from '../assets/rose.png';
import lisa from '../assets/lisa.png';
import boombayah from '../assets/boombayah.jpg';
import duddu from '../assets/duddu.png';
import ytmillion from '../assets/ytmillion.jpg';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-6 bg-[#f8e5e5]">
<section className="border-y border-zinc-900 bg-[#f5b9c9] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">

                    <div>
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                            YG Entertainment
                        </p>

                        <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
                            Welcome to BLACKPINK Area
                        </h1>
                        <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
                            Stay connected with the latest news and world-class achievements of the global girl group BLACKPINK.
                        </p>
                        <div className="mt-6">
                            <Button to="/about" variant="primary">
                                Learn More
                            </Button>
                        </div>
                    </div>
                    
                    <div className="rounded-3xl border-2 border-dashed border-zinc-1000 bg-[#f8e5e5] p-6">
                        <div className="flex min-h-[260px] items-center justify-center rounded-2xl bg-zinc-100">
                            <img 
                                src={bpImg}
                                alt="Blackpink image"
                                className="h-90 w-196 max-w-full rounded-2xl object-cover"
                            />
                        </div>
                    </div>
                    </div>
                </section>
                
                <section className="border-y border-zinc-900 bg-[#f5b9c9] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                    <div className="mb-6">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                            Profiles
                        </p>
                        
                        <h2 className="mt-2 text-2xl font-semibold text-zinc-900">BLACKPINK Members</h2>
                    </div>
                    
                    {/* jisoo */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-3xl border border-zinc-900 bg-[#f8e5e5] p-5">
                            <img
                                src={jisoo}
                                alt="Blackpink Jisoo"
                                className="h-80 w-196 max-w-full rounded-2xl object-cover"
                            />
                            <p className="mt-5 text-[14px] text-center font-semibold uppercase tracking-[0.24em] text-zinc-900">
                                KIM JISOO
                            </p>
                        </div>
                        
                        {/* jennie */}
                        <div className="rounded-3xl border border-zinc-900 bg-[#f8e5e5] p-5">
                            <img
                                src={jennie}
                                alt="Blackpink Jennie"
                                className="h-80 w-196 max-w-full rounded-2xl object-cover"
                            />
                            <p className="mt-5 text-[14px] text-center font-semibold uppercase tracking-[0.24em] text-zinc-900">
                                KIM JENNIE
                                </p>
                        </div>
                        
                        {/* rose */}
                        <div className="rounded-3xl border border-zinc-900 bg-[#f8e5e5] p-5">
                            <img
                                src={rose}
                                alt="Blackpink Rose"
                                className="h-80 w-196 max-w-full rounded-2xl object-cover"
                            />
                            <p className="mt-5 text-[14px] text-center font-semibold uppercase tracking-[0.24em] text-zinc-900">
                                PARK ROSÉ
                            </p>
                        </div>
                        
                        {/* lisa */}
                        <div className="rounded-3xl border border-zinc-900 bg-[#f8e5e5] p-5">
                            <img
                                src={lisa}
                                alt="Blackpink Lisa"
                                className="h-80 w-196 max-w-full rounded-2xl object-cover"
                            />
                            <p className="mt-5 text-[14px] text-center font-semibold uppercase tracking-[0.24em] text-zinc-900">
                                LISA MANOBAL
                            </p>
                        </div>
                    </div>
                </section>
                
                <section className="border-y border-zinc-900 bg-[#f5b9c9] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                    <div className="mb-6">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                            Achievements
                        </p>
                        
                        <h2 className="mt-2 text-2xl font-semibold text-zinc-900">The BLACKPINK Era: Record-Breaking Journey</h2>
                        </div>
                        <div className="grid gap-4 md:grid-cols-3">

                            {/* feature card 1 */}
                            <article className="rounded-3xl border border-zinc-900 bg-[#f8e5e5] p-4">
                                <div className="flex aspect-4/3 items-center justify-center rounded-2xl bg-zinc-100">
                                <img
                                src={boombayah}
                                alt="Boombayah"
                                className="h-87 w-196 max-w-full rounded-2xl object-cover"
                            />
                        </div>
                        
                        <h3 className="mt-4 text-lg font-semibold text-zinc-900">Blackpink Is First K-Pop Girl Group to Debut on Canadian Hot 100</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Blackpink is the first K-pop girl group to debut on Canadian Hot 100 thanks to new single 'Playing With Fire.' 
                            <br></br>
                            <br></br>
                            By <b>Jeff Benjamin</b>
                            
                        </p>
                        
                        <Button className="mt-4" variant="primary">
                            View More
                        </Button>
                    </article>
                    
                    {/* feature card 2 */}
                    <article className="rounded-3xl border border-zinc-900 bg-[#f8e5e5] p-4">
                        <div className="flex aspect-4/3 items-center justify-center rounded-2xl bg-zinc-100">
                        <img
                                src={duddu}
                                alt="Duddu"
                                className="h-87 w-196 max-w-full rounded-2xl object-cover"
                            />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-zinc-900">BLACKPINK Makes K-Pop History on Hot 100, Billboard 200 & More With ‘DDU-DU DDU-DU’</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-600">
                        BLACKPINK makes history on Billboard's charts, as, among other feats, the all-female quartet debuts the highest-charting hit ever...
                        <br></br>
                        <br></br>
                        By <b>Xander Zellner</b>
                    </p>
                    
                    <Button className="mt-4" variant="primary">View More</Button>
                    </article>
                    
                    {/* feature card 3 */}
                    <article className="rounded-3xl border border-zinc-900 bg-[#f8e5e5] p-4">
                        <div className="flex aspect-4/3 items-center justify-center rounded-2xl bg-zinc-100">
                        <img
                                src={ytmillion}
                                alt="YTMillion"
                                className="h-87 w-196 max-w-full rounded-2xl object-cover"
                            />
                        </div>
                        
                        <h3 className="mt-4 text-lg font-semibold text-zinc-900">Blackpink Hits New K-Pop YouTube Record With 20 Million Subscribers</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Blackpink just reached another milestone on their road to total pop culture domination. On Thursday (March 21), YouTube...
                            <br></br>
                            <br></br>
                            By <b>Glenn Rowley</b>
                        </p>
                        <Button className="mt-4" variant="primary">
                            View More
                        </Button>
                    </article>
                </div>
            </section>
            
            <footer className="border-t border-zinc-900 bg-[#f8e5e5] px-4 py-6 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="text-sm text-zinc-500">© 2026 BLACKPINK Area. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;