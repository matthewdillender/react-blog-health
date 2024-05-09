export function CategoriesIndex(props) {
  return (
    <div>
      <h1>All categories</h1>
      {props.categories.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <h3>{category.description}</h3>
        </div>
      ))}
    </div>
  );
}
