import './LoginPop.scss'
import tou from '.././../image/touxiang.jpeg'
import qq from '.././../image/qq.png'
import   we from '.././../image/weixin.png'
import wei from '.././../image/weibo.png'
import cancle from '.././../image/cancle.png'
import { Divider } from 'antd-mobile'
import { useState } from 'react'
const LoginPop = ({Dcancle,isHidden ,Isdisstate}) => {
    const DisState=()=>{
       return  (
        Isdisstate(true,"红屁股美猴王")
       )
    }
    
    console.log(isHidden)
    return (
       <div style={{display:isHidden?'none':'block'}}>
         <div className="loginpop">
            <div style={{fontSize:"15px", marginTop:"10px"}} className='Cancle'>
                <span>账号登陆</span>
                <img src={cancle} alt="Clickable" onClick={Dcancle} />
            </div>
            <div className='deng'>
                <img src={tou} alt="" />
                <div className='mi'>
                <span>红屁股美猴王</span> 
                <span style={{color:"#8f8f8f",fontSize:"10px"}}>上次登录账号</span>
                </div> 
                <button onClick={DisState}>快捷登录</button>
            </div>
           <div className='hs'> <hr /><span>其他方式</span><hr /></div>
            <div className='ways'>
                <span>
                    <img src={qq} alt="" />
                    <span>QQ</span>
                </span>   
                <span><img src={we} alt="" />
                <span>微信</span></span>   
                <span><img src={wei} alt="" />
                <span>微博</span></span>
            </div>
            <div className='ch'>
                <input type="checkbox" />
                <span>我同意《用户注册与账号管理协议》，《服务内容与使用协议》，《隐私保护协议》，《知识产权协议》，《免责条款协议》</span>

            </div>
        </div>
       </div>
    )
}
export default LoginPop