import Button from '../../components/Button';
import debut from '../../assets/debut.jpg'
import squareup from '../../assets/squareup.jpg'
import thealbum from '../../assets/thealbum.jpg'
import pinkvenom from '../../assets/pinkvenom.jpg'
import bornpink from '../../assets/bornpink.jpg'
import award1 from '../../assets/award1.jpg'
import award2 from '../../assets/award2.jpg'
import award3 from '../../assets/award3.jpg'
import award4 from '../../assets/award4.jpg'


const AboutPage = () => {
    return (
        <div className="flex w-full flex-col gap-6 bg-[#f8e5e5]">
            <section className="border-y-2 border-zinc-900 bg-[#f5b9c9] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                    <div className="rounded-3xl border-2 border-dashed border-zinc-900 bg-[#f8e5e5] p-6">
                        <img 
                            src={debut}
                            alt="Blackpink Debut"
                            className="h-90 w-196 max-w-full rounded-2xl object-cover"
                        />
                    </div>

                    <div className="space-y-4 text right lg:text-left">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">Debut Overview</p>
                        <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
                            A South Korean girl group formed by YG Entertainment, consists of four members.
                        </h1>
                            
                            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
                                Blackpink officially debuted on August 8, 2016, with their single album "Square One," featuring the title tracks "Boombayah" and "Whistle.".
                            </p> 
                            
                            <div className="mt-1 flex flex-wrap gap-3">
                                <Button to="/" variant="primary">
                                Back Home
                                </Button>
                                
                                <Button to="/articles">Open Articles</Button>
                                
                            </div>
                    </div>
                </div>
            </section>

<section className="border-y-2 border-zinc-900 bg-[#f5b9c9] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
    <div className="mb-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28cm] text-zinc-500">
            Album Overview
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
                BLACKPINK Albums
            </h2>
    </div>

    {/*square up*/}
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-3xl border-2 border-zinc-900 bg-[#f8e5e5] p-5">
            <p className="text-2xl font-bold text-zinc-900 text-center pb-4">Square Up</p>
            <img 
                src={squareup}
                alt="Square Up"
                className="h-80 w-196 max-w-full rounded-2xl object-cover"
            />

            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.07cm] text-center text-black-500 pt-3">
                <b>Release date:</b> June 15, 2018
            </p>
        </div>

        {/*the album*/}
        <div className="rounded-3xl border-2 border-zinc-900 bg-[#f8e5e5] p-5">
            <p className="text-2xl font-bold text-zinc-900 text-center pb-4">The Album</p>
            <img 
                src={thealbum}
                alt="The Album"
                className="h-80 w-196 max-w-full rounded-2xl object-cover"
            />
            <p className="mt-2 text-[11px] font-semibold text-black-500 uppercase tracking-[0.07cm] text-center pt-3">
                <b>Release date:</b> October 2, 2020
            </p>
        </div>

        {/*pink venom*/}
        <div className="rounded-3xl border-2 border-zinc-900 bg-[#f8e5e5] p-5">
            <p className="text-2xl font-bold text-zinc-900 text-center pb-4">Pink Venom</p>
            <img 
                src={pinkvenom}
                alt="Pink Venom"
                className="h-80 w-196 max-w-full rounded-2xl object-cover"
            />
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.07cm] text-black-500 text-center pt-3">
                <b>Release date:</b> August 19, 2022
            </p>
        </div>

        {/*born pink*/}
        <div className="rounded-3xl border-2 border-zinc-900 bg-[#f8e5e5] p-5">
            <p className="text-2xl font-bold text-zinc-900 text-center pb-4">Born Pink</p>
            <img 
                src={bornpink}
                alt="Born Pink"
                className="h-80 w-196 max-w-full rounded-2xl object-cover"
            />
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.07cm] text-black-500 text-center pt-3">
                <b>Release date:</b> September 16, 2022
            </p>
        </div>
    </div>

    <section className="rounded-3xl border-y-2 border-x-2 bg-[#f8e5e5] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 mt-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                    Awards Overview
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-zinc-900 text-left">BLACKPINK Awards</h2>

                <div className="mt-6 space-y-4">
                    
                    {/* award no. 1 */}
                    <article className="rounded-3xl border-2 border-zinc-900 bg-[#f6f4f2] p-5">
                        <h3 className="text-lg font-semibold text-zinc-900">Asian Pop Music Awards – 2020</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Best Group (Overseas)
                        </p>
                    </article>

                    {/* award no. 2 */}
                    <article className="rounded-3xl border-2 border-zinc-900 bg-[#f6f4f2] p-5">
                        <h3 className="text-lg font-semibold text-zinc-900">APAN Music Awards – 2021</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Best Music Video
                        </p>
                    </article>

                    {/* award no. 3 */}
                    <article className="rounded-3xl border-2 border-zinc-900 bg-[#f6f4f2] p-5">
                        <h3 className="text-lg font-semibold text-zinc-900">Asia Artist Awards – 2022</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            DCM Popularity Award – Female Singer
                        </p>
                    </article>

                    {/* award no. 4 */}
                    <article className="rounded-3xl border-2 border-zinc-900 bg-[#f6f4f2] p-5">
                        <h3 className="text-lg font-semibold text-zinc-900">Billboard Music Awards – 2023</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Top K-Pop Touring Artist
                        </p>
                    </article>

                    {/* award no. 5 */}
                    <article className="rounded-3xl border-2 border-zinc-900 bg-[#f6f4f2] p-5">
                        <h3 className="text-lg font-semibold text-zinc-900">Golden Disc Awards – 2026</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Best Digital Song (Bonsang)
                        </p>
                    </article>

                </div>
            </div>
            
            <div className="rounded-3xl border-2 border-zinc-900 bg-[#f6f4f2] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                    Awards Photo
                </p>

                {/* award photo 1 */}
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                        <img 
                            src={award1}
                            alt="Award Photo 1"
                            className="h-76 w-196 max-w-full rounded-2xl object-cover"
                        />
                    </div>

                    {/* award photo 2 */}
                    <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                        <img 
                            src={award2}
                            alt="Award Photo 2"
                            className="h-76 w-196 max-w-full rounded-2xl object-cover"
                        />
                    </div>

                    {/* award photo 3 */}
                    <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                        <img 
                            src={award3}
                            alt="Award Photo 3"
                            className="h-76 w-196 max-w-full rounded-2xl object-cover"
                        />
                    </div>

                    {/* award photo 4 */}
                    <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                        <img 
                            src={award4}
                            alt="Award Photo 4"
                            className="h-76 w-196 max-w-full rounded-2xl object-cover"
                        />
                    </div>
                </div>
                <Button className="mt-5" variant="primary">View Section</Button>
                </div>
            </div>
        </section>
    </section>
        </div>
        );
}

export default AboutPage;