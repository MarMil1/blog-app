import './sidebar.css'

export default function Sidebar() {
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
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
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
