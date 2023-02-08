import Categoryitem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = ({categories}) => {
  
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <Categoryitem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Directory;
