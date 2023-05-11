import "./Cart.css";

const Cart = () => {
  return <ul>
     <li className="cart-item">
      <div className="cart-itemImg">
        <img src='' alt="" className="cart-itemImage" />
      </div>
      <div className="cart-itemContent">
        <h3 className="cart-itemName">name</h3>
        <h4 className="cart-itemCategory">category</h4>
        <p className="cart-itemPrice">
          quantity * price = totalPrice
        </p>
      </div>
    </li>
    </ul>
};

export default Cart;
