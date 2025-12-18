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
      <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-burnt_caramel to-oxidized_iron text-center md:text-left">
        My Certificates
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-xl border-2 border-burnt_caramel/30 hover:border-burnt_caramel transition-all duration-300 bg-ink_black/30"
            onClick={() => setSelectedImage(image)}
          >
            <div className="aspect-w-4 aspect-h-3">
              <img
                src={image}
                alt={`Certificate ${index + 1}`}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-ink_black/0 group-hover:bg-ink_black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <i className="fas fa-search-plus text-3xl text-white drop-shadow-lg"></i>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] flex justify-center items-center bg-ink_black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-screen">
            <img
              src={selectedImage}
              alt="Enlarged Certificate"
              className="max-h-[90vh] w-auto mx-auto border-4 border-rusty_spice rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-rusty_spice transition-colors text-3xl"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
