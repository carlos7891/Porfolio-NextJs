import {experiences} from '../profile'

const Experiences = () => {
    return (
        <div className="text-white flex flex-col items-center">
            <h1 className="flex justify-center text-lg md:text-2xl font-semibold mt-5 ">Experience</h1>
            <div className="text-white mt-5 rounded-lg max-w-sm border border-gray-700 border-rounded">
                <img className="rounded-t-lg" src="otacc.jpg" alt="" />
                {
                    experiences.map(({title, description, from, to}, i) => (
                    <div className="p-5" key={i}>
                        <h3 className="text-white font-semibold text-xl tracking-tight mb-2">{title}</h3>
                        <h4 className="font-semibold text-sm text-white mb-3">{from}-{to}</h4>
                        <p className="font-normal text-white mb-3">{description}</p>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Experiences
