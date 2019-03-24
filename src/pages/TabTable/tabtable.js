import React, {
	Component
} from 'react';
import {
	withRouter
} from "react-router-dom";
import {
	Layout,
	Table,
	Card,
	Row,
	Col,
	Button,
	Divider
} from 'antd';
import {
	observer
} from 'mobx-react';
import store from './store';
import MyHeader from '../../components/Header';
import AddContract from './modal/addContract';
const {
	Content
} = Layout;
const {
	Column,
	ColumnGroup
} = Table;
const rowSelection = {
	onChange: (selectedRowKeys, selectedRows) => {
		console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	},
	getCheckboxProps: record => ({
		disabled: record.name === 'Disabled User', // Column configuration not to be checked
		name: record.name,
	}),
};
@observer
class ContractStatus extends Component {
	constructor(props) {
		super(props);
		this.state = ({
			current: ''
		})

	}
	componentWillMount() {
		console.log('传参过来的', this.props);
		let currentData = JSON.parse(this.props.match.params.data)
		store.singleData = currentData
	}
	componentDidMount() {

	}
	goEditContactMessage = (record) => {

		let {
			history
		} = this.props;
		let data = JSON.stringify(record);
		let path = `/contractMessage/${data}`;
		// let id = record.id;
		// console.log(this.props);
		history.push(path);

	}
	addContract = (e) => {
		store.add_data.isVisiable_contract = true;

	}
	render() {
		let current = this.state.current
		// const {
		// 	contractStore
		// } = this.props;
		let dataSource = [store.singleData]
		console.log(dataSource);
		return (
			<div>
				<MyHeader />
				<Layout>
				<Content style={{margin:'10px 10px 10px 10px'}}>
								<Card>
								<div>
									<Row>
										<Col span={2} style={{lineHeight:'64px',height:'64px'}}></Col>
							      		<Col span={6} style={{lineHeight:'64px',height:'64px'}}></Col>
							      		<Col span={8} style={{lineHeight:'64px',height:'64px'}}></Col>
							      		<Col span={4} style={{lineHeight:'64px',height:'64px'}}></Col>						      
							      		<Col span={4} style={{lineHeight:'64px',height:'64px'}}><Button type="primary" block onClick={this.addContract}>手动添加合同</Button></Col>
						    		</Row>
								</div>
								<Table dataSource={dataSource} rowSelection={rowSelection}  pagination={{
                       defaultPageSize: 10,
                        current:current,
                        onChange: (page, pageSize) => {
                            console.log('current page: ', page)
                            this.setState({
                            	current:page
                            })
                           
                        }
                    }}>							   
								      <Column
								      	align="center"
								        title="合同编号"
								        dataIndex="contract_number"
								        key="contract_number"
								      />
								      <Column
								      	align="center"
								        title="合同名字"
								        dataIndex="contract_name"
								        key="contract_name"
								      />
								    <Column
								    	align="center"
								      title="合同金额"
								      dataIndex="contract_mount"
								      key="contract_mount"
								    />								    
								    <Column
								    	align="center"
								      title="附件"
								      dataIndex="attachments"
								      key="attachments"
								    />
								    <Column
								    	align="center"
								      title="操作"
								      key="action"
								      render={(text, record) => (
								        <span>
								        	<a onClick={() => { this.goEditContactMessage(record) }}>修改</a>
								        	<Divider type="vertical" /> 
								          	<a onClick={() => { this.goSure(record) }}>通过</a>
											<Divider type="vertical" /> 
											<a onClick={() => { this.goNot(record) }}> 不通过 < /a>
								        </span>
								      )}
								    />
								    
								</Table>
								</Card>
					 </Content>
					 </Layout>
					 <AddContract isVisiable={store.add_data.isVisiable_contract}/>
			</div>
		)
	}
}
export default withRouter(ContractStatus);