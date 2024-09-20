import { Link } from "react-router-dom"
const TopicItem = (props) => {
    return (
        <>
            {
                props.topicList.map((item, index) => (
                    <div className="topic-item" key={index}>
                        <img
                            src="https://teachnouvelle.com/wp-content/uploads/2021/11/short-stories-for-secondary-ela-roundup-cover-1.jpg"
                            alt={item.name}
                        />
                        <div className="topic-info">
                            <h3>
                                <Link to={`/topic/${item.id}`}>{item.name}</Link>
                            </h3>
                            <p>
                                Level: <span className="level medium">Medium</span>
                            </p>
                            <p>290 lessons</p>
                        </div>
                    </div>
                ))
            }

        </>
    )
}
export default TopicItem;