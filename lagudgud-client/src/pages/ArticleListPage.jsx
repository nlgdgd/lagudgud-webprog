import Button from '../components/Button';
import ArticleList from '../components/ArticleList';
import articles from '../assets/article-content.js';

const ArticleListPage = () => {
    return (
    <div className="flex w-full flex-col gap-6">
        <section className="border-y-2 border-zinc-900 bg-[#f5b9c9] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-black">
                BP Articles
                </p>
                
                <h1 className="max-w-xl text-3xl font-bold leading-tight text-black sm:text-4xl">
                    Born Pink Diaries
                    </h1>
                    
                    <p className="mt-4 max-w-lg text-sm leading-7 text-black sm:text-base">
                        Connecting the global pink ocean through exclusive stories,
                        member updates, and the latest news.
                        </p>
                        
                        <div className="mt-6">
                            <Button to="/">Back Home</Button>
                            </div>
                            
        </section>

        <section className="border-y-2 border-zinc-900 bg-[#f5b9c9] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
            <div className="mb-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black">
                    BP Featured Articles
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-black"> As If It's Your Last </h2>
            </div>

            <ArticleList articles={articles} />

        </section>

        <footer className="border-t border-zinc-900 bg-[#f8e5e5] px-4 py-6 sm:px-6 lg:px-8">
            <div className="text-center">
                <p className="text-sm text-zinc-500">© 2026 BLACKPINK Area. All rights reserved.</p>
            </div>
        </footer>
    </div>
    );
}

export default ArticleListPage;