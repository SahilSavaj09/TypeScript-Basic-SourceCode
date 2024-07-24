let sportTwo: string[] = ["Golf", "Cricket", "Tennis"];
sportTwo.push("Baseball");
sportTwo.push("Football");

for(let tempSport of sportTwo){
    if(tempSport == "Cricket"){
        console.log(tempSport + " <- My Sport");
    }
    else{
        console.log(tempSport);
    }
}