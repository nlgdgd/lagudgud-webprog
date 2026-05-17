import { Link } from 'react-router-dom';
import Button from './Button';

const ArticleList = ({ articles }) => {
    return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {articles.map((article, index) => (
            <article key={article.name} className="flex flex-col rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
                <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
                <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
                <img 
                    src={article.image}
                    alt={article.title}
                    className="h-62 w-196 max-w-full rounded-2xl object-cover"
                />
                </div>
          </div>

          
          
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-black">
            Article {String(index + 1).padStart(2, '0')}
            </p>
            
            <h3 className="mt-2 text-lg text-justify pt-2 pb-2 font-semibold text-black">{article.title}</h3>
            <p className="mt-3 text-sm text-justify indent-1.5 m-1 leading-6 text-black">
                {article.content[0].substring(0, 150)}...
                </p>
                
                <div className="mt-auto pt-4">
                    <Link to={`/articles/${article.name}`}>
                        <Button className="mt-4 rounded-full bg-[#FFA6C9] px-2.5 py-2 transition-all duration-300 hover:-translate-y-1.5 active:translate-y-0.5 active:shadow-lg" variant="tertiary">
                            Read More
                        </Button>
                    </Link>
                </div>
            </article>
        ))}
    </div>
  );
};

export default ArticleList;