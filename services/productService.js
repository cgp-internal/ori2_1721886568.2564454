const fs = require('fs');
const csv = require('csv-parser');
const results = [];

const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    fs.createReadStream('data/products.csv')
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results));
  });
};

const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    fs.createReadStream('data/products.csv')
      .pipe(csv())
      .on('data', (data) => {
        if (data.id === id) {
          resolve(data);
        }
      })
      .on('end', () => reject({ message: 'Product not found' }));
  });
};

module.exports = { getAllProducts, getProductById };