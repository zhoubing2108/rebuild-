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
import TimeSelect from '../timeselect/timeselect';
import HandleButton from '../handlebutton/handlebutton';
import {
	observer
} from 'mobx-react';
import store from './store';
const {
	Column,
	ColumnGroup
} = Table;
const {
	Content
} = Layout;
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
class Management extends Component {
	constructor(props) {
		super(props);
		this.state = ({
			mydata: [],
			current: ''
		})

	}
	goEdit = (record) => {
		// nextStore.dataSource.clear();
		// nextStore.dataSource.push(record);
		console.log('record', record)
		let {
			history
		} = this.props;
		let data = JSON.stringify(record);
		let path = `/tabtable/${data}`;
		let id = record.id;
		console.log(this.props);
		history.push(path);
	}

	render() {
		let mycurrent = Array.from(this.state.mydata).length
		let current = this.state.current
		const {
			contractStore
		} = this.props;
		let dataSource = store.dataSource
		console.log(dataSource)

		return (
			
			<div>
				<Layout>
				<Content style={{margin:'10px 10px 10px 10px'}}>
								<Card>
								<div>
									<Row>
							      		<Col span={2} style={{lineHeight:'64px',height:'64px'}}>筛选日期:</Col>
							      		<Col span={6} style={{lineHeight:'64px',height:'64px'}}><TimeSelect /></Col>
							      		<Col span={8} style={{lineHeight:'64px',height:'64px'}}><HandleButton /></Col>
							      		<Col span={4} style={{lineHeight:'64px',height:'64px'}}></Col>							      
							      		<Col span={4} style={{lineHeight:'64px',height:'64px'}}><Button type="primary" block>导出excel</Button></Col>
						    		</Row>
								</div>
								<Table dataSource={dataSource} rowSelection={rowSelection}  pagination={{
                       
                        defaultPageSize: 1,
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
								          	<a onClick={() => { this.goEdit(record) }}>审核{record.lastName}</a>
											<Divider type="vertical" /> 
											<a href = "javascript:;" > Delete </a>
								        </span>
								      )}
								    />
								    
								</Table>
								</Card>
					 </Content>
				</Layout>


			</div>
		
		)
	}
}
export default withRouter(Management)