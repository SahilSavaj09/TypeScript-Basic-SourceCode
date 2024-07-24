let sportOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

for(let i = 0; i < sportOne.length; i++){
    console.log(sportOne[i]);
}

// Let's use the simplified for loop and condation

for(let tempSport of sportOne){
    if(tempSport == "Cricket"){
        console.log(tempSport + " <- My favorite!");
    }
    else{
        console.log(tempSport);
    }
}
