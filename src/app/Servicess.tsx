import React from 'react';

const Servicess: React.FC = () => {
    return (

      <>
       {/* What I Do Section */}
<section className="min-h-screen px-6 md:px-20 lg:px-40 py-16 bg-gray-100">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Deskripsi */}
        <div>
            <h2 className="text-4xl font-bold text-gray-900">What I Do?</h2>
            <p className="text-lg text-gray-700 mt-4">
                I specialize in creating seamless and engaging user experiences with a focus on design and development.
            </p>
            <button className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-md font-semibold shadow-md hover:bg-purple-700 transition">
                Say Hello!
            </button>
        </div>

        {/* Card Service */}
        <div className="space-y-6">
            {[
                { title: "User Experience (UX)", desc: "Crafting intuitive and user-friendly experiences for better engagement." },
                { title: "User Interface (UI)", desc: "Designing visually stunning and modern interfaces for digital products." },
                { title: "Web Development", desc: "Building high-performance, responsive, and secure web applications." }
            ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-600">
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-lg text-gray-700 mt-2">{service.desc}</p>
                </div>
            ))}
        </div>
    </div>
</section>

      </>
    );
  }
  
  export default Servicess;