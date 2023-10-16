import React from 'react';

export default function Body() {
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
        <blockquote className="p-6 rounded-lg shadow-md bg-white">
          <i className="text-4xl text-gray-600 mb-4 leading-none">"</i>
          <p className="text-lg text-gray-800">Your quote goes here.</p>
          <i className="text-4xl text-gray-600 mt-4 leading-none">"</i>
        </blockquote>
      </div>
    </React.Fragment>
  );
}
