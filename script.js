//your JS code here. If required.
const blockInput=document.querrySelector("#block_id");
const colorInput=document.querrySelector("#color_id");
const  colorbtn=document.querySelector("#change_button");
const resetbtn=document.querySelector("#Reset");
const boxs=document.querySelectorAll(".colorBox");

colorbtn.addEventListener("click",()=>{
	const blockValue=blockInput.value;
	const colorValue=colorInput.value;
	for(let i=0;i<boxs.length;i++){
		if(i+1===blockValue){
			boxs[i+1].style.backgroundColor=`${colorValue}`
		}
	}
})