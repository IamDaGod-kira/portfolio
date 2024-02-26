import React from 'react';

export default function Resume() {
  return (
    <React.Fragment>
      <h2 className="text-xl md:text-2xl font-bold mb-4">My Resume</h2>
      <p className="text-sm md:text-base">
        Link to my resume{' '}
        <a
          className="underline text-blue-500"
          href="https://rxresu.me/iamdagod-kira/my-resume"
        >
          Here
        </a>
      </p>
    </React.Fragment>
  );
}
