const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: [String!]
    products(filter: ProductsFilter): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
    reviews: [Review!]!
  }

  # mutation type
  type Mutation {
    addCategory(input: AddCategory): Category!
    addProduct(input: AddProduct): Product!
  }
  # mutation input type
  input AddCategory {
    name: String
  }
  input AddProduct {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean
  }
  # --------------------------
  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean
    category: Category
    reviews: [Review!]!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilter): [Product!]
  }

  type Review {
    id: ID!
    date: String
    title: String
    comment: String
    rating: Int
    productId: String
  }

  # input for Products
  input ProductsFilter {
    onSale: Boolean!
    rating: Int
  }
`;

module.exports = typeDefs;
