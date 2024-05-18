import React, { useEffect, useState } from "react";
import image1 from "./images/b1.jpg";
import image13 from "./images/b2.jpg";
import image5 from "./images/b3.jpg";
import image4 from "./images/b4.jpg";
import image3 from "./images/b5.jpg";
import image6 from "./images/b6.jpg";
import image11 from "./images/b7.jpg";
import image8 from "./images/b8.jpg";
import image12 from "./images/b9.jpg";
import image10 from "./images/b10.jpg";
import image7 from "./images/b11.jpg";
import image9 from "./images/b12.jpg";
import image2 from "./images/b13.jpg";
import image14 from "./images/b14.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/Variants";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
]; 

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const closeImage = () => setCurrentIndex(null);
  const openImage = (index) => setCurrentIndex(index);
  const prevImage = () => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  const nextImage = () => setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev));
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <section>
      {currentIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-85 p-4 z-50">
          <button onClick={closeImage} className="absolute top-5 right-5 text-primaryWhite text-2xl">✕</button>
          <button onClick={prevImage} className={`absolute left-5 text-primaryWhite text-2xl ${currentIndex === 0 ? 'hidden' : ''}`}>←</button>
          <img src={images[currentIndex]} className="max-h-[80vh] max-w-[90vw]" alt="Gallery item"/>
          <button onClick={nextImage} className={`absolute right-5 text-primaryWhite text-2xl ${currentIndex === images.length - 1 ? 'hidden' : ''}`}>→</button>
        </div>
      )}
      <div className="px-4 md:px-36">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 3, 900: 4 }}>
          <Masonry gutter="20px">
            {images.map((image, index) => (
              <motion.div
              variants={fadeIn("top", 0, 3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}>
                <img
                key={index}
                src={image}
                alt={`Gallery ${index}`}
                className="cursor-pointer w-full block transition-transform duration-300 hover:scale-90"
                onClick={() => openImage(index)}
              />
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
};

export default Gallery;
