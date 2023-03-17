import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../features/posts/postsSlice";
import acountsSlice from "../features/accounts/acountsSlice";
import commentsSlice from "../features/comments/commentsSlice";


export const store = configureStore({
    reducer: {
        posts: postsSlice,
        accounts: acountsSlice,
        comments: commentsSlice
    }
})