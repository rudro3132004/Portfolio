import React from 'react';

export default function NotFound() {
  return (
    <div className="w-full h-[82vh] flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-7xl font-extrabold mb-4">404</h1>
      <p className="text-3xl font-semibold">Page Not Found</p>
      <p className="text-gray-400 mt-2">The page you’re looking for doesn’t exist.</p>
    </div>
  );
}
