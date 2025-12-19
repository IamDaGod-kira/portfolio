import React from 'react';
import PopupOnHover from '../ui/PopupOnHover';
import pfp from '../../assets/profilePic.jpg';

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between glass mx-4 mt-6 p-4 rounded-2xl sticky top-4 z-50 border-white/10">
      <div className="flex items-center gap-4">
        <img
          src={pfp}
          className="rounded-full w-16 h-16 md:w-20 md:h-20 border-2 border-white/20 shadow-md"
          alt="Profile"
        />
        <h2 className="text-2xl md:text-3xl font-bold text-white font-sans tracking-tight">
          Pritam Santra
        </h2>
      </div>

      <div className="flex gap-6 mt-4 md:mt-0">
        <PopupOnHover content="My Github">
          <a href="https://github.com/IamDaGod-kira/" className="text-mac-gray-400 hover:text-white transition-colors text-3xl">
            <i className="fab fa-github"></i>
          </a>
        </PopupOnHover>
        <PopupOnHover content="Contact me">
          <a href="https://discord.com/invite/b7cbxXKqdJ" className="text-mac-gray-400 hover:text-mac-indigo-500 transition-colors text-3xl">
            <i className="fab fa-discord"></i>
          </a>
        </PopupOnHover>
      </div>
    </div>
  );
}
