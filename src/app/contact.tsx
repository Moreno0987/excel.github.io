import React from 'react';

const contact: React.FC = () => {
    return (
      <>
        <section className="min-h-screen px-6 md:px-20 lg:px-40 py-16 bg-gradient-to-b from-white via-yellow-100 to-white">
          <div className="bg-gray-100 rounded-lg shadow-lg p-10 flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900">Let’s discuss your Project</h2>
              <p className="text-lg text-gray-600 mt-2">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alte.
              </p>
              <div className="mt-6 space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
                  <span className="bg-purple-600 text-white p-2 rounded-lg">📍</span>
                  <p className="text-gray-700"><strong>Address:</strong> New Mexico 31134</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="bg-purple-600 text-white p-2 rounded-lg">📧</span>
                  <p className="text-gray-700"><strong>Email:</strong> mymail@mail.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="bg-purple-600 text-white p-2 rounded-lg">📞</span>
                  <p className="text-gray-700"><strong>Call Me Now:</strong> 00-1234 00000</p>
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                {["Facebook", "Dribbble", "Instagram", "LinkedIn"].map((social, index) => (
                  <span key={index} className="bg-purple-600 text-white p-3 rounded-full cursor-pointer hover:opacity-80 transition">
                    {social[0]}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-gray-600">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alte.
              </p>
              <form className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full p-3 border-b-2 border-purple-600 outline-none focus:ring-2 focus:ring-purple-500 text-black"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full p-3 border-b-2 border-purple-600 outline-none focus:ring-2 focus:ring-purple-500 text-black"
                />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full p-3 border-b-2 border-purple-600 outline-none focus:ring-2 focus:ring-purple-500 text-black"
                />
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Budget*"
                    className="w-1/2 p-3 border-b-2 border-purple-600 outline-none focus:ring-2 focus:ring-purple-500 text-black"
                  />
                  <input
                    type="text"
                    placeholder="Subject*"
                    className="w-1/2 p-3 border-b-2 border-purple-600 outline-none focus:ring-2 focus:ring-purple-500 text-black"
                  />
                </div>
                <textarea
                  placeholder="Message*"
                  className="w-full p-3 border-b-2 border-purple-600 outline-none focus:ring-2 focus:ring-purple-500 text-black"
                ></textarea>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-md flex items-center gap-2">
                  Submit <span>➡️</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </>
    );
}

export default contact;
