import React, { useEffect, useState } from "react";
import { Wrench } from "lucide-react";

const MaintenancePage = () => {
  const [blurClass, setBlurClass] = useState("backdrop-blur-sm");

  useEffect(() => {
    const timer = setTimeout(() => {
      setBlurClass("backdrop-blur-[2px]");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-1000 ${blurClass} bg-black/20`}
    >
      <div className="flex flex-col items-center text-center px-4 animate-fadeIn">
        <Wrench size={64} className="text-red-500 animate-bounce mb-4" />

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-500 animate-glow mb-2">
          Scheduled Maintenance is Ongoing!
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl text-yellow-700">
          We're making improvements to serve you better.
          <br />
          Check back soon!
        </h2>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-fadeIn {
            animation: fadeIn 1.5s ease-in-out forwards;
          }

          @keyframes glow {
            0%, 100% { text-shadow: 0 0 5px #ff9800; }
            50% { text-shadow: 0 0 20px #ff9800; }
          }
          .animate-glow {
            animation: glow 2s infinite alternate;
          }
        `}
      </style>
    </div>
  );
};

export default MaintenancePage;
