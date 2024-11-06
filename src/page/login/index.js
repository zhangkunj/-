import { Divider } from "antd-mobile"
import logo from "../../image/logo.png"
import vip from "../../image/VIP.avif"
import vip6 from "../../image/vip.png"
import load from "../../image/load.avif"
import './login.scss'
import touxiang from "../../image/touxiang.jpeg"
import  yao from "../../image/yao.png"
import fen from "../../image/fe.png"
import sing from "../../image/sing.png"
import water from "../../image/water.png"
import dang from  "../../image/dian.png"

import { fetchLike ,fetchViewList,fetchFoodList,fetchGameList} from "../../store/modules/takeaway"
import ru from"../../image/ru.png"
import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react"
import { useState } from "react"
import {Link,Outlet} from "react-router-dom"
import Article from "../drama"
import LoginPop from "../../pop/LoginPop/LoginPop"

const Login=()=>{
       const [ loginPopSate,setLoginPopState ]=useState(true)
       const [name,setname]=useState("")
       const [isdisState,setisdisState]=useState(false)
    const [getname,setgetname] =useState("电视剧")
    const [background,setbackground]=useState("transparent")
    const [foodFilter, setFoodFilter] =useState([])
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
    const Isdisstate=(Disstate,getname)=>{
        setisdisState(Disstate)
        setname(getname)
        setLoginPopState(true)
        console.log(isdisState)
        console.log(getname)

    }
  
    const handlechange=(e)=>{
        setgetname(e.target.innerHTML)
        console.log(getname);
    }
    const LoginPopopen=()=>{
        setLoginPopState(false)
        console.log(loginPopSate);
    }
    const LoginPopclose = () => {
        setLoginPopState(true);
      };
    

    const {like,foodList,game} = useSelector(state=>state.foods)
    const foodname=Array.from(new Set(foodList.map(item=>item.name)))
    
    const likedispatch=useDispatch()
    const fooddispatch=useDispatch()
    const gameDispatch=useDispatch()
    useEffect(()=>{
      setFoodFilter(foodList.filter(item=>item.name===getname))
    },[getname,foodList])
    useEffect(()=>{
        gameDispatch(fetchGameList())
      },[gameDispatch])
      console.log(JSON.stringify(game))
   
    useEffect(()=>{
      likedispatch(fetchLike())
    },[likedispatch])
    useEffect(()=>{
        fooddispatch(fetchFoodList())
      },[fooddispatch])
    console.log(JSON.stringify(foodname));
    return (
        <div className="login">
            <div className="headers" style={{background}}>
                <div className="logo">
                    <div className="ba"></div>
                    <img src={logo} alt="" />
                    <h4>腾讯视频</h4>
                </div>
                <div className="search">
                    <input type="text"  placeholder="知否知否，应是绿肥红瘦"/>
                </div>
                <div className="right">
                    <div className="righttop">
                        <ul>
                            <li class="Bold"></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            
                        </ul>
                    </div>
                    
                    <div className="rightdown">
                        <div className='sheji'>
                            <div className="Bold s">会员专区</div>
                            <div className="Rightbottom">
                                <h4 className="Bold">扫码优惠续会员</h4>
                                <img src={vip} alt="" />
                                <div className="md">
                                <div className="i">
                                        <ul >
                                            <li>
                                            <img src={load} alt="" />
                                            </li>
                                            <li><img src={load} alt="" /></li>
                                            <li><img src={load} alt="" /></li>
                                            <li><img src={load} alt="" /></li>
                                        </ul>
                                </div>
                                <div className="f">
                                        <ul >
                                            <li>缓存特权</li>
                                            <li>1080p</li>
                                            <li>内容抢先看</li>
                                            <li>视听</li>
                                            
                                        </ul>
                                </div>
                                </div>
                                <div className="butt">
                                    <button>再续前缘</button>
                                </div>
                                
                            </div>
                        </div>
                        <div className='sheji'>
                            <div className=" s">游戏</div>
                            <div className="Rightbottom5">
                                {game.map(item=>
                                    <div>                                            
                                         <img src={item.image} alt="" />
                                        <span>{item.name}</span>
                                        <span>{item.rating}</span>
                                        <span>{item.content}</span>
                                    </div>
                                     
                                )}

                            </div>
                        </div>
                        <div className='sheji'>
                            <div className=" s">快捷询问</div>
                            <div className="Rightbottom1"></div>
                        </div>
                        <div className='sheji'>
                            <div className=" s">历史</div>
                            <div className="Rightbottom2"></div>
                        </div>
                        <div className='sheji'>
                            <div className=" s">创作</div>
                            <div className="Rightbottom3"></div>
                        </div>
                        <div className='sheji'>
                            <div className=" s">客户端</div>
                            <div className="Rightbottom4">
                                <div >
                                <img src={logo} alt="" />
                                <span>腾讯视频windows客户端</span>
                                <span>视频极速下载  本地视频播放 桌面便利访问</span>
                                < button>立即体验</button>
                                <span>查看更多</span>
                                </div>

                            </div>
                        </div>
                        <div className='sheji'>
                            {!isdisState && <div className=" s" onClick={LoginPopopen}>登录</div>}
                            {isdisState && <div className=" Loginall" >
                                <div className=" Loginlogo">
                                    <img src={touxiang} alt="" className="touxiang" />
                                    <img src={vip6} style={{width:"20px",height:"10px"}} alt="" />  
                                </div>
                                <div className="Rightbottom6">
                                   <div className="right6">
                                    <div className="R6top">
                                        <div className="r6top1">
                                            <span>{name}</span>
                                            <img src={vip6} alt="" />
                                        </div>
                                                <em> vip还有3天到期</em>
                                        <button>
                                                <img src={vip6} alt="" />
                                                <span>续费腾讯视频VIP</span>

                                        </button>
                                        <div className="r6bu">
                                                <img src={vip6} alt="" />
                                                <span>开通电视特权</span>
                                                <img src={vip6} alt="" />
                                        </div>
                                            
                                        </div>
                                        <div className="R6bottom">
                                            <ul>
                                                    <li><span></span><h4>个人中心</h4></li>
                                                    <li><span></span><h4>我的追加</h4></li>
                                                    <li><span></span><h4>我的游戏包</h4></li>
                                                    <li><span></span><h4>VIP消息</h4></li>
                                            </ul>
                                        
                                            <button>退出</button>
                                    </div>
                                   </div>

                                </div>
                               </div>}
                                
                        </div>
                        
                        
                    </div>
                </div>
                {/* <div className="Rightbottom"></div> */}
            </div>
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
            
                <LoginPop Dcancle={LoginPopclose} isHidden={loginPopSate} Isdisstate={Isdisstate} />
            
             <Outlet/>
           
            

                
                
        </div>
    )

    
}
export default Login