import React, {
	Component
} from 'react';
import {
	Modal,
	Form,
	Input
} from 'antd'
import pre_store from '../store';
import PDFViewer from '../../JoinUs';
const FormItem = Form.Item;
class AddContract extends Component {
	render() {
		let {
			props,
			form
		} = this.props;
		let {
			getFieldDecorator,
			isFieldTouched,
			getFieldError,
			getFieldsError
		} = form;
		let values = this.props.form.getFieldsValue();
		const formItemLayout = {
			labelCol: {
				xs: {
					span: 24
				},
				sm: {
					span: 4
				},
			},
			wrapperCol: {
				xs: {
					span: 24
				},
				sm: {
					span: 16
				},
			},
		};
		return (
			<div>
				<Modal visible={pre_store.add_data.isVisiable_contract}
			        onCancel={() => { pre_store.add_data.isVisiable_contract = false }}
			        onOk={() => { this.add() }}
			        width='800px'
			        title='新增合同'
			        okText='创建'
			      >
			        <Form {...formItemLayout}>
			          <FormItem label='合同编号'>
			            {getFieldDecorator('realname')(
			              <Input placeholder='请输入月嫂名称' />
			            )}
			          </FormItem>
			          <FormItem label='合同名字'>
			            {getFieldDecorator('phone')(
			              <Input placeholder='请输入联系方式' />
			            )}
			          </FormItem>
			          <FormItem label='合同金额'>
			            {getFieldDecorator('phone')(
			              <Input placeholder='请输入联系方式' />
			            )}
			          </FormItem>
			          <FormItem label='合同单位'>
			            {getFieldDecorator('phone')(
			              <Input placeholder='请输入联系方式' />
			            )}
			          </FormItem>
			          <FormItem label='基站编码'>
			            {getFieldDecorator('phone')(
			              <Input placeholder='请输入联系方式' />
			            )}
			          </FormItem>
			          <FormItem label='合同文件'>
			            {getFieldDecorator('phone')(
			              <PDFViewer />
			            )}
			          </FormItem>

			        </Form>
			    </Modal>
			</div>
		)
	}
	getMm = () => {
		request({
			url: '/api/select_maternityMatron',
			method: 'POST',
			success: (res) => {
				console.log(res);
				let myData_mm = res.data
				let myData_middle_mm = myData_mm.map(
					(item, index) => {
						return ({
							number: index + 1,
							realname: item.realname,
							phone: item.phone,
							id: item.id,
							openid: item.openid,
						})
					}
				)
				let myNewData_mm = myData_middle_mm.map(
					(item, index) => {
						item.number = index + 1;
						return item;
					}　
				)
				// this.setState({
				//   managerDatasource : myNewData_manager
				// })
				store.mmDatasource = myNewData_mm


			}
		})

	}
	add = () => {}
}
export default Form.create()(AddContract);