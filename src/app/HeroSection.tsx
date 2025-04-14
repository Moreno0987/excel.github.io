import Image from "next/image";
import Stats from "./Stats"; // Import komponen Stats

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-300 via-pink-200 to-white min-h-screen flex items-center justify-center px-4 md:px-10 lg:px-20 pt-20 md:pt-30 lg:pt-40">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        
        {/* Kiri: Teks */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight animate-pulse">
            Hello, I’m <br /> Brooklyn Gilbert
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            I&apos;m a Freelance <span className="font-bold text-purple-600">UI/UX Designer</span> and{" "}
            <span className="font-bold text-yellow-600">Developer</span> based in London, England.
            I strive to build immersive and beautiful web applications through carefully crafted code and user-centric design.
          </p>
          <button
            className="mt-6 px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 hover:scale-105 transition-all duration-300 relative"
            aria-label="Say Hello Button"
          >
            Say Hello!
            {/* Efek Ping */}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-lg bg-purple-500 opacity-75"></span>
            </span>
          </button>

          {/* Statistik */}
          <div className="mt-8">
            <Stats />
          </div>
        </div>

        {/* Kanan: Gambar */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 mb-12">
      <div className="bg-white p-4 rounded-2xl shadow-lg animate-flipOpen">
      <Image
      src="/brooklin.png"
      alt="Portrait of Brooklyn Gilbert, UI/UX Designer & Developer"
      width={400}
      height={400}
      className="object-cover rounded-2xl"
      priority
    />
  </div>
</div>

      </div>
    </section>
  );
};

export default HeroSection;
