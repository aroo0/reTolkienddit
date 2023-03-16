import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// Create loadCommentsForArticleId here.
export const loadPostsForCategory = createAsyncThunk(
    "posts/loadPostForCategory",
    async (url) => {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }
);


const postsSlice = createSlice({
  name:'posts',
  initialState: {
      postsById: {},
      isLoadingPosts: false,
      failedToLoadPosts: false,
      filterKeyword: ''
    },
  reducers: {
    resetPosts(state) {
      state.isLoadingPosts = true;
      state.postsById = {}
    },
    setFilterKeyword(state, action) {
      state.filterKeyword = action.payload;
    }},

    
  
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
            state.postsById[id] = {
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


export const selectPosts = (state) => state.posts.postsById;
export const isLoadingPosts = (state) => state.posts.isLoadingPosts;
export const selectFilteredPosts = (state) => {
  const filterKeyword = state.posts.filterKeyword.toLowerCase(); // convert to lowercase for case-insensitive search
  const postsById = state.posts.postsById;
  return Object.values(postsById).filter(post =>
    post.title.toLowerCase().includes(filterKeyword));
};


export const {resetPosts, setFilterKeyword} = postsSlice.actions
export default postsSlice.reducer

