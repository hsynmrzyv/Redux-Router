// Components
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import ProductItem from "./Components/ProductItem/ProductItem";
import Prodcuts from "./Components/Products/Products";

// Router
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products" exact>
          <Prodcuts />
        </Route>
        <Route path="/cart">
          <h1>Cart</h1>
        </Route>
        <Route path="/search">
          <h1>Search</h1>
        </Route>
        <Route path="/products/:id">
          <ProductItem />
        </Route>
      </Switch>
    </>
  );
};

export default App;
