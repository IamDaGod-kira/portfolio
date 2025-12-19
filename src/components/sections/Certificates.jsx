import React, { useState } from 'react';
import image1 from '../../assets/C++_Certificate.jpg';
import image2 from '../../assets/hour_of_code.png';
import image3 from '../../assets/jQuery_certificate.jpg';
import image4 from '../../assets/minecraft_hour_of_code_2.png';

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [image1, image2, image3, image4];

  return (
    <div className="px-6 md:px-12 lg:px-24">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-mac-purple-500 to-mac-indigo-500 font-sans tracking-tight text-center md:text-left">
        My Certificates
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="group cursor-pointer overflow-hidden rounded-2xl glass-card border-white/10 shadow-lg hover:shadow-xl transition-shadow bg-black/40"
            onClick={() => setSelectedImage(image)}
          >
            <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
              <img
                src={image}
                alt={`Certificate ${index + 1}`}
                className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-sm">
                <i className="fas fa-search-plus text-3xl text-white drop-shadow-md"></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] flex justify-center items-center bg-black/80 backdrop-blur-xl p-4 transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-screen p-2 glass-panel rounded-3xl border-white/10 bg-black/60">
            <img
              src={selectedImage}
              alt="Enlarged Certificate"
              className="max-h-[85vh] w-auto mx-auto rounded-xl shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-mac-red-500 text-white rounded-full shadow-lg hover:bg-mac-red-900 transition-colors flex items-center justify-center"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
