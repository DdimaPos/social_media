const SEND_MESSAGE = 'SEND-MESSAGE';
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';
export let messagesReducer = (state, action) =>{
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