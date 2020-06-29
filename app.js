window.addEventListener('load',(index)=>{
    const sounds=document.querySelectorAll('.sound');
    const pads=document.querySelectorAll('.pads div');   //gets pad and all its div inside
   const visual=document.querySelector(".visual");
   const color=[
    "#60d394",
    "#d36060",
    "#c460d3",
    "#d3d160",
    "#ac2020",
    "#ec08bb"
    
   ];
//gng with sound here.................
pads.forEach((pad, index)=>{
    pad.addEventListener('click', function(){
        sounds[index].currentTime=0;
sounds[index].play();
createBubbles(index);
});
});
//create the function that makes bubbles............
const createBubbles = index => {
    //creating bubbles
    const bubble=document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundcolor=color[index];
    bubble.style.animation='jump 1s ease';
    bubble.addEventListener("animationend",function(){
        visual.removeChild(this);
});

};
});
