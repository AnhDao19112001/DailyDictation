import { Link } from "react-router-dom"
const AvailableItem = (props) => {
    return (
        <>
            {
                props.data.map((item, index) => (
                    <div className="exercise-column" key={index}>
                        {
                            item.map((topic, index) => (
                                <div className="exercise-item" key={index}>
                                    <h3>
                                        <Link href="#">{topic.name}</Link>
                                    </h3>
                                    <p>
                                        {topic.text}
                                    </p>
                                    <ul>
                                        {
                                            topic.exercises.map((exercise, index) => (
                                                <li key={index}>
                                                    <Link to={`/listen-and-type/${exercise.id}`}>{exercise.title}</Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <Link to={`/topic/${topic.id}`} className="view-all">
                                        View all
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </>
    )
}
export default AvailableItem;