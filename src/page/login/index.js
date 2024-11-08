
import './login.scss'

import  yao from "../../image/yao.png"
import fen from "../../image/fe.png"
import sing from "../../image/sing.png"
import water from "../../image/water.png"
import dang from  "../../image/dian.png"
import { fetchLike ,fetchViewList,fetchFoodList,fetchGameList} from "../../store/modules/takeaway"

import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react"
import { useState,useRef  } from "react"
import _ from "lodash"
import Hearders from "../../Element/header"
import {Link,Outlet} from "react-router-dom"


const Login=()=>{
    
    const [getname,setgetname] =useState("电视剧")
    const [background,setbackground]=useState("transparent")
    const [foodFilter, setFoodFilter] =useState([])
    const listRef = useRef(null);
    const handlescroll=()=>{
        const scrollpostion=window.scrollY
        if(scrollpostion>600){
            setbackground("black")
        }else{
            setbackground("transparent")
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",handlescroll)
        return ()=>{
            window.removeEventListener("scroll",handlescroll)
        }
    },[])

  
    const handlechange=(e)=>{
        setgetname(e.target.innerHTML)
        console.log(getname);
    }
    const {like,foodList,game} = useSelector(state=>state.foods)
  
    
    const likedispatch=useDispatch()
    const fooddispatch=useDispatch()
    const gameDispatch=useDispatch()
    
    useEffect(()=>{
      setFoodFilter(foodList.filter(item=>item.name===getname))
   
    },[getname,foodList])
    useEffect(()=>{
        gameDispatch(fetchGameList())
      },[gameDispatch])
    //   console.log(JSON.stringify(game))
   
    useEffect(()=>{
      likedispatch(fetchLike())
    },[likedispatch])
    useEffect(()=>{
        fooddispatch(fetchFoodList())
      },[fooddispatch])
    // console.log(JSON.stringify(foodname));
    return (
        <div className="login">
            <Hearders/>
            <div className="navs">
                <div className="navLeft">
                    <ul>
                        <li class="navLeftC"><span></span>{getname}</li>
                        <li><span></span>中视频</li>
                        <Link to="/"style={{ textDecoration: 'none', color: 'inherit' }}><li ><span></span><span onClick={handlechange}>电视剧</span></li></Link>
                        <Link to="/movie"style={{ textDecoration: 'none', color: 'inherit' }}><li ><span></span><span onClick={handlechange}>电影</span></li></Link>
                        <Link to="/variety"style={{ textDecoration: 'none', color: 'inherit' }}><li ><span></span><span onClick={handlechange}>综艺</span></li></Link>
                        <Link to="/children"style={{ textDecoration: 'none', color: 'inherit' }}><li ><span></span><span onClick={handlechange}>少儿</span></li></Link>
                        <Link to="/documentaries"style={{ textDecoration: 'none', color: 'inherit' }}><li ><span></span><span onClick={handlechange}>纪录片</span></li></Link>
                        <Link to="/comic"style={{ textDecoration: 'none', color: 'inherit' }}><li ><span></span><span onClick={handlechange}>动漫</span></li></Link>
                        <Link to="/"style={{ textDecoration: 'none', color: 'inherit' }}><li ><span></span><span onClick={handlechange}>电视剧</span></li></Link>
                        <Link to="/movie"style={{ textDecoration: 'none', color: 'inherit' }}><li ><span></span><span onClick={handlechange}>电影</span></li></Link>
                        <Link to="/variety"style={{ textDecoration: 'none', color: 'inherit' }}><li ><span></span><span onClick={handlechange}>综艺</span></li></Link>
                        <Link to="/children"style={{ textDecoration: 'none', color: 'inherit' }}><li ><span></span><span onClick={handlechange}>少儿</span></li></Link>
                        <Link to="/documentaries"style={{ textDecoration: 'none', color: 'inherit' }}><li ><span></span><span onClick={handlechange}>纪录片</span></li></Link>
                        <Link to="/comic"style={{ textDecoration: 'none', color: 'inherit' }}><li ><span></span><span onClick={handlechange}>动漫</span></li></Link>
                        <p style={{color:'#999' ,fontSize:'12px',lineHeight:'2em'}}>
                        腾讯视频隐私保护指引<br />
                        腾讯视频用户服务协议<br />
                        腾讯视频第三方信息共享清单<br />
                        腾讯视频已收集个人信息清单<br />
                        腾讯儿童隐私保护声明<br />
                        腾讯视频系列会员服务协议<br />
                        <hr style={{width:"100%",color:'#b9b6b6'}}/>
                        粤网文[2023]2882-203号 网络视听许可证1904073号 粤公网安备 44030002000001号<br />    
                        增值电信业务经营许可证：粤B2-20090059 <br />
                        <hr />
                        关于腾讯 | About Tencent   服务条款 | 广告设置 | 腾讯招聘 客服中心 | 网站导航<br /> 
                        Copyright © 1998 - 2024 Tencent. All Rights Reserved. <br />
                        腾讯公司 版权所有 <br />
                        </p>
                      
                    
                    </ul>
                </div>
                <div className="navR">
                    <div className="navRL">
                        <h4>落日晚霞，多姿的美</h4>
                        <button>开始播放</button>
                        <div></div>
                    </div>
                    
                    <div className="navLL">
                        <button class="prev">&lt;</button>
                        
                        <ul>
                                
                                <li><img src={yao}alt="" />
                                    <h4> 捉妖记2  </h4></li>
                                <li><img src={fen} alt="" />
                                    <h4> 漠风吟  </h4>
                                </li><li class="active">
                                    <img src={sing} alt="" />
                                    <h4> 歌手2024  </h4>
                                </li>
                                <li> <img src={water} alt="" />
                                    <h4> 流水昭昭  </h4></li>
                                
                                <li><img src={dang} alt="" />
                                    <h4> 斩之颠峰  </h4></li>
                        </ul>
                        <button className="next">&gt;</button>
                    </div>
                    
                    
                </div>

                
            </div> 
             <Outlet/>
           
            

                
                
        </div>
    )

    
}
export default Login