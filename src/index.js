import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*************************profile******************************* */
  let avatar ='https://oir.mobi/uploads/posts/2021-04/1619454473_8-oir_mobi-p-krutoi-kot-zhivotnie-krasivo-foto-9.jpg';
  let postData = [
    {message:'my first post'},
    {message:'how do you do bro'},
    {message:'YEAH BITCH! Magnets'},
  ];
/*************************************************************** */
/*************************messages******************************* */
 let fData = [
   {Fname: 'Walter White',id: '1', src:'https://i.pinimg.com/736x/6e/ef/37/6eef3770e8aaf4a22e2e28944e0f0478.jpg'},
   {Fname: 'Dima',id: '2', src:'https://koshka.top/uploads/posts/2021-12/1640328596_1-koshka-top-p-kota-na-avatarku-1.jpg'},
   {Fname: 'Jessie',id: '3', src:'https://avatars.mds.yandex.net/i?id=5596d24cb431856c74aa0a15a051ab1ee75b7acb-4612849-images-thumbs&n=13'}];
 let messagesData = [
   {message: 'hello nick',id: 1, type:'my'},
   {message: 'hello',id: 2, type:'his'},
   {message: 'как дела',id: 4, type:'my'},
   {message: 'I don`t understand you',id: 5, type:'his'},
   {message: 'Еблан...',id: 6, type:'my'},
   {message: 'How do you do suka?',id: 7, type:'my'},];
/*************************************************************** */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
    avatar={avatar}
    postData={postData}
    mData={messagesData} 
    fData={fData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
