import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Content/Profile';
import Messages from "./components/Messages/messages";
import {BrowserRouter, Routes , Route } from 'react-router-dom';
function App(props) {

  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <Header />
          <div className='page'>
            <Nav />
            <Routes>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/chat" element={<Messages/>} />
            </Routes>
            {/*<Gallery />*/}
            {/*<Chat />*/}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
