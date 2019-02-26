import React,{Component} from 'react';
import { NavBar, Icon,SearchBar,Grid,WhiteSpace,Flex} from 'antd-mobile';
import './../asset/css/home.css';

import Container from './Container';
import Product from './Product';

// const data=Array.from(new Array(9)).map((_val,i)) => ({
//   icon:`img${i}`,
//   text:`name${i}`,
// })

export default class Home extends Component{
  constructor(props) {
    super(props);
    this.state ={
      data:[
        {
          icon:require('./../asset/img/meishi.png'),
          text:"美食"
        },
        {
          icon:require('./../asset/img/dianying.png'),
          text:"电影"
        },
        {
          icon:require('./../asset/img/jiudian.png'),
          text:"酒店"
        },
        {
          icon:require('./../asset/img/yule.png'),
          text:"娱乐"
        },
        {
          icon:require('./../asset/img/waimai.png'),
          text:"外卖"
        },
        {
          icon:require('./../asset/img/ktv.png'),
          text:"ktv"
        },
        {
          icon:require('./../asset/img/zhoubianyou.png'),
          text:"周边游"
        },
        {
          icon:require('./../asset/img/liren.png'),
          text:"丽人"
        },
        {
          icon:require('./../asset/img/xiaochi.png'),
          text:"小吃"
        },
        {
          icon:require('./../asset/img/jipiao.png'),
          text:"机票"
        },
        {
          icon:require('./../asset/img/xiaochi.png'),
          text:"小吃"
        },
        {
          icon:require('./../asset/img/jipiao.png'),
          text:"机票"
        }
      ]
    }
  }
  render(){
    return (
      <div>
      <NavBar
      mode="light"
      leftContent="哈尔滨"
      rightContent={[
        <Icon key="1" type="ellipsis" />,
      ]}
    >
      <SearchBar placeholder="请输入搜索内容" maxLength={8} />
    </NavBar>
    <Grid data={this.state.data} isCarousel columnNum={5} />
    <WhiteSpace size="lg">  </WhiteSpace>
    <Flex>
      <Flex.Item>
        <h3 className="active-title">我们约会吧</h3>
        <p className="active-text">恋人家人好朋友</p>
        <img className="acive-img" src={require("../asset/img/activity1.png")}></img>

      </Flex.Item>
      <Flex.Item>
        <h3 className="active-title">我们约会吧</h3>
        <p className="active-text">恋人家人好朋友</p>
        <img className="acive-img" src={require("../asset/img/activity1.png")}></img>

      </Flex.Item>
      <Flex.Item>
        <h3 className="active-title">我们约会吧</h3>
        <p className="active-text">恋人家人好朋友</p>
        <img className="acive-img" src={require("../asset/img/activity1.png")}></img>

      </Flex.Item>
    </Flex>
    <WhiteSpace size="lg">  </WhiteSpace>
    <Container title="猜你喜欢">
      <Product></Product>
    </Container>


      </div>
    )
  }
}
