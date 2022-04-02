
import Navbar from "./navbar";
import Footer from './footer';
import Link from 'next/link'
import Script from 'next/script'
import Head from 'next/head'
import Image from 'next/image'




// opbro🎉🎉🎉🎉😎😎😎😎
export default function Layout({ children }) {
  return (
    <>




          
          <div className="overlay" />
         
          {/* 
            
            <h1>Navbartop-Emmet</h1> 
            nav#pro_navbartop_container>ul#pnt-ul>li.pnt-li*4
            ul#ss-ul>li.ss-li#ss-li$*7>ion-icon[name="menu-outline"].ss-ic+a[href="#"]{item$}.ss-a
            */}
          <nav id="pro_navbartop_container">
            <ul id="pnt-ul">
              <li className="pnt-li" id="pnt-li1">
                <div id="pnt-it1" className="pnt-it">
                  <ion-icon name="menu-outline" id="pnt-in" />
                  <ion-icon name="close-outline" id="pnt-in" />
                </div>
                <div id="small-sidebar" className="close">
                  <ul id="ss-ul">
                    {/* <li id="searchbar-container">
                              
                              <ion-icon name="search-outline"></ion-icon>
                              <input type="search" name="Search" id="Search">
                              
                              
                          </li> */}
                    <li className="ss-li" id="ss-li1">
                      <ion-icon name="home-outline" />
                      <a href="#">Home</a>
                    </li>
                    <li className="ss-li" id="ss-li2">
                      <ion-icon name="cash-outline" />
                      <a href="#">Exchange</a>
                    </li>
                    <li className="ss-li" id="ss-li2">
                      <ion-icon name="diamond-outline" />
                      <a href="#">Nft</a>
                    </li>
                    <li className="ss-li" id="ss-li2">
                      <ion-icon name="analytics-outline" />
                      <a href="#">Stack</a>
                    </li>
                    <li className="ss-li" id="ss-li2">
                      <ion-icon name="egg-outline" />
                      <a href="#">Airdrop</a>
                    </li>
                    <li className="ss-li" id="ss-li3">
                      <ion-icon name="medal-outline" />
                      <a href="#">Ido-Event</a>
                    </li>
                    <li className="ss-li" id="ss-li4">
                      <ion-icon name="ribbon-outline" />
                      <a href="#">Ido</a>
                    </li>
                    <li className="ss-li" id="ss-li5">
                      <ion-icon name="game-controller-outline" />
                      <a href="#">GameFi</a>
                    </li>
                    <li className="ss-li" id="ss-li7">
                      <ion-icon name="sparkles-outline" />
                      <a href="#">Support Ukraine</a>
                    </li>
                    <div className="strat-line">
                      <li className="st st1">
                        <div className="st-main" id="st-m1">
                          <ion-icon name="list-outline" />
                          <a href="#">More</a>
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="st-toggle">
                          <a href="#">Twitter</a>
                          <a href="#">Discord</a>
                          <a href="#">Facebook</a>
                          <a href="#">Telegram</a>
                        </div>
                      </li>
                      <li className="st st2">
                        <div className="st-main" id="st-m2">
                          <ion-icon name="heart-outline" />
                          <a href="#">Favorite</a>
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="st-toggle">
                          <a href="#">Exchange</a>
                          <a href="#">Nft</a>
                          <a href="#">Airdrop</a>
                          <a href="#">Gamefi</a>
                        </div>
                      </li>
                      <li className="st st3">
                        <div className="st-main" id="st-m3">
                          <ion-icon name="book-outline" />
                          <a href="#">Docs</a>
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="st-toggle">
                          <a href="#">All</a>
                          <a href="#">Assigned to me</a>
                          <a href="#">Shared with me</a>
                          <a href="#">Private</a>
                        </div>
                      </li>
                      <li className="st st4">
                        <div className="st-main" id="st-m4">
                          <ion-icon name="bar-chart-outline" />
                          {/* <ion-icon name="list-outline"></ion-icon> */}
                          <a href="#">Analysis</a>
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="st-toggle">
                          <a href="#">Twitter</a>
                          <a href="#">Discord</a>
                          <a href="#">Facebook</a>
                          <a href="#">Telegram</a>
                        </div>
                      </li>
                      <li className="st st5">
                        <div className="st-main" id="st-m5">
                          <ion-icon name="cloud-upload-outline" />
                          {/* <ion-icon name="heart-outline"></ion-icon> */}
                          <a href="#">Uploads</a>
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="st-toggle">
                          <a href="#">Exchange</a>
                          <a href="#">Nft</a>
                          <a href="#">Airdrop</a>
                          <a href="#">Gamefi</a>
                        </div>
                      </li>
                      <li className="st st6">
                        <div className="st-main" id="st-m6">
                          <ion-icon name="library-outline" />
                          {/* <ion-icon name="bar-chart-outline"></ion-icon> */}
                          {/* <ion-icon name="book-outline"></ion-icon> */}
                          <a href="#">Library</a>
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="st-toggle">
                          <a href="#">All</a>
                          <a href="#">Assigned to me</a>
                          <a href="#">Shared with me</a>
                          <a href="#">Private</a>
                        </div>
                      </li>
                    </div>
                  </ul>
                </div>
              </li>
              <li className="pnt-li" id="pnt-li2">
                <div id="pnt-it2" className="pnt-it">
                  <ion-icon name="logo-google" />
                </div>
                {/* <Image srcset="../public/Google.png" src="../public/Google.png" alt="../public/Google.png"> */}
              </li>
              <li id="pnt_divider" />
              <li className="pnt-li" id="pnt-li4">
                <div id="pnt-it4" className="pnt-it">
                  <ion-icon name="search-outline" />
                </div>
              </li>
              <li className="pnt-li" id="pnt-li5">
                <div id="pnt-it5" className="pnt-it">
                  <ion-icon name="sunny-outline" />
                  {/* <ion-icon name="search-outline"></ion-icon> */}
                  <ion-icon name="moon-outline" />
                </div>
              </li>
              <li className="pnt-li" id="pnt-li6">
                <div className="btn btn-white" id="login-toggler">
                  connect
                </div>
              </li>
            </ul>
          </nav>
          <div id="login_wrapper" className="shadow-lg">
            <div id="login_header">
              <h5>Login with your wallet</h5>
              <div className="icon">
                <ion-icon name="close-outline" />
              </div>
              {/* <ion-icon name="close-outline"></ion-icon> */}
              {/* <ion-icon name="moon-outline"></ion-icon> */}
            </div>
            <div id="metamask_container" className="btn_login_metamask">
              <Image src="/metamask.png" alt="Metamask" height={48} width={48} />
              <div className="login-text">
                Metamask
              </div>
            </div>
            <div id="wallet-connect_container" className="btn_login_wallet-connect">
              <Image src="/wallet-connect.svg" alt="Wallet-connect" height={48} width={48} />
              <div className="login-text">
                Wallet-connect
              </div>
            </div>
          </div>
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          {/* Main */}
          <main>
            {/* ul#pf-ul$*4>li#pf-li$.pf-li*5>a[href="#"]{ item$ } */}
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            {children}
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            <footer>
              <ul id="pf-ul1">
                <h1>About us</h1>
                <div id="main-link1" className="main-links">
                  <li id="pf-li1" className="pf-li"><a href="#" className="pf-a"> Join a meetup </a></li>
                  <li id="pf-li2" className="pf-li"><a href="#" className="pf-a"> Ask a question</a></li>
                  <li id="pf-li3" className="pf-li"><a href="#" className="pf-a"> Help </a></li>
                </div>
              </ul>
              <ul id="pf-ul2">
                <h1>Pages</h1>
                <div id="main-link2" className="main-links">
                  <li id="pf-li1" className="pf-li"><a href="#" className="pf-a"> Airdrop </a></li>
                  <li id="pf-li2" className="pf-li"><a href="#" className="pf-a"> Nft </a></li>
                  <li id="pf-li3" className="pf-li"><a href="#" className="pf-a"> Gamefi</a></li>
                  <li id="pf-li4" className="pf-li"><a href="#" className="pf-a"> Stack </a></li>
                  <li id="pf-li5" className="pf-li"><a href="#" className="pf-a"> Exchange </a></li>
                </div>
              </ul>
              <ul id="pf-ul3">
                <h1>Whats new Events</h1>
                <div id="main-link3" className="main-links">
                  <li id="pf-li1" className="pf-li"><a href="#" className="pf-a"> Ido drop </a></li>
                  <li id="pf-li2" className="pf-li"><a href="#" className="pf-a"> Ido Events drop </a></li>
                  <li id="pf-li3" className="pf-li"><a href="#" className="pf-a"> Sales </a></li>
                </div>
              </ul>
              <ul id="pf-ul4">
                <h1>Join us</h1>
                <div id="main-link4" className="main-links">
                  <li id="pf-li1" className="pf-li"><a href="#" className="pf-a"> Twitter </a></li>
                  <li id="pf-li2" className="pf-li"><a href="#" className="pf-a"> Discord </a></li>
                  <li id="pf-li3" className="pf-li"><a href="#" className="pf-a"> Facebook </a></li>
                  <li id="pf-li4" className="pf-li"><a href="#" className="pf-a"> Skillshare </a></li>
                  <li id="pf-li5" className="pf-li"><a href="#" className="pf-a"> YouTube </a></li>
                </div>
              </ul>
              <div id="copyright">
                All rights reserved to  
              </div>
            </footer>
          </main>
        
        
        
        
        
        











   










































      {/* Testing🖖🖖🖖 */}
      
      
      <Script
        type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        strategy="beforeInteractive"
      />
      <Script
        nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        strategy="beforeInteractive"
      />
      
      <Script
        src="https://cdn.jsdelivr.net/gh/Harry1o1/Demo1o1/nextjs/flag-network/homepage/main.js"
        strategy="beforeInteractive"
      />
      
       
    <Head>
        <title>LetWorkBeDone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="stylesheet" href="https://unpkg.com/open-props"/>
        <link rel="stylesheet" href="https://unpkg.com/open-props/normalize.min.css"/>
        
        
    </Head>
    </>
  );
};





//       <Script
        // type="module" src="https://cdn.jsdelivr.net/gh/Harry1o1/Demo/nextjs/education-website/assets/js/script.js"
        // strategy="beforeInteractive"
    //   />