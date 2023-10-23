import React from 'react';
import axios from 'axios';

export default function Stars() {
  const [stars, setStars] = React.useState(0);

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
  });
  return (
    <>
      <a href="https://github.com/iamdagod-kira/portfolio/">
        <div className="fixed text-center bottom-0 right-0 p-4 m-4 bg-gray-900 text-white rounded-full">
          <i class="far fa-star"></i> <br />
          {stars}
        </div>
      </a>
    </>
  );
}
