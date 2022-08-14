import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className={`resume w-[90%] my-3 mx-auto md:w-4/5 bg-dark-grey`}>
      <Header />
      <Main />
    </div>
  );
}

export default App;