import React from "react";

const HomePage = () => {
  console.log("Home page rendering...", performance.now());
  return (
    <div className="bg-white h-full flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold mb-4">Welcome to My Home Page</h1>
      <p className="text-xl text-gray-600 mb-6">
        This is a dummy homepage created for testing and layout purposes.
      </p>
      <p className="text-gray-500 text-lg">
        Feel free to customize this section with your own content.
      </p>
    </div>
  );
};

export default HomePage;
