import { Link } from "react-router-dom";

export function CategoriesIndex(props) {
  return (
    <div>
      <h1>All categories</h1>
      {props.categories.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <button onClick={() => props.onShowCategory(category)}>More info</button>
          <Link to={`/category/${category.id}`}>View Posts</Link>
        </div>
      ))}
    </div>
  );
}
