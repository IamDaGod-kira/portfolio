import React from 'react';

export default function Resume() {
  return (
    <React.Fragment>
      <h2 className="text-2xl font-bold mb-4">My resume</h2>
      <p>
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

