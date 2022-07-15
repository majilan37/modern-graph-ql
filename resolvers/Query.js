const Query = {
  products: (parent, { filter }, { products, reviews }) => {
    if (filter?.onSale) {
      return products.filter((product) => product.onSale);
    } else if (!filter?.onSale) {
      return products.filter((product) => !product.onSale);
    }
    return products;
  },
  product: (parent, { id }, { products }) => {
    return products.find((p) => p.id === id);
  },
  categories: (parent, args, { categories }) => categories,
  category: (parent, { id }, { categories }) =>
    categories.find((c) => c.id === id),
  reviews: (parent, args, { reviews }) => reviews,
};

module.exports = Query;
