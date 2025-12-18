import React, { useState } from 'react';
import * as all from 'everyday-fun';

export default function About() {
  const [quote, setQuote] = useState(all.getRandomQuote());

  const handleClick = () => {
    setQuote(all.getRandomQuote());
  };

  return (
    <div className="px-6 md:px-12 lg:px-24">
      <div className="bg-gradient-to-r from-rusty_spice to-ink_black text-white py-12 md:py-16 border-t border-burnt_caramel/30 backdrop-blur-sm">
        <h4 className="text-2xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pearl_aqua to-dark_cyan">
          I am a small developer from India.
        </h4>

        <div className="space-y-4 text-gray-200 text-lg leading-relaxed">
          <p>
            I know a bit of <span className="text-burnt_caramel font-bold">ReactJS</span>, <span className="text-burnt_caramel font-bold">NodeJS</span>.
            I have mastered <span className="text-burnt_caramel font-bold">C++</span> and am currently learning <span className="text-burnt_caramel font-bold">Python</span>.
          </p>
          <p>
            I have done some projects, and I am still learning and growing every day.
          </p>
          <p>
            I also design Discord Servers, manage them as staff, and develop bots.
          </p>
          <p>
            You can hire me for the following (crypto only):
          </p>

          <p className="mt-4">
            I enjoy writing poetry, photography, and music (guitar).
            <br />
            Check out my photography on{' '}
            <a
              className="text-pearl_aqua hover:text-dark_cyan underline decoration-dotted underline-offset-4 transition-colors"
              href="https://www.instagram.com/cameraman.pritam/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram font-bold"></i> Instagram
            </a>
          </p>
        </div>

        <div className="my-8 border-t border-dark_teal/30"></div>

        <blockquote className="relative p-8 rounded-xl bg-ink_black/40 border-l-4 border-golden_orange shadow-lg">
          <i className="fas fa-quote-left text-3xl text-dark_teal absolute top-4 left-4 opacity-50"></i>
          <p className="text-xl md:text-2xl text-vanilla_custard font-serif italic mb-4 relative z-10 px-6">
            "{quote.quote}"
          </p>
          <footer className="text-right">
            <cite className="text-rusty_spice not-italic block font-bold">- {quote.author}</cite>
            <button
              className="mt-2 text-sm text-dark_cyan hover:text-pearl_aqua transition-colors hover:underline"
              onClick={handleClick}
            >
              <i className="fas fa-sync-alt mr-1"></i> Reload Quote
            </button>
          </footer>
        </blockquote>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-pearl_aqua mb-4">Why do I do what I do?</h3>
            <p className="text-gray-300 leading-relaxed">
              I am passionate about creating innovative solutions and pushing the
              boundaries of technology. My journey as a developer began with a
              fascination for Node.js, React.js, and C++, and has since evolved into
              a commitment to delivering secure and efficient software. Hacking and
              Discord have opened up new avenues for me to explore the digital
              world.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-pearl_aqua mb-4">What can I do for you?</h3>
            <p className="text-gray-300 leading-relaxed">
              I offer a range of services tailored to your software development
              needs. Whether you need a Node.js or React.js web application, a
              high-performance C++ program, or assistance with securing your digital
              assets, I have the expertise to deliver.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
