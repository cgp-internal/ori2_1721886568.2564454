const express = require('express');
const app = express();
const productRouter = require('./controllers/product');

app.use(express.json());
app.use('/products', productRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});