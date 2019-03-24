import {
  observable
} from 'mobx';


class Store {
  @observable data = [];
  @observable dataleft = [];
  @observable RadioValue = 0;
  @observable deadline = new Date(Date.now());

  @observable total = 5;
  @observable totalleft = 5;

  @observable RadioValue = 0;
  @observable deadline = new Date(Date.now());
  @observable userList = [];

  @observable total = 5;
  @observable needTotal = 5;
  @observable dataSource = []
  @observable needList = [];
  @observable current = 1;
  @observable needCurrent = 1;
  @observable info = {};
  @observable check_con = '';
}

export default new Store();