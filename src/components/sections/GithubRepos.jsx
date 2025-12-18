import React from 'react';
import axios from 'axios';

export default function GithubRepos() {
  const [repos, setRepos] = React.useState([]);

  React.useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/users/iamdagod-kira/repos',
        );
        setRepos(response.data);
      } catch (error) {
        import('sweetalert2').then(Swal =>
          Swal.default.fire({
            icon: 'error',
            title: 'Error',
            text: `Failed to fetch GitHub repositories:\n${error}`,
            background: '#001219',
            color: '#94d2bd'
          })
        );
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="px-6 md:px-12 lg:px-24">
      <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-burnt_caramel to-oxidized_iron text-center">
        My GitHub Repositories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map(repo => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full"
          >
            <div className="h-full p-6 bg-ink_black/30 rounded-xl border border-rusty_spice/20 backdrop-blur-sm hover:border-rusty_spice/60 hover:bg-rusty_spice/5 transition-all duration-300 shadow-lg hover:shadow-rusty_spice/10 transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-pearl_aqua group-hover:text-burnt_caramel transition-colors mb-2 break-words text-center md:text-left">
                {repo.name}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-3 group-hover:text-gray-300 transition-colors">
                {repo.description || "No description available"}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-dark_cyan">
                <span className="px-2 py-1 rounded-full bg-rusty_spice/10 border border-rusty_spice/20 text-rusty_spice font-bold">
                  {repo.language || "Code"}
                </span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <i className="far fa-star"></i> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="fas fa-code-branch"></i> {repo.forks_count}
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
