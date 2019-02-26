import React,{Component} from 'react';
import { NavBar, Icon,SearchBar,Grid} from 'antd-mobile';
import './../asset/css/home.css';
import './../asset/css/reset.css';
export default class Home extends Component{
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
    <Grid data={data} activeStyle={false} />
      </div>
    )
  }
}
