import { Link } from "react-router-dom";
import "./AvailableExercises.css";
const AvailableExercises = () => {
    return (
        <section className="available-exercises">
            <div className="container">
                <h2>Available Exercises</h2>
                <p className="intro-text">
                    Explore a variety of exercises designed to improve your English skills
                    across different topics.
                </p>
                <div className="exercise-columns">
                    <div className="exercise-column">
                        <div className="exercise-item">
                            <h3>
                                <Link href="#">Short Stories</Link>
                            </h3>
                            <p>
                                A collection of audio articles introducing culture, people, places,
                                historical events, and daily life in English-speaking countries,
                                especially Canada and America.
                            </p>
                            <ul>
                                <li>
                                    <Link to="/topic/short-stories/first-snowfall">1. First snowfall</Link>
                                </li>
                                <li>
                                    <Link href="#">2. Jessica's first day of school</Link>
                                </li>
                                <li>
                                    <Link href="#">3. My flower garden</Link>
                                </li>
                                <li>
                                    <Link href="#">4. Going camping</Link>
                                </li>
                                <li>
                                    <Link href="#">5. My house</Link>
                                </li>
                            </ul>
                            <Link to="/all-exercises/short-stories" className="view-all">
                                View all
                            </Link>
                        </div>
                        <div className="exercise-item">
                            <h3>
                                <Link href="#">TOEIC Listening</Link>
                            </h3>
                            <p>
                                In this section, there are a lot of conversations and short talks in
                                everyday life and at work. Let's practice and improve your English
                                communication skills!
                            </p>
                            <ul>
                                <li>
                                    <Link href="#">Conversation 1</Link>
                                </li>
                                <li>
                                    <Link href="#">Conversation 2</Link>
                                </li>
                                <li>
                                    <Link href="#">Conversation 3</Link>
                                </li>
                                <li>
                                    <Link href="#">Conversation 4</Link>
                                </li>
                                <li>
                                    <Link href="#">Short Talk 1</Link>
                                </li>
                                <li>
                                    <Link href="#">Short Talk 2</Link>
                                </li>
                                <li>
                                    <Link href="#">Short Talk 3</Link>
                                </li>
                                <li>
                                    <Link href="#">Short Talk 4</Link>
                                </li>
                            </ul>
                            <Link href="#" className="view-all">
                                View all
                            </Link>
                        </div>
                        <div className="exercise-item">
                            <h3>
                                <Link href="#">IELTS Listening</Link>
                            </h3>
                            <p>
                                Listening to IELTS recordings will help you learn a lot of
                                vocabulary and expressions about everyday conversations &amp;
                                academic talks. These recordings are mainly in British and
                                Australian accents.
                            </p>
                            <ul>
                                <li>
                                    <Link href="#">IELTS Cambridge 17 - Test 1 - Part 1</Link>
                                </li>
                                <li>
                                    <Link href="#">IELTS Cambridge 17 - Test 1 - Part 2</Link>
                                </li>
                                <li>
                                    <Link href="#">IELTS Cambridge 17 - Test 1 - Part 3</Link>
                                </li>
                                <li>
                                    <Link href="#">IELTS Cambridge 17 - Test 1 - Part 4</Link>
                                </li>
                                <li>
                                    <Link href="#">IELTS Cambridge 17 - Test 2 - Part 1</Link>
                                </li>
                                <li>
                                    <Link href="#">IELTS Cambridge 17 - Test 2 - Part 2</Link>
                                </li>
                                <li>
                                    <Link href="#">IELTS Cambridge 17 - Test 2 - Part 3</Link>
                                </li>
                                <li>
                                    <Link href="#">IELTS Cambridge 17 - Test 2 - Part 4</Link>
                                </li>
                            </ul>
                            <Link href="#" className="view-all">
                                View all
                            </Link>
                        </div>
                        <div className="exercise-item">
                            <h3>
                                <Link href="#">Spelling Names</Link>
                            </h3>
                            <p>
                                Let's learn and practice the English alphabet by spelling some
                                common English names.
                            </p>
                            <ul>
                                <li>
                                    <Link href="#">Female Names</Link>
                                </li>
                                <li>
                                    <Link href="#">Male Names</Link>
                                </li>
                                <li>
                                    <Link href="#">Last Names</Link>
                                </li>
                                <li>
                                    <Link href="#">Animal Names</Link>
                                </li>
                            </ul>
                            <Link href="#" className="view-all">
                                View all
                            </Link>
                        </div>
                    </div>
                    <div className="exercise-column">
                        <div className="exercise-item">
                            <h3>
                                <Link href="#">Daily Conversations</Link>
                            </h3>
                            <p>
                                Short and fun English conversations in common situations you may
                                experience in daily life.
                            </p>
                            <ul>
                                <li>
                                    <Link href="#">1. At home (1)</Link>
                                </li>
                                <li>
                                    <Link href="#">2. At home (2)</Link>
                                </li>
                                <li>
                                    <Link href="#">3. My Favorite Photographs (1)</Link>
                                </li>
                                <li>
                                    <Link href="#">4. Location</Link>
                                </li>
                                <li>
                                    <Link href="#">5. Location (2)</Link>
                                </li>
                            </ul>
                            <Link href="#" className="view-all">
                                View all
                            </Link>
                        </div>
                        <div className="exercise-item">
                            <h3>
                                <Link href="#">YouTube</Link>
                            </h3>
                            <p>
                                Are you bored with English lessons for students? Let's learn real
                                English from YouTube videos that native speakers watch and enjoy!
                            </p>
                            <ul>
                                <li>
                                    <Link href="#">The Egg - Short Story</Link>
                                </li>
                                <li>
                                    <Link href="#">The Art of Balancing Stones</Link>
                                </li>
                                <li>
                                    <Link href="#">Why Boredom is Good For You</Link>
                                </li>
                                <li>
                                    <Link href="#">Why Do Tumbleweeds Tumble?</Link>
                                </li>
                                <li>
                                    <Link href="#">Wolf Pack Hunts A Hare</Link>
                                </li>
                                <li>
                                    <Link href="#">How can you tell if a plant is poisonous?</Link>
                                </li>
                                <li>
                                    <Link href="#">Leonardo da Vinci</Link>
                                </li>
                                <li>
                                    <Link href="#">How Orange Juice Is Made in Factories</Link>
                                </li>
                            </ul>
                            <Link href="#" className="view-all">
                                View all
                            </Link>
                        </div>
                        <div className="exercise-item">
                            <h3>
                                <Link href="#">TOEFL Listening</Link>
                            </h3>
                            <p>
                                TOEFL listening recordings are academic conversations &amp;
                                lectures, mainly in American English. These recordings will help you
                                to get better preparation if you are planning to study in an
                                English-speaking country, especially the US and Canada.
                            </p>
                            <ul>
                                <li>
                                    <Link href="#">TOEFL Conversation 1</Link>
                                </li>
                                <li>
                                    <Link href="#">TOEFL Lecture 1</Link>
                                </li>
                                <li>
                                    <Link href="#">TOEFL Conversation 2</Link>
                                </li>
                                <li>
                                    <Link href="#">TOEFL Lecture 2</Link>
                                </li>
                                <li>
                                    <Link href="#">TOEFL Conversation 3</Link>
                                </li>
                                <li>
                                    <Link href="#">TOEFL Lecture 3</Link>
                                </li>
                                <li>
                                    <Link href="#">TOEFL Conversation 4</Link>
                                </li>
                                <li>
                                    <Link href="#">TOEFL Lecture 4</Link>
                                </li>
                            </ul>
                            <Link href="#" className="view-all">
                                View all
                            </Link>
                        </div>
                        <div className="exercise-item">
                            <h3>
                                <Link href="#">Numbers</Link>
                            </h3>
                            <p>
                                Let's improve your ability to understand English numbers when they
                                are spoken quickly by an American.
                            </p>
                            <ul>
                                <li>
                                    <Link href="#">Phone numbers</Link>
                                </li>
                                <li>
                                    <Link href="#">Numbers (1)</Link>
                                </li>
                                <li>
                                    <Link href="#">Numbers (2)</Link>
                                </li>
                                <li>
                                    <Link href="#">Numbers (3)</Link>
                                </li>
                                <li>
                                    <Link href="#">Numbers (4)</Link>
                                </li>
                            </ul>
                            <Link href="#" className="view-all">
                                View all
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default AvailableExercises