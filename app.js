let raceNumber = Math.floor(Math.random() * 1000); 
let early = false;
let age = 18;
if (age > 18 && early) {
  raceNumber + 1000;
}
if (age > 18 && early) {
  console.log(`Your race number ${raceNumber} start\'s at 9:30`);
} else if(age > 18 && !early) {
  console.log(`Your race number ${raceNumber} start\'s at 11:00`);
}
if (age < 18) {
  console.log(`Your race number ${raceNumber} start\'s at 12:30`);
} else {
  console.log(`Your race number ${raceNumber} start\'s at 10:30`);
}
