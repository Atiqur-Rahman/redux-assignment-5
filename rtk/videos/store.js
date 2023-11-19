const { configureStore } = require('@reduxjs/toolkit');
const videoReducer = require('./videoSlice');
const { createLogger } = require('redux-logger');

const logger = createLogger();

const store = configureStore({
    reducer: { video: videoReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
