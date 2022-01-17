import { configureStore } from '@reduxjs/toolkit'
import postReducer from './reducers/postReducer'
import excluidosReducer from './reducers/excluidosReducer'

export default configureStore({
  reducer: {
      post:postReducer,
      excluir:excluidosReducer
      
  }
})