import { react } from "react";
import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";
let mapStateToProps = (state) =>{
    debugger
    return{
        avatar: state.profilePage.avatar,
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{}
}
const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);
export default ProfileInfoContainer;