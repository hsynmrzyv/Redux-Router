import "./ProductCard.css";

// Rotuer
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <Link to={`/products/${props.id}`}>
      <li className="product-card">
        <div className="product-cardImage">
          <img src={props.image} alt="" />
        </div>
        <div className="product-content">
          <div className="prodcut-info">
            <p className="name">{props.name}</p>
            <p className="category">{props.category}</p>
          </div>
          <h3 className="price">{props.price}$</h3>
        </div>
      </li>
    </Link>
  );
};

export default ProductCard;
