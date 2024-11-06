import {createSlice} from "@reduxjs/toolkit"

import axios from "axios"

 const foodStore =createSlice({
    name:"food",
    initialState:{
        foodList:[],
        viewList:[],
        tuijainList:[],
        commentList:[],
        zhou:[],
        like:[],
        game:[]
        
    },
    reducers:{
        setFoodList(state,action){
            state.foodList=action.payload
        },
       getViewList(state,action){
            state.viewList=action.payload
        }
      ,
        //购物车
        gettuijan(state,action){
            //判断列表列表里面是否有？
          state.tuijainList=action.payload
        },
        getComment(state,action){
            state.commentList=action.payload
        },
        
        getzhou(state,action){
            state.zhou =action.payload
        },
        getLike(state,action){
            state.like=action.payload
        },
        getgame(state,action){
            state.game=action.payload

        }
    }
    
})   
//异步获取
const {setFoodList ,getViewList,gettuijan,getComment,getzhou,getLike,getgame}=foodStore.actions
const fetchFoodList=()=>{
    return async(dispatch)=>{
        const res=await axios.get("http://localhost:3003/view")
        dispatch(setFoodList(res.data))
    }
}
const fetchGameList=()=>{
    return async(dispatch)=>{
        const res=await axios.get("http://localhost:3003/game")
        dispatch(getgame(res.data))
    }
}
const fetchViewList=()=>{
    return async(dispatch)=>{
     
        const res1=await axios.get("http://localhost:3003/dongman")
        dispatch(getViewList(res1.data))
    }
}
const FetchtuijainList=()=>{
    return async(dispatch)=>{
     
        const res2=await axios.get("http://localhost:3003/tuijain")
        dispatch(gettuijan(res2.data))
    }
}
const fetchCommentList=()=>{
    return async(dispatch)=>{
     
        const res3=await axios.get("http://localhost:3003/pingL")
        dispatch(getComment(res3.data))
    }
}
const fetchzhou=()=>{
    return async(dispatch)=>{
     
        const res4=await axios.get("http://localhost:3003/zhoubian")
        dispatch(getzhou(res4.data))
    }
}
const fetchLike=()=>{
    return async(dispatch)=>{
     
        const res5=await axios.get("http://localhost:3003/guass")
        dispatch(getLike(res5.data))
    }
}

export {fetchFoodList,fetchViewList,FetchtuijainList,fetchCommentList,fetchzhou,fetchLike,fetchGameList}
const reducers=foodStore.reducer


//动漫评论的

export   default reducers
