import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const AboutMe = () => {
    return (
        <div id="aboutme" className="text-white">
            <div className="flex flex-wrap justify-center m-5">
                <h1 className="font-sans font-family:Noto Sans text-3xl md:text-5xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600 mb-4">
                    Welcome To <br />
                    My Personal Portfolio
                </h1>
                <div className="w-3/4 md:w-1/4 m-auto">
                    <img src="profilePhoto.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
                </div>
            </div>
            <div className="items-center flex flex-col">
                <h1 className="text-lg md:text-2xl font-semibold">Carlos Espinosa</h1>
                <h3 className="text-base md:text-xl font-semibold  mb-2"> Junior Developer / Petroleum Engineer  </h3>
                <p className="md:w-3/5">I am junior developer, currently studying on Mision-Tic 2021, I am crazy about programing in any language and learning everyday about how to improve my skills, im looking to focus on one technology.</p>
                <p className="md:w-3/5"> I <FontAwesomeIcon icon={faHeart} /> Sports, Music, Drawing, Playing VideoGames, Football.
                </p>
                {/* <a href="/hireme"> Hire me </a> */}
            </div>
        </div>
    )
}

export default AboutMe
