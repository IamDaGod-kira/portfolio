import React from 'react';
import axios from 'axios';

export default function Stars() {
  const [stars, setStars] = React.useState(0);
  const [clicked, setClicked] = React.useState(false);

  React.useEffect(() => {
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

  const starIconClass = clicked
    ? 'fas fa-star pointer-events-none'
    : 'far fa-star cursor-pointer';

  return (
    <>
      <a
        href="https://github.com/iamdagod-kira/portfolio/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="fixed text-center bottom-0 right-0 p-4 m-4 bg-gray-900 text-white rounded-full">
          <i onClick={handleClick} className={starIconClass}></i> <br />
          {stars}
        </div>
      </a>
    </>
  );
}