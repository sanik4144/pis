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
git clone <your-repo-url>
cd project-folder
npm install
npm start
```

## API Endpoints

- `POST /product` – Create a new product  
- `GET /product` – List all products  
- `PUT /product/:id` – Update a product  
- `DELETE /product/:id` – Delete a single product  
- `DELETE /products` – Delete multiple products
