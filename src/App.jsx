import React from 'react';
const Header = React.lazy(() => import('./components/layout/Header'));
const About = React.lazy(() => import('./components/sections/About'));
const GithubRepos = React.lazy(() => import('./components/sections/GithubRepos'));
const Resume = React.lazy(() => import('./components/sections/Resume'));
const Stars = React.lazy(() => import('./components/layout/Stars'));
const Certificates = React.lazy(() => import('./components/sections/Certificates'));
const ContactBanner = React.lazy(() => import('./components/sections/ContactBanner'));

function App() {
  return (
    <React.Suspense fallback={
      <div className="min-h-screen bg-ink_black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pearl_aqua"></div>
      </div>
    }>
      <div className="min-h-screen bg-gradient-to-br from-ink_black via-dark_teal to-ink_black text-white font-sans flex flex-col gap-12 pb-12 overflow-x-hidden">
        <Header />
        <About />
        <GithubRepos />
        <Resume />
        <Stars />
        <Certificates />
        <ContactBanner />
      </div>
    </React.Suspense>
  );
}

export default App;
