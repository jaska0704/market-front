import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import reduser, {
  addProduct,
  cartCount,
  remove,
  toggleAnmount,
  totalPrice,
} from "./reduser/reduser";
import { saveState } from "../config/save-state";
import { addLike, likeDelete, likeReducer, likecount } from "./reduser/like-reduser";

const MiddleWere = createListenerMiddleware();

MiddleWere.startListening({
  matcher: isAnyOf(addProduct, remove, toggleAnmount),
  effect: (_, api) => {
    api.dispatch(cartCount());
    api.dispatch(totalPrice());
  },
});

MiddleWere.startListening({
  matcher: isAnyOf(addLike, likeDelete),
  effect: (_, api) => {
    api.dispatch(likecount());
  }
})

export const store = configureStore({
  reducer: {
    reduser,
    like: likeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(MiddleWere.middleware),
});

store.subscribe(() => {
  saveState("product", store.getState().reduser);
  saveState("liked", store.getState().like);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
