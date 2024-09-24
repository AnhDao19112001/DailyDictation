import "./TopicList.css"
import { getTopicList } from "../../../services/topicService"
import { useEffect, useState } from "react"
import TopicItem from "./TopicItem"
const TopicList = () => {
    const [topicList, setTopicList] = useState([]);
    const fetchApi = async () => {
        const topicList = await getTopicList();
        setTopicList(topicList.topics);
    }
    useEffect(() => {
        fetchApi();
    }, [])
    return (
        <section className="all-topics">
            <div className="container">
                <h2>All Topics</h2>
                <div className="topics-grid">
                    <TopicItem topicList={topicList} />
                </div>
            </div>
        </section>

    )
}
export default TopicList