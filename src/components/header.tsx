import React from 'react';
import PopupOnHover from './hover';
import pfp from "../assets/profilePic.jpg";

export default function Header() {
  return (
    <>
      <div className="flex bg-[#333]">
        <div className="w-1/6">
          <img
            src={pfp}
            className="rounded-full h-3/4 p-2 desktop:p-2 desktop:h-3/4"
            alt="logo"
          />
        </div>
        <div className="w-3/6">
          <h2 className="p-4 text-xl desktop:p-12 text-[#4078c0] desktop:text-6xl">
            Pritam santra
          </h2>
        </div>
        <PopupOnHover content="My Github">
          <div className="w-1/6 p-4 text-xl text-[#4078c0] desktop:p-12 desktop:text-3xl">
            <a href="https://github.com/IamDaGod-kira/">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </PopupOnHover>
        <PopupOnHover content="contact me">
          <div className="w-1/6 p-4 text-xl text-[#4078c0] desktop:p-12 desktop:text-3xl">
            <a href="https://discord.com/invite/b7cbxXKqdJ">
              <i className="fab fa-discord"></i>
            </a>
          </div>
        </PopupOnHover>
      </div>
    </>
  );
}
