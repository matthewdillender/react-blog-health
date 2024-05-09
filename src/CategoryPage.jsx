import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export function CategoryPage() {
  const { id } = useParams(); // Extract category ID from URL
  const [posts, setPosts] = useState([]); // State to store posts data

  useEffect(() => {
    // Function to fetch posts data based on category ID
    const fetchPostsByCategory = async () => {
      try {
        // Make Axios request to fetch posts data by category ID
        const response = await axios.get(`http://localhost:3000/posts?category_id=${id}`);

        // Update state with fetched posts data
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    // Call the fetchPostsByCategory function when component mounts or category ID changes
    fetchPostsByCategory();
  }, [id]); // Dependency array to ensure useEffect runs when ID changes

  return (
    <div>
      <h2>Posts for Category {id}</h2>
      {/* Display posts here */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>

            {/* Link to navigate to the PostShowPage for this post */}
            <Link to={`/post/${post.id}`}>View Post</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
