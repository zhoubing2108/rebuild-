import React, {
	Component
} from 'react';
import {
	Button
} from 'antd';
class HandleButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			size: 'default',
		}
	}
	componentDidMount() {

	}
	render() {
		const size = this.state.size;
		return (
			<div>
				<div style={{lineHeight:'64px',whiteSpace:'nowrap'}}>
					<span style={{margin:'5px'}}><Button type="primary" size={size}>确定</Button></span>
					<span style={{margin:'5px'}}><Button size={size}>全选</Button></span>
					<span style={{margin:'5px'}}><Button type="danger" size={size}>删除</Button></span>
				</div>
			</div>
		)
	}
}
export default HandleButton;