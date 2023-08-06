import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';
import Messages from "./components/Messages/messages";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className='page'>
          <Nav />
          {/*<Content />*/}
          <Messages />
        </div> 
      </div>
    </div>
  );
}

export default App;
