import { useEffect, useState } from 'react';
import './homepage.css'
import Header from '../../components/header/Header'
import BlogArticles from '../../components/blog-articles/BlogArticles'
import Sidebar from '../../components/sidebar/Sidebar'
import axios from 'axios'
import { useLocation } from 'react-router-dom';

export default function Homepage() {
    const [articles, setArticles] = useState([]);
    const { search } = useLocation();
    
    useEffect(() => {
        const fetchArticles = async () => {
            const res = await axios.get("/articles" + search);
            setArticles(res.data);
        }
        fetchArticles();
    }, [search]);

    return (
        <>
            <Header />
            <div className="homepage">
                <BlogArticles articles={articles}/>
                <Sidebar />
            </div>
        </>
    )
}
