let body = document.querySelector('body');
let menu_ic = document.querySelector('#pnt-it1');
let small_sidebar = document.querySelector('#small-sidebar');
let light = document.querySelector('#pnt-it5');
let login_toggler = document.querySelector('#login-toggler');
let login_container = document.querySelector('#login_wrapper');
let overlay = document.querySelector('.overlay');
let st = document.querySelectorAll('.st');
let st_tg1 = document.querySelector('#st-tg1');
let st_tg2 = document.querySelector('#st-tg2');
let st_tg3 = document.querySelector('#st-tg3');


/* Moralis init code */
const serverUrl = "https://a2pko6dyqtwq.usemoralis.com:2053/server";
const appId = "D0r1DA19TTZvr6CiWdB3sjDDE0Y71EFasRNLP12a";
Moralis.start({ serverUrl, appId });


// Metamask
// Moralis.authenticate().then(function (user) {
//     console.log(user.get('ethAddress'))
// })


/* Authentication code */
async function login_metamask() {
    let user = Moralis.User.current();
    if (!user) {
          
            const user = await Moralis.authenticate()
            .then(function(user) {
                console.log("logged in user:", user);
                console.log(user.get("ethAddress"));
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}
async function login_wallet_connect() {
    let user = Moralis.User.current();
    if (!user) {
            
            const user = await Moralis.authenticate({ provider: "walletconnect" })
            .then(function(user) {
                console.log("logged in user:", user);
                console.log(user.get("ethAddress"));
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}

async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
}


document.querySelector(".btn_login_metamask").onclick = login_metamask;
document.querySelector(".btn_login_wallet-connect").onclick = login_wallet_connect;










menu_ic.addEventListener('click', ()=>{
    
    menu_ic.classList.toggle('active');
    small_sidebar.classList.toggle('active');
    if (small_sidebar.classList.contains('close')) {
        small_sidebar.classList.remove('close')
        // console.log('All done!')
    }
    else{
        small_sidebar.classList.toggle('close')
        // console.log('Yeh baby!')
    }
})
st.forEach((small_sidebar)=>{
    small_sidebar.addEventListener('click',(e)=>{
        // console.log('op')
        small_sidebar.classList.toggle('active1o1');
        // if (small_sidebar.classList.contains('st1')){
        //     console.log("st1")
            
        // }
        // if (small_sidebar.classList.contains('st2')){
        //     console.log("st2")
            
        // }
        // if (small_sidebar.classList.contains('st3')){
        //     console.log("st3")
            
        // }
        
    })
})
light.addEventListener('click',()=>{
    // console.log('op');
    light.classList.toggle('active');
    body.classList.toggle('dark');
    
})
login_toggler.addEventListener('click',()=>{
    // console.log('op');
    login_container.classList.toggle('active');
    overlay.classList.toggle('active');
    
    if (login_container.classList.contains('active')) {
        login_toggler.innerText='cancel';
       
        console.log('hi')
    }
    else{
        
        login_toggler.innerText='connect';
        
    }
})
