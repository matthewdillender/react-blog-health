export function CategoriesShow(props) {
  return (
    <div>
      <h1>{props.category.name}</h1>
      <p>Description: {props.category.description}</p>
    </div>
  );
}
