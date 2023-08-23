import { messagesReducer } from "./MessagesReducer";
import { profileReducer } from "./ProfileReducer";

const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';
let store = {
    _state: {
        profilePage:{
            avatar:'https://oir.mobi/uploads/posts/2021-04/1619454473_8-oir_mobi-p-krutoi-kot-zhivotnie-krasivo-foto-9.jpg',
            postData:[
                {message:'my first post'},
                {message:'how do you do bro'},
                {message:'YEAH BITCH! Magnets'},
            ],
            textChange:'',
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
            ],
            mesChangedText:'',
        },

    },
    getState(){
        return this._state;
    },
    Subscriber(observer){
        this.rerenderTree = observer;
    },
    rerenderTree(){},

    /*addPost(){
        let newPost = {message: this._state.profilePage.textChange};
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.textChange = '';
        this.rerenderTree(this._state);   
    },
    changePostText(newText){
        let newMes = newText;
        this._state.profilePage.textChange = newMes;
        this.rerenderTree(this._state);
    },
    sendMes(){
        let newMes = {message: this._state.mesPage.mesChangedText, id: 1, type:'my'};
        this._state.mesPage.mesData.push(newMes);
        this._state.mesPage.mesChangedText = '';
        this.rerenderTree(this._state);
    },
    changeMesText(newMesText){
        let newMes = newMesText;
        this._state.mesPage.mesChangedText = newMes;
        this.rerenderTree(this._state);
    },*/

    dispatch(action){
        profileReducer(this._state.profilePage, action);
        messagesReducer(this._state.mesPage, action);
        this.rerenderTree()
    }
    
} 



export default store;
window.Storage = store;
