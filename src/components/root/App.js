import React from "react";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Container } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import cartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";


function App() {
  return (
    <div>
      <Container>
        <Navi></Navi>
        <Switch>
          <Route path="/" exact component={Dashboard}></Route>
          <Route path="/product" exact component={Dashboard}></Route>
          <Route
            path="/saveproduct/:productId"
            component={AddOrUpdateProduct}
          ></Route>
          <Route path="/saveproduct" component={AddOrUpdateProduct}></Route>
          <Route path="/cart" exact component={cartDetail}></Route>
          <Route exact component={NotFound}></Route>
        </Switch>   
      </Container>
    </div>
  );
}

export default App;
