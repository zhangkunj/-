// import { createSlice } from "@reduxjs/toolkit"
// import axios from "axios"

// const DMStore =createSlice({
//     name:"food",
//     initialState:{
//         dongman:[],
       
        
//     },
//     reducers:{
//         getDMList(state,action){
//             state.foodList=action.payload
//         }
//     }
    
// })
// const {getDMList}=DMStore.actions
// const fetchDMList=()=>{
//     return async(dispatch)=>{
     
//         const res=await axios.get("http://localhost:3003/dongman")
//         dispatch(getDMList(res.data))
//     }
// }
// const domreducer=DMStore.reducer
// export {fetchDMList}
// export default domreducer