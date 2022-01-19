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
        <div className="flex flex-row gap-2">
          <div>Pricing</div>
          <div>Open Source</div>
          <div>Login</div>
          <div>Signup</div>
        </div>
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
