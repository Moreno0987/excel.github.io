import Image from "next/image";
import Link from "next/link";

const Process = () => {
  return (
    <>
      {/* Process Section */}
      <section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 lg:px-40 py-16 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 text-gray-900 relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Bagian Kiri - Work Process Text */}
        <div className="md:w-1/2 text-left max-w-lg relative z-10 bg-gradient-to-r from-white/70 to-gray-100/50 p-8 rounded-xl backdrop-blur-lg">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Work Process
            </h2>
            <p className="text-lg mt-4 text-gray-700">
                Here’s how I work to bring your vision to life.
            </p>
            <p className="text-lg mt-4 leading-relaxed text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, 
                laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.
            </p>
        </div>

        {/* Bagian Kanan - Proses 1-4 */}
        <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:mt-0 md:ml-10 relative z-10">
            {[{ title: "Research", icon: "📖" },
              { title: "Analyze", icon: "📊" },
              { title: "Design", icon: "✏️" },
              { title: "Launch", icon: "🚀" }].map((step, index) => (
                <div 
                    key={index} 
                    className="bg-white/90 p-4 rounded-xl shadow-lg flex flex-col items-center text-center backdrop-blur-md
                    hover:transform hover:-translate-y-2 transition-all duration-300 border border-gray-200/50"
                >
                    <div className="text-3xl bg-gradient-to-br from-gray-700 to-gray-900 text-white w-14 h-14 flex items-center justify-center rounded-xl mb-4">
                        {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                    <p className="text-base mt-2 text-gray-600">A step-by-step approach to achieve the best results.</p>
                </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Process;
