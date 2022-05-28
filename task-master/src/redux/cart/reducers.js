import * as actionTypes from "./types";
const INITIAL_STATE = {
  products: [
    {
      id: 1,
      image: "https://picsum.photos/200/300",
      title: "product1",
      amount: 100,
    },
    {
      id: 2,
      image: "https://picsum.photos/200/300",
      title: "product2",
      amount: 200,
    },
    {
      id: 3,
      image: "https://picsum.photos/200/300",
      title: "product3",
      amount: 300,
    },
    {
      id: 4,
      image: "https://picsum.photos/200/300",
      title: "product4",
      amount: 400,
    },
    {
      id: 5,
      image: "https://picsum.photos/200/300",
      title: "product5",
      amount: 500,
    },
    {
      id: 6,
      image: "https://picsum.photos/200/300",
      title: "product6",
      amount: 600,
    },
    {
      id: 7,
      image: "https://picsum.photos/200/300",
      title: "product7",
      amount: 700,
    },
    {
      id: 8,
      image: "https://picsum.photos/200/300",
      title: "product8",
      amount: 800,
    },
    {
      id: 9,
      image: "https://picsum.photos/200/300",
      title: "product9",
      amount: 900,
    },
    {
      id: 10,
      image: "https://picsum.photos/200/300",
      title: "product10",
      amount: 1000,
    },
  ],
  cart: [],
  currentItem: null,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find((prod) => prod.id === action.payload.id);
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
