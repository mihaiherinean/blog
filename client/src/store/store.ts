import { blogSlice } from './blogSlice';
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, blogSlice.reducer)

export const store = configureStore({
    // reducer: {
    //    blog: blogSlice.reducer,
       
    // }
    reducer: persistedReducer,
})


export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store)