import Twitter from "../../assets/twitter-icon.png"
import Facebook from "../../assets/facebook-icon.png"
import Instagram from "../../assets/instagram-icon.png"
import GitHub from "../../assets/github-icon.png"

export default function Footer() {
    return (
        <footer className="bsncard--footer">
            <div className="bsncard--footer--list">
                <a href="https://x.com/rdkcodes" className="bsncard--footer-list-items"><img src={Twitter} alt="Twitter Icon" className="footer--icon" /></a>
                <a href="https://www.facebook.com/RDK.007/" className="bsncard--footer-list-items"><img src={Facebook} alt="Facebook Icon" className="footer--icon" /></a>
                <a href="https://www.instagram.com/rashadkhan007/" className="bsncard--footer-list-items"><img src={Instagram} alt="Instagram Icon" className="footer--icon" /></a>
                <a href="https://github.com/rashadkhan359" className="bsncard--footer-list-items"><img src={GitHub} alt="GitHub Icon" className="footer--icon" /></a>
            </div>
        </footer>
    )
}
