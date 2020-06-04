import { observable, computed, action, decorate } from "mobx";

class ProductStore {
  //tạo quan sát
  productList = [];
  productEdit = {};

  //tạo action
  addProduct = (product) => {
    this.productList.unshift(product); //cho lên đầu
  };

  deleteProduct = (productDelete) => {
    this.productList = this.productList.filter(
      (product) => product.name !== productDelete.name
    );
  };

  editProduct = (editing) => {
    this.productEdit = editing;
  };

  //tính toán để trả về
  get getProducts() {
    return this.productList;
  }

  get getEditing() {
    // console.log(this.productEdit.name);
    return {
      name: this.productEdit.name,
      description: this.productEdit.description,
      price: this.productEdit.price,
      amount: this.productEdit.amount,
    };
  }
}

decorate(ProductStore, {
  productList: observable,
  productEdit: observable,
  addProduct: action,
  deleteProduct: action,
  editProduct: action,
  getProducts: computed,
  getEditing: computed,
});

const store = new ProductStore();

export default store;
