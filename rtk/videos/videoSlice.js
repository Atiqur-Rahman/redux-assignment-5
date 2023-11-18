const { createSlice } = require('@reduxjs/toolkit');

// initial State
const initialState = {
    loading: false,
    videos: [],
    error: '',
    objectLoaded: false,
};

const videoSlice = createSlice({
    name: 'video',
    initialState,
    // extraReducers: (builder) => {
    //     builder.addCase()
    // }
});
