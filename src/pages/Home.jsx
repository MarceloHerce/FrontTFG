import React, { useState } from 'react';
import Header from "../components/Header";
import App from "../App";
import LoginGoogle from "../GoogleLogin";
import RegisterForm from "../components/RegisterForm";
import HomeText from "../components/HomeText";
import LoginAndRegisterForm from '../components/LoginOrRegisterForm';

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
    return (
        <>
            <HomeText openModal={openModal} />
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-black p-6 rounded shadow-lg">
                  <div className="flex justify-end">
                    <button 
                      onClick={closeModal} 
                      className="p-2 text-teal-200 border-teal-100 hover:border-teal-700 bg-black"
                    >
                      Cerrar
                    </button>
                  </div>
                  <LoginAndRegisterForm onLoginSuccess={closeModal}/>
                </div>
              </div>
            )}
        </>
    )
}


export default Home;