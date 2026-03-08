import React, { useState } from "react";
import * as all from "everyday-fun";

export default function About() {
  const [quote, setQuote] = useState(all.getRandomQuote());

  const handleClick = () => {
    setQuote(all.getRandomQuote());
  };

  return (
    <div className="px-6 md:px-12 lg:px-24">
      <div className="glass-panel p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h4 className="text-3xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-linear-to-r from-blue to-teal font-sans tracking-tight">
            Hello my Fellas!
          </h4>

          <div className="space-y-6 text-subtext1 text-xl leading-relaxed font-light">
            <p>I am a small curious developer from India..</p>
            <p>
              I know a bit of{" "}
              <span className="text-peach font-bold">ReactJS</span>,{" "}
              <span className="text-green font-bold">NodeJS</span>. I have
              mastered <span className="text-blue font-bold">C++</span> and am
              currently learning things like{" "}
              <span className="text-yellow font-bold">
                Cryptography, BCI tech etc..
              </span>
              .
            </p>
            <p>
              I have done some projects, and I am still learning and growing
              every day.
            </p>
            <p>I also design Discord Servers and develop bots.</p>
            <p>You can hire me for any above suited job..</p>

            <p className="mt-4 pt-4 border-t border-overlay0/50">
              I enjoy writing poetry, photography, and I am also a Guitarist!.
              <br />
              <span className="inline-flex items-center gap-2 mt-2">
                Check out my photography, or simply reach out on{" "}
                <a
                  className="text-pink hover:text-rosewater font-bold hover:underline transition-colors decoration-2 underline-offset-4"
                  href="https://www.instagram.com/cameraman.pritam/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram text-xl"></i> Instagram
                </a>
              </span>
            </p>
          </div>

          <div className="my-10 border-t border-overlay0/50"></div>

          <blockquote className="relative p-8 rounded-2xl glass shadow-sm">
            <i className="fas fa-quote-left text-4xl text-blue absolute top-6 left-6 opacity-30"></i>
            <p className="text-2xl md:text-3xl text-text font-serif italic mb-6 relative z-10 px-6 leading-relaxed">
              "{quote.quote}"
            </p>
            <footer className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4 border-t border-overlay0/50 pt-4">
              <cite className="text-subtext0 not-italic block font-bold text-lg">
                - {quote.author}
              </cite>
              <button
                className="text-sm font-bold text-blue hover:text-sapphire transition-colors uppercase tracking-wide flex items-center bg-surface1/50 px-4 py-2 rounded-full hover:bg-surface2/50"
                onClick={handleClick}
              >
                <i className="fas fa-sync-alt mr-2"></i> Reload Quote
              </button>
            </footer>
          </blockquote>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 hover:bg-surface0 transition-colors">
              <h3 className="text-2xl font-bold text-mauve mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-mauve/20 flex items-center justify-center text-mauve">
                  <i className="fas fa-question"></i>
                </span>
                Why do I do what I do?
              </h3>
              <p className="text-subtext1 leading-relaxed text-lg">
                I am passionate about creating innovative solutions and pushing
                the boundaries of technology. My journey as a developer began
                with a fascination for Node.js, React.js, and C++, and has since
                evolved into a commitment to delivering secure and efficient
                software. Hacking and Discord have opened up new avenues for me
                to explore the digital world.
              </p>
            </div>
            <div className="glass-card p-8 hover:bg-surface0 transition-colors">
              <h3 className="text-2xl font-bold text-teal mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-teal/20 flex items-center justify-center text-teal">
                  <i className="fas fa-question"></i>
                </span>
                What can I do for you?
              </h3>
              <p className="text-subtext1 leading-relaxed text-lg">
                I offer a range of services tailored to your software
                development needs. Whether you need a Node.js or React.js web
                application, a high-performance C++ program, or assistance with
                securing your digital assets, I have the expertise to deliver.{" "}
                <br /> I can make websites for you, make apps, and help you in
                your projects! <br />
                But please note, I only take fees in crypto.. (Sorry)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
