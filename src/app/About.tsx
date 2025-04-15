import Image from "next/image";
import {
  FaFacebookF,
  FaDribbble,
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
  FaDownload,
} from "react-icons/fa";

const About = () => {
  return (
    <>
      {/* Background Gradien Halaman */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#fff8dc] via-[#e8f1ec] to-[#a3b8aa] opacity-80"></div>

      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-20 lg:px-40 py-16 relative z-10">
        <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col md:flex-row items-center max-w-5xl w-full relative z-10">
          {/* Foto dan Ikon Sosial */}
          <div className="flex flex-col items-center">
            {/* Bungkus abu-abu untuk foto dan ikon sosial */}
            <div className="bg-gray-100 rounded-lg flex flex-col items-center w-[300px] sm:w-[330px] md:w-[350px] lg:w-[370px]">
              <Image
                src="/brooklin.png"
                alt="Profile"
                width={400}
                height={400}
                className="w-full h-[360px] sm:h-[380px] md:h-[400px] object-cover rounded-lg"
              />

              {/* Kontainer ikon sosial */}
              <div className="mt-4 w-full bg-gradient-to-tr from-white via-gray-50 to-white rounded-lg shadow-md px-6 py-3 flex justify-between items-center gap-4">
                {[
                  FaFacebookF,
                  FaDribbble,
                  FaInstagram,
                  FaLinkedinIn,
                  FaBehance,
                ].map((Icon, index) => (
                  <div
                    key={index}
                    className="p-2 rounded-full transition bg-transparent hover:bg-purple-600 group cursor-pointer"
                  >
                    <Icon className="text-gray-600 text-base sm:text-lg md:text-xl group-hover:text-white transition" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Deskripsi */}
          <div className="md:ml-16 text-center md:text-left max-w-md mt-8 md:mt-0">
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              I am Professional User Experience Designer
            </h2>
            <p className="text-sm text-gray-700 mt-4 leading-relaxed">
              I design and develop services for customers specializing in
              creating stylish, modern websites, web services, and online
              stores. My passion is to design digital user experiences.
            </p>
            <p className="text-sm text-gray-700 mt-4 leading-relaxed">
              I design and develop services for customers specializing in
              stylish, modern websites &amp; web services.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition">
                My Project
              </button>
              <button className="px-6 py-3 border border-purple-600 text-purple-600 font-semibold rounded-lg shadow-md hover:bg-purple-100 transition flex items-center justify-center gap-2">
                <FaDownload /> Download CV
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
