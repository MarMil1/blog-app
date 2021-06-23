import './singleArticleComponent.css';
import { useLocation } from 'react-router';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

export default function SingleArticleComponent() {
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [article, setArticle] = useState({});
    const publicFolder = "http://localhost:5000/images/";
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const fetchArticle = async () => {
            const res = await axios.get("/articles/" + path);
            setArticle(res.data);
        }
        fetchArticle();
    }, [path]);

    const handleDelete = async () => {
        try {
            await axios.delete(`/articles/${article._id}`, {
                data: { username: user.username }
            });
            window.location.replace("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="singleArticleComponent">
            <div className="singleArticleComponentWrapper">
                {article.image && (
                    <img 
                        className="singleArticleComponentImage"
                        src={publicFolder + article.image} 
                        alt="" 
                    />
                )}
                {
                    updateMode ? <input 
                                    type="text" 
                                    value={article.title} 
                                    className="singleArticleComponentTitleInput"
                                    autoFocus
                                /> : (

                        <h1 className="singleArticleComponentTitle">
                            {article.title}
                            {article.username === user?.username && (
                                <div className="singleArticleComponentEdit">
                                    <i 
                                        className="singleArticleComponentIcon far fa-edit"  
                                        onClick={() => setUpdateMode(true)}
                                    ></i>
                                    <i 
                                        className="singleArticleComponentIcon far fa-trash-alt" 
                                        onClick={handleDelete}
                                    ></i>
                                </div>
                            )}
                        </h1> 
                    )
                }
                <div className="singleArticleComponentInfo">
                    <span className="singleArticleComponentAuthor">
                        Author: 
                        <Link to={`/?user=${article.username}`} className="link">
                            <b>{article.username}</b>
                        </Link>
                    </span>
                    <span className="singleArticleComponentDate">{new Date(article.createdAt).toDateString()}</span>
                </div>
                {updateMode ? (
                    <textarea className="singleArticleComponentContentInput"/>
                ) : (
                    <p className="singleArticleComponentContent">
                        {article.description}
                    </p>
                )}
                
            </div>
        </div>
    )
}
