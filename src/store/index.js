import { configureStore, createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [
      {
        name: "2Pac T-shirt",
        price: 13.99,
        category: "T-shirts",
        id: 1,
        image:
          "https://static.bershka.net/4/photos2/2023/V/0/2/p/2407/777/250/028da2544ed616cd526cf7723aa3867d-2407777250_2_13_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmedium&imformat=chrome",
      },
      {
        name: "Dennis Rodman T-shirt",
        price: 13.99,
        category: "T-shirts",
        id: 2,
        image:
          "https://static.bershka.net/4/photos2/2023/V/0/2/p/2447/130/800/ca8c13a48a55cc133f7598fd21d8c893-2447130800_2_4_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmedium&imformat=chrome",
      },
    ],
  },
});

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

export const productsActiosns = productsSlice.actions;

export default store;
