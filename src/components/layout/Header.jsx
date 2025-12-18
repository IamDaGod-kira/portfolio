import React from 'react';
import PopupOnHover from '../ui/PopupOnHover';
import pfp from '../../assets/profilePic.jpg';

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-ink_black/50 backdrop-blur-md p-6 rounded-xl border border-rusty_spice/40 shadow-lg mx-4 mt-4">
      <div className="flex items-center gap-4">
        <img
          src={pfp}
          className="rounded-full w-16 h-16 md:w-20 md:h-20 border-2 border-burnt_caramel"
          alt="Profile"
        />
        <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rusty_spice to-vanilla_custard font-sans">
          Pritam Santra
        </h2>
      </div>

      <div className="flex gap-6 mt-4 md:mt-0">
        <PopupOnHover content="My Github">
          <a href="https://github.com/IamDaGod-kira/" className="text-burnt_caramel hover:text-rusty_spice transition-colors text-3xl">
            <i className="fab fa-github"></i>
          </a>
        </PopupOnHover>
        <PopupOnHover content="Contact me">
          <a href="https://discord.com/invite/b7cbxXKqdJ" className="text-burnt_caramel hover:text-rusty_spice transition-colors text-3xl">
            <i className="fab fa-discord"></i>
          </a>
        </PopupOnHover>
      </div>
    </div>
  );
}
