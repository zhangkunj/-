import reducers from "./modules/takeaway"
import domreducer from "./modules/donm"
import {combineReducers,legacy_createStore as createStore}  from "redux"
import { configureStore } from "@reduxjs/toolkit"
 const store=configureStore({
  reducer: {
    foods: reducers  
    // dom:domreducer
    
  }
})

export default store
