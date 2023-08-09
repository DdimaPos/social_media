import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Content/Profile';
import Messages from "./components/Messages/messages";
import {BrowserRouter, Routes , Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <Header />
          <div className='page'>
            <Nav />
            <Routes>
              <Route path="/profile" Component={Profile}/>
              <Route path="/chat" Component={Messages} />
            </Routes>
            {/*<Content />*/}
            {/*<Messages />*/}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
