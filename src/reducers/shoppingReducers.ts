import { TYPES } from "@/actions/shoppingActions";

export const shoppinginitialState = {
  title: "No tienes productos en el carrito",
  products: [],
  cart: [],
};

export function shoppingReducer(state: any, action: any): any {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
    }
    case TYPES.CLEAR_CART: {
    }
    default:
      return state;
  }
}
