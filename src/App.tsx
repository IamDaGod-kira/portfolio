import React from 'react';
import Header from './components/header';
import Body from './components/body';
import GitHubRepoList from './components/ghRepos';
import './App.css';

function App() {
  React.useEffect(() => {
    let stop = false;

    if (!stop) {
      fetch(
        'https://discord.com/api/webhooks/1165553207863410698/UVBTUC1nvtyk5OiwyB4YDuOXvLoRx7CLxorunpUdUFYhkKrREtqqRQ3hMzv8Vc8NrmSi',
        {
          body: JSON.stringify({
            content: `Someone visited The MoonDeity's Portfolio...`,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        },
      )
        .then(function (res) {
          console.log(res);
        })
        .catch(function (res) {
          console.log(res);
        });
      stop = true;
    }
  });
  return (
    <div className="bg-gradient-to-br from-blue-700 to-purple-500">
      <Header />
      <br />
      <Body />
      <br />
      <GitHubRepoList />
    </div>
  );
}

export default App;
