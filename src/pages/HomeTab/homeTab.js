import React, {
  Component
} from 'react'
import {
  NavLink
} from 'react-router-dom'
import {
  Row,
  Col
} from 'antd';
import MyHeader from '../../components/Header';

import './hometab.css'

class Header extends Component {
  render() {
    return (
      <div>
      <header style={{borderBottom: '2px solid red'}}>
                <nav>
                    <Row>
        <Col span={3}><div style={{padding:'8px',fontSize:'1.3rem',lineHight:'74px',height:'74px',overflow:'hidden',color:'#1890ff'}}><NavLink exact to="/">内容智能识别机器人</NavLink></div></Col>
                      <Col span={3}><NavLink exact to="/">首页</NavLink></Col>
                      <Col span={3}><NavLink exact to="/">首页</NavLink></Col>
                      <Col span={3}><NavLink to="/news">新闻</NavLink></Col>
                      <Col span={3}><NavLink to='/course'>课程</NavLink></Col>
                      <Col span={3}><NavLink to="/joinUs">我们</NavLink></Col>
                      <Col span={3}><NavLink to="/testlogin">登录</NavLink></Col>
                      <Col span={3}><NavLink to="/hometab">低栏</NavLink></Col>
      </Row>
                </nav>
            </header>
            </div>
    )
  }
}



export default Header