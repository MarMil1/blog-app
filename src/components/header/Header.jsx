import './header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img 
                className="headerImage" 
                src="https://images.pexels.com/photos/1320674/pexels-photo-1320674.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                alt=""
            />
        </div>
    )
}
