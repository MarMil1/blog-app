import './blogArticle.css'
import { Link } from 'react-router-dom'

export default function BlogArticle({ article }) {
    const publicFolder = "http://localhost:5000/images/";
    return (
        <div className="article">
            {!article.image ? 
                (<img 
                    className="articleImage"
                    src="https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    alt=""
                />) 
                :
                (<img 
                    className="articleImage"
                    src={publicFolder + article.image}
                    alt=""
                />)
            }
            
            <div className="articleInfo">
                <div className="articleCategories">{
                    article.categories.map((cat) => (
                        <span className="articleCategory">{cat.name}</span>
                    ))}
                </div>
                <Link to={`/article/${article._id}`} className="link">
                    <span className="articleTitle">{article.title}</span>
                </Link>
                <hr/>
                <span className="articleDate">{new Date(article.createdAt).toDateString()}</span>
            </div>
            <p className="articleDescription">
                {article.description}
            </p>
        </div>
    )
}
