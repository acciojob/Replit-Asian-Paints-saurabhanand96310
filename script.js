// //your JS code here. If required.
// const blockInput = document.querySelector("#block_id");
// const colorInput = document.querySelector("#colour_id");  // Corrected the ID
// const colorbtn = document.querySelector("#change_button");
// const resetbtn = document.querySelector("#reset_button");
// const boxes = document.querySelectorAll(".colorBox");

// colorbtn.addEventListener("click", () => {
// 	const blockValue = blockInput.value;
// 	const colorValue = colorInput.value;

// 	for(let i=0;i<boxes.length;i++){
//         boxes[i].style.backgroundColor='transparent';
//     }
// 	// Loop through the boxes and change color for the selected block
// 	for (let i = 0; i < boxes.length; i++) {
// 		if (i + 1 == blockValue) {
// 			boxes[i].style.backgroundColor = `${colorValue}`;
// 		}
// 	}
// });

// // Reset button functionality to clear all colors
// resetbtn.addEventListener("click",()=>{
//     for(let i=0;i<boxes.length;i++){
//         boxes[i].style.backgroundColor='';
//     }
// })

let container = document.querySelector(".grid-container");
let submit = document.querySelector("#change_button");
let reset = document.querySelector("#reset_button");
for(let i=0; i<9; i++){
    let newdiv = document.createElement("div");
    newdiv.innerText = i+1;
    newdiv.className = "grid-item same";
    container.append(newdiv);
}
let items = document.querySelectorAll(".same");
let input = document.querySelector("#block_id");
let color = document.querySelector("#colour_id");
submit.addEventListener("click", changecolor);
function changecolor() {
    let gridnumber = input.value;
    items[gridnumber-1].style.backgroundColor = color.value;		
}
reset.addEventListener("click", resetColor);
function resetColor() {
    items.forEach(item => {
        item.style.backgroundColor = "transparent";
    });
}
