import React from 'react';
import PopupOnHover from './hover';
import pfp from '../assets/profilePic.jpg';

export default function Header() {
  return (
    <>
      <div className="flex bg-[#333]">
        <div className="w-1/6">
          <img
            src={pfp}
            className="rounded-full h-3/4 p-2 md:p-2 md:h-3/4"
            alt="logo"
          />
        </div>
        <div className="w-3/6">
          <h2 className="p-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#4078c0] md:p-12 md:text-4xl">
            Pritam Santra
          </h2>
        </div>
        <PopupOnHover content="My Github">
          <div className="w-1/6 p-4 text-lg md:text-xl text-[#4078c0] md:p-12 md:text-2xl">
            <a href="https://github.com/IamDaGod-kira/">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </PopupOnHover>
        <PopupOnHover content="Contact me">
          <div className="w-1/6 p-4 text-lg md:text-xl text-[#4078c0] md:p-12 md:text-2xl">
            <a href="https://discord.com/invite/b7cbxXKqdJ">
              <i className="fab fa-discord"></i>
            </a>
          </div>
        </PopupOnHover>
      </div>
    </>
  );
}
