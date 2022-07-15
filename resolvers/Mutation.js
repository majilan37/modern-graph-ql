const { v4: id } = require("uuid");

const Mutation = {
  addCategory: (parent, { input }, { categories }) => {
    const { name } = input;
    const newCategory = {
      id: id(),
      name,
    };

    categories.push(newCategory);

    return newCategory;
  },

  addProduct: (parent, { input }, context) => {},
};

module.exports = Mutation;
