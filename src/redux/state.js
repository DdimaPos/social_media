/*************************profile******************************* */
// let avatar ='https://oir.mobi/uploads/posts/2021-04/1619454473_8-oir_mobi-p-krutoi-kot-zhivotnie-krasivo-foto-9.jpg';
// let postData = [
//   {message:'my first post'},
//   {message:'how do you do bro'},
//   {message:'YEAH BITCH! Magnets'},
// ];
// /*************************************************************** */
// /*************************messages******************************* */
// let fData = [
//  {Fname: 'Walter White',id: '1', src:'https://i.pinimg.com/736x/6e/ef/37/6eef3770e8aaf4a22e2e28944e0f0478.jpg'},
//  {Fname: 'Dima',id: '2', src:'https://koshka.top/uploads/posts/2021-12/1640328596_1-koshka-top-p-kota-na-avatarku-1.jpg'},
//  {Fname: 'Jessie',id: '3', src:'https://avatars.mds.yandex.net/i?id=5596d24cb431856c74aa0a15a051ab1ee75b7acb-4612849-images-thumbs&n=13'}];
// let messagesData = [
//  {message: 'hello nick',id: 1, type:'my'},
//  {message: 'hello',id: 2, type:'his'},
//  {message: 'как дела',id: 4, type:'my'},
//  {message: 'I don`t understand you',id: 5, type:'his'},
//  {message: 'Еблан...',id: 6, type:'my'},
//  {message: 'How do you do suka?',id: 7, type:'my'},];

import { rerenderTree } from "../render";

// /*************************************************************** */
let state = {
    profilePage:{
        avatar:'https://oir.mobi/uploads/posts/2021-04/1619454473_8-oir_mobi-p-krutoi-kot-zhivotnie-krasivo-foto-9.jpg',
        postData:[
            {message:'my first post'},
            {message:'how do you do bro'},
            {message:'YEAH BITCH! Magnets'},
        ],
    },
    mesPage:{
        fData:[
            {Fname: 'Walter White',id: '1', src:'https://i.pinimg.com/736x/6e/ef/37/6eef3770e8aaf4a22e2e28944e0f0478.jpg'},
            {Fname: 'Dima',id: '2', src:'https://koshka.top/uploads/posts/2021-12/1640328596_1-koshka-top-p-kota-na-avatarku-1.jpg'},
            {Fname: 'Jessie',id: '3', src:'https://avatars.mds.yandex.net/i?id=5596d24cb431856c74aa0a15a051ab1ee75b7acb-4612849-images-thumbs&n=13'}
        ],
        mesData:[
            {message: 'hello nick',id: 1, type:'my'},
            {message: 'hello',id: 2, type:'his'},
            {message: 'как дела',id: 4, type:'my'},
            {message: 'I don`t understand you',id: 5, type:'his'},
            {message: 'Еблан...',id: 6, type:'my'},
            {message: 'How do you do suka?',id: 7, type:'my'},
        ]
    },
    
}
export let addPost = (postText) =>{
    let newPost = {message: postText};
    state.profilePage.postData.push(newPost);
    rerenderTree(state);
    
}
export let sendMes = (mesText) =>{
    let newMes = {message: mesText, id: 1, type:'my'};
    state.mesPage.mesData.push(newMes);
    rerenderTree(state);
}
export default state;
