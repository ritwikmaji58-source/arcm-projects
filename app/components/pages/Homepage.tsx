import Image from "next/image";

export default function Homepage() {
    let imageSrc = "/Images/Construction1.jpg";
    return (
        <>
            <main className="font-sans">
                {/* Hero Section */}
                <div className="">

                </div>
                <section className="min-h-[80vh] flex flex-col gap-10 items-center justify-center text-white text-center px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        ARCM Projects Private Limited
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8">
                        Building your visions into reality.
                    </p>
                    <div className="flex flex-row sm:flex-row gap-5">
                        <a href="mailto:ranjithgsh@gmail.com">
                            <button className="bg-sky-400 text-black px-6 py-3 rounded-md font-medium hover:bg-sky-300 transition">
                                <p className="text-white">Get a quote</p>
                            </button>
                        </a>
                        <a href="/components/pages/Projects">
                            <button className="bg-sky-400 text-black px-6 py-3 rounded-md font-medium hover:bg-sky-300 transition">
                                <p className="text-white">Our Projects</p>
                            </button>
                        </a>
                    </div>
                </section>


                <div className="relative w-full overflow-hidden">
                    {/* SLIDES CONTAINER */}
                    <div className="flex scroll-smooth snap-x snap-mandatory overflow-x-auto">

                        {/* SLIDE 1 */}
                        <div id="slide1" className="w-full flex-shrink-0 snap-center relative">
                            <Image
                                src="/Images/Projectimages/Image1.jpg"
                                width={900}
                                height={500}
                                alt="1"
                                className="w-full"
                            />

                            {/* BUTTONS */}
                            <a
                                href="#slide3"
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded"
                            >
                                ‹
                            </a>

                            <a
                                href="#slide2"
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded"
                            >
                                ›
                            </a>
                        </div>

                        {/* SLIDE 2 */}
                        <div id="slide2" className="w-full flex-shrink-0 snap-center relative">
                            <Image
                                src="/Images/Projectimages/Image2.jpg"
                                width={900}
                                height={500}
                                alt="2"
                                className="w-full"
                            />

                            <a
                                href="#slide1"
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded"
                            >
                                ‹
                            </a>

                            <a
                                href="#slide3"
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded"
                            >
                                ›
                            </a>
                        </div>

                        {/* SLIDE 3 */}
                        <div id="slide3" className="w-full flex-shrink-0 snap-center relative">
                            <Image
                                src="/Images/Projectimages/Image3.jpg"
                                width={900}
                                height={500}
                                alt="3"
                                className="w-full"
                            />

                            <a
                                href="#slide2"
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded"
                            >
                                ‹
                            </a>

                            <a
                                href="#slide1"
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded"
                            >
                                ›
                            </a>
                        </div>

                    </div>
                </div>



                {/* About Section */}
                <section className="max-w-5xl mx-auto px-6 py-20">
                    <h2 className="text-3xl font-semibold mb-4">
                        About ARCM Projects Pvt Ltd
                    </h2>
                    <p className="text-slate-600 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </section>

                {/* Features Section */}
                <section className="bg-slate-50 py-20">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-3xl text-gray-900 font-semibold mb-8">
                            Features
                        </h2>

                        <div className="grid gap-6 md:grid-cols-3">
                            <div className="p-6 bg-white rounded-lg shadow">
                                <h3 className="font-semibold text-gray-900 text-lg mb-2">Quality construction.</h3>
                                <p className="text-slate-600">
                                     At ARCM, we deliver high-performance industrial construction built for strength, efficiency, and long-term reliability.
                                    Our approach focuses on robust structural systems, precision engineering, and the use of tested, high-grade materials
                                    suited for demanding industrial environments. Every project is executed with strict quality control, adherence to safety
                                    standards, and a commitment to timelines. From heavy-duty foundations to complex structural frameworks, we ensure durability,
                                    operational efficiency, and minimal downtime — so your facility performs consistently under pressure.
                                </p>
                            </div>

                            <div className="p-6 bg-white rounded-lg shadow">
                                <h3 className="font-semibold text-gray-900 text-lg mb-2">Experienced team</h3>
                                <p className="text-slate-600">
                                    At ARCM, our strength lies in a highly skilled and experienced team of engineers, project managers, and technical
                                    experts who understand the complexities of industrial construction. With hands-on experience across diverse projects,
                                    our team brings practical knowledge, precision, and problem-solving ability to every stage of execution. We work
                                    collaboratively to ensure efficient planning, seamless coordination, and strict adherence to safety and quality standards.
                                    From managing large-scale operations to handling on-site challenges, our team is equipped to deliver reliable results on time, every time.
                                </p>
                            </div>

                            <div className="p-6 bg-white rounded-lg shadow">
                                <h3 className="font-semibold text-gray-900 text-lg mb-2">On-Time delivery</h3>
                                <p className="text-slate-600">
                                     At ARCM, we understand that time is critical in industrial projects, where delays can impact operations and costs.
                                    Our team follows a structured project management approach with detailed planning, efficient resource allocation, and
                                    continuous monitoring at every stage. By maintaining clear timelines and proactive coordination, we ensure smooth execution
                                    without compromising on quality or safety. Our commitment to discipline and accountability enables us to deliver projects on
                                    schedule, helping clients stay on track and operational without unnecessary delays.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}