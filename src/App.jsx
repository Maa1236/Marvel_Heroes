import {Fragment} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPart from './components/MainPart/MainPart';


function App() {
  

  return (
    <Fragment>
      <Header />
      <MainPart />
      <Footer />
    </Fragment>
  );
}

export default App;
