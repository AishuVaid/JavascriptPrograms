
/*************************************************
    *Purpose :to deploy all the business logic
    *
    * @description
    * @file :OopsUtil.js
    * @overview : All the business logic is coded here.
    * @author : Aishwarya.R.M.
    * @version :1.0
    * @Since: 07-02-2019.
    * 
    ******************************************************/

      /****************Stock Report***********************
        * 1.Stock Report.
        * *************************
        * @purpose :  Print the Stock Report.
        * @description :  Write a program to read in Stock Names,
        *  Number of Share, Share Price. Print a Stock Report with
        *  total value of each Stock and the total value of Stock.
        * @function:Calculate the value of each stock and the total value.
        * **********************************************************/


var read=require('readline-sync');
var file=require('fs');


class Stock
{
    constructor(name,share,price)
    {
        this.name=name;
        this.share=share;
        this.price=price;

    }
    addValue(share,price)
    {
        var sum=price*share;
        return sum;
    }
}


     /*********JSON Inventory Data Management of Rice, Pulses and Wheats**************
        * 1.JSON Inventory Data Management of Rice, Pulses and Wheats.
        * *************************
        * @purpose : Create the JSON from Inventory Object and output the JSON String.
        * @description : Create a JSON file having Inventory Details for Rice, 
        * Pulses and Wheats with properties name, weight, price per kg. 
        * @function: Create a JSON file having Inventory Details for Rice, 
        * Pulses and Wheats with properties name, weight, price per kg. 
        * **********************************************************/


class Item
{
    constructor(name,weight,price)
    {
        this.name=name;
        this.weight=weight;
        this.price=price;

    }
    total()
    {
        return this.weight*this.price;
    }
}
class Rice extends Item
{
    constructor(name,weight,price)
    {
       super(name,weight,price)
    }
}
    class Wheat extends Item
{
    constructor(name,weight,price)
    {
       
        super(name,weight,price)
    }
   
}

    class Pulses extends Item
{
    constructor(name,weight,price)
    {
        super(name,weight,price)
    }
}





class Player {
  constructor(cards) {
    this.cards = cards;
  }
  /**
   * Function to sort the cards.
   */
  sortedCards() {
    var sortedCards = [];
    var access = require('../Utility/Util')
    sortedCards = access.sortByBubble(this.cards);
    return sortedCards;
  }
}



class Deck
{
    createDeck()
    {
var suit= ["♣️", "🔸", "❤️", "♠️"];
var rank=['2','3','4','5','6','7','8','9','10',"jack","queen","king","ace"];
var cards=suit.length * rank.length;
var cardarr=[];

for(let i=0;i<suit.length;i++)
{
    for(let j=0;j<rank.length;j++)
    {
        var temp=" ";
        cardarr.push(new Cards(j,i));
    }
}

var cards=suit.length*rank.length;
for(let i=0;i<cards;i++)
{
    var num=Math.floor(Math.random()*cards);
    var temp=cardarr[i]+" ";
    cardarr[i]=cardarr[num];
    cardarr[num]=temp;
}
return cardarr;
    }
}



class Cards
{
    constructor(suit,rank)
    {
        this.suit=suit;
        this.rank=rank;

    }
    printCard()
    {
        return ""+this.suit+this.rank;
    }
}
//module.exports = { Player };



 /****************Inventory Management Program***********************
        * 1.Inventory Management Program.
        * *************************
        * @purpose : Create the JSON from Inventory Object and output the JSON String.
        * @description :Extend the above program to Create InventoryManager to
        *  manage the Inventory. The Inventory Manager will use InventoryFactory
        *  to create Inventory Object from JSON. The InventoryManager will 
        * call each Inventory Object in its list to calculate the Inventory 
        * Price and then call the Inventory Object to return the JSON String. 
        * The main program will be with InventoryManager.
        * @function: Get JSON Object in Java or NSDictionary in iOS. 
        * Create Inventory Object from JSON. Calculate the value for every Inventory. 
        * **********************************************************/







class inventoryManage
{
    constructor()
    {

    }
add(data)
{
    var name=read.question("Enter the name of the stock to add :")
    var shares=read.questionInt("Enter the number of Shares :")
    var quantity=read.questionInt("Enter the price of the shares :")
    data.Stock.push(
        {
            shareName : name,
            noOfShares : shares,
            price : quantity
        })
        var d=file.writeFileSync('inventoryManage.json',JSON.stringify(data))

}
remove(data)
{
    var name=read.question("Enter the name of the stock you want to remove :")
    for(let i=0;i<data.Stock.length;i++)
    {
        if(data.Stock[i].shareName==name)
        {
            var index=data.Stock.indexOf(data.Stock[i])
            data.Stock.splice(index,1)
        }
        var d=file.writeFileSync('inventoryManage.json',JSON.stringify(data))
    }
}

print(data)
{
    var stock=data.Stock;
    for(const key in stock)
    {
        console.log(stock[key]);
    }
}

edit(data)
{
    var stock=data.Stock;
    var name=read.question("Enter the stock name to edit :")
    var sharess=read.question("Enter no of shares to edit :")
    var money=read.question("Enter the shares price :")
    for(let key in stock)
    {
        if(stock[key].shareName==name)
        var value=key;
        if(stock[key].noOfShares==sharess)
        var value1=key;
        if(stock[key].price==money)
        var value2=key;
    }
    var name1=read.question("Enter the new name of the share :");
    stock[value].shareName=name1;
    var name2=read.question("Enter the new no of shares");
    stock[value1].noOfShares=name2;
    var name3=read.question("Enter the new price of the shares :")
    stock[value2].price=name3;
    var d=file.writeFileSync('inventoryManage.json',JSON.stringify(data))
}
}








var p=file.readFileSync('addressBook1.json')
nameRestriction=/[a-z]/g;
contactRestriction=/[0-9]/g;

/**
 * regex
 */
nameRestriction = /[a-z]/ig;
contactRestriction = /[0-9]/g;
/**
 * Add new entries each time and manage that address book and perform opeartions like add,delete,
 * search,update and sort information.
 * @param person store the info of each person and perform opeartions.
 */
class Address {
    /**
     * create a constructor to initialize and store values
     */
    constructor(addressb) {
        this.addressb;
    }
    createAddress(addressb) {
        var name = read.question("Please enter your first name: ");
        while (!nameRestriction.test(name)) {
            console.log("Please enter string");
            name = read.question("Please enter your first name: ");
        }
        var lastName = read.question("Please enter your last name: ");
        while(!nameRestriction.test(lastName)) {
            console.log("Please enter string!");
            lastName = read.question("Please enter your last name: ");
        }
        /**
         * add the address information
         */
        console.log("***Address Info***");
        var street = read.question("Street: ");
        var city = read.question("City: ");
        while(!nameRestriction.test(city)) {
            console.log("Please enter string!");
            city = read.question("City: ");
        }
        var state = read.question("State: ");
        while(!nameRestriction.test(state)) {
            console.log("Please enter string!");
            state = read.question("State: ");
        }
        var nation = read.question("Nationality: ");
        while(!nameRestriction.test(nation)) {
            console.log("Please enter string!");
            nation = read.question("Nationality: ");
        }
        var zip = read.question("Zip code: ");
        if (contactRestriction.test(zip) == false || zip.length != 6) {
            console.log("Invalid zip code!");
            return false;
        }
        var phoneNum = read.question("Phone number: ");
        if (contactRestriction.test(phoneNum) == false || phoneNum.length != 10) {
            console.log("Invalid phone number!");
            return false;
        }
        /**
         * push each value into json
         */
        addressb.Person.push({
            "Name": name,
            "LastName": lastName,
            "Address": {
                "Street": street,
                "City": city,
                "State": state,
                "Nationality": nation,
                "Zip": zip,
                "PhoneNum": phoneNum
            }
        })
        /**
         * write file into json
         */
        file.writeFile('addressBook1.json', JSON.stringify(addressb), 'utf-8', function (err) {
            if (err) throw err
            console.log('Done!');
        })
        console.log("Address updated succesfully!");
        console.log("Your information as per our record is: \r\n First Name: " + name + "\r\nLast Name: " + lastName + "\r\nStreet: " + street + "\r\nCity: " + city + "\r\nState: " + state + "\r\nNationality: " + nation);
    }
    /**
     * comaparing name of each object and sort alphabetically
     */
    compare1(a, b) {
        if (a.Name.toLowerCase() < b.Name.toLowerCase()) {
            return -1;
        }
        if (a.Name.toLowerCase() > b.Name.toLowerCase()) {
            return 1;
        }
        return 0;
    }
    sorting(addressb) {
        console.log(addressb.Person.sort(this.compare1));
    }
    /**
     * open profile for given name
     */
    openProfile(addressb) {
        var temp = -1;
        if (addressb.Person.length > 0) {
            for (var i = 0; i < addressb.Person.length; i++) {
                console.log(addressb.Person[i]);
            }
            console.log("Welcome!!");
            var update = read.question("Please enter the name of profile: ");
            for (var k = 0; k < addressb.Person.length; k++) {
                if (update == addressb.Person[k].Name) {
                    temp = k;
                    console.log("What you want to do?");
                    console.log("1: Update");
                    console.log("2: Delete");
                    console.log("3: Sort");
                    console.log("4: Save");
                    console.log("5: Exit");
                    var choice2 = read.question("Please enter your choice: ");
                    switch (parseInt(choice2)) {
                        case 1:
                            /**
                             * update profile
                             */
                            console.log("What do you want to update? ");
                            console.log("1: Street");
                            console.log("2: City");
                            console.log("3: State");
                            console.log("4: Nationality");
                            console.log("5: Zip code");
                            console.log("6: Phone");
                            console.log("7: Exit");
                            var choice3 = read.question("Please enter your choice: ");
                            switch (parseInt(choice3)) {
                                case 1:
                                    var sUpdate = read.question("Enter the new street number: ");
                                    if (nameRestriction.test(sUpdate) == false && sUpdate.length > 3) {
                                        console.log("Invalid name!");
                                        return false;
                                    }
                                    /**
                                     * update whole data after changes
                                     */
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": sUpdate,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nationality": addressb.Person[k]["Address"].Nation,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    /**
                                     * save into json every time after update
                                     */
                                    save();
                                    break;
                                case 2:
                                    var cUpdate = read.question("Enter the new city name: ");
                                    if (nameRestriction.test(cUpdate) == false && cUpdate.length > 3) {
                                        console.log("Invalid name!");
                                        return false;
                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": cUpdate,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nationality": addressb.Person[k]["Address"].Nation,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                case 3:
                                    var stUpdate = read.question("Enter the new state name: ");
                                    if (nameRestriction.test(stUpdate) == false && stUpdate.length > 3) {
                                        console.log("Invalid name!");
                                        return false;
                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": stUpdate,
                                            "Nationality": addressb.Person[k]["Address"].Nation,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                case 4:
                                    var nUpdate = read.question("Enter the new nation name: ");
                                    if (nameRestriction.test(nUpdate) == false && nUpdate.length > 3) {
                                        console.log("Invalid name!");
                                        return false;
                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nationality": nUpdate,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                case 5:
                                    var zUpdate = read.question("Enter the new zip code: ");
                                    if (contactRestriction.test(zUpdate) == false) {
                                        console.log("Invalid number!");
                                        return false;
                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nationality": addressb.Person[k]["Address"].Nation,
                                            "Zip": zUpdate,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                    case 6:
                                    var pUpdate = read.question("Enter the new phone number: ");
                                    while (contactRestriction.test(pUpdate) == false || pUpdate.length != 10) {
                                        pUpdate = read.question("No special characters Invalid number! :");

                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nationality": addressb.Person[k]["Address"].Nation,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": pUpdate
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                case 7:
                                    console.log("ThankYou!");
                                    //address();
                                    break;
                            }
                            break;
                        case 2:
                            /**
                             * to delete profile
                             */
                            var update = read.question("Please enter the index you want to delete: ");
                            delete addressb.Person[update];
                            for (var k = 0; k < addressb.Person.length; k++) {
                                if (addressb.Person[k] == null) {
                                    addressb.Person.splice(k, 1);
                                }
                            }
                            /**
                             * write file
                             */
                            file.writeFile('addressBook1.json', JSON.stringify(addressb), 'utf-8', function (err) {
                                if (err) throw err
                                console.log('Done!')
                            })
                            break;
                        case 3:
                            /**
                             * sort the profile by name
                             */
                            this.sorting(addressb);
                            save();
                            break;
                        case 4:
                            /**
                             * save file into json
                             */
                            function save() {
                                file.writeFile('addressBook1.json', JSON.stringify(addressb), 'utf-8', function (err) {
                                    if (err) throw err
                                    console.log('File Saved!!')
                                })
                            }
                            save();
                            break;
                        case 5:
                            console.log("ThankYou!!");
                            //address();
                            break;
                        default:
                            console.log("Please enter valid option");
                            break;
                    }
                }
            } if (temp == -1) {
                console.log("Profile unavailable!!Please create new one.");
            }
        }
        else {
            console.log("No profiles to display!!Please create a new profile!");
            this.createAddress();
        }
    }
}












var read = require('readline-sync');
var file = require('fs');
var s = 0;

/************************* Stock Account Program ***************************
 *  Stock Account Program
 *---------------------------------
 * @Purpose     :  To add and update the share info of customer and company.
 * 
 * @Use Library : Java JSON Library
 *
 * @description : StockAccount implements a data type that might be used by a financial institution to keep track of customer information.
 *
 * @function    : stockAccount keep the track of information about the company and the customer where customer can buy and sell the share .
 *
 * @param       : object --> objects such as customer,company which are at  stockAccountObject.
 */

class stockAccount {
    constructor() {
    }
    stockCreate(data) {
        var name1 = read.question(" enter the name of the customer: ");
        var id1 = read.question(" enter the ID of the customer: ");
        var share1 =read.question(" enter the number of shares: ");
        console.log(id1);
        data.customer.push(
            {
                name: name1,
                id: id1,
                share: share1,
            }
        )
        console.log(data.customer);
        var d = file.writeFileSync('customer.json', JSON.stringify(data));
    }
    buy(data, data1) {
        var flag = false;
        console.log(data);
        var object = data.customer;
        var id1 = read.question(" enter the id : ");
        for (let i in object) {
            if (object[i].id == id1) {
                var index = data.customer.indexOf(data.customer[i]);
                var customername = object[i].name;
                console.log(" company information ");
                console.log(data1);
                var sym = read.question(" enter symbol of company share you want to buy : ")
                var object1 = data1.company;
                for (let i in object1) {
                    if (object1[i].symbol == sym) {
                        console.log("company number of shares price of each share");
                        console.log(object1[i]);
                        var name10 = object1[i].name
                        var sym10 = object1[i].symbol;
                        var shar = object1[i].share;
                        do {
                            var number = read.questionInt(" enter the number of shares you want to buy : ");

                            if (number > shar) {
                                console.log(" Please enter the share number which less than company shares ");
                            }
                            else {
                                flag = true;
                            }
                        } while (!flag)
                        var s = " customer name :  " + customername + "  and name of company  " + name10 + " & symbol " + sym10 + "  buy number of shares " + number;
                        console.log(s);
                        var time = new Date();
                        var date=new Date();
                        var day=date.toDateString();
                        console.log(" Time of buying the share is " + Math.floor(time.getSeconds()) + " sec "+day);
                        var n = parseInt(data.customer[index].share)
                        var n11 = parseInt(data1.company[i].share)
                        var num = parseInt(number);
                        var n1 = n + num;
                        var n2 = n11 - num;
                        if (n11 > num) {
                            data.customer[index].share = n1;
                            data1.company[i].share = n2;
                            var d = file.writeFileSync('customer.json', JSON.stringify(data));
                            var d1 = file.writeFileSync('company.json', JSON.stringify(data1));
                        }
                    }
                }
            }
        }
    }
    sell(data, data1) {
        console.log(data);
        var object = data.customer;
        var id1 = read.question(" enter the id : ");
        for (let i in object) {
            if (object[i].id == id1) {
                var index = data.customer.indexOf(data.customer[i])
                var customername1 = object[i].name;
                console.log(" company information ");
                console.log(data1);
                var sym12 = read.question(" enter symbol  of company you want to sell : ");
                var object1 = data1.company;
                for (let i in object1) {
                    if (object1[i].symbol == sym12) {
                        console.log("company number of shares and price of each share");
                        console.log(object1[i]);
                        var name11 = object1[i].name;
                        var sym13 = object1[i].symbol;
                        var number = read.questionInt("enter how many shares you want to sell :");
                        var s = " customer name :" + customername1 + " and name of company " + name11 + " & symbol  " + sym13 + " sell number of shares :" + number;
                        console.log(s);
                        var time11 = new Date();
                        console.log(" Time of selling the share is " + Math.floor(time11.getSeconds()) + " sec ");
                        var n = parseInt(data.customer[index].share)
                        var n11 = parseInt(data1.company[i].share)
                        var num = parseInt(number);
                        var n1 = n - num;
                        var n2 = n11 + num;
                        data.customer[index].share = n1;
                        data1.company[i].share = n2;
                        var d = file.writeFileSync('customer.json', JSON.stringify(data));
                        var d1 = file.writeFileSync('company.json', JSON.stringify(data1));
                    }
                }
            }
        }
    }
    print(data, data1) {
        console.log("customer shares information :");
        console.log(data);
        console.log("company shares information :");
        console.log(data1);
    }
}



	


  
module.exports={Stock,Rice,Wheat,Pulses,inventoryManage,Address,stockAccount,Player,Deck,



      /****************Regular Expression Demonstration.********************** *
        * 2.Regular Expression Demonstration.
        * *************************
        * @purpose : Print the Modified Message.
        * @description : Read in the following message: Hello <<name>>,
        *  We have your full name as <<full name>> in our system. 
        * your contact number is 91-xxxxxxxxxx. 
        * Please,let us know in case of any clarification Thank you 
        * BridgeLabz 01/01/2016. Use Regex to replace name, full name,
        *  Mobile#, and Date with proper value.
        * @function: Logic -> Use Regex to do the following
               Replace <<name>> by first name of the user (assume you are the user)
               replace <<full name>> by user full name.
               replace any occurance of mobile number that should be in
              format 91-xxxxxxxxxx by your contact number.
              replace any date in the format XX/XX/XXXX by current date.

        *  **********************************************************/

 

    replaceUsingRegex(name,fullName,num,day)
    {
       var fs = require('fs');
       var fileString = fs.readFileSync('oops.txt','utf8');

        fileString=fileString.replace(/<<name>>/g,name)
        fileString=fileString.replace(/<<full name>>/g,fullName)
        fileString=fileString.replace(/<<xxxxxxxxxx>>/g,num)
        var date = new Date();
        day = date.toDateString();
        fileString=fileString.replace(/01-01-2016/g,day);
        return fileString;
    },




deckOfCards() {
    try {
      var suits = ["♣", "♦", "♥", "♠"];
      var ranks = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Jack",
        "Queen",
        "King",
        "Ace"
      ];
      /**
       * To calculate total number of cards
       */
      var totalCards = suits.length * ranks.length;
      /**
       * To create a deck of array
       */
      var cardArray = [];
      for (let currentSuit = 0; currentSuit < suits.length; currentSuit++) {
        for (let currentRank = 0; currentRank < ranks.length; currentRank++) {
          var temp = "";
          cardArray.push(temp + ranks[currentRank] + suits[currentSuit]);
        }
      }
      /**
       * To shuffle the deck
       */
      for (let shuffle = 0; shuffle < totalCards; shuffle++) {
        var num = Math.floor(Math.random() * totalCards);
        /**
         * Performing swapping
         */
        var temp = cardArray[shuffle];
        cardArray[shuffle] = cardArray[num];
        cardArray[num] = temp;
      }
      return cardArray;
    } catch (error) {
      console.log(error.message);
    }
},


}