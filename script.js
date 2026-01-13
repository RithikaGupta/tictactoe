let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn")
let newGameBtn = document.querySelector("#newGame-btn")
let message = document.querySelector("#message")
let msgContainer = document.querySelector(".msg-container")

let turnO = true //Player O

let winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8], 
]

newGame = ()=>{
    message.innerHTML = "";
    msgContainer.classList.add("hide");
    boxes.forEach(box => {
        box.innerHTML ="";
        box.disabled = false;
    })
}

boxes.forEach(box =>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerHTML = "O"
            turnO = false
        }
        else{
            box.innerHTML = "X"
            turnO = true
        }
        box.disabled = true
        checkWinnner();
    })
})

checkWinnner = () =>{
  for (let pattern of winningPattern){
     let pos1Val = boxes[pattern[0]].innerHTML
     let pos2Val = boxes[pattern[1]].innerHTML
     let pos3Val = boxes[pattern[2]].innerHTML
     if(pos1Val != "" && pos2Val !="" && pos3Val !=""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            msgContainer.classList.remove("hide");
            message.innerHTML = `Congratulations, winner is ${pos1Val}`;
        }
     }
  }
}


resetBtn.addEventListener("click" , () =>{
    boxes.forEach(box =>{
        box.innerHTML = "";
        box.disabled = false;
    })
})

newGameBtn.addEventListener("click" , ()=> newGame())