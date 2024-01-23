import React from 'react';
import Header from './components/header';
import Body from './components/body';
import GitHubRepoList from './components/ghRepos';
import Stars from './components/stars';
import Certs from './components/certificates';
import Advertisement from './components/advertisement';
import Resume from './components/resume';
import './App.css';

function App() {
  return (
    <div className="bg-gradient-to-br from-blue-700 to-purple-500">
      <Header />
      <br />
      <Body />
      <br />
      <GitHubRepoList />
      <br />
      <Resume />
      <Stars />
      <br />
      <Certs />
      <br />
      <Advertisement />
    </div>
  );
}

export default App;
