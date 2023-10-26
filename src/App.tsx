import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './layout/Header';
import Main from './layout/Main';



function App() {

  return (
    <div className="app">
      <div>
        <Header />
      </div>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
