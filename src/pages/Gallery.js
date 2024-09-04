// src/Gallery.js
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Banner from '../components/Banner';
import banner from '../assests/contactBanner.png'
const fetchImages = (page) => {
  // Simulate an API call to fetch images
  return new Promise((resolve) => {
    const images = Array.from({ length: 9 }, (_, index) => ({
      id: page * 9 + index,
      url: `https://via.placeholder.com/300?text=Image+${page * 9 + index + 1}`,
    }));
    setTimeout(() => resolve(images), 1000);
  });
};

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    loadMoreImages();
  }, []);

  const loadMoreImages = () => {
    fetchImages(page).then((newImages) => {
      setImages((prevImages) => [...prevImages, ...newImages]);
      setPage((prevPage) => prevPage + 1);
    });
  };

  return (
    <div className="overflow-x-hidden">
    <Banner
    src={banner}
    title="Media Gallery"
    text=""
    updated=""
    buttonUrl=""
    buttonText=""
  />
    <InfiniteScroll
      dataLength={images.length}
      next={loadMoreImages}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      <div className="grid grid-cols-3 gap-4 p-4">
        {images.map((image) => (
          <div key={image.id} className="w-full">
            <img src={image.url} alt={`Image ${image.id}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </InfiniteScroll>
    </div>
  );
};

export default Gallery;
