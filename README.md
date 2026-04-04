# Product Management System

A **Node.js + Express** backend with **MongoDB** to manage products efficiently. Supports **CRUD operations**, tracks **pricing, profit, stock, and category**, and provides **RESTful API endpoints** for easy integration.

## Features

- Add new products with name, description, category, buying & selling price, and stock
- Update existing product details
- Delete single or multiple products safely
- Automatically calculate profit and profit percentage
- Easy API integration with frontend apps
- Built using **Express.js**, **Mongoose**, and **MongoDB**

## Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose  
- **API:** RESTful endpoints for product management  

## Installation

```bash
git clone https://github.com/sanik4144/pis.git
cd project-folder
npm install
npm start
```

## API Endpoints

- `POST /product` – Insert a new product
- `POST /products` – Insert multiple new products
- `GET /product/:id` – View a specific product
- `GET /products` – List all products  
- `PUT /product/:id` – Update a product
- `PUT /products/:category` – Update all the "Category Names" of a product category  [Smart Watch -> Smart Ware]
- `DELETE /product/:id` – Delete a single product  
- `DELETE /products` – Delete multiple products (Delete based on the array of IDs given in request body)
