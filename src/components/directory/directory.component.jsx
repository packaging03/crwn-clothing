import DirectoryItem from "../directory-item/directory-item.component";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category, id) => (
        <DirectoryItem key={id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
