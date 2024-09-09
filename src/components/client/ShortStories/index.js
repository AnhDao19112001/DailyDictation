import { Link } from "react-router-dom"
import "./ShortStories.css"
const ShortStories = () => {
    return (
        <>
            <div className="container short-stories">
                <nav>
                    <Link href="#">All topics</Link> / Short Stories
                </nav>
                <header className="header-stories">
                    <h1>Short Stories</h1>
                    <div className="search-bar">
                        <input type="text" placeholder="Search" />
                        <button>OK</button>
                    </div>
                </header>
                <main>
                    <ul className="story-list">
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
                        <li>
                            <Link href="#">6. My first pet</Link>
                        </li>
                        <li>
                            <Link href="#">7. Jennifer the firefighter</Link>
                        </li>
                        <li>
                            <Link href="#">8. Mark's big game</Link>
                        </li>
                        <li>
                            <Link href="#">9. The Easter Egg Hunt</Link>
                        </li>
                        <li>
                            <Link href="#">10. The Easter Egg Hunt</Link>
                        </li>
                        <li>
                            <Link href="#">11. Summer vacation</Link>
                        </li>
                        <li>
                            <Link href="#">12. Cleaning up leaves</Link>
                        </li>
                        <li>
                            <Link href="#">13. Susan's wedding day</Link>
                        </li>
                        <li>
                            <Link href="#">14. Remembrance Day</Link>
                        </li>
                        <li>
                            <Link href="#">15. Halloween Night</Link>
                        </li>
                        <li>
                            <Link href="#">16. Christmas Eve</Link>
                        </li>
                        <li>
                            <Link href="#">17. Thanksgiving</Link>
                        </li>
                        <li>
                            <Link href="#">18. Learning how to drive</Link>
                        </li>
                        <li>
                            <Link href="#">19. Housework</Link>
                        </li>
                        <li>
                            <Link href="#">20. Housework</Link>
                        </li>
                        <li>
                            <Link href="#">21. Daily schedule</Link>
                        </li>
                        <li>
                            <Link href="#">22. Meals</Link>
                        </li>
                        <li>
                            <Link href="#">23. Seasons</Link>
                        </li>
                        <li>
                            <Link href="#">24. Weather</Link>
                        </li>
                        <li>
                            <Link href="#">25. House</Link>
                        </li>
                        <li>
                            <Link href="#">26. School</Link>
                        </li>
                        <li>
                            <Link href="#">27. Subjects</Link>
                        </li>
                        <li>
                            <Link href="#">28. International students</Link>
                        </li>
                        <li>
                            <Link href="#">29. Interests and hobbies</Link>
                        </li>
                    </ul>
                </main>
            </div>

        </>
    )
}
export default ShortStories;