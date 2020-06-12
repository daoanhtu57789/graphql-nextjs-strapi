import { observable, action, decorate } from "mobx";

class UserStore {
  //tạo quan sát
  user = {};

  //tạo action
  addUser = (user) => {
    this.user = user; //Đăng nhập thành công thì thêm user vào đây
  };

  addPost = (post) => {
    this.user.posts = [post].concat(this.user.posts); //Đăng nhập thành công thì thêm user vào đây
  };

  deletePost = (postDeleteId) => {
    this.user.posts = this.user.posts.filter(
      (post) => +post.id !== +postDeleteId
    );
  };
}

decorate(UserStore, {
  user: observable,
  deletePost: action,
  addUser: action,
  addPost: action,
});

const store = new UserStore();

export default store;
