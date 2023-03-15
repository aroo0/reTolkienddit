import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../features/posts/postsSlice";
import acountsSlice from "../features/accounts/acountsSlice";


export const store = configureStore({
    reducer: {
        posts: postsSlice,
        accounts: acountsSlice
    }
})