const uuidv1 = require('uuid/v1');

class Product {
  constructor(name, price, status) {
    this.id = uuidv1();
    this.name = name;
    this.price = price || 10;
    this.status = status || 'instock';
  }
}

class Category {
  constructor(name) {
    this.id = uuidv1();
    this.name = name;
    this.products = [];
  }

  addProduct(name, price) {
    let product = new Product(name, price);
    this.products.push(product);
  }

  removeProduct(id) {
    this.products = this.products.filter(product => {
      return product.id != id;
    });
  }

  updateProduct(product) {
    this.products.forEach(x => {
      if (x.id == product.id) {
        x = product;
      }
    });
  }

  getProduct(id) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return this.products[i];
      }
    }
  }
}

class Order {
  constructor(productId, customerId, status) {
    this.id = uuidv1();
    this.productId = productId;
    this.customerId = customerId;
    this.status = status;
  }
}

class Customer {
  constructor(name) {
    this.id = uuidv1();
    this.name = name;
    this.orders = [];
  }

  placeOrder(productId, customerId) {
    let order = new Order(productId, customerId, 'pending');
    this.orders.push(order);
  }

  getOrderStatus(orderId) {
    for (let i = 0; i < this.orders; i++) {
      if (orderId == this.orders[i].id) {
        return this.orders[i].status;
      }
    }
  }
}

class Shop {
  constructor(name) {
    this.id = uuidv1();
    this.name = name;
    this.categories = [];
  }

  createCategory(name) {
    let category = new Category(name);
    return this.categories.push(category);
  }

  removeCategory(id) {
    this.categories = this.categories.filter(product => {
      return product.id != id;
    });
  }

  updateCategory(category) {
    this.categories.forEach(x => {
      if (x.id == category.id) {
        x = category;
      }
    });
  }

  addProduct(name, price, categoryId) {
    this.categories.forEach(category => {
      if (category.id == categoryId) {
        category.addProduct(name, price);
      }
    });
  }

  removeProduct(productId, categoryId) {
    this.categories.forEach(category => {
      if (category.id == categoryId) {
        category.removeProduct(productId);
      }
    });
  }

  updateProduct(product, categoryId) {
    this.categories.forEach(category => {
      if (category.id == categoryId) {
        category.updateProduct(product);
      }
    });
  }
}

class Admin {
  constructor(name) {
    this.id = uuidv1();
    this.name = name;
    this.shops = [];
  }

  addShop(name) {
    let shop = new Shop(name);
    this.shops.push(shop);
    return shop;
  }

  removeShop(id) {
    this.shops = this.shops.filter(shop => {
      return shop.id != id;
    });
  }

  updateShop(id, name) {
    this.shops.forEach(shop => {
      if (shop.id == id) {
        shop.name = name;
      }
    });
  }

  addCategory(shop, categoryName) {
    this.shops.forEach(x => {
      if (x.id == shop.id) {
        x.categories.forEach(y => {
          y.createCategory(categoryName);
        });
      }
    });
  }

  removeCategory(shop, category) {
    this.shops.forEach(x => {
      if (x.id == shop.id) {
        x.removeCategory(category.id);
      }
    });
  }

  updateCategory(shop, category) {
    this.shops.forEach(x => {
      if (x.id == shop.id) {
        x.updateCategory(category);
      }
    });
  }

  addProduct(shop, category, productName, productPrice) {
    this.shops.forEach(x => {
      if ((x.id = shop.id)) {
        x.categories.forEach(y => {
          if (y.id == category.id) {
            y.addProduct(productName, productPrice);
          }
        });
      }
    });
  }

  removeProduct(shop, category, product) {
    this.shops.forEach(x => {
      if (x.id == shop.id) {
        x.categories.forEach(y => {
          if (y.id == category.id) {
            y.removeProduct(product.id);
          }
        });
      }
    });
  }

  updateProduct(shop, category, product) {
    this.shops.forEach(x => {
      if (x.id == shop.id) {
        x.categories.forEach(y => {
          if (y.id == category.id) {
            y.updateProduct(product);
          }
        });
      }
    });
  }
}
