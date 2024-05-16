import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadState } from "../../config/save-state";

interface CartProduct {
  id: number;
}
interface toggle {
  id: number;
  type: string;
}

interface typeProducts {
  id: number;
  is_available: boolean;
  title: string;
  images: {
    image: string;
    image_id: number;
  }[];
  product: number;
  attribute_value: [];
  other_detail: string;
  price_with_discount: null;
  quantity: number;
  price: string;
  userCount: number;
  userPrice: number;
}
interface TypeInit {
  cartProduct: typeProducts[];
  count: number;
  totalPrice: number;
}

const initialState: TypeInit = loadState("product") || {
  cartProduct: [],
  count: 0,
  totalPrice: 0,
};

const productCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<typeProducts>) => {
      console.log(action.payload);
      
      const cartItem = state.cartProduct.find(
        (item) => item.id === action.payload.id
      );
      if (!cartItem) {
        return {
          ...state,
          cartProduct: [
            ...state.cartProduct,
            {
              ...action.payload,
              userCount: 1,
              userPrice: parseInt(action.payload.price),
            },
          ],
        };
      }
      console.log(state, action);
      return state;
    },
    remove: (state, action: PayloadAction<CartProduct>) => {
      localStorage.removeItem;
      return {
        ...state,
        cartProduct: state.cartProduct.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
    cartCount: (state) => {
      return {
        ...state,
        count: state.cartProduct.length,
      };
    },
    toggleAnmount: (state, action: PayloadAction<toggle>) => {
      if (action.payload.type === "add") {
        const newProducts = state.cartProduct.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              userCount: product.userCount + 1,
              userPrice: (product.userCount + 1) * Number(product.price),
            };
          }
          return product;
        });
        return { ...state, cartProduct: newProducts };
      }
      if (action.payload.type === "remove") {
        const newProducts = state.cartProduct.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              userCount: product.userCount - 1,
              userPrice: (product.userCount - 1) * Number(product.price),
            };
          }
          return product;
        });
        return { ...state, cartProduct: newProducts };
      }
    },
    totalPrice: (state) => {
      return {
        ...state,
        totalPrice: state.cartProduct.reduce((a, b) => a + b.userPrice, 0),
      };
    },
  },
});

export const { addProduct, remove, cartCount, toggleAnmount, totalPrice } =
  productCart.actions;
export default productCart.reducer;
