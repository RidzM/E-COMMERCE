const express = require("express");
   const mongoose = require("mongoose");
   const bodyParser = require("body-parser");

   const app = express();

   // Middleware
   app.use(bodyParser.urlencoded({ extended: true }));
   app.use(bodyParser.json());

   // Connect to MongoDB
   mongoose.connect("mongodb://localhost:27017/nikestoredb", {
     useNewUrlParser: true,
     useUnifiedTopology: true
   });

   // Define MongoDB Schema and Models (for example, Product Schema)
   const productSchema = new mongoose.Schema({
     title: String,
     price: Number,
     // ... other fields
   });

   const Product = mongoose.model("Product", productSchema);

   // Define API endpoints
   app.get("/products", async (req, res) => {
     try {
       const products = await Product.find();
       res.json(products);
     } catch (err) {
       res.status(500).json({ error: err.message });
     }
   });

