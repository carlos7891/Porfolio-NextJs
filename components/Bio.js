

const Bio = () => {
    return (
        <div className="text-white mt-10 flex flex-col items-center">
            <h1 className="flex justify-center text-lg md:text-2xl font-semibold mt-5 mb-5">Biography</h1>
            <div className="grid grid-cols-3 divide-x-4
                    divide-blue-600 divide-dotted items md:w-10/12">
                <div className="flex flex-col mb-2 text-center">
                    <span className="font-bold">1991</span>
                    <span className="text-sm">Born in <br/>Bucaramanga, <br/>Colombia.</span>
                </div>
                <div className="flex flex-col mb-2 text-center">
                    <span className="font-bold">2015</span>
                    <span className="text-sm">Bachelor of science:<br/> Petroleum Engineer.</span>
                </div>
                <div className="flex flex-col mb-2 text-center">
                    <span className="font-bold">2021</span>
                    <span className="text-sm">MisionTic 2021:<br/>  Junior Developer.</span>
                </div>
            </div>
        </div>
    )
}

export default Bio
