import React from 'react';
import image1 from '../assets/C++_Certificate.jpg';
import image2 from '../assets/hour_of_code.png';
import image3 from '../assets/jQuery_certificate.jpg';
import image4 from '../assets/minecraft_hour_of_code_2.png';

export default function Certs() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const images = [image1, image2, image3, image4];

  const openImage = image => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">My Certificates</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Certificate ${index + 1}`}
              className="cursor-pointer"
              onClick={() => openImage(image)}
            />
          </div>
        ))}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
            <div className="relative">
              <img
                src={selectedImage}
                alt="Enlarged Certificate"
                className="max-h-80 md:max-h-full"
              />
              <button
                onClick={closeImage}
                className="absolute top-4 right-4 text-black text-xl cursor-pointer"
              >
                <i class="far fa-window-close"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
