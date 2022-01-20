import React from 'react';
import logo from '/fieldnotes.png';
import '../style.css';
import Headline from './Headline';
import Features from './Features';
import Open from './Open';
import Pricing from './Pricing';
import Footer from './Footer';

const LandingPage = (): React.ReactElement => {
  return (
    <div className="flex flex-col py-8">
      <div className="flex flex-row px-16 w-full justify-between items-center">
        <div className="flex flex-row gap-4 items-center">
          <img className="w-12 h-12" src={logo} />
          <div className="text-xl font-bold">fieldnotes</div>
        </div>
        <ul className="flex flex-row items-center gap-6">
          <li>Features</li>
          <li>Open</li>
          <li>Pricing</li>
          <li className="underline">Log in</li>
          <li className="highlight-small">Sign up</li>
        </ul>
      </div>
      <Headline />
      <Features />
      <Open />
      <Pricing />
      <Footer />
    </div>
  );
};

export default LandingPage;
