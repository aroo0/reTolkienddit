import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// Create loadCommentsForArticleId here.
export const loadPostsForCategory = createAsyncThunk(
    "posts/loadPostForCategory",
    async () => {
        const response = await fetch(`https://www.reddit.com/search.json?q=tolkien`);
        const json = await response.json();
        return json;
    }
);


const postsSlice = createSlice({
  name:'posts',
  initialState: {
      PostsById: {},
      isLoadingPosts: false,
      failedToLoadPosts: false
    },
  extraReducers: (builder) => {
      builder
        .addCase(loadPostsForCategory.pending, (state) => {
          state.isLoadingPosts = true;
          state.failedToLoadPosts = false;
        })
        .addCase(loadPostsForCategory.rejected, (state) => {
          state.isLoadingPosts = false;
          state.failedToLoadPosts = true;
        })
        .addCase(loadPostsForCategory.fulfilled, (state, action) => {
          const allPosts = action.payload.data.children
          allPosts.forEach(post => {
            const { id, title, subreddit_name_prefixed, created, score, num_comments, selftext, url, post_hint } = post.data
            console.log(post)
            state.PostsById[id] = {
              id: id,
              title: title,
              author: subreddit_name_prefixed,
              date: created,
              score: score,
              numComments: num_comments,
              selfText: selftext,
              img: url,
              postType: post_hint
            }          
          })
          state.isLoadingPosts = false;
          state.failedToLoadPosts = false;
        })


}})


export const selectPosts = (state) => state.posts.PostsById;
export const isLoadingPosts = (state) => state.posts.isLoadingPosts;
export default postsSlice.reducer