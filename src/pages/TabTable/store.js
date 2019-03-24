import {
	observable
} from 'mobx';

class Store {
	@observable singleData = [];
	@observable add_data = {
		isVisiable_contract: false,
	};

}
export default new Store();