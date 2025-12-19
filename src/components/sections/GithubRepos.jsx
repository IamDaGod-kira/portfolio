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
            background: '#ffffff',
            color: '#1c1c1e',
            buttonsStyling: false,
            customClass: {
              confirmButton: 'bg-mac-blue-500 text-white px-4 py-2 rounded-lg'
            }
          })
        );
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="px-6 md:px-12 lg:px-24">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-mac-orange-500 to-mac-pink-500 font-sans tracking-tight">
        My GitHub Repositories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos.map(repo => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full"
          >
            <div className="h-full p-8 glass-card bg-black/40 hover:bg-black/60 transition-colors shadow-lg border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mac-blue-500 to-mac-purple-500 opacity-60"></div>

              <h3 className="text-xl font-bold text-white group-hover:text-mac-blue-400 transition-colors mb-3 break-words text-center md:text-left flex items-center gap-2 justify-center md:justify-start">
                <i className="fas fa-book-open text-mac-gray-500 group-hover:text-mac-blue-500"></i> {repo.name}
              </h3>
              <p className="text-mac-gray-400 text-sm line-clamp-3 mb-6 font-medium">
                {repo.description || "No description available"}
              </p>
              <div className="mt-auto flex items-center justify-between text-xs text-mac-gray-500 font-semibold border-t border-white/10 pt-4">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/5 text-mac-indigo-500 font-bold shadow-sm">
                  {repo.language || "Code"}
                </span>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 hover:text-mac-yellow-500 transition-colors">
                    <i className="far fa-star text-sm"></i> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1 hover:text-mac-purple-500 transition-colors">
                    <i className="fas fa-code-branch text-sm"></i> {repo.forks_count}
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
