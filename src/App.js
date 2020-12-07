import './assets/css/App.css';
import {BrowserRouter} from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import Router from './Router';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header></Header>
        <Router></Router>
      </BrowserRouter>

      <div className="clearfix"></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
