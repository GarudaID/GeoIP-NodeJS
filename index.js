const geoip = require("node-iplocate");
var colors = require('colors');
var readline = require('readline');


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


  console.log("===========================================".green)
  console.log("[x] Hey there! I'm PenucuriCode [x]".yellow)
  console.log("[x] Github: https://github.com/penucuriCode".yellow)
  console.log("[x] Dev: https://dev.to/penucuriCode".yellow)
  console.log("===========================================".green)
  rl.question("Tell me the IP Address that you want to get information about!\n", function(ip) {
    if (!ip) return console.log("Please, enter a IP Address!".red);
    
    geoip(ip).then(function(results) {
      console.log("\nIP Address".bold)
      console.log(results.ip);
      console.log("City".bold)
      console.log(results.city);
      console.log("Continent".bold)
      console.log(results.continent); 
      console.log("Country".bold)
      console.log(results.country + " (" + results.country_code + ")"); 
      console.log("Organisation".bold)
      console.log(results.org + " (" + results.asn + ")\n"); 
    });

    rl.close();
  });