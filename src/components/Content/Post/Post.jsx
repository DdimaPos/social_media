import post_style from './Post.module.css';
function Post(props) {
    return(
        <div className={post_style.item}>
            <div className={post_style.image}><img src={props.src} alt="" /></div>
            <div className={post_style.text}>{props.message}</div>
        </div>
    );
}
export default Post;