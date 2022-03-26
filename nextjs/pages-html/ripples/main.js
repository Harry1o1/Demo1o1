console.log('Hello JavaScript');
let ripples = document.querySelectorAll('.ripple');
let r = document.querySelector(':root');


ripples.forEach(ripples=>{
    ripples.addEventListener('click',(e)=>{
        // console.log('op');
        let ripple_height = ripples.clientHeight;
        let ripple_width = ripples.clientWidth;
        
        let ripple_total_height = ripple_height * 4.5;
        let ripple_total_width = ripple_width * 4.5;
        // console.log(ripple_width);
        // console.log(ripple_height);
        
        
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        
        
        let ripple = document.createElement("span");
        r.style.setProperty('--ripple-height',`${ripple_total_height}px`);
        r.style.setProperty('--ripple-width',`${ripple_total_width}px`);
        
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        
        console.log(ripples);
        // ripples.classList.add('Gotha');
        ripples.appendChild(ripple);
        setTimeout(function() {
            ripple.remove();
        }, 1000); // 1second = 1000ms
        
    })
})
