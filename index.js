const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const Query = require("./resolvers/Query");
const Category = require("./resolvers/Category");
const Product = require("./resolvers/Product");
const Mutation = require("./resolvers/Mutation");
const { categories, products, reviews } = require("./data");

const resolvers = {
  Query,
  Category,
  Product,
  Mutation,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    products,
    categories,
    reviews,
  },
});

server
  .listen()
  .then(({ url }) => {
    console.log(`server running on ${url}`);
  })
  .catch((err) => console.log("Server error", err));
