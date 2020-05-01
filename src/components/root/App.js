import React from "react";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Container } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import cartDetail from "../cart/CartDetail";
<<<<<<< HEAD
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";
=======
>>>>>>> 74f4b6817bbcbefa34e3344f32c8d521e61868dd

function App() {
  return (
    <div>
      <Container>
        <Navi></Navi>
        <Switch>
          <Route path="/" exact component={Dashboard}></Route>
          <Route path="/product" exact component={Dashboard}></Route>
<<<<<<< HEAD
          <Route
            path="/saveproduct/:productId"
            component={AddOrUpdateProduct}
          ></Route>
          <Route path="/saveproduct" component={AddOrUpdateProduct}></Route>
          <Route path="/cart" exact component={cartDetail}></Route>
          <Route exact component={NotFound}></Route>
        </Switch>
=======
          <Route path="/cart" exact component={cartDetail}></Route>
        </Switch>        
>>>>>>> 74f4b6817bbcbefa34e3344f32c8d521e61868dd
      </Container>
    </div>
  );
}

export default App;
