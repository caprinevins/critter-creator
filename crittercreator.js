/*Pseudo Code:
	1. Define an object that has "blank" number of values
	
	2. Prompt user for "name" of value
		a. Set "name" value in object
	
	3. Prompt user for "legs" value, tell rules
		○ Check that value is an integer
		○ Check that value is between 0-8
			§ If check fails, ask again
		○ If value is good, set to "legs" value

	4. Prompt user for "housebroken" value
		○ If value "yes", set to true
		○ If value is "no", set to false
		○ If value is neither, ask again;
		○ If value is good, set to "housebroken"
        o Accept any case of yes or no
	
Loop through object, output each value to console*/

/* 1. Define an object that has "blank" number of values*/ 
  var critter = {
  "name": "",
  "legs": "",
  "housebroken": "",
  
};

alert("We're going to adopt a critter. We will ask you three questions. Answer them thoroughly and carefully and we will critter the heck out of you.");

/* 2. Getting a name prompt. The "," and string after is default value.*/
var name = prompt("Name?", "Donald");
critter.name = name;
  if (name == ""){
    critter.name = "Default Name";
  } else {
    critter.name = name;
  }

var legs = prompt(
  "How many legs does " + critter.name + " have? Must be a number between 0-100");

var parsedLegs = parseInt(legs);

if(parsedLegs >= 0 && parsedLegs <= 100){
  critter.legs = parsedLegs;
}

var houseBroken = prompt("House Broken or PEE EVERYWHERE? Enter 'Yes' or 'No', if you dare.");

if(houseBroken == "yes"){
  critter.houseBroken = true;
} else if (houseBroken == "no"){
  critter.houseBroken = false;
} else {
  //ask again//
}

for (var key in critter) {
  console.log(key);
  console.log(critter[key]);
  
}
