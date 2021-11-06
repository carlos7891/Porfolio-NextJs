import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGoogle, faInstagramSquare, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

    return (
        <footer id="footer" className="bg-gray-900 pt-6 pb-2 text-white mt-20">
            <div className="">
                <ul className="flex flex-wrap md:flex-wrap-reverse justify-center">
                    {/* <li>
                        <a className="text-white hover:text-blue-600 text-3xl p-2" href="https://www.facebook.com/carlos.a.espinosa"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                    </li> */}
                    <li>
                        <a className="text-white hover:text-blue-600 text-3xl p-2" href="https://contacts.google.com/person/c5350580638821619309?hl=es-419"><FontAwesomeIcon icon={faGoogle} /></a>
                    </li>
                    {/* <li>
                        <a className="text-white hover:text-blue-600 text-3xl p-2" href="https://www.instagram.com/carlos07081/"><FontAwesomeIcon icon={faInstagramSquare} /></a>
                    </li> */}
                    <li>
                        <a className="text-white hover:text-blue-600 text-3xl p-2" href="https://www.linkedin.com/in/carlos-espinosa-39b329195/"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </li>
                    <li>
                        <a className="text-white hover:text-blue-600 text-3xl p-2" href="https://github.com/carlos7891"><FontAwesomeIcon icon={faGithub} /></a>
                    </li>
                </ul>







                {/* <section className="">
                    <a className="" href="https://www.facebook.com/carlos.a.espinosa" role="button"
                    ><i className="fab fa-facebook"></i
                    ></a>

                    <a className="" href="https://contacts.google.com/person/c5350580638821619309?hl=es-419" role="button"
                    ><i className="fab fa-google"></i
                    ></a>

                    <a className="" href="https://www.instagram.com/carlos07081/" role="button"
                    ><i className="fab fa-instagram"></i
                    ></a>

                    <a className="" href="https://www.linkedin.com/in/carlos-espinosa-39b329195/" role="button"
                    ><i className="fab fa-linkedin-in"></i
                    ></a>

                    <a className="" href="https://github.com/carlos7891" role="button"
                    ><i className="fab fa-github"></i
                    ></a>
                </section> */}
            </div>
            <div className="text-center text-white p-2 bg-dark">
            © 2021 Copyright: Carlos Andres Espinosa
            </div>
        </footer>
    )
}

export default Footer
