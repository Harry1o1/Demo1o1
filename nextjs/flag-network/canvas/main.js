
const d = (e)=> {
    return document.querySelector(e);
}
const da = (e)=> {
    return document.querySelectorAll(e);
}

let canvas = d('#canvas-container'),
    body = d('body'),
    ctx = canvas.getContext('2d');

// console.log(ctx);    



canvas.addEventListener('click',()=>{
    // console.log('op');
})

// console.log(body.clientHeight);
// console.log(body.clientWidth);


// canvas.style.height = `${body.clientHeight}px`;
// canvas.style.width = `${body.clientWidth}px`;







// window.addEventListener('resize',()=>{
//     canvas.width=window.innerWidth;
//     canvas.height=window.innerHeight;
// })
ctx.fillStyle = 'white';
// ctx.fillRect(10,10,150,50);
ctx.strokeStyle='red';
ctx.lineWidth=20;
ctx.beginPath();
ctx.arc(100,0,50,0, Math.PI * 2);
ctx.stroke();



console.log(ctx);
