import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function productListReducer(
  state = initialState.products,
  action
) {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_SUCCESS:
        console.log("i am in reducer")
      return action.payload;
    default:
      return state;
  }
}
