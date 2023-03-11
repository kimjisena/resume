import React,  { ReactElement } from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App (): ReactElement {
  return (
    <div className={`resume w-[90%] my-3 mx-auto md:w-[85%] lg:w-[80%] bg-dark-grey`}>
      <Header />
      <Main />
    </div>
  );
}

export default App;