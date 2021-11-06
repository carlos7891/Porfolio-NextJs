import {experiences} from '../profile'

const Experiences = () => {
    return (
        <div className="text-white mt-10">
            <h1 className="flex justify-center text-lg md:text-2xl font-semibold mt-5 mb-5">Experience</h1>
                    {
                        experiences.map(({title, description, from, to}, i) => (
                        <div className="" key={i}>
                            <h3 className="">{title}</h3>
                            <h4 className="">{from}-{to}</h4>
                            <p className="">{description}</p>
                        </div>
                        ))
                    }
        </div>
    )
}

export default Experiences
