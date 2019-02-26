import React,{Component} from 'react'


export default class Container extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="Container">
        <div className="con-title">{this.props.title}</div>
        <div className="con-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}
