import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost } from './redux/state';
import { sendMes } from './redux/state';
import { changePostText } from './redux/state';
import { changeMesText } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderTree = (state) =>{
    root.render(
        <React.StrictMode>
          <App state={state} addPost={addPost} changePostText={changePostText} sendMes={sendMes} changeMesText={changeMesText}/>
          
        </React.StrictMode>
      );
}