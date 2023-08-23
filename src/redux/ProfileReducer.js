const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';
export let profileReducer = (state, action) =>{
    switch (action.type) {
        case ADD_POST:
            let newPost = {message: state.textChange};
            state.postData.push(newPost);
            state.textChange = '';
            break;
        case CHANGE_POST_TEXT:
            let newMes = action.newText;
            state.textChange = newMes;
            break;
        default:
            break;
    }
    return state;
}
export const onSubmitActionCreator = () =>({type: ADD_POST});
export const onTextChangeActionCreator = (text) =>({type:CHANGE_POST_TEXT, newText: text})
