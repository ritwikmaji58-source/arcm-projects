import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      {/* About Us */}
      <div className="container mx-auto px-4 mt-30 mb-20">
        {/* Heading */}
        <div className="text-center mb-14">
          <h5 className="text-3xl md:text-4xl font-bold mb-4">
            ABOUT US
          </h5>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            ARCM Projects Private Limited
          </h1>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Who We Are
            </h2>
            <p className="text-gray-300 leading-relaxed">
              ARCM PROJECTS PRIVATE LIMITED is a Private Limited Company, governed by the Companies Act as a company limited by shares.
              Classified as a Non-government company, it is registered under the Registrar of Companies RoC-Kolkata. According to the Ministry of Corporate Affairs
              (MCA), this company was incorporated on 13-05-2024 and last updated on 10-08-2025. Its Corporate Identification Number
              (CIN) is U42909WB2024PTC270520, and it carries the registration number 270520. Currently, its eFiling status is listed as “Active,”
              suggesting that the company is no longer operational as per MCA records.

              From a financial standpoint, ARCM PROJECTS PRIVATE LIMITED has an authorized share capital of INR 15,00,000, with INR 15,00,000 paid-up capital.
              While the date of the last Annual General Meeting (AGM) and the details about its last filed balance sheet are unavailable, these figures highlight
              the basic financial structure of the business. As a Private Limited entity, it was incorporated with a small capital base, though no recent
              filings have been reported to further update these figures.

              The registered office address is at CO MANISHA GHOSH INDA NEW TOWN, KHARAGPUR TOWN Inda West Midnapore West Bengal India 721305 Correspondence
              or inquiries may be sent to the official email address, ranjitghsh@gmail.com. Apart from this primary location, no additional offices for
              maintaining books of account have been mentioned in the publicly available data. The company profile also shows 0 promoters in the snippet we have,
              meaning there is limited public information regarding the directors or owners on the MCA portal.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our focus is on delivering high-quality construction solutions
              through technical expertise, efficient planning, and a strong
              commitment to safety and excellence.
            </p>

            <div className="flex flex-row gap-6">
              <div>
                <h3 className="text-3xl font-bold text-sky-500">2024</h3>
                <p className="text-gray-300">Established</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-sky-500">100%</h3>
                <p className="text-gray-300">Quality</p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="w-full h-100 rounded-lg overflow-hidden shadow">
            <img
              src="/Images/Construction1.jpg"
              alt="ARCM Projects"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mission / Vision / Values */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Our Mission
              </h3>
              <p className="text-gray-300">
                Delivering excellence in construction and project management
                through quality workmanship, innovation, and integrity.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Our Vision
              </h3>
              <p className="text-gray-300">
                To be a trusted construction partner known for reliability,
                safety, and timely project execution.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Our Values
              </h3>
              <p className="text-gray-300">
                Quality construction, experienced teams, transparency,
                and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Directors */}
      <div className="container mx-auto px-4 mt-24 mb-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Our Directors
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-3"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="w-50 h-50 mx-auto mb-4 rounded-lg overflow-hidden shadow">
              <Image src="/Images/DirectorsImages/Director1.jpg" alt="" className="w-full h-full object-cover" width={300} height={150}/>
            </div>
            <h4 className="text-xl font-semibold">Ranjit Ghosh</h4>
            <p className="text-gray-300">Director</p>
          </div>

          <div className="text-center">
            <div className="w-50 h-50 mx-auto mb-4 rounded-lg overflow-hidden shadow">
              <Image src="/Images/DirectorsImages/Director2.jpg" alt="" className="w-full h-full object-cover" width={300} height={150}/>
            </div>
            <h4 className="text-xl font-semibold">Manisha Ghosh</h4>
            <p className="text-gray-300">Director</p>
          </div>

          <div className="text-center">
            <div className="w-50 h-50 mx-auto mb-4 rounded-lg overflow-hidden shadow">
               <Image src="/Images/DirectorsImages/Director3.jpg" alt="" className="w-full h-full object-cover" width={300} height={150}/>
            </div>
            <h4 className="text-xl font-semibold">Anwesha Ghosh</h4>
            <p className="text-gray-300">Director</p>
          </div>
        </div>
      </div>



    </>
  );
}