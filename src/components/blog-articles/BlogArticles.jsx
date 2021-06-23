import BlogArticle from '../blog-article/BlogArticle'
import './blogArticles.css'

export default function BlogArticles({ articles }) {
    return (
        <div className="articles">
            {articles.map((art) => (
                <BlogArticle article={art}/>
            ))}
            
        </div>
    )
}
