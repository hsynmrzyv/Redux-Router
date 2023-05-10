import "./Products.css";

// Components
import ProductItem from "../ProductCard/ProductCard";

// Redux
import { useSelector } from "react-redux";

const Product = () => {
  const products = useSelector((state) => {
    return state.products.products;
  });

  return (
    <ul className="products">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          category={product.category}
          id={product.id}
        />
      ))}
    </ul>
  );
};

export default Product;
