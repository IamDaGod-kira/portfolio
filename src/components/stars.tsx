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
  return <div>Stars : {stars}</div>;
}
