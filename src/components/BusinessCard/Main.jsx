import EmailIcon from "../../assets/mail-icon.png"
import LinkedInIcon from  "../../assets/Vector.png"

export default function Main() {
    return (
        <div className="bsn--main--container">
            <div className="bsn--main--header">
                <h1>Rashad Khan</h1>
                <p>Full Stack Developer</p>
                {/* <small>rashad.website</small> */}
            </div>
            <div className="bsn--interaction">
                <a href="mailto:rashadkhan359@gmail.com" className="bsn--i--button email">
                    <img src={EmailIcon} alt="Email Icon" />
                    Email
                </a>
                <a href="www.linkedin.com/in/rashad-khan-062107120" className="bsn--i--button linkedin">
                    <img src={LinkedInIcon} alt="LinkedIn" />
                    LinkedIn
                </a>
            </div>

            <div className="bsn--content">
                <h3>About</h3>
                <p>I am a Full-Stack Developer with expertise in React and Laravel, crafting efficient, secure applications. With nearly two years of experience, I’ve led diverse projects, optimized performance, and enhanced client satisfaction. Skilled in API development and Agile workflows, I’m committed to delivering high-quality solutions that meet user needs and am always looking for new things to learn.</p>
            </div>
            <div className="bsn--content">
                <h3>Interests</h3>
                <p>Sketching. Painting. Foodie. Music. Internet fanatic. Travel geek. Tea fanatic.</p>
            </div>
        </div>
    )
}
