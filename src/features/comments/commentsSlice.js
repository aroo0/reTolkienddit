import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// Create loadCommentsForArticleId here.
export const loadCommentsForPost = createAsyncThunk(
    "comments/loadCommentsForPost",
    async (postId) => {
        const response = await fetch(`https://www.reddit.com/${postId}.json`);
        const json = await response.json();
        return {json, postId};
    }
);



const commentsSlice = createSlice({
    name:'comments',
    initialState: {
        commentsByPostId: {},
        isLoadingComments: false,
        failedToLoadComments: false,
      },

    
    extraReducers: (builder) => {
        builder
          .addCase(loadCommentsForPost.pending, (state) => {
            state.isLoadingComments = true;
            state.failedToLoadComments = false;
          })
          .addCase(loadCommentsForPost.rejected, (state) => {
            state.isLoadingComments = false;
            state.failedToLoadComments = true;
          })
          .addCase(loadCommentsForPost.fulfilled, (state, action) => {
            const postId = action.payload.postId;
            const allComments = action.payload.json['1'].data.children;
            state.commentsByPostId[postId] = [];
            allComments.forEach((comment) => {
              if (comment.kind === 't1') {
                const { id, author, created, body } = comment.data;
                state.commentsByPostId[postId].push({
                  id,
                  author,
                  created,
                  body
                });
              }
            });
            state.isLoadingComments = false;
            state.failedToLoadComments = false;
            
          })
  
  
  }})
  
  
  export const selectComments = (state) => state.comments.commentsByPostId;
  export const isLoadingComments = (state) => state.comments.isLoadingComments;

  
  
  export default commentsSlice.reducer