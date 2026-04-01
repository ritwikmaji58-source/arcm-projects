
export default function Services() {
    const services = [
        {
            title: "Architectural Design",
            description:
                "Concept to construction drawings, modern and sustainable architectural solutions tailored to your needs.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V10z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 21V12h6v9" />
                </svg>
            ),
        },
        {
            title: "Construction Management",
            description:
                "End-to-end project supervision ensuring quality, timelines, and cost control.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            ),
        },
        {
            title: "Interior Design",
            description:
                "Functional and aesthetic interior spaces for residential and commercial projects.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M10 14h10M4 18h16" />
                </svg>
            ),
        },
        {
            title: "3D Visualization",
            description:
                "Realistic 3D renders and walkthroughs to visualize your project before execution.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                </svg>
            ),
        },
        {
            title: "Renovation Works",
            description:
                "Upgrading existing spaces with smart design and structural improvements.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
            ),
        },
        {
            title: "Consultation",
            description:
                "Expert guidance on planning, budgeting, approvals, and material selection.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4-.8L3 20l1.8-3.2A7.965 7.965 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            ),
        },
    ];

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="bg-sky-950 text-white mt-25 py-16 px-4">
                <div className="max-w-6xl text-center mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">OUR SERVICES</h1>
                    <p className="text-gray-200">
                        At ARCM, we provide complete architecture, construction and design
                        solutions with a focus on quality, transparency and innovation.
                    </p>
                </div>
            </div>

            <section className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
                        >
                            <div className="text-sky-950 mb-3">{service.icon}</div>
                            <h3 className="text-xl text-gray-500 font-semibold mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div> 
            </section>

            <section className="max-w-6xl mx-auto px-4 pb-16">
                <div className="bg-white rounded-xl shadow p-8 text-center">
                    <h2 className="text-2xl text-gray-500 font-bold mb-3">Have a project in mind?</h2>
                    <p className="text-gray-900 mb-6">
                        Let’s discuss your ideas and turn them into reality.
                    </p>
                    <a href="mailto:arco.industries@gmail.com" className="">
                        <button className="bg-sky-800 text-black px-6 py-3 rounded-md font-medium hover:bg-sky-300 transition">
                            <p className="text-white">Contact Us</p>
                        </button>
                    </a>
                </div>
            </section>
        </main>
    );
}
