const Product = {
  category: ({ category }, args, { categories }) => {
    return categories.find((c) => c.id === category);
  },
  reviews: ({ id }, args, { reviews }) => {
    return reviews.filter((p) => p.productId === id);
  },
};

module.exports = Product;
