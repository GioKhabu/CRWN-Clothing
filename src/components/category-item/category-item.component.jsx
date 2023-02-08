
import './category-item.styles.scss'

const Categoryitem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>SHop now</p>
      </div>
    </div>
  );
};

export default Categoryitem;