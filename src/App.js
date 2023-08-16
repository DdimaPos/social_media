import logo from './logo.svg';
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
              <Route path="/profile" element={<Profile profData={props.state.profilePage} addPost={props.addPost} changePostText={props.changePostText}/>}/>
              <Route path="/chat" element={<Messages mesData={props.state.mesPage} sendMes={props.sendMes } changeMesText={props.changeMesText}/>} />
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
