const onbtn = document.getElementById('onbtn');
const offbtn = document.getElementById('offbtn');
const sp1 = document.getElementById('sp1');
const sp2 = document.getElementById('sp2');
const sp3 = document.getElementById('sp3');
const sound = new Audio('/img/fansound.mp3');
const fanimg = document.getElementById('fanimg');
const video = document.getElementById('myVideo');


const animate =(sec)=>{
    fanimg.style.animationDuration=sec+"s";
    sound.play();
    video.play();
    
}

onbtn.addEventListener('click',()=>{
   animate(0.5);
    
});
offbtn.addEventListener('click',()=>{
    
    
    
    animate(0);
    sound.pause();
    video.pause();
    
});
sp1.addEventListener('click',()=>{
    
    animate(1);
});
sp2.addEventListener('click',()=>{
    
    animate(0.5);
});
sp3.addEventListener('click',()=>{
    animate(0.4);
})
