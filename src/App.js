import image from './image/logo.png'
import image5 from './image/rao.png'
import image6 from './image/v.png'
import tou from "./image/touxiang.jpeg"
import './App.scss';
import vip from './image/vip.png'
import search from './image/search.png'
// import down from './image/down.png'
import video from './image/vm.mp4'

import { useDispatch, useSelector } from 'react-redux'
import { fetchFoodList,fetchViewList,FetchtuijainList ,fetchCommentList,fetchzhou,fetchLike} from './store/modules/takeaway'

import {useEffect, useState} from 'react'
import { json, useParams } from 'react-router-dom';


const Num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,"彩蛋1","彩蛋2","彩蛋3","彩蛋4"]
const App = () => {
  const {id,name}=useParams()

  console.log(name)
  const dispatch = useDispatch()
  const [FoodFilter,setFoodFilter]=useState([])
  useEffect(() => {
    dispatch(fetchFoodList())
  }, [dispatch])
  
  const {foodList,viewList,tuijainList,commentList,zhou,like}=useSelector(state=>state.foods)
  const Unique=[...new Set(foodList.map(item=>item.name))]
  // 使用map函数，遍历name
  console.log(JSON.stringify(Unique));
  useEffect(()=>{
    setFoodFilter((foodList.find(item=>item.id===parseInt(id) && item.name===name)))
  },[name,foodList])
console.log(JSON.stringify(FoodFilter.title));

  
  const Domdispatch=useDispatch()
  useEffect(() => {
    Domdispatch(fetchViewList())
  }, [Domdispatch])
  // const {viewList}=useSelector(state=>state.foods)

// console.log(JSON.stringify(viewList));


const tuidispatch=useDispatch()
useEffect(() => {
  tuidispatch(FetchtuijainList())                
}, [tuidispatch])
// console.log(JSON.stringify(tuijainList));

const commentdispatch=useDispatch()
useEffect(()=>{
  commentdispatch(fetchCommentList())
},[commentdispatch])
// console.log(JSON.stringify(commentList));
const zhoudispatch=useDispatch()
useEffect(()=>{
  zhoudispatch(fetchzhou())
},[zhoudispatch])
// console.log(JSON.stringify(zhou));

//猜你喜欢
const likedispatch=useDispatch()
useEffect(()=>{
  likedispatch(fetchLike())
},[likedispatch])
// console.log(JSON.stringify(like));



  return (
    <div className="App">
      <div className="header">
        <div className='logo'>
          <div className='Z'></div>
          <img src={image} alt="" />
          <span >腾讯视频</span>
        </div>
        <div className='change'>
          <ul>
          {Unique.map(item=><li>{item}</li>)}
          </ul>

        </div>
        
        <div className='search'>
          <input type="text" placeholder='"霸王别姬'/>
          <span>
            {/* <img src={search} alt="" /> */}
          </span>
        </div>
        <div className='money'>
          <ul>
            <li>

              <span></span>
              <h5>会员专区</h5>
            </li>
            <li>
              <span></span>
              <h5>游戏</h5>
            </li>
            <li><span></span>
            <h5>快捷访问</h5>
            </li>
            <li><span></span>
            <h5>历史</h5></li>
            <li><span></span>
            <h5>创作</h5></li>
            <li><span></span>
            <h5>客户端</h5></li>
          </ul>
          
        </div>
        <div classname='Qq'></div>
      </div>
      <div className="banner1">
        <div className='Bannerright'>
          <video src={video} loop autoPlay  controls></video>
        </div>
        <div className='Bannerleft'>
          <div className='titleL'> 
            <div className='top'>

            <div className='topt'>
              <img src={FoodFilter.image} alt="" />
              <div>
                <span>{FoodFilter.title}</span>
                <span>14966.内地{FoodFilter.year}.{FoodFilter.genre}</span>
                <span>{FoodFilter.evaluation}</span>
                <span>全24集</span>
              </div>
            </div>
              <span style={{color:'#fff',  fontSize:"12px"}}>会员看全集，追剧日历</span>
            
              
              
            </div>
            <hr />
            <div className='middle'>
              <ul >
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <hr />
            <div className='bottom'>
              <ul>
                {Num.map(item=>
                
                <li>
                  {item!=1 && <em><img src={image6} alt="" /></em>}
                  <div>{item}</div></li>
                )}
              </ul>
            </div>
          </div> 
        </div>
      </div>
      <div className="comment">
        <div className='right1'>
        <div className='commentF'>
          <div className='title'>用户评价</div>
          <div className='F'>
            <ul>
            {(viewList.slice(0,4).map(item=>
            <li><div className='like'><span>{item.username}</span> <span>{item.like}</span></div>
            <div></div>
            <div style={{color:'#fff'}}>{item.content}</div>
            <div>{item.ctime}</div></li>
            ))}
          
            
            </ul>
          </div>

        </div>
        <div className='commentI'>
          <div className='yuan'>
            相关推荐
          </div>
          <div className='tui'>
            <ul>
              {tuijainList.slice(0,6).map(item=>
                <li>
                  <img src={item.image} alt="" />
                  <div >{item.name}</div>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className='commentT'>
          <div className='tao'>讨论 <span>{viewList.length}</span></div>
          <div className='in'>
            <img src={tou} alt="" />
            <input type="text" />
            <span>写长文</span>
          </div>
        </div>
        <div className='commentB'>
          <div className='type'>
            <button className='active'> 最热 </button>
            <button >最新</button>
          </div>
          <div className='p'>
            <ul>
              {commentList.slice(0,4).map(item=>
                <li>
                  <div className='user'>
                    <img src={item.image} alt="" />
                    {item.name} 
                    {item.type&&<img src={vip}  className='vip'alt="" />}
                    <span>{item.ctime}.{item.地区}</span>
                    </div>
                  <div className='content'>{item.content}</div>
                  <div className='like' ><span>{item.like }</span> <span>{item.comments}</span> <span>举报</span></div>
                </li>
              )}
          
            </ul>
          </div>
        </div>
        </div>
        <div className='left1'>
          
          <div className='zhoubian'>
            <div>
              <div style={{color:'#fff',fontSize:"15px",fontWeight:"bold"}}>周边短视频推荐</div>
            </div>
            <div className='zmian'>
              <button>花絮视频</button>
              <button>更多资讯</button>
              <ul>
              {zhou.slice(0,4).map(item=>
                <li>
                  <img src={item.image} alt="" />
                  <span>  {item.content}</span>
                </li>
              )}
              </ul>
              <button style={{width:"60%",height:"30px",marginLeft:"70px",marginTop:"20px"}}>查看更多</button>
            </div>
          </div>
          <div className='list'>
          <div>
              <div style={{color:'#fff',fontSize:"15px",fontWeight:"bold"}}>猜你喜欢</div>
            </div>
            <div className='Lmain'>
              
              <ul>
              {like.slice(0,4).map(item=>
                <li>
                  <img src={item.image1} alt="" />
                  <div className='Lmain1'>
                    <img src={item.image2}alt="" />
                    <div className='Lmain2'>
                      <span style={{fontWeight:"bold",fontSize:"14px"}}>{item.name}</span>
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
      <div className="footer"></div>
    
  </div>
  )
}

export default App
