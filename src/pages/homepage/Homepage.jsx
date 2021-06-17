import './homepage.css'
import Header from '../../components/header/Header'
import BlogArticles from '../../components/blog-articles/BlogArticles'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Homepage() {
    return (
        <>
            <Header />
            <div className="homepage">
                <BlogArticles />
                <Sidebar />
            </div>
        </>
    )
}
