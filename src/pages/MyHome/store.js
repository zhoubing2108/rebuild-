import {
	observable
} from 'mobx';

class Store {
	@observable singleData = [];

}
export default new Store();