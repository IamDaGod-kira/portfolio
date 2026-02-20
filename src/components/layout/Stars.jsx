import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Stars() {
  const [stars, setStars] = useState(0);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/repos/IamDaGod-kira/portfolio',
        );
        setStars(response.data.stargazers_count);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStars();
  }, []);

  const handleClick = () => {
    if (!clicked) {
      setStars(stars + 1);
      setClicked(true);
    }
  };

  return (
    <a
      href="https://github.com/iamdagod-kira/portfolio/"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="flex flex-col items-center justify-center w-16 h-16 glass-card hover:bg-surface1/70 backdrop-blur-md rounded-full border border-overlay0 text-subtext0 shadow-xl transition-colors">
        <i
          onClick={(e) => { e.preventDefault(); handleClick(); }}
          className={`text-xl mb-1 ${clicked ? 'fas fa-star text-yellow' : 'far fa-star text-subtext1 group-hover:text-yellow transition-colors'}`}
        ></i>
        <span className="text-xs font-bold font-sans">{stars}</span>
      </div>
    </a>
  );
}
