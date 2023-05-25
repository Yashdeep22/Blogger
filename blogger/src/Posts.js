import "./Posts.css";
import React, { useState, useEffect } from 'react';
import Post from "./Post";
import data from "./data.json"
const Posts = () => {
    
const [count, setCount] = useState(0);
    useEffect(() => {
        const storedCount = localStorage.getItem('count',0);
        setCount(parseInt(storedCount));
      
      }, []);
      useEffect(() => {
        
        localStorage.setItem('count', (Math.floor(Math.random() * data.length)).toString());
        
      }, [count]);

return (
	<div className="posts-container">
        
        <Post key={count} index={count} post={data[count]} />

	{/* {blogPosts.map((post, index) => (
		<Post key={index} index={index} post={post} />
	))} */}
	</div>
);
};

export default Posts;
