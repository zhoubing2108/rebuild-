import {
	observable
} from 'mobx';

class Store {
	@observable dataSource = [{
		key: '1',
		contract_number: 'hfurhfurh',
		contract_name: '大概有多个',
		contract_mount: '4644',
		attachments: '附件链接'
	}, {
		key: '1',
		contract_number: 'hfurhfurh',
		contract_name: '的首都华盛顿',
		contract_mount: '5353',
		attachments: '附件链接'
	}];
}
export default new Store();