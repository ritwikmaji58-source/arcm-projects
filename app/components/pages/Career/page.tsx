"use client";

export default function Careers() {
    const jobs = [
        {
            title: "Architect",
            location: "Remote / On-site",
            experience: "2-4 Years",
            description:
                "Work on architectural planning, drawings, and client coordination for residential and commercial projects.",
        },
        {
            title: "Site Engineer",
            location: "On-site",
            experience: "1-3 Years",
            description:
                "Supervise construction activities, manage timelines, and ensure quality execution.",
        },
        {
            title: "Interior Designer",
            location: "Remote / Hybrid",
            experience: "1-3 Years",
            description:
                "Design functional and aesthetic interior spaces for diverse projects.",
        },
    ];

    return (
        <main className="min-h-screen bg-gray-100">

            {/* 🔷 Hero (slightly more premium feel) */}
            <div className="bg-sky-950 text-white mt-25 py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Build Your Career With ARCM
                    </h1>
                    <p className="text-gray-300 text-lg">
                        We’re a team of designers, engineers, and thinkers creating
                        spaces that matter. Come grow with us.
                    </p>
                </div>
            </div>

            {/* 🔷 Intro Section (new vibe) */}
            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <p className="text-gray-700 text-lg leading-relaxed">
                    At ARCM, we believe great projects come from great people.
                    Whether you're designing, managing, or building — your work
                    directly shapes real-world spaces and experiences.
                </p>
            </section>

            {/* 🔷 Why Work With Us (clean horizontal feel) */}
            <section className="max-w-6xl mx-auto px-4 pb-16">
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        "Real project exposure",
                        "Collaborative environment",
                        "Opportunity to grow fast",
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
                        >
                            <p className="text-gray-600 font-medium text-center">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 🔷 Jobs (more minimal cards) */}
            <section className="max-w-5xl mx-auto px-4 pb-16">
                <h2 className="text-2xl text-gray-500 font-bold mb-8 text-center">
                    Current Openings
                </h2>

                <div className="space-y-6">
                    {jobs.map((job, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                
                                <div>
                                    <h3 className="text-xl text-gray-500 font-semibold">
                                        {job.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mt-1">
                                        {job.location} • {job.experience}
                                    </p>
                                </div>

                                <button className="mt-4 md:mt-0 bg-sky-800 text-white px-5 py-2 rounded-md hover:bg-sky-300 hover:text-black transition">
                                    Apply Now
                                </button>
                            </div>

                            <p className="text-gray-600 mt-4">
                                {job.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 🔷 CTA */}
            <section className="max-w-6xl mx-auto px-4 pb-20">
                <div className="bg-white rounded-xl shadow p-10 text-center">
                    <h2 className="text-2xl text-gray-500 font-bold mb-3">
                        Don’t see a role for you?
                    </h2>
                    <p className="text-gray-900 mb-6">
                        We’re always looking for talented people. Reach out anyway.
                    </p>

                    <a href="mailto:arco.industries@gmail.com">
                        <button className="bg-sky-800 text-black px-6 py-3 rounded-md font-medium hover:bg-sky-300 transition">
                            <p className="text-white">Contact Us</p>
                        </button>
                    </a>
                </div>
            </section>

        </main>
    );
}