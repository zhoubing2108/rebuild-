import React, {
	Component
} from 'react';
import {
	Layout,
	Menu,
	Breadcrumb,
	Icon,
} from 'antd';
import ReactDOM from 'react-dom';
import MyHeader from '../../components/Header';
import style from './home.css';
import Management from './management/management'

const {
	SubMenu
} = Menu;
const {
	Header,
	Content,
	Sider
} = Layout;


class Home extends Component {
	render() {
		return (
			<span>
				<MyHeader />
				<Layout>
				    <Layout>
				      <Sider width={200} style={{ background: '#fff' }}>
				        <Menu
				          mode="inline"
				          defaultSelectedKeys={['1']}
				          defaultOpenKeys={['sub1']}
				          style={{ lineHeight: '64px' }}
				        >
				          <SubMenu key="sub1" title={<span><Icon type="user" />类别</span>}>
				            <Menu.Item key="1">合同库</Menu.Item>
				            <Menu.Item key="2">回收站</Menu.Item>
				            <Menu.Item key="3">添加合同</Menu.Item>
				            <Menu.Item key="4">option4</Menu.Item>
				          </SubMenu>
				        </Menu>
				      </Sider>
				      <Layout style={{ padding: '24px 24px 24px 24px' }}>
				        <Content style={{
				          background: '#fff', padding: 24, margin: 0, minHeight: 280,height:500
				        }}
				        >
				          <Management />
				        </Content>
				      </Layout>
				    </Layout>
				</Layout>
			</span>
		)
	}
}
export default Home;