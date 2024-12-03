import React, { useContext } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { AppContext } from '../context/AppContext';

function HomeText({ openModal }) {
  const { jwt } = useContext(AppContext);

  const props = useSpring({
    from: { opacity: 1 },
    to: async (next) => {
      while (true) {
        await next({opacity: 0.7 });
        await next({opacity: 1 });
      }
    },
    config: { duration: 800 },
    reset: true,
    reverse: jwt === ''
  });

  const handleClick = () => {
    if (!jwt) {
      openModal();
    } else {
      console.log('Start Screen Recording');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {/* Section 1 */}
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md lg:col-span-2">
          <h1 className="text-4xl font-bold mb-4 text-teal-200 text-center">
            Record Your Screen and Store in the Cloud with Ease
          </h1>
          <p className="text-lg text-gray-600 text-teal-50">
            Need to capture your screen activity quickly and easily? Our desktop screen recording tool is the perfect solution. With just a few clicks, you can record everything happening on your screen and securely store the videos in the cloud.
          </p>
        </div>

        {/* Section 2 */}
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-teal-200">
            Key Features:
          </h2>
          <ul className="list-disc list-inside text-lg text-teal-50 mx-auto text-justify">
            <li>High-Quality Recording: Capture every detail in high resolution.</li>
            <li>Secure Cloud Storage: Safely store your videos and access them from anywhere.</li>
            <li>Easy to Use: An intuitive interface that requires no advanced technical knowledge.</li>
            <li>One-Click Sharing: Easily share your recordings with colleagues, friends, or clients.</li>
            <li>No Time Limits: Record as much as you need without restrictions.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md lg:col-span-3">
          <h2 className="text-2xl font-semibold mb-4 text-teal-200">
            How It Works:
          </h2>
          <ol className="list-decimal list-inside text-lg text-teal-50 mx-auto text-justify">
            <li><strong>Download and Install:</strong> Get our screen recording app and install it on your desktop.</li>
            <li><strong>Record Your Screen:</strong> Open the app and start recording with a single click.</li>
            <li><strong>Store in the Cloud:</strong> Save your videos directly to the cloud for access anytime, anywhere.</li>
            <li><strong>Share Easily:</strong> Instantly share your recordings with anyone.</li>
          </ol>
        </div>
      </div>

      {/* Call to Action */}
      <div className=" bg-gray-800 text-white p-6 rounded-lg shadow-md lg:col-span-3 text-center mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-teal-200">What you need to start?</h2>
        <p className='p-3'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, incidunt non. Voluptates unde excepturi impedit minus temporibus reprehenderit pariatur odit 
          veniam recusandae libero ratione officia laudantium dignissimos doloremque, dicta corrupti.
          </p>
        <animated.button
          style={props}
          onClick={handleClick}
          className="bg-teal-500 text-white font-bold py-2 px-6 rounded hover:bg-teal-600 focus:outline-none focus:ring-2 focus:bg-teal-300 focus:ring-opacity-50"
        >
          {jwt === '' ? 'Login' : 'Record Screen Now'}
        </animated.button>
      </div>
    </div>
  );
}

export default HomeText;
