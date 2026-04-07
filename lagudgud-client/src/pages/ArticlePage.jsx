import Button from "../components/Button";
import lasvegas from "../assets/lasvegas.jpg"
import frankies from "../assets/frankies.jpg"
import kdrama from "../assets/kdrama.jpg"
import ambassador from "../assets/ambassador.jpg"

const ArticlePage = () => {
    return (
        <div className="flex w-full flex-col gap-6">
            <section className="border-y-2 border-zinc-900 bg-[#f5b9c9] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                    BP Articles
                </p>
                <h1 className="max-w-xl font-bold leading-tight text-zinc-900 sm:text-4xl">
                    Born Pink Diaries
                </h1>
                <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
                    Connecting the global pink ocean through exclusive stories, member updates, and the latest news.
                </p>
                <div className="mt-6">
                    <Button to="/" >
                        Back Home
                    </Button>
                </div>
            </section>

            <section className="border-y-2 border-zinc-900 bg-[#f5b9c9] px-4 py-6 sm:px-6 sm:py-6 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Featured BP Articles
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-zinc-900">As If It's Your Last</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

                    {/* article 01 */}
                    <article className="rounded-3xl border-2 border-zinc-900 bg-[#f8e5e5] p-4">
                        <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
                            <img 
                                src={lasvegas}
                                alt="Las Vegas"
                                className="h-62 w-196 max-w-full rounded-2xl object-cover"
                            />
                        </div>

                        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Article 01
                        </p>

                        <h3 className="mt-2 text-lg font-semibold text-zinc-900">Blackpink’s Lisa to make history as first K-pop artist to hold Las Vegas residency.</h3>

                        <p className="mt-3 text-sm leading-5 text-zinc-600">
                            Lisa is set to become the first K-pop artist to hold a Las Vegas residency, with ‘Viva La Lisa’ taking place at The Colosseum at Caesars...
                        </p>

                        <Button className="mt-7">Read More</Button>
                    </article>

                    {/* article 02 */}
                    <article className="rounded-3xl border-2 border-zinc-900 bg-[#f8e5e5] p-4">
                        <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
                            <img 
                                src={frankies}
                                alt="Frankies"
                                className="h-62 w-196 max-w-full rounded-2xl object-cover"
                            />
                            </div>

                        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Article 02
                        </p>

                        <h3 className="mt-2 text-lg font-semibold text-zinc-900">Jennie x Frankies Pure Summer Vibes</h3>

                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Jennie is bringing her world to the beach. The BLACKPINK superstar and global fashion icon has teamed up with Los Angeles...
                        </p>
                        <br></br>
                        
                        <Button className="mt-12 ">Read More</Button>
                        
                    </article>

                    {/* article 03 */}
                    <article className="rounded-3xl border-2 border-zinc-900 bg-[#f8e5e5] p-4">
                        <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
                            <img 
                                src={kdrama}
                                alt="Kdrama"
                                className="h-62 w-196 max-w-full rounded-2xl object-cover"
                            />
                        </div>

                        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Article 03
                        </p>

                        <h3 className="mt-2 text-lg font-semibold text-zinc-900">BLACKPINK Jisoo's Netflix Show 'Boyfriend on Demand' Claims No. 1 Spot Worldwide</h3>

                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            BLACKPINK member Jisoo's new Netflix romantic comedy series "Boyfriend on Demand" has climbed to No. 1 on the streamer's...
                        </p>

                        <Button className="mt-4">Read More</Button>
                    </article>

                    {/* article 04 */}
                    <article className="rounded-3xl border-2 border-zinc-900 bg-[#f8e5e5] p-4">
                        <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
                            <img 
                                src={ambassador}
                                alt="Ambassador"
                                className="h-62 w-196 max-w-full rounded-2xl object-cover"
                            />
                        </div>

                        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Article 04
                        </p>

                        <h3 className="mt-2 text-lg font-semibold text-zinc-900">BLACKPINK's Rosé scores newest global ambassadorship with 'Levi's'</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            BLACKPINK's Rosé has landed her latest global ambassadorship, this time with 'Levi's'. 
                        </p>
                        <Button className="mt-17">Read More</Button>
                    </article>
                </div>
            </section>
        </div>
    );
};


export default ArticlePage;