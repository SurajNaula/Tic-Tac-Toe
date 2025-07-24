let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let p = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container");

let turn0 = true;
let count = 0;

let winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetgame = ()=>{
  turn0 = true;
  enablebtn();
  msgcontainer.classList.add("hide");
  count = 0;
}

const drawgame = () =>{
  p.innerText = "game draw"
  msgcontainer.classList.remove("hide");
  disablebtn();
}

const enablebtn = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const disablebtn = () => {
  for (let box of boxes) {
    box.disabled = true;
    // box.innerText = "";
  }
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "0";
      box.style.color = "red";
      turn0 = false;
    } else {
      box.innerText = "X";
      box.style.color = "brown";
      turn0 = true;
    }
    box.disabled = true;
    count++;
   let iswinner = checkwinner();
    if(count === 9 && !iswinner){
      drawgame();
    }
  });
});

const showwinner = (winner) =>{

  p.innerText = `congratultions the winner is ${winner}`
  msgcontainer.classList.remove("hide");
  disablebtn(); 
}
const checkwinner = () => {
  for (let pattern of winpatterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //    boxes[pattern[0]].innerText,
    //    boxes[pattern[1]].innerText, 
    //    boxes[pattern[2]].innerText
      
    //   );
      let pos1val = boxes[pattern[0]].innerText;
      let pos2val = boxes[pattern[1]].innerText;
      let pos3val = boxes[pattern[2]].innerText;

      if(pos1val != "" && pos2val != "" && pos3val != "")
      {
        if(pos1val === pos2val && pos2val === pos3val){
          // console.log("winner" ,pos1val);
          showwinner(pos1val);
          return true;
        }
      }
 
  }
};

reset_btn.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame);