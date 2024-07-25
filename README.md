Basic E-Commerce App
=====================

This is a basic e-commerce application built with Node.js and Express. It allows users to retrieve a list of all products or a specific product by ID.

How to Run
-----------

1. Clone the repository and navigate to the project directory.
2. Run the `run.sh` script to install Node, initialize a project, and install Express.
3. Start the server by running `node app.js` in the terminal.
4. Open a web browser and navigate to `http://localhost:3000` to access the application.

Endpoints
---------

* GET `/products`: Retrieves a list of all products.
* GET `/products/:id`: Retrieves a specific product by ID.

Note: This application assumes that the `data/products.csv` file is present in the project directory.

Troubleshooting
---------------

If you encounter any issues, check the console logs for errors or warnings. Make sure that the `data/products.csv` file is correctly formatted and present in the project directory.