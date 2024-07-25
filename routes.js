const express = require('express');
const app = express();
const productRouter = require('./controllers/product.js').productRouter;

app.use('/products', productRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});