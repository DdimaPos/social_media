import { react } from "react";
import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";
const mapStateToProps = (state) =>{
    return{avatar: state.profilePage.avatar,}
}
const mapDispatchToProps = (dispatch) =>{return{}}
const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);
export default ProfileInfoContainer;