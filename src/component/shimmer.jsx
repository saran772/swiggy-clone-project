import React from 'react';

const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {Array(10).fill(' ').map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg animate-pulse overflow-hidden"
        >
          <div className="h-48 bg-gray-200 rounded-t-lg"></div>
          <div className="p-4 space-y-4">
            <div className="h-6 bg-gray-200 rounded"></div>
            <div className="h-3 bg-gray-200 rounded"></div>
            <div className="h-3 bg-gray-200 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
