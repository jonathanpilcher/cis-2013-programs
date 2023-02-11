var floatMiles, floatGallons, floatMPG;
    floatMiles = parseFloat(prompt("Enter miles driven"));
    floatGallons = parseFloat(prompt("Enter gallons of gas used"));
    floatMPG = (floatMiles / floatGallons).toFixed(2);
     
alert("Miles per gallon = " + floatMPG);