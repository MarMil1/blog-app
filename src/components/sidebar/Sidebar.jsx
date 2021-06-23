import axios from 'axios';
import { useEffect, useState } from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            const res = await axios.get("/categories");
            setCategories(res.data);
        }
        getCategories();
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    className="sidebarImage" 
                    src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    alt=""    
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate beatae 
                    deleniti, eius ipsam quia nemo architecto doloribus minima eaque quis ullam 
                    ut! Hic quasi maxime eius ducimus temporibus asperiores accusantium?
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {categories.map(cat => (
                        <Link to={`/?cat=${cat.name}`} className="link">
                            <li className="sidebarListItem">{cat.name}</li>
                        </Link>
                    ))}
                    
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook"></i>
                <i className="sidebarIcon fab fa-twitter"></i>
                <i className="sidebarIcon fab fa-pinterest"></i>
                <i className="sidebarIcon fab fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}
