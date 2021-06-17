import './blogArticle.css'

export default function BlogArticle() {
    return (
        <div className="article">
            <img 
                className="articleImage"
                src="https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt=""
            />
            <div className="articleInfo">
                <div className="articleCategories">
                    <span className="articleCategory">Music</span>
                    <span className="articleCategory">Life</span>
                </div>
                <span className="articleTitle">
                    Lorem ipsum dolor sit
                </span>
                <hr/>
                <span className="articleDate">1 ago ago</span>
            </div>
            <p className="articleDescription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Minus veniam dolorum amet ducimus tempore iure unde 
                voluptas vitae voluptatibus, ipsam esse rerum maiores 
                tempora similique facere voluptatum nulla nisi ut?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Minus veniam dolorum amet ducimus tempore iure unde 
                voluptas vitae voluptatibus, ipsam esse rerum maiores 
                tempora similique facere voluptatum nulla nisi ut?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Minus veniam dolorum amet ducimus tempore iure unde 
                voluptas vitae voluptatibus, ipsam esse rerum maiores 
                tempora similique facere voluptatum nulla nisi ut?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Minus veniam dolorum amet ducimus tempore iure unde 
                voluptas vitae voluptatibus, ipsam esse rerum maiores 
                tempora similique facere voluptatum nulla nisi ut?
            </p>
        </div>
    )
}
