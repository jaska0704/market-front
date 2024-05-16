import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../config/save-state";

interface LikeItem {
  id: number;
}

export interface LikedState {
  likedProduct: LikeItem[];
  likeCount: number;
}

export const initialState: LikedState = loadState("liked") || {
  likedProduct: [],
  likeCount: 0,
};

const liked = createSlice({
  name: "liked",
  initialState,
  reducers: {
    addLike: (state, action: PayloadAction<LikeItem>) => {
      const likeItem = state.likedProduct.find(
        (item) => item.id === action.payload.id
      );
      if (!likeItem) {
        return {
          ...state,
          likedProduct: [...state.likedProduct, action.payload],
        };
      }
      return state;
    },
    likeDelete: (state, action: PayloadAction<{ id: number }>) => {
      return {
        ...state,
        likedProduct: state.likedProduct.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
    likecount: (state) => {
      return { ...state, likeCount: state.likedProduct.length };
    },
  },
});

export const likeReducer = liked.reducer;
export const { addLike, likeDelete, likecount } = liked.actions;
