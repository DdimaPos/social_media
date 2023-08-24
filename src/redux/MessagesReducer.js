const SEND_MESSAGE = 'SEND-MESSAGE';
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';
let initState = {
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
} 
export let messagesReducer = (state = initState, action) =>{
    switch (action.type) {
        case SEND_MESSAGE:
            let newMes = {message: state.mesChangedText, id: 1, type:'my'};
            state.mesData.push(newMes);
            state.mesChangedText = '';
            break;
        case CHANGE_MESSAGE_TEXT:
            let newMessage = action.newMesText;
            state.mesChangedText = newMessage;
        default:
            break;
    }
    return state;
}
export const SendActionCreator = () =>({type:SEND_MESSAGE});
export const MesChangedActionCreator = (text) =>({type:CHANGE_MESSAGE_TEXT, newMesText: text});