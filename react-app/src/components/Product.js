import React,{Component} from 'react'

export default() => {
  return(
    <div className="pro-container">
      <img src={require("./../asset/img/yule.png")}></img>
      <div className="pro-content">
        <h3 className="pro-title">标题</h3>
        <p className="pro-detail">这是一个内容</p>
        <div>
          <span className="pro-current-price">10</span>
          <span className="pro-door-price">门市价 20</span>
          <span className="pro-sold">已售6</span>
        </div>
      </div>
    </div>
  )
}
