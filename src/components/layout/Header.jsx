import React from 'react';
import PopupOnHover from '../ui/PopupOnHover';
import pfp from '../../assets/profilePic.jpg';

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between glass mx-4 mt-6 p-4 rounded-2xl sticky top-4 z-50">
      <div className="flex items-center gap-4">
        <img
          src={pfp}
          className="rounded-full w-16 h-16 md:w-20 md:h-20 border-2 border-overlay0 shadow-md"
          alt="Profile"
        />
        <h2 className="text-2xl md:text-3xl font-bold text-text font-sans tracking-tight">
          Pritam Santra
        </h2>
      </div>

      <div className="flex gap-6 mt-4 md:mt-0">
        <PopupOnHover content="My Github">
          <a href="https://github.com/IamDaGod-kira/" className="text-subtext1 hover:text-text transition-colors text-3xl">
            <i className="fab fa-github"></i>
          </a>
        </PopupOnHover>
        <PopupOnHover content="Instagram">
          <a href="https://www.instagram.com/cameraman.pritam/" className="text-subtext1 hover:text-mauve transition-colors text-3xl">
            <i className="fab fa-instagram"></i>
          </a>
        </PopupOnHover>
      </div>
    </div>
  );
}
