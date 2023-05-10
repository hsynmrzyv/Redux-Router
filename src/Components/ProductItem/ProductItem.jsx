import "./ProductItem.css";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductItem = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products.products);

  const item = products.find((product) => product.id === +id);

  return (
    <div className="product-item">
      <div className="product-itemContent">
        <h1 className="name">{item.name}</h1>
        <h2 className="category">{item.category}</h2>
        <h2 className="price">{item.price}$</h2>
      </div>
      <div className="product-itemImage">
        <img src={item.image} alt="" />
      </div>
      <div className="product-itemActions">
        <div className="product-itemCounter">
          <button>-</button>
          <p>0</p>
          <button>+</button>
        </div>
        <button className="product-itemBtn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
