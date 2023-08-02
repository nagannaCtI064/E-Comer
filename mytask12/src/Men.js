import React from 'react'

import add1 from './add1.jpg'
import add2 from './add2.jpg'
import add3 from './add3.jpg'
import { Link } from 'react-router-dom'
import list from './Data'

const Men = ({item,size,handleClick}) => {
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
          <Link to='/'className='nav-link'>Home</Link>
        </li>
        <li class="nav-item">
        <Link to="/shop"className='nav-link'>Shop</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Cloths
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li class="dropdown-item">
        <a class="active" aria-current="page">Men's</a>
        </li>
            <li><Link to='/women'className='dropdown-item'>women</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link to='/kids'className='dropdown-item'>Kids</Link></li>
          </ul>
        </li>
        
       
      </ul>
     
      <form class="d-flex">
   
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
        <i class="fa-solid fa-cart-shopping" id='cart'> <span>{size}</span></i>       
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
    <div id='top' className='container'>
      <h4>Men's</h4>
      <button data-bs-toggle="collapse" data-bs-target="#demo1" className='btn btn-primary'>MORE</button>
    </div>
    <div className='container text-center' id='col1'>
      <div className='row'>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/track-pant/m/a/r/xxl-531-2-ftx-original-imaggutfgrvb5hpc.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/trouser/8/r/c/-original-imaggvptktxaztrw.jpeg?q=70"/>
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/l55nekw0/trouser/9/a/k/-original-imagfweyknpwmcdy.jpeg?q=70"/>
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/kyt0ya80/trouser/k/s/b/30-kctr-frml-99-pcbl-fubar-original-imagayjrcnbqgeyq.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>

      </div>
      
    </div>
    <br></br>
    <div className='collapse container text-center' id='demo1'>
      <div className='row'>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/trouser/5/9/v/34-eh-new-shot-elanhood-original-imagb644hgahg3ag-bb.jpeg?q=70"/>
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/trouser/p/v/r/30-elan-single-elanhood-original-imag3ebkwtzjdkry-bb.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/trouser/f/z/v/36-bk1cfta53gyh-berkshire-original-imagkxuaphfnzz4s.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/trouser/h/1/7/-original-imaggef42fxhkhzq.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>

      </div>
      
    </div>

    <br></br>
    <div id='top' className='container'>
      <h4>Kids</h4>
      <button data-bs-toggle="collapse" data-bs-target="#demo2" className='btn btn-primary'>MORE</button>
    </div>
    <div className='container text-center' id='col1'>
      <div className='row'>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/kl9rssw0/shoe/t/q/b/9-mrj1602-9-aadi-blue-original-imagyfhurgax7dwh.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
        <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/e/e/s/mrj1427-10-aadi-black-original-imaftndtevg6zfct-bb.jpeg?q=70" />
        <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/kzblocw0/shoe/l/i/f/9-crystal-13cblkrd-asian-black-original-imagbdaykm9wfnmz.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/8/n/y/-original-imagg7tfy6ywhzpc.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>

      </div>
      
    </div>
    <br></br>
    <div className='collapse container text-center' id='demo2'>
      <div className='row'>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/q/p/7/6-874840-labbin-maroon-original-imagmhfgjxqquzhd.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/s/c/y/10-mrj2028-10-aadi-black-original-imagh8ztuazpkcpm.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/y/u/o/-original-imaghvb3gmh7t9zg.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/4/a/m/-original-imagg7tf3a6mgyhf.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
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

export default Men
