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
      <div className="flex flex-col items-center justify-center w-16 h-16 bg-gradient-to-br from-brown_red to-oxidized_iron text-pearl_aqua rounded-full shadow-lg border-2 border-rusty_spice group-hover:scale-110 transition-transform duration-300 group-hover:shadow-rusty_spice/20">
        <i
          onClick={(e) => { e.preventDefault(); handleClick(); }}
          className={`text-xl mb-1 ${clicked ? 'fas fa-star text-vanilla_custard' : 'far fa-star group-hover:text-vanilla_custard transition-colors'}`}
        ></i>
        <span className="text-xs font-bold">{stars}</span>
      </div>
    </a>
  );
}
