/************************************************************
 * Execution    :   1. cmd> node companyStock.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon companyStock.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To add and update the share info of customer and company.
 * 
 * @description :   StockAccount implements a data type that
 *                  might be used by a financial institution to keep track of customer information.
 * 
 * @file        :   companyStock.js
 * @overview    :   To add and update the share info of customer and company.
 * @author      :   Aishwarya RM <aishu.vaid@gmail.com>
 * @version     :   1.0
 * @since       :   11/02/2019
 * 
 * **********************************************************/
var utility = require('../Utility/OopsUtil')
var read = require('readline-sync')
var file = require('fs')
function stockAccount() {
    try {
        var data = file.readFileSync('customer.json', 'utf8')
        var data1 = file.readFileSync('company.json', 'utf8')
        var object = JSON.parse(data)
        var object11 = JSON.parse(data1)
        var object1 = new utility.stockAccount
        console.log("----------------Stock Account---------------");
        console.log("Enter 1 to create account:")
        //console.log("Enter 2 to total value of amount in account")
        console.log("Enter 2 to buy shares")
        console.log("Enter 3 to sell shares")
        console.log("Enter 4 to information shares of company and customer")
        var num = read.questionInt("choose the number:")
        switch (num) {
            case 1:
                object1.stockCreate(object)
                break;
            case 2:
                object1.buy(object, object11)
                break;
            case 3:
                object1.sell(object, object11)
                break;
            case 4:
                object1.print(object, object11)
                break;
        }
    }
    catch (err) {
        console.log(err.message);
    }
} stockAccount();


