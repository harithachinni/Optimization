import React from "react";
function Post(props) {
    console.log(props);
    return (
        <>
            <div>
                <h1>{props.details.name}</h1>
                <p>{props.details.title}</p>
            </div>
            {props.signIn && <button>Edit Post</button>}
        </>
    )
}
export default React.memo(Post);
// export default Post;