import React, { useState }  from 'react'
import { Link } from 'react-router-dom'



import add1 from './add1.jpg'
import add2 from './add2.jpg'
import add3 from './add3.jpg'

import App from './App.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import list from './Data'


const Home = () => {
   const [warning, setWarning] = useState(false);
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleItemClick = (item) => {
    console.log("Item Name:", item.title);
    console.log("Item ID:", item.id);
    console.log("Item Price:", item.price);

    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });

    if (isPresent) {
      setWarning(true);
    } else {
      setCart([...cart, item]);
      setWarning(false);
    }
  };
    
  return (
    <div>
    

           <nav class="navbar navbar-expand-lg navbar-light bg-info fixed-top">
  <div class="container-fluid">
  <i class="fa-brands fa-btc" id='logo'></i><span>Cart</span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
        <Link to='/Shop'className='nav-link'>Shop</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Cloths
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to='/men'className='dropdown-item'>men</Link></li>
            <li><Link to='/women'className='dropdown-item'>women</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link to='/kids'className='dropdown-item'>Kids</Link></li>
          </ul>
        </li>
        
       
      </ul>
     
      <form class="d-flex">
   
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
        <Link to='/cart'><i class="fa-solid fa-cart-shopping" id='cart'> </i></Link>       
         <Link to='/Login'><button type='button'className='btn btn-danger text-white '>Login</button></Link> 
      </form>
      
      
      
        
    </div>
  </div>
</nav>
<br></br> <br></br>
<header>
      <br></br>
      <div className='container-fluid' id='scroller'>
        <div id="demo" class="carousel slide" data-bs-ride="carousel">


<div class="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src={add1} alt="Los Angeles" class="d-block w-100"/>
  </div>
  <div class="carousel-item">
    <img src={add2}  alt="Chicago" class="d-block w-100"/>
  </div>
  <div class="carousel-item">
    <img src={add3}  alt="New York" class="d-block w-100"/>
  </div>
</div>

<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div>
    </div>
    </header>
    <br></br>

     <div className='container text-center' id='col1'>
      <div className='row'>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/kids-ethnic-set/b/b/f/6-7-years-bumblebee-ftc-fashions-original-imag4qyj7y6qszke-bb.jpeg?q=70"/>
          <button className='btn btn-success' onClick={() => handleItemClick()}>

</button>

        </div>
        <div className='col-md-3'>
        <img src="https://rukminim1.flixcart.com/image/612/612/j1s67ww0/kids-ethnic-set/y/c/q/18-24-months-black-beige-arm001-ftc-bazar-original-imaet9ygaez5egzw.jpeg?q=70" />
        <button className='btn btn-success'onClick={()=>handleItemClick()}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/kyxb9u80/kids-ethnic-set/e/e/v/2-3-years-ascut-kl-collection-original-imagb253phzzfbhc.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleItemClick()}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/kids-t-shirt/n/t/f/10-11-years-nsp-2009-red-ieshne-lifestyle-original-imaghmxyjtkvgn9z.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleItemClick()}>$ 360</button>
        </div>

      </div>
      
</div>
<br></br>
<div className='container text-center' id='col1'>
      <div className='row'>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/kp8ntzk0/dress/r/i/z/s-aa-0119-boho-long-dress-aayu-original-imag3ghzyktnj3bz.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleItemClick()}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/kpwybgw0/top/i/p/m/m-13601292-roadster-original-imag4fd3zyaqrk96.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleItemClick()}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/dress/c/6/z/xs-pw320-purshottam-wala-original-imagm5xzsmbf65sv.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleItemClick()}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/dress/u/3/y/xs-pw367-purshottam-wala-original-imagm8fdszwybabe.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleItemClick()}>$ 360</button>
        </div>

      </div>
      </div>
      <br></br>
      <div className='container text-center' id='col1'>
      <div className='row'>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/t/k/o/xxs-t653-cgblwh-eyebogler-original-imaghyjvdx4hy98d.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleItemClick()}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/k4px6kw0/t-shirt/n/h/t/m-707-black-london-hills-original-imafnkajgdc5yyag.jpeg?q=70"/>
          <button className='btn btn-success'onClick={()=>handleItemClick()}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/t/q/i/m-db1024-37-3bros-original-imagz8zjz7t7sqyb.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleItemClick()}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/k7tdj0w0/t-shirt/h/f/h/m-mtsh-306b-999-the-dry-state-original-imafpyqbdkvwdfqb.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleItemClick()}>$ 360</button>
        </div>
      
      </div>
      
    </div>
    <br></br>

  <footer className='container-fluid bg-dark p-5'>
  <div className='container'>
  <div className='row'>
    <div className='col-md-4' id='subscribe'>
      <h4 className='text-white'>Sbscribe to get latest notifications</h4>
      <form action='' method='get'>
        <label className='text-white' >Email:</label>
        <input type={Text}/> <br></br>
        <input type={'submit'} id='submit' />

      </form>
      
    </div>
    
    <div className='col-md-4 text-center' id='social-media'>
      <h4>Connect With Us</h4>
    <div id='twitter' className=''>
    <button type='button' className='btn btn-primary'><i class="fa-brands fa-twitter"></i></button>
    <a href='#'> twitter</a>
    </div>
    <br></br>
    <div id='instagram'>
    <button type='button' className='btn btn-danger'><i class="fa-brands fa-instagram"></i></button>
    <a href='#'>Instagram</a>
    </div>
    <br></br>
    <div id='facebook'>
    <button className='btn btn-primary'><i class="fa-brands fa-facebook"></i></button>
    <a href='#'>Facebook</a>
    </div>
    </div>
    <div className='col-md-4 ' id='address'>
    <h3>Registered Office Address:</h3>
    <p>Flipkart Internet Private Limited,

Buildings Alyssa, Begonia &

Clove Embassy Tech Village,

Outer Ring Road, Devarabeesanahalli Village,

Bengaluru, 560103,

Karnataka, India

CIN : U51109KA2012PTC066107

Telephone: 044-45614700</p>
  </div>
  </div>
  
  </div>
  


  </footer>
  <br></br>
</div>

  )
}

export default Home
