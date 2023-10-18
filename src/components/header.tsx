import React from 'react';
import logo from '../assets/profilePic.jpg';

export default function Header() {
  return (
    <>
      <div className="flex">
        <div className="w-1/6">
          <img
            src={logo}
            className="rounded-full h-14 desktop:p-2 desktop:h-18"
            alt="logo"
          />
        </div>
        <div className="w-3/6">
          <h2 className="p-4 text-xl desktop:p-12 desktop:text-3xl">
            Pritam santra
          </h2>
        </div>
        <div className="w-1/6 p-4 text-xl desktop:p-12 desktop:text-3xl">
          <a href="https://github.com/IamDaGod-kira/">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="w-1/6 p-4 text-xl desktop:p-12 desktop:text-3xl">
          <a href="https://github.com/IamDaGod-kira/">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </>
  );
}
