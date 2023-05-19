import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "./Reducer";

const loggerMiddleware = createLogger();

export const store = configureStore({
  reducer,
  middleware: [thunkMiddleware, loggerMiddleware],
});
