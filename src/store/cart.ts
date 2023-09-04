import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export type ItemType = {
    id: 1;
    name: string;
    quantity: number;
    price: number;
    thumbnailUrl: string;
    isSelected: boolean;
}

export interface CartState {
  items: ItemType[];
}

// Initial state
const initialState: CartState = {
  items: []
};

// Actual Slice
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    deleteAllItems(state) {
        state.items = [];
    },
    selectAllItems(state) {
        state.items = state.items.map(data => {
            const isSelected = true;
            return {...data, isSelected}
        });
    },
    unselectAllItems(state) {
        state.items = state.items.map(data => {
            const isSelected = false;
            return {...data, isSelected}
        });
    },
    deleteItem(state, { payload  }) {
        state.items = state.items.filter(({ id }) => {
            return id !== payload;
        })
    },
    changeQuantity(state, { payload }) {
        const { quantity, id } = payload;
        state.items = state.items.map(data => {
            if(id !== data.id) return {...data};
            return {...data, quantity}
        });
    },
    pickItem(state, { payload }) {
        const id = payload;
        state.items = state.items.map(data => {
            if(id !== data.id) return {...data};
            const isSelected = !data.isSelected;
            return {...data, isSelected}
        });
    }
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
//   extraReducers: {
//     [HYDRATE]: (state, action) => {
//       return {
//         ...state,
//         ...action.payload.cart,
//       };
//     },
//   },
});

export const getItems = (state: AppState) => state.cart.items;

export const { setItems } = cartSlice.actions;
export const { deleteAllItems } = cartSlice.actions;
export const { unselectAllItems } = cartSlice.actions;
export const { selectAllItems } = cartSlice.actions;
export const { pickItem } = cartSlice.actions;
export const { changeQuantity } = cartSlice.actions;
export const { deleteItem } = cartSlice.actions;

// export const selectAuthState = (state: AppState) => state.auth.authState;

export default cartSlice.reducer;