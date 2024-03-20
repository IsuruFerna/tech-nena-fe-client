import { combineReducers, configureStore } from "@reduxjs/toolkit";
import homeReducer from "../reducers/home_reducer";
import storage from "redux-persist/lib/storage";

import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from "redux-persist";
import userReducer from "../reducers/user_reducer";
import postReducer from "../reducers/post_reducer";

const bigReducer = combineReducers({
   home: homeReducer,
   user: userReducer,
   posts: postReducer,
});

const persistConfig = {
   key: "root",
   storage,
};

const persistedReducer = persistReducer(persistConfig, bigReducer);

const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
});

const persistor = persistStore(store);

export { store, persistor };
