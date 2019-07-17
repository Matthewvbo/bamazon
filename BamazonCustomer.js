const inquirer = require('inquirer')
const mysql = require('mysql')

const connection = mysql.createConnection ({
    host:"localhost",
    port:3306,
    user:"root",
    password:"",
    database:"bamazon"
})

connection.connect(function (err) {
    if (err) throw err;
    console.log('Welcome! Bamazon' + connection.threadId)
})

const displayProducts = function() {
    const query = "Select * FROM products";
    connection.query(query, function(err, res) {
        if (err) throw err

        for (i = 0; i < res.lenght; i++) {
            console.log("product id: " + res[i].item_id +" product_name: " + res[i].product_name + 
            res[i].product_name + " Price " + res[i].price)
        }
        displayProducts()
    })
}

const orderProduct = function() {
    inquirer.prompt({
        name: "product_id",
        type: "input",
        message: "Enter product ID to select items.",
        validate: function(value) {
            if (isNaN(value)=== false) {
                return true
            } else return false
        }
    })
}.then(function(answer){
    query = "Select stock_quantity, price, product_sales, depaertment_name FROM products WHERE ?"
    connection.query(query, { item_id: answer.product_id}, function(err, res) {
        if (err) throw err

            let available_stock = res[0].stock_quantity
            let price_per_unit = res[0].price
            let productSales = res[0].product_sales
            let productDepartment = res[0].department_name
        
        if (available_stock >= answer.productUnits) {
            purchaseComplete(available_stock, price_per_unit, productSales, productDepartment,answer.product_id)
        } else {
            console.log("Not enough in stock! we do apologize")

        orderProduct()
        }
    })
})



const purchaseComplete = function(availableStock, price, productSales, productDepartment, selectedProductID, selectedProductUnits) {
    let updatedStockQuantity = availableStock - selectedProductID
    let totalPrice = price * selectedProductUnits
    let updatedProductSales = parseInt(productSales) + parseInt(totalPrice)

// Below is where I would put in the functionality for updating the inventory.
// and call the function of purchaseComplete