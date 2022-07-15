const Category = {
  products: ({ id, name }, args, { products }) => {
    if (args) {
      if (args.filter.onSale) {
        return products.filter(
          (product) => product.category === id && product.onSale
        );
      } else if (args.filter.onSale == false) {
        return products.filter(
          (product) => product.category === id && !product.onSale
        );
      }
    } else {
      return products.filter((product) => product.category === id);
    }
  },
};

module.exports = Category;
