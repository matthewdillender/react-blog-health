import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function PostShowPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null); // State to store the fetched post data

  useEffect(() => {
    // Function to fetch post data by post ID
    const fetchPostById = async () => {
      try {
        // Make Axios request to fetch post data by post ID
        const response = await axios.get(`http://localhost:3000/posts/${postId}.json`);

        // Update state with fetched post data
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    // Call the fetchPostById function when component mounts or post ID changes
    fetchPostById();
  }, [postId]); // Dependency array to ensure useEffect runs when ID changes

  return (
    <div>
      <h2>Post Details for ID {postId}</h2>
      {post ? (
        <div>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>{post.author_name}</p>
          {/* Display other post details as needed */}
        </div>
      ) : (
        <p>Loading post...</p>
      )}
    </div>
  );
}
