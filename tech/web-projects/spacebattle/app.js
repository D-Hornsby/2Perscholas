
console.log('We are live.');

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

    attack: (alienShips) => {
        let myAttack = Math.random();
        let firePower = ussSchwarz.firepower;
            if (myAttack <= ussSchwarz.accuracy){
                console.log('Direct hit Captain!');

                alienShips.hull = alienShips.hull - ussSchwarz.firepower;
                console.log('Alien has ${enemy.hull} hull points remaining.');

            if (alienShips.hull <= 0) {
                ussSchwarz.victories += 1;
                //cl
                alienShips.health = false;
                console.log('Well done Captain, invaders distroyed!');    
            }
        }else {
                console.log('Attack failed!')
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
var alienShips = {
    hull: Math.floor(Math.random() * (6 - 3 + 1)) + 3,
    firepower: Math.floor(Math.random() * (4 - 2 + 1)) + 2,
    accuracy: Math.floor(Math.random() * (.8 - .6 + 1)) +.6, 

    health: true, 

    attack: (ussSchwarz) => {
        let myAttack = Math.random();
        let firePower = alienShips.firepower;
            if (myAttack <= alienShips.accuracy){
                console.log('Captain we are hit!');

                ussSchwarz.hull = ussSchwarz.hull - alienShips.firepower;
                console.log('Captain we have ${ussSchwarz.hull) hull points remaining.');
                
            if (ussSchwarz.hull <= 0) {
                ussSchwarz.health = false;
                console.log('Kaa-Boom...You Are Dead!');    
            }
        }else {
                console.log('Attack failed!')
        }  
    }
}

let battle = (ussSchwarz, alienShips) =>{
    while(ussSchwarz.health && alienShips.health){
        ussSchwarz.attack(alienShips);
        if (alienShips.health){
            alienShips.attack(ussSchwarz);
        }
    }
}

battle(ussSchwarz,alienShips);



//notes
//the ships attack each other untill one of them has been destroyed
//use a loop or multi loops. avoid nesting loops if you can!!!

//do i need to call using console.log(obj.value); or just console.log(value);
//may need breaks 

//getting random number between 0(inclusive) and 1 (exclusive)
//function getRandom(){return Math.random();}

//getting a random number between 2 values
// function getRandomArbitrary (min, max){return Math.random() * (max - min) + min;}