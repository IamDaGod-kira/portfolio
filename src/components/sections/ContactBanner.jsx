import React from "react";

const ContactBanner = () => {
  return (
    <div className="glass-panel mx-4 md:mx-12 lg:mx-24 my-12 rounded-3xl p-8 md:p-12 text-center md:text-left shadow-2xl relative overflow-hidden group">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink/10 to-mauve/10 backdrop-blur-3xl -z-10"></div>

      {/* Flex Container: Stacked on mobile, side-by-side on md+ */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        {/* Discord Widget */}
        <div className="shrink-0">
          <iframe
            src="https://discord.com/widget?id=1483687208702705706&theme=dark"
            width="350"
            height="500"
            allowtransparency="true"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            className="rounded-xl shadow-lg"
          ></iframe>
        </div>

        {/* Contact Content */}
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink to-mauve font-sans tracking-tight">
            Let's work together!
          </h2>
          <p className="text-subtext1 text-lg md:text-xl mb-10 font-light">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
          <a
            href="https://discord.com/invite/b7cbxXKqdJ"
            className="inline-block bg-gradient-to-r from-blue to-sapphire text-white text-base font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:opacity-90 transition-all text-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
