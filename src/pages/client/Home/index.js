import Introduction from "../../../components/client/Introduction";
import PracticeDictation from "../../../components/client/PracticeDictation";
import DictationList from "../../../components/client/DictationList";
import AvailableExercises from "../../../components/client/AvailableExercises";
import BlogList from "../../../components/client/BlogList";
import FAQ from "../../../components/client/FAQ";
import FeedBack from "../../../components/client/FeedBack";
const Home = () => {
    return (
        <>
            <Introduction />
            <PracticeDictation />
            <DictationList />
            <AvailableExercises />
            <BlogList />
            <FAQ />
            <FeedBack />
        </>
    )
}
export default Home;