boxes = document.querySelectorAll(".box");
resetbtn = document.querySelector("#reset-btn");
newGameBtn = document.querySelector("#new-btn");
msgContainer = document.querySelector(".msg-container");
msg = document.querySelector("#msg");

turno = true;

winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,8],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turno){
            box.innerText = "O";
            turno = false;
        }else{
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

resetGame = () =>{
    turno = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes();
}

checkWinner = () => {
    for (let pattern of winPatterns) {
        
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click" , resetGame);
resetbtn.addEventListener("click" , resetGame);
