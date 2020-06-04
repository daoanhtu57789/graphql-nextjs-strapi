import { observable, computed, action, decorate } from "mobx";

class RouterStore {
  listUser = [];
  login = true;
  signup = false;
  content = false;

  changeLogin = (bool) => {
    this.login = bool;
  };
  changeSignup = (bool) => {
    this.signup = bool;
  };
  changeContent = (bool) => {
    this.content = bool;
  };

  addUser = (user) => {
    this.listUser.push(user);
    alert("Đăng Kí Thành Công!");
    this.signup = false;
    this.login = true;
  };

  get getListUser() {
    return this.listUser;
  }

  get getLogin() {
    return this.login;
  }

  get getSignup() {
    return this.signup;
  }

  get getContent() {
    return this.content;
  }
}

decorate(RouterStore, {
  login: observable,
  signup: observable,
  content: observable,
  listUser: observable,
  getLogin: computed,
  getSignup: computed,
  getContent: computed,
  getListUser: computed,
  addUser: action,
  changeLogin: action,
  changeSignup: action,
  changeContent: action,
});
const store = new RouterStore();

export default store;
