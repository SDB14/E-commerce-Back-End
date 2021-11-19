// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { SHOWTABLES } = require('sequelize/types/lib/query-types');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey:"category_id"
})

// Categories have many Products
Category.hasMany(Product,{
  foreignKey:"category_id"
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{
  through:ProductTag,
  foreignKey:"product_id"
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{
  through:ProductTag,
  foreignKey:"tag_id"
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

// Category
// shoes
// id (primary key) - 33


// Product
// Jordan's
// id (primary key)
// foreign key (referencing primary key on Category) 33
