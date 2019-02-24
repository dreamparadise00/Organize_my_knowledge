import React,{Component} from 'react';
import { NavBar, Icon } from 'antd-mobile';

export default class Detail extends Component{
  render(){
    return (
      <div>
      <NavBar
      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={() => console.log('onLeftClick')}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >首页</NavBar>
      </div>
    )
  }
}
