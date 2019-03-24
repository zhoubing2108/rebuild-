import React, {
	Component
} from 'react';
import {
	DatePicker
} from 'antd';
const {
	MonthPicker,
	RangePicker,
	WeekPicker
} = DatePicker;

function onChange(date, dateString) {
	console.log(date, dateString);
}
class TimeSelect extends Component {
	render() {
		return (
			<div>
			    <RangePicker onChange={onChange} />
			</div>
		)
	}
}
export default TimeSelect;