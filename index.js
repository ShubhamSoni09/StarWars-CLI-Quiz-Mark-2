let readlineSync=require('readline-sync');
const chalk = require('chalk');
// =================global=========================
let score=0;
let wrong=0;

let high=[
  {user:'Google',score:10},
  {user:'Me',score:9}
]
// -------------intro part-------------------
console.log(chalk.magentaBright.bold("Hey there, This is Shubham.\nHope you are doing safe and are enjoying!.\n"))

let user_name=readlineSync.question(chalk.blueBright.bold.underline("What should I call you?-"))
if(user_name.length<1){
  user_name='Human with no name'
}
console.log(chalk.yellowBright.bold("\n Hey " +user_name.toUpperCase()+",\n\n This is a StarWars based CLI Quiz\n"))

console.log(chalk.greenBright("Here are the rules:\n1. Every correct answer adds one point to the score \n2. There is no penalty for wrong answers.\n3. There are 2 levels with 5 questions in each level. Answer atleast 4 correct on levelZero to reach Level1\n\nNOTE--This quiz is a two level play where if the user clears L1 then his name is replaced with current winner"))
// ===========levels using arrays and objects================
let levelZero=[
  {q:"\n1. Stawars franchise was created by?--",a:"george lucas"},
  {q:"2. In which year did the first Starwars film release?--",a:"1977"},
  {q:"3. In which Starwars flim did Emilia Clarke star--",a:"Solo"},
  {q:"4. Who was the first Skywalker?--",a:"Shmi skywalker"},
  {q:"5. What was the last Starwars film in theatres?--",a:"Rise of skywalker"}]

let levelOne=[
  {q:"\n6. Name of the latest starwars series?--",a:"Mandalorian"},
  {q:"7. Starwars has 3 triologies--YES or NO?",a:"YES"},
  {q:"8. What's the best Starwars vehicle?--",a:"Millennium Falcon"},
  {q:"9. Next Starwars film?--",a:"Rogue Squadron"},
  {q:"10. Upcoming starwars series?--",a:"Andor"}]
// ============output==================
var user_answer;
function game(question,answer){
  user_answer=readlineSync.question(question)
  while(user_answer.length<1){
    console.log(chalk.red("Please enter an answer."))
    user_answer=readlineSync.question(question)
  }
  
  if(user_answer.toUpperCase()===answer.toUpperCase()){
  console.log(chalk.bgGreen.black.bold(" Correct \n"))
  score++;
  }
  else{
    console.log(chalk.bgRed.white.bold("\n Wrong "))
    console.log(chalk.grey("Correct answer is--" +answer.toUpperCase() +"\n"))
    wrong++
  }
  
  console.log(chalk.yellowBright("current score--" +score+"\n"))
}
// ===================input=================
function on_level(level){
  for(var i=0;i<level.length;i++){
      let holder=level[i];
      game(holder.q,holder.a)
  }
}
// =============for final results===============
function result(level){
  console.log(chalk.blue("========\nTotal questions-"+(score +wrong)))
  console.log(chalk.blue("Ansered correct-"+score))
  console.log(chalk.blue('Ansered Wrong-'+ wrong+"\n========"))
  console.log("Highest score user--"+ high[0].user+"\nscore--"+high[0].score)
  console.log(chalk.yellowBright.bold("\nCONGRATULATIONS"))
  console.log("\nTo know more about STARWARS, visit")
  console.log(chalk.bgYellow.bold(" https://www.starwars.com/ "))
}
// ================function calls====================
on_level(levelZero)
// =========
if(score===levelZero.length-1){
  console.log(chalk.magentaBright.underline.bold("**You have been qualified to Level One**"))
  on_level(levelOne)
}
// ----==============================-------
for(let x=0;x<high.length;x++){
  if(score===(high[x].score)){
    console.log("\nWoah!!! you are really clever...you have been awarded the 1st position and will receive GC very soon")
    // =====this will replace the highest scorer
    high.splice(0, 0,{user:user_name,score:10})
    console.log(chalk.bgYellow.bold("\n\n NEW WINNER-- "+ high[0].user.toUpperCase() +" "))
    result(levelOne)
  }
  else if(score>=5 && score<high[x].score){
    console.log("\nOuhhhh!!! You were close, Practice more to qualify")
    result(levelOne)
  }
  else{
    console.log("You are now a part of the Backbenchers Club!")
    result(levelZero)
  }
  break
}
// -----------------HAPPY--ENDING-------------------------
