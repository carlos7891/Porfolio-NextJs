import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({children}) => {
    return (
        <div className=" bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 ..." >
            <Navbar />
            <main className="w-72 md:w-3/4 ... m-auto">
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout
