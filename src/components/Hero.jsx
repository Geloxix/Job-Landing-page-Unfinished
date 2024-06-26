const Hero = () => {
    return (
        <section>
            <div className="bg-indigo-700 py-20 mb-4 dark:bg-zinc-900 dark:text-white">
                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
                >
                    <div className="text-center">
                        <h1
                            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl font-montserrat dark:drop-shadow-xl dark:text-indigo-500"
                        >
                            Become a React Dev
                        </h1>
                        <p className="my-4 text-xl text-white font-montserrat">
                            Find the React job that fits your skills and needs
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;