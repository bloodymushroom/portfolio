import {observable} from 'mobx'

@observable
class Store {
  constructor() {
  }

  @observable activeChart = 'Languages';
  @observable test = [];
}

const store = window.store = new Store();
export default store;

console.log('class made?', store.test);