import React from "react";
import Image from "next/image";

const Blog: React.FC = () => {
  return (
    <>
      {/* Blog Section */}
      <section className="min-h-screen px-6 md:px-20 lg:px-40 py-16 bg-gray-50">
        {/* Judul & Deskripsi */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Blog</h2>
          <p className="text-lg text-gray-700 mt-2">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>

        {/* Grid Blog */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Gambar */}
              <div className="relative w-full h-48">
                <Image
                  src={`/blog${num}.png`}
                  alt={`Blog Post ${num}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Konten */}
              <div className="p-5">
                <p className="text-sm text-gray-500">
                  22 Oct, 2020 / 246 Comments
                </p>
                <h3 className="text-lg font-bold text-gray-900 mt-2">
                  Lorem ipsum dolor sit consea. Nulla purus arcu
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
