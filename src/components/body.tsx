import React from 'react';
const all = require('everyday-fun');

export default function Body() {
  const quote = all.getRandomQuote();

  return (
    <React.Fragment>
      <div>
        <h4 className="text-[#C0392B]">I am a small developer from India.</h4>
        <br />
        <p>I know a bit of ReactJS, NodeJS, C++ etc.</p>
        <p>I have done some projects, and I am a noob still ...</p>
        <p>
          I can also design Discord Server, manage them as staff, and manage
          bots
        </p>
        <p>you can hire me for the following, but I only take crypto</p>
        <br />
        <hr />
        <br />
        <blockquote className="p-6 rounded-lg shadow-md bg-[#333]">
          <i className="text-4xl text-gray-600 mb-4 leading-none">"</i>
          <p className="text-lg text-[#4078c0]">{quote.quote}</p>
          <i className="text-4xl text-gray-600 mt-4 leading-none">"</i>
          <p>by {quote.author}</p>
        </blockquote>
        <br />
        <h3 className="text-xl text-white">Why do I do what I do ?</h3>
        <p>
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
        <h3 className="text-white text-xl">What can I do for you?</h3>
        <p>
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
