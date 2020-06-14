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
  editPost = (postEdit) => {
    const index = this.user.posts.findIndex((post) => post.id == postEdit.id);
    console.log(this.user.posts);
    this.user = {
      ...this.user,
      posts: [
        ...this.user.posts.slice(0, index),
        { ...this.user.posts[index], ...postEdit },
        ...this.user.posts.slice(index + 1),
      ],
    };
    console.log(this.user.posts);
  };
}

decorate(UserStore, {
  user: observable,
  deletePost: action,
  addUser: action,
  addPost: action,
  editPost: action,
});

const store = new UserStore();

export default store;
