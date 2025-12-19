import React from 'react';

const ContactBanner = () => {
  return (
    <div className="glass-panel mx-4 md:mx-12 lg:mx-24 my-12 rounded-3xl p-8 md:p-12 text-center shadow-2xl border-white/10 relative overflow-hidden group bg-black/40">
      <div className="absolute inset-0 bg-gradient-to-r from-mac-pink-500/10 to-mac-purple-500/10 backdrop-blur-3xl -z-10"></div>

      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-mac-pink-500 to-mac-purple-500 font-sans tracking-tight">
          Let's work together!
        </h2>
        <p className="text-mac-gray-300 text-lg md:text-xl mb-10 font-light max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas or
          opportunities to be part of your visions.
        </p>
        <a
          href="https://discord.com/invite/b7cbxXKqdJ"
          className="inline-block bg-gradient-to-r from-mac-blue-500 to-mac-indigo-500 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:opacity-90 transition-all text-lg"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default ContactBanner;
