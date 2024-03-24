let btn = document.querySelector(".themebutton");
btn.addEventListener("click",()=>{
 document.querySelector("body").classList.toggle("darkscreen");
 document.querySelector(".scoreboard").classList.toggle("score_darkscreen");
 document.querySelector("header").classList.toggle("header_darkscreen");
 document.querySelector("button").classList.toggle("btn_blck_scrn");
});
let box_text = document.querySelector(".box_text");
let user_win = document.querySelector("#user_score");
let count_user_win = 0;
let computer_win = document.querySelector("#computer_score");
let count_computer_win = 0;
let box_bg_clr = document.querySelector(".box_text");

// User choice
let rock = document.querySelector("#rock"); 
let paper = document.querySelector("#paper"); 
let scissor = document.querySelector("#scissor"); 
// Computers choice
const compchoice = ()=>{
   let value = ["rock","paper","scissor"];
   let rndIdx = Math.floor(Math.random()*3);
   return value[rndIdx];
};
let choice;
// If User Clicked Rock
rock.addEventListener("click",()=>{
    choice = "rock";
   let computerchoice =  compchoice();
   // Draw case
    if(choice === computerchoice){
    box_text.innerText = " Computer also chose rock it's Draw";
    }
   else{
      // Scissor Case
       if(computerchoice === "scissor"){
        box_text.innerText = "You win rock bitten scissor";
        count_user_win++;
        user_win.innerText = count_user_win ;
        box_bg_clr.style.backgroundColor = "#8df00c";
       }
       // Paper case
       else{
        box_text.innerText = "Computer win paper rapped rock";
        count_computer_win++;
        computer_win.innerText = count_computer_win;
        box_bg_clr.style.backgroundColor = "#e64b25";
       }
    }
});
// If User Clicked paper
paper.addEventListener("click",()=>{
    choice = "paper";
   let computerchoice =  compchoice();
   // Draw case
    if(choice === computerchoice){
    box_text.innerText = " Computer also chose paper it's Draw";
    }
   else{
      // Scissor Case
       if(computerchoice === "scissor"){
        box_text.innerText = "Computer win  scissor cutted paper";
        count_computer_win++;
        computer_win.innerText = count_computer_win;
        box_bg_clr.style.backgroundColor = "#e64b25";
       }
       // Rock case
       else{
        box_text.innerText = "You win paper rapped rock";
        count_user_win++;
        user_win.innerText = count_user_win;
        box_bg_clr.style.backgroundColor = "#8df00c";
       }
    }
});
// If User Clicked Scissors
scissor.addEventListener("click",()=>{
    choice = "scissor";
   let computerchoice = compchoice();
   // Draw case
    if(choice === computerchoice){
    box_text.innerText = " Computer also chose scissor it's Draw";
    }
   else{
      // Rock Case
       if(computerchoice === "Rock"){
        box_text.innerText = "Computer win rock bitten scissor";
        count_computer_win++;
        computer_win.innerText = count_computer_win;
        box_bg_clr.style.backgroundColor = "#e64b25";
       }
       // Paper case
       else{
        box_text.innerText = "You win scissor cutted paper";
        count_user_win++;
        user_win.innerText = count_user_win;
        box_bg_clr.style.backgroundColor = "#8df00c";
       }
    }
});
