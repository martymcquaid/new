import React from 'react';

const Gallery = () => {
  return (
    <div className='p-10 text-center'>
      <h2 className='text-4xl font-semibold mb-4'>Gallery</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className='h-40 bg-gray-200 rounded-lg shadow-md'></div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;