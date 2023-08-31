import './App.css';

import Main from './layout/Main';
import Header from './layout/Header';
import MenuTop from './layout/MenuTop';



function App() {

  return (
    <div className="App">
      <div className='header'>
        <Header/>
      </div>
      <div className='top-menu'>
        <MenuTop/>
      </div>
      <div className="App-content">
        <Main/>
      </div>
    </div>
  );
}

export default App;
