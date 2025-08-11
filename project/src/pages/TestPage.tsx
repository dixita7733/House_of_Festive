import React from 'react';

const TestPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-red-600 mb-8">Test Page</h1>
        <p className="text-lg text-gray-600 mb-4">
          This is a test page to check if Tailwind CSS is working properly.
        </p>
        <div className="bg-blue-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Test Section</h2>
          <p className="text-blue-700">
            If you can see this styled content, then Tailwind is working.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
