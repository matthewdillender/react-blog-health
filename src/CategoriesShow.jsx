import { Link } from "react-router-dom";

export function CategoriesShow(props) {
  const { category } = props;

  return (
    <div>
      <h1>{category.name}</h1>
      <p>Description: {category.description}</p>
      {/* Button to navigate to the CategoryPage for the selected category */}
      <Link to={`/category/${category.id}`}>
        <button>View Posts</button>
      </Link>
    </div>
  );
}
