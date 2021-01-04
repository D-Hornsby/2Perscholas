
console.log("%c Let the battle begin.", "background:green");

//lets build our ship
//Im chosing to make the ships an object over an array to more easly add items if i choose later
//if hull reaches 0 or less, ship is distroyed. 
//accuracy is between 0 and 1 that the ship will hit its target.(built into Math.random()0 inclusive 1 exclusive)
//every attack calculate the chance that the damage will hit opposing ship :firepower
//use `Math.random()` ---- see notes
//if ships accuracy is 0.8 -then if the number generated from `Math.random()` is <= 0.8 then attack is successful
//if value is > 0.8 then attack missed
//adjust accuracy based on specs for each ship
//hull = hitpoints
//firepower = damage done 



var ussSchwarz = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    health: true, 
    victories: 0,

    attack: (RandomAlien) => {
        console.log("%cAttack the Alien!", "background:black; color:green");
        let myAttack = Math.random();
        let firepower = ussSchwarz.firepower;
        let accuracy = ussSchwarz.accuracy;
        //console.log("my attack", myAttack);
        //console.log("this.accuracy", accuracy);
            if (myAttack <= accuracy){
                console.log("%cDirect hit Captain!", "color:red; font-size: 17px");

                RandomAlien.hull = RandomAlien.hull - firepower;
                console.log(`%cAlien has ${RandomAlien.hull} hull points remaining.`, "color:magenta;");

            if (RandomAlien.hull <= 0) {
                ussSchwarz.victories += 1;
                
                RandomAlien.health = false;
                console.log("%cWell done Captain, invaders  are distroyed!", "background:blue; color:white;");    
            }
        }else {
                console.log("%cAttack failed!", "background:white; color:black;")
        }  
    }
}

//now for the Alien ships. Ill start with just 1 build to 6 each with unique values. ex: increse accuracy
//if (Math.random()<alien[0].accuracy) {console.log('You have been hit!');}

//i want to include the max num. for my math.random
//VOID function getRandomIntInclusive(min, max){min=Math.ceil(min); max= Math.floor(max); return Math.floor(math.random()
//VOID  * (max-min+1)+min);}
//VOID Math.ceil()rounds number up to next largest integer
//lets try (Math.random()*(max - min + 1))<<0...
//nop...Math.floor(Math.random()*(max-min +1))+min said to give a perfectly even distrubution for the roll
class  AlienShips {
    constructor(name){
        this.name = name;
        this.hull = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
        this.firepower = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
        //this.accuracy = Math.floor(Math.random() * (.8 - .6 + 1)) +.6;
        this.accuracy = Math.random() * (.8 - .6 + 1) +.6;

        this.health = true;
    }
    attack(ussSchwarz) {
        let myAttack = Math.random();
        let firePower = name.firepower;
        if (this.hull <= 0) {
            randomizer();
            newDiv(`A new alien ship ${RandomAlien.name}`);
            return;
        }   
        
        if (myAttack <= this.accuracy){
                console.log("%cCaptain we are hit!", "background:red; font-weight:bold; font-style:italic; color:white;");

                ussSchwarz.hull = ussSchwarz.hull - this.firepower;
                console.log(`%cCaptain we have ${ussSchwarz.hull} hull points remaining.`, "background:yellow; color:red");
                
            if (ussSchwarz.hull <= 0) {
                ussSchwarz.health = false;
                console.log("%cKaa-Boom...You Are Dead!", "color:red; background:black;");    
            }
        }else {
                console.log("%cThey just missed us Captain!", "color:blue;")
        }  
    }
}





const alien1 = new AlienShips('Reapers');
const alien2 = new AlienShips('Kal-El');
const alien3 = new AlienShips('Resolute');
const alien4 = new AlienShips('Hermes');
const alien5 = new AlienShips('Icarus II');
const alien6 = new AlienShips('Tardis');





 const alienArray = [alien1, alien2, alien3, alien4, alien5, alien6];
 let RandomAlien = alienArray
 

let battle = (user, alien) =>{
    console.log("%c This is brutal, I should of had another cup of coffee!", "color:cyan;")
    while(user.health && alien.health){
         console.log("%c Will we make it out of this loop alive!?" ,"background:cyan; ")
        user.attack(alien);
        if (alien.health){
            alien.attack(user);
        }
    }
}
while (alienArray.length > 0) {
    let enemy = alienArray.pop();
    battle (ussSchwarz, enemy);
}
//you need a loop here to pop and run the legenth of array
// battle(ussSchwarz,);
// for (alien1, alien2, alien3, alien4, alien5, alien6)



//notes
//the ships attack each other untill one of them has been destroyed
//use a loop or multi loops. avoid nesting loops if you can!!!

//do i need to call using console.log(obj.value); or just console.log(value);
//may need breaks 

//getting random number between 0(inclusive) and 1 (exclusive)
//function getRandom(){return Math.random();}

//getting a random number between 2 values
// function getRandomArbitrary (min, max){return Math.random() * (max - min) + min;}