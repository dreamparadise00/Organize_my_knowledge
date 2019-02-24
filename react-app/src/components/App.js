import React,{Component} from 'react'
import { Button } from 'antd-mobile';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home'

export default class App extends Component{
  render(){
    return (
      <div>
        <Router>
          <Route path="/" component={Home}></Route>
          <Route path="/" component={Detail}></Route>

        </Router>
      </div>
    )
  }
}
