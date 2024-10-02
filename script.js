//your JS code here. If required.
const blockInput = document.querySelector("#block_id");
const colorInput = document.querySelector("#colour_id");  // Corrected the ID
const colorbtn = document.querySelector("#change_button");
const resetbtn = document.querySelector("#Reset");
const boxes = document.querySelectorAll(".colorBox");

colorbtn.addEventListener("click", () => {
	const blockValue = blockInput.value;
	const colorValue = colorInput.value;

	for(let i=0;i<boxes.length;i++){
        boxes[i].style.backgroundColor='transparent';
    }
	// Loop through the boxes and change color for the selected block
	for (let i = 0; i < boxes.length; i++) {
		if (i + 1 == blockValue) {
			boxes[i].style.backgroundColor = `${colorValue}`;
		}
	}
});

// Reset button functionality to clear all colors
resetbtn.addEventListener("click",()=>{
    for(let i=0;i<boxes.length;i++){
        boxes[i].style.backgroundColor='transpatent';
    }
})
