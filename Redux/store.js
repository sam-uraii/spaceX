import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Reducers/rootReducer";
import { thunk } from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["BookmarkReducer", "LaunchDataReducer"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
export default store;
export const persistor = persistStore(store);
