import Sidebar from '../../components/sidebar/Sidebar'
import SingleArticleComponent from '../../components/single-article-component/SingleArticleComponent'
import './singleArticle.css'

export default function SingleArticle() {
    return (
        <div className="singleArticle">
            <SingleArticleComponent />
            <Sidebar />
        </div>
    )
}
