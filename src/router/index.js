import { createBrowserRouter } from "react-router-dom"
import Login from "../page/login"
import Article from "../page/drama"
import  Children   from "../page/Children"
import Comic from "../page/Comic"
import Documentaries from "../page/Documentaries"
import  Movie  from "../page/Movie"
import Variety from "../page/Variety"
import App from "../App"
import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react"
import { useState } from "react"


const router =createBrowserRouter([
    {
        path:"/",
        element:<Login/>,
        children:[
            {
               index:true, 
               element:<Article/>
            },
            {
                path:"/children", 
                element:<Children/>
             },
             {
                path:"/comic", 
                element:<Comic/>
             },
             {
                path:"/documentaries", 
                element:<Documentaries/>
             },
             {
                path:"/movie", 
                element:<Movie/>
             },
             {
                path:"/variety", 
                element:<Variety/>
             }
        ]
    },
    {
        path:"/app/:id/:name",
        element:<App/>
    }
])
export default router