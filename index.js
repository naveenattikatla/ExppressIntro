const express  =  require("express") // common js module pattern
const { PORT } = require("./config.js/serverConfig")
const bodyParser = require('body-parser')
const app =  express() //  express function is invoked to create applications


const router = express.Router()

router.use()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) // parse application/json
app.use(bodyParser.text())  // parse  application/text

// define some routes

app.get("/products" , async (request , response ) =>{
    const res = await fetch("https://dummyjson.com/products") // need to get form db 
    const { products } = await res.json(); 
    
    response.send(products) // exposes to internet.
   
})

app.listen(PORT , () =>{
    // all actions before app is getting running , will be added here..
    // eg. Db connection 
    console.log("server is running at port number " , PORT)
})

/**
 * 
 * 1. URL Params -> /products/1 or /products/2
 * 2. Query Params -> /products?rating=4&min_price=30&max_price=100
 * 3. Body Params -> 
 */