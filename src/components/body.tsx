import React from 'react';
import Swal from 'sweetalert2';
const all = require('everyday-fun');

export default function Body() {
  const quote = all.getRandomQuote();
  const jokeFunc = () => {
    const joke = all.getRandomJoke();
    Swal.fire({
      title: 'Joke',
      text: joke.body,
      icon: 'info',
      footer: `Category: ${joke.category}`,
    });
  };

  return (
    <React.Fragment>
      <div className="text-center md:text-left">
        <h4 className="text-[#333] text-xl md:text-2xl lg:text-3xl mb-4">
          I am a small developer from India.
        </h4>
        <p className="text-sm md:text-base">
          I know a bit of ReactJS, NodeJS, C++ etc.
        </p>
        <p className="text-sm md:text-base">
          I have done some projects, and I am a noob still ...
        </p>
        <p className="text-sm md:text-base">
          I can also design Discord Server, manage them as staff, and manage
          bots
        </p>
        <p className="text-sm md:text-base">
          you can hire me for the following, but I only take crypto
        </p>
        <br />
        <hr className="my-6" />
        <br />
        <blockquote className="p-6 rounded-lg shadow-md bg-white">
          <i className="text-4xl text-gray-600 mb-4 leading-none">"</i>
          <p className="text-base md:text-lg text-blue-600">{quote.quote}</p>
          <i className="text-4xl text-gray-600 mt-4 leading-none">"</i>
          <p className="text-sm md:text-base">by {quote.author}</p>
        </blockquote>
        <br />
        <button
          onClick={jokeFunc}
          className="text-green-400 text-xs md:text-sm underline"
        >
          <p>Bored of quotes?? Click here for a joke...</p>
        </button>
        <h3 className="text-xl text-white mt-6">Why do I do what I do?</h3>
        <p className="text-sm md:text-base">
          I am passionate about creating innovative solutions and pushing the
          boundaries of technology. My journey as a developer began with a
          fascination for Node.js, React.js, and C++, and has since evolved into
          a commitment to delivering secure and efficient software. Hacking and
          Discord have opened up new avenues for me to explore the digital
          world. I thrive on the challenge of developing cutting-edge
          applications and using my skills to protect digital landscapes. My
          choice to exclusively accept cryptocurrency reflects my belief in the
          future of decentralized finance and the importance of privacy in our
          increasingly connected world.
        </p>
        <h3 className="text-white text-xl mt-6">What can I do for you?</h3>
        <p className="text-sm md:text-base">
          I offer a range of services tailored to your software development
          needs. Whether you need a Node.js or React.js web application, a
          high-performance C++ program, or assistance with securing your digital
          assets, I have the expertise to deliver. My knowledge in hacking and
          Discord can be harnessed for various projects, from penetration
          testing to creating custom Discord bots. I am committed to ensuring
          the highest quality in every project I undertake. By accepting
          cryptocurrency, I prioritize your privacy and security throughout our
          collaboration.
        </p>
      </div>
    </React.Fragment>
  );
}
