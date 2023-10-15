import React from 'react';
import Header from './components/header';
import Body from './components/body';
import GitHubRepoList from './components/ghRepos';
import './App.css';

function App() {
  return (
    <div className="bg-gradient-to-br from-blue-700 to-purple-500">
      <Header /><br />
      <Body /><br />
      <GitHubRepoList />
    </div>
  );
}

export default App;
