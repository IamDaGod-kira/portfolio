import React from 'react';

const ContactBanner = () => {
  return (
    <div className="bg-gradient-to-r from-rusty_spice/20 to-ink_black text-white py-12 md:py-16 border-t border-burnt_caramel/30">
      <div className="container mx-auto text-center px-4">
        <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pearl_aqua to-vanilla_custard">
          Ready to create your stunning portfolio?
        </p>
        <a
          href="mailto:IamDaGod_MoonDeity@protonmail.com"
          className="inline-block bg-gradient-to-r from-rusty_spice to-oxidized_iron hover:from-oxidized_iron hover:to-rusty_spice text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-oxidized_iron/20"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default ContactBanner;
