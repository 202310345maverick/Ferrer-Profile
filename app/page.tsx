'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [textColor, setTextColor] = useState('text-gray-800');
  const [clickCount, setClickCount] = useState(0);
  const [showShrekModal, setShowShrekModal] = useState(false);

  const handleInteractiveButton = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    const colors = ['text-gray-600', 'text-gray-700', 'text-gray-800', 'text-gray-900'];
    setTextColor(colors[newCount % colors.length]);

    // Show Shrek modal after 5 clicks
    if (newCount === 5) {
      setShowShrekModal(true);
    }

    // Reset counter after showing modal
    if (newCount > 5) {
      setClickCount(0);
    }
  };

  const closeModal = () => {
    setShowShrekModal(false);
    setClickCount(0);
  };

  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-20 left-20 w-48 h-48 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      </div>

      {/* Miles - HUGE face, no background */}
      {showShrekModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full transform animate-scale-in">
            <div className="text-center">
              {/* HUGE Shrek Face - Almost full screen */}
              <div className="w-96 h-96 mx-auto rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src="/miles.jpeg"
                  alt="miles"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Go Back Button */}
              <button
                onClick={closeModal}
                className="mt-8 bg-white text-gray-800 hover:bg-gray-100 font-bold py-4 px-12 rounded-full transition transform hover:scale-105 shadow-2xl border-2 border-gray-300 text-xl"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="text-center w-full max-w-md px-4">
        {/* Profile Picture */}
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 overflow-hidden shadow-lg">
          <Image
            src=""
            alt=""
            width={96}
            height={96}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Name and Bio */}
        <h1 className={`text-3xl font-bold mb-3 transition-colors duration-300 ${textColor}`}>
          Franchesca Lei Arcega
        </h1>
        <p className="text-gray-600 mb-6 text-lg">
          Frontend Developer
        </p>

        {/* Bio Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 mb-6 shadow-lg border border-gray-200">
          <p className="text-gray-700 text-sm leading-relaxed">
            Specializing in modern frontend development, visual design, and video editing.
            I create intuitive interfaces, compelling user experiences, and engaging video content
            that balance form and function across all digital mediums.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition transform hover:scale-110 shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600 transition transform hover:scale-110 shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        {/* Interactive Button */}
        <button
          onClick={handleInteractiveButton}
          className="bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold py-3 px-8 rounded-full hover:from-gray-800 hover:to-black transition transform hover:scale-105 shadow-lg mb-6 text-lg"
        >
          {clickCount >= 5 ? 'Shrek Time! 🐉' : `Click Me! (${clickCount} clicks)`}
        </button>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 text-sm">
          <Link href="/about" className="text-gray-700 hover:text-gray-900 transition font-medium">
            About Me →
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition font-medium">
            Contact →
          </Link>
        </div>
      </div>

      {/* Add this to your globals.css for the animation */}
      <style jsx>{`
        @keyframes scale-in {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}