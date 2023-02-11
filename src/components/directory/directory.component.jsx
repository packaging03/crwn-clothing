import CategoryItem from "../category-tem/category-item.component";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category, id) => (
        <CategoryItem key={id} category={category} />
      ))}
    </div>
  );
};

export default Directory;