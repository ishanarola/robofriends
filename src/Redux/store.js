import { configureStore } from '@reduxjs/toolkit'
import { setSearchField,getRobots } from './reducers';
import logger from 'redux-logger';
// import todosReducer from './features/todos/todosSlice'
// import filtersReducer from './features/filters/filtersSlice'

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    // todos: todosReducer,
    // filters: filtersReducer
    setSearchField,getRobots
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store;