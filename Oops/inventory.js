/*******JSON Inventory Data Management of Rice, Pulses and Wheats ****************
 * 
 * 8.JSON Inventory Data Management of Rice, Pulses and Wheats.
 * @purpose :  Create the JSON from Inventory Object and output the JSON String. 
 * @description :  Create a JSON file having Inventory Details for Rice, 
 * Pulses and Wheats with properties name, weight, price per kg. 
* @function :  Get JSON Object in Java or NSDictionary in iOS. 
Create Inventory Object from JSON. Calculate the value for every Inventory. 
*******************************************************/
var fileStream=require('fs');
var UtilityOops=require('../Utility/OopsUtil');

var input=fileStream.readFileSync('inventory.json');
var object=JSON.parse(input);

var sumRice=0;


var rice=object.Rice;
var wheat=object.Wheat;
var pulses=object.Pulses;


for(let i in rice )
{
  console.log(i);
    var name=rice[i].name;

    var weight=rice[i].weight;
    var price=rice[i].price;
    var total=weight * price;

    console.log("the total value of",rice[i].name,"is",rice[i].weight * rice[i].price );
    sumRice =sumRice+total;
    i=new UtilityOops.Rice(name,weight,price)
    console.log(i);
   

}
console.log("\n"+"[the total pice of rice]:"+sumRice );
console.log("------------------------------------"+"\n");

var sumWheat=0;
for(let j in wheat)
{
    var name=wheat[j].name;
    var weight=wheat[j].weight;
    var price=wheat[j].price;
    var total=weight * price;
    console.log("the total value of",wheat[j].name,"is",wheat[j].weight * wheat[j].price );

    sumWheat=sumWheat+total;

    j=new UtilityOops.Wheat(name,weight,price)
    
    
}
console.log("\n"+"[the total price of Wheats]:"+sumWheat);
console.log("------------------------------------------"+"\n");

var sumPulses=0;  
for(let k in pulses)
{
    var name=pulses[k].name;
    var weight=pulses[k].weight;
    var price=pulses[k].price;
    var total=weight * price;
    console.log("the total value of",pulses[k].name,"is",pulses[k].weight * pulses[k].price );
    sumPulses=sumPulses+total;
    k=new UtilityOops.Pulses(name,weight,price)
    
}

console.log("\n"+"[the total price of pulses]:"+sumPulses+"\n");
console.log("-------------------------------------------");

var result=sumRice+sumWheat+sumPulses;
console.log("*the total amount of all the items*=",result);

console.log("-------------------------------------------"+"\n");

