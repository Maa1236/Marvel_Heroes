import {Fragment,useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPart from './components/MainPart/MainPart';


function App() {
  const [heroes, setHeroes] = useState([]);

  return (
    <Fragment>
      <Header />
      <MainPart heroes={heroes}
                setHeroes={setHeroes}
      />
      <Footer />
    </Fragment>
  );
}

export default App;