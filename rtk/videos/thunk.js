const { createAsyncThunk } = require('@reduxjs/toolkit');
const { default: fetch } = require('node-fetch');

const fetchRelatedVideos = createAsyncThunk('video/fetchRelatedVideos', async (queryText) => {
    const response = await fetch(`http://localhost:9000/videos?${queryText}`);
    const data = await response.json();

    data.sort(function (a, b) {
        return parseFloat(views[b]) - parseFloat(views[a]);
    });

    return data;
});

const fetchVideos = createAsyncThunk('video/fetchVideos', async () => {
    const response = await fetch('http://localhost:9000/videos');
    const data = await response.json();

    return data;
});

module.exports.fetchVideos = fetchVideos;
module.exports.fetchRelatedVideos = fetchRelatedVideos;
