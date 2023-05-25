import React from "react";
import "./Post.css";
const Post = ({ post: { title, body,
imgUrl, author }, index }) => {
return (
	<div className="post-container">
	<h1 className="heading">{title}</h1>
	<img className="image" src={imgUrl} alt="post" class="image" />
	<p>{body}</p>
	<div className="info">	
		<h4>Directed by: {author}</h4>
	</div>
	</div>
);
};

export default Post;
