import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './navbar.css'

export default function NavBar() {
    const { user, dispatch } = useContext(Context);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <div className="nav">
            <div className="navLeft">
                <i className="navIcon fab fa-facebook"></i>
                <i className="navIcon fab fa-twitter"></i>
                <i className="navIcon fab fa-pinterest"></i>
                <i className="navIcon fab fa-instagram"></i>
            </div>
            <div className="navCenter">
                <ul className="navList">
                    <li className="navListItem"><Link className="link" to="/">HOME</Link></li>
                    <li className="navListItem"><Link className="link" to="/">ABOUT</Link></li>
                    <li className="navListItem"><Link className="link" to="/">CONTACTS</Link></li>
                    <li className="navListItem"><Link className="link" to="/write">WRITE</Link></li>
                    <li className="navListItem" onClick={handleLogout}>
                        {user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="navRight">
                {
                    user ? (
                        <img 
                            className="navImage"
                            src={user.profileImg}
                            alt=""
                        />
                    ) : (
                        <ul className="navList">
                            <li className="navListItem">
                                <Link className="link" to="/login">
                                    LOGIN
                                </Link>
                            </li>
                            <li className="navListItem">
                                <Link className="link" to="/register">
                                    REGISTER
                                </Link>
                            </li>
                        </ul>
                    )
                }
                
                <i className="navSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
