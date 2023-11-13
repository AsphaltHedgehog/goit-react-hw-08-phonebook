import { configureStore } from "@reduxjs/toolkit";

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
import storage from "redux-persist/lib/storage";


import { combineReducers } from "redux";
import { filterReducer } from "./filterSlice"; 
import { contactsReducer } from "./contactsSlice";
import { authReducer } from "./auth/authSlice";


const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth'],
};

// const authPersistConfig = {
//   key: 'auth',
//   storage: storage,
//   whitelist: ['token']
// }


const persistedReducers = persistReducer(persistConfig, combineReducers({contacts: contactsReducer , filter: filterReducer, auth: authReducer}))



export const store = configureStore({
  reducer: persistedReducers,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
  },
  devTools: process.env.NODE_ENV !== 'production',

})

export const persistor = persistStore(store);




