
import logo from "../image/logo.png"
import vip from "../image/VIP.avif"
import vip6 from "../image/vip.png"
import load from "../image/load.avif"
import '../page/login/login.scss'
import touxiang from "../image/touxiang.jpeg"
import './../page/login/login.scss'
import search from "../image/search.png"
import { fetchLike ,fetchViewList,fetchFoodList,fetchGameList} from "../store/modules/takeaway"

import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react"
import { useState,useRef  } from "react"
import _ from "lodash"


import LoginPop from "../pop/LoginPop/LoginPop"

const Hearders=()=>{
       const [ loginPopSate,setLoginPopState ]=useState(true)
       const [name,setname]=useState("")
       const [isdisState,setisdisState]=useState(false)
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
    //search的方法
   const  [searchInput, setSearchInput]=useState([])
   const [currentInput, setCurrentInput]=useState("")
   const [foodtitle,setfoodtitle]=useState([])
    
   const handleCurrentInput = (e) => {
    setCurrentInput(e.target.value);
  };
  useEffect(() => {
    if (listRef.current) {
      const itemHeight = 30; // 假设每个列表项的高度为 30px
      const totalHeight = foodtitle.length * itemHeight;
      listRef.current.style.height = `${totalHeight+100}px`;
    }
  }, [foodtitle]);
   const SearchInput = (e) => {
    if(currentInput.trim()!==""){
        setSearchInput([...searchInput,currentInput]);
        console.log(JSON.stringify(searchInput));
        
        setCurrentInput("")
    }else {
        console.log('input cannt be empty')
    }
  };
  
    

  //search方法结束

    const {like,foodList,game} = useSelector(state=>state.foods)
    // const foodname=Array.from(new Set(foodList.map(item=>item.name)))
    const foodrating=_.orderBy(foodList,["rating"],["desc"])
    // console.log (JSON.stringify(foodrating))
    
    const likedispatch=useDispatch()
    const fooddispatch=useDispatch()
    const gameDispatch=useDispatch()
    
    useEffect(()=>{
      setFoodFilter(foodList.filter(item=>item.name===getname))
      if(currentInput.trim()!==""){
        setfoodtitle(foodList.filter(item=>item.title.includes(currentInput)))
    }else{
        setfoodtitle([])
    
    }
    },[getname,foodList,currentInput])
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
        <div className="all">
            <div className="headers" style={{background}}>
                <div className="logo">
                    <div className="ba"></div>
                    <img src={logo} alt="" />
                    <h4>腾讯视频</h4>
                </div>
                <div className="search">
                    <div className="searchinput">
                        <input type="text" onChange={handleCurrentInput} placeholder="知否知否，应是绿肥红瘦"/>
                        <div className="Stext">
                        {currentInput.trim()==""&& 
                        <div className="searchicon">
                            <div className="searchiconT">
                                <div className="searchTitle">
                                <span style={{fontSize:"12px"}}>历史记录</span><span style={{fontSize:"10px"}}>清空</span>

                                </div>
                                <ul>
                                {searchInput.map(item=>
                                    <li>{item}</li>
                                )}
                                </ul>
                            </div>
                            <div className="searchiconB">
                                <div className="searchiconB1">
                                    <div className="hotsearch">
                                        <span style={{fontSize:"12px"}}>热门搜索</span><span style={{fontSize:"8px"}}>更多热搜</span>
                                        
                                    </div>

                                    <ul>
                                    {foodrating.slice(0,10).map((item,index)=>{
                                        if(index==0){
                                            return <li key ={index}>
                                                <span style={{backgroundColor:"red"}}>{index+1}</span>
                                                <h4>{item.title}</h4>
                                            </li>
                                        }
                                        else if(index==1){
                                            return <li key ={index}>
                                                <span style={{backgroundColor:"#d25f21"}}>{index+1}</span>
                                                <h4>{item.title}</h4>
                                            </li>
                                        }
                                        else if(index==2 ){
                                            return <li key ={index}>
                                                <span style={{backgroundColor:"#efbb20"}}>{index+1}</span>
                                                <h4>{item.title}</h4>
                                            </li>
                                        }
                                        else{
                                            return <li key ={index}>
                                                <span >{index+1}</span>
                                                <h4>{item.title}</h4>
                                            </li>
                                        }
                                    }
                  

                                    )}
                                    </ul>

                                </div>
                            </div>
                        </div>}
                        {
                            currentInput.trim()!==""&&<div className="searchline">
                            <ul ref={listRef}>
                                {foodtitle.map(item=>
                                    <li Link to={`/app/${getname}`}>{item.title} <span>{item.genre}</span></li>
                                )
    
                                }
                            </ul>
 
                         </div>
                        }
                    </div>
                        <img src={search} alt="" onClick={SearchInput} />
                    </div>
                   
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
              
            </div>
           
            
                <LoginPop Dcancle={LoginPopclose} isHidden={loginPopSate} Isdisstate={Isdisstate} />
            
             
           
            

                
                
        </div>
    )

    
}
export default Hearders