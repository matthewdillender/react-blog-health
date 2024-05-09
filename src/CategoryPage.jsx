// CategoryPage.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPostsByCategory } from "./content"; // Import fetchPostsByCategory from content.jsx

export function CategoryPage() {
  const { id } = useParams(); // Extract category ID from URL
  const [posts, setPosts] = useState([]); // State to store posts data

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPosts = await fetchPostsByCategory(id);
      setPosts(fetchedPosts);
    };

    fetchData();
  }, [id]); // Dependency array to ensure useEffect runs when ID changes

  return (
    <div>
      <h2>Posts for Category {id}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>{post.author_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
