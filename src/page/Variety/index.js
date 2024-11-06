import { fetchLike ,fetchViewList,fetchFoodList} from "../../store/modules/takeaway"
import variety from "../../image/variety.mp4"
import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react"
import { useState } from "react"
import vip from "../../image/vip.png"
import sp from "../../image/sp.png"
import { Link } from "react-router-dom"
const Variety=()=>{
    const [getname,setgetname] =useState("综艺")
    const [foodFilter, setFoodFilter] =useState([])
  
    const handlechange=(e)=>{
        setgetname(e.target.innerHTML)
        console.log(getname);
    }
    

    const {like,foodList} = useSelector(state=>state.foods)
    const foodname=Array.from(new Set(foodList.map(item=>item.name)))
    
    const likedispatch=useDispatch()
    const fooddispatch=useDispatch()
    useEffect(()=>{
      setFoodFilter(foodList.filter(item=>item.name===getname))
    },[getname,foodList])
   
    useEffect(()=>{
      likedispatch(fetchLike())
    },[likedispatch])
    useEffect(()=>{
        fooddispatch(fetchFoodList())
      },[fooddispatch])
    console.log(JSON.stringify(foodname));


    return <div>
         <div className="bg">
               <video  src={variety} loop autoPlay  muted></video>
            </div>
          
            <div className="banner">
                <div className="bannerL"></div>
                <div className="bannerR">
                <div className="bannerTop">
                <div className="showdowDown">
                    <ul>
                        <li class='we'>重磅热播</li>
                        <li></li>
                        <li class="light"><h4>全部</h4></li>
                       {foodname.map((item,index)=>
                        <li  key ={index} onClick={handlechange}>{item}</li>
                       )}
                       
                        <li>换一换</li>
                    </ul>
                </div>
                <div className="showdowDown2">
                    <div class="bl">
                        <ul >
                            {foodFilter.slice(0,10).map(item=>
                                <li>
                                <em>
                                    {item.type== true? <img src={vip} alt="" />:<img src={sp} alt="" />}
                                </em>
                                <em>
                                    <h5>更新至25集</h5>
                                </em>
                                 <Link to={`/app/${item.id}/${getname}`}><img src={item.image} alt="" /></Link>
                                    <h4>{item.title}</h4>
                                    <h4 style={{color:"#a3a1a1" ,fontSize:"12px"}}>{item.evaluation}</h4>
                            </li>
                            )}
                        
                        
                        </ul>
                    </div>
                <div >
               
            </div>

        </div>
            </div>
            <div className="tuijian">
                <ul>
                    <li class="we">为你推荐</li>
                    <li></li>
                    <li class="light2">全部</li>
                    <li>国漫</li>
                    <li>东方玄幻</li>
                    <li>玄幻修真</li>
                    <li>古装</li>
                    <li>爱情</li>
                    <li>短剧</li>
                    <li>英雄成长</li>
                    <li>热血战斗</li>
                    <li>漫画改编</li>
                    <li>甜虐爱情</li>
                    <li>都市</li>
                    <li>科幻</li>
                    <li>青春成长</li>
                    <li>更多</li>
                    <li></li>
                    <li></li>
                </ul>

            </div>
            <div className="waterflower">
               <ul>
               {like.slice(0,8).map(item=>
              <li>
                <img src={item.image1} alt="" />
                <div className='Lmain1'>
                  <img src={item.image2}alt="" />
                  <div className='Lmain2'>
                    <span style={{fontWeight:"bold",fontSize:"15px"}}>{item.name}</span>
                    <span style={{color:"#999797",fontSize:"12px"}}> {item.time}.{item.type}</span>
                    <span style={{fontSize:"15px"}}>{item.content}</span> 
                  </div>
                </div>
              </li>
            )}
               </ul>
            </div>
                </div>
            </div>
    </div>
}
export default Variety