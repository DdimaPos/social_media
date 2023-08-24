const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';
let initState = {
    avatar:'https://oir.mobi/uploads/posts/2021-04/1619454473_8-oir_mobi-p-krutoi-kot-zhivotnie-krasivo-foto-9.jpg',
    postData:[
            {message:'my first post'},
            {message:'how do you do bro'},
            {message:'YEAH BITCH! Magnets'},
    ],
    textChange:'',
};
export let profileReducer = (state = initState, action) =>{
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
