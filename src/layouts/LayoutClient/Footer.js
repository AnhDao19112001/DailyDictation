import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-app-links">
                        <Link href="#">
                            <img
                                src="https://e7.pngegg.com/pngimages/634/320/png-clipart-app-store-apple-google-play-iphone-mid-autumn-lantern-text-logo.png"
                                alt="Download on the App Store"
                            />
                        </Link>
                        <Link href="#">
                            <img
                                src="https://play.google/howplayworks/static/assets/social/share_google_play_logo.png"
                                alt="Get it on Google Play"
                            />
                        </Link>
                    </div>
                    <div className="footer-nav">
                        <div className="footer-column">
                            <Link href="#">Home</Link>
                            <Link href="#">All exercises</Link>
                            <Link href="#">English expressions</Link>
                            <Link href="#">English pronunciation</Link>
                            <Link href="#">FluentPal - English Speaking App</Link>
                            <Link href="#">Download audio files</Link>
                        </div>
                        <div className="footer-column">
                            <Link href="#">Top users</Link>
                            <Link href="#">Latest comments</Link>
                            <Link href="#">
                                Support DailyDictation
                                <span role="img" aria-label="pray">
                                    🙏
                                </span>
                            </Link>
                            <Link href="#">Learning English resources</Link>
                            <Link href="#">Practice German Listening</Link>
                        </div>
                        <div className="footer-column">
                            <Link href="#">Blog</Link>
                            <Link href="#">Contact</Link>
                            <Link href="#">Terms &amp; rules</Link>
                            <Link href="#">Privacy policy</Link>
                        </div>
                    </div>
                    <div className="footer-social">
                        <Link href="#">
                            <i className="fab fa-facebook" /> Like our Facebook
                        </Link>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2024 Daily Dictation. All rights reserved.</p>
                </div>
            </div>
        </footer>

    )
}
export default Footer;