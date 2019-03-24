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

import '../css/header.css'

class Header extends Component {
	render() {
		return (
			<header style={{borderBottom: '2px solid red'}}>
				<nav>
					<Row>
		<Col span={3}><div style={{padding:'8px',fontSize:'1.3rem',lineHight:'74px',height:'74px',overflow:'hidden',color:'#1890ff'}}>内容智能识别机器人</div></Col>
				      <Col span={3}></Col>
				      <Col span={3}><NavLink exact to="/">首页</NavLink></Col>
				      <Col span={3}><NavLink to="/news">新闻</NavLink></Col>
				      <Col span={3}><NavLink to='/course'>课程</NavLink></Col>
				      <Col span={3}><NavLink to="/joinUs">我们</NavLink></Col>
				      <Col span={3}><NavLink to="/testlogin">登录</NavLink></Col>
				      <Col span={3}><NavLink to="/hometab">低栏</NavLink></Col>
				    </Row>
				</nav>
			</header>
		)
	}
}



export default Header

// <ul>
// 	<li><NavLink exact to="/">首页</NavLink></li>
// 	<li><NavLink to="/news">新闻</NavLink></li>
// 	<li><NavLink to='/course'>课程</NavLink></li>
// 	<li><NavLink to="/joinUs">加入我们</NavLink></li>
// 	<li><NavLink to="/testlogin">测试手机登录</NavLink></li>
// 	<li><NavLink to="/hometab">低栏测试</NavLink></li>
// </ul>