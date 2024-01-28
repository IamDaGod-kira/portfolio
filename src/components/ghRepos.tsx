import React from 'react';
import axios from 'axios';

const GitHubRepoList = () => {
  const [repos, setRepos] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/users/iamdagod-kira/repos',
        );
        setRepos(response.data);
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl md:text-2xl font-bold mb-4">My GitHub Repositories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ul className="space-y-2">
          {repos.map((repo) => (
            <li
              key={repo.id}
              className="bg-white p-4 shadow-md rounded-md md:flex md:flex-col md:space-y-2"
            >
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-bold hover:underline"
              >
                {repo.name}
              </a>
              <p className="text-gray-600">{repo.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GitHubRepoList;