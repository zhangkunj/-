import React from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import App from './App'
import router from './router'
import {Provider} from 'react-redux'
import store from './store'
import reportWebVitals from './reportWebVitals'

import { RouterProvider } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
)
reportWebVitals()