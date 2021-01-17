import React from 'react';
import './index.css';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import SignIn from './signin.js'
import Register from './register.js'

function App() {
  const openMenu=()=>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu=()=>{
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <BrowserRouter>
     <div id="top"/>
      <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <Link to="/">Z-Store</Link>
            </div>
            <div className="header-links">
                <a href="cart.html">
                    <img src="/Images/cart.png" style={{height:"30px", width:"30px"}}></img>
                </a>
                <Link to="/signin" >Signin</Link>

            </div>
        </header>
        <aside className="sidebar">
            <div style={{background:"black"}}>
                <button id="close" onClick={closeMenu}>
                    &#9776;
                </button>
                <h3>Welcome, Sign In</h3>
            </div>
            <div id="labelCat">
                <h2>Product Category</h2>
            </div><hr style={{border: "1px solid gray"}}/>

            <ul>
                <li>
                    <a href="Accessories.html">Accessories</a><hr/>
                </li>
                <li>
                    <a href="Camera.html">Camera</a><hr/>
                </li>
                <li>
                    <a href="Giftcard.html">Gift Card</a><hr/>
                </li>
                <li>
                    <a href="Mobile.html">Mobile</a><hr/>
                </li>
                <li>
                    <a href="Notebook.html">Note Book</a><hr/>
                </li>
                <li>
                    <a href="SpaceAgencies.html">Space Agencey</a>
                </li>
            </ul><hr style={{border: "1px solid gray"}}></hr>
            <div className="asideFooter">
                <h4>HELP AND SETTINGS</h4>
                <div className="asideHelp">
                    <h5>Language</h5>
                    <h5>Help</h5>
                    <h5>Sign In</h5>
                </div>
            </div>
        </aside>
        <main className="main">
            <div className="content">
            <Route path="/register" component={Register}/>   
             <Route path="/signin" component={SignIn}/>
             <Route path="/product/:id" component={ProductScreen}/>                
             <Route path="/" exact={true} component={HomeScreen}/>
            </div>
        </main>
        <div>
        <a href="#top"><div className="back2top">Back To Top</div></a>
        <footer class="footer">
            Contact: 01718697511<br/>
            Email: nomanfcb@gmail.com
        </footer>
        </div>
      </div>   
    </BrowserRouter> 
  );
}

export default App;
