import React from 'react'
import add1 from './add1.jpg'
import add2 from './add2.jpg'
import add3 from './add3.jpg'

import shop from './shop.css'
import { Link } from 'react-router-dom'
import list from './Data'
const Shop = ({item,size,handleClick}) => {
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
        <a class="nav-link active" aria-current="page">Shop</a>
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
          <img src="https://rukminim1.flixcart.com/image/612/612/l3bx5e80/t-shirt/t/7/z/3xl-t414-as17ebmdnwh-eyebogler-original-imageh3xzgdaup9p.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/a/h/a/l-tsrt-301-reya-original-imagfzhqdudhhjzz.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/e/y/f/s-all-triangal-one-nb-nicky-boy-original-imaggc3vvguwtzfn.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/p/9/j/s-t593-blwh-eyebogler-original-imagh32ypfwbmdch.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>

      </div>
      
    </div>
    <br></br>
    <div className='collapse container text-center' id='demo1'>
      <div className='row'>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/c/2/g/s-tblwtrdrn-d27-tripr-original-imagkygkj9z5hphg.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/l3bx5e80/t-shirt/h/o/9/3xl-t414-as17mtdnwh-eyebogler-original-imageh3xzffmwazf.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/o/j/j/l-jc22-rn-fs-black-olv-never-jump-cuts-original-imaghcczhpzwkruh.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/l45xea80/shirt/v/e/t/38-men-regular-slim-fit-solid-button-down-collar-formal-shirt-original-imagf4mxnhanzdtn.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>

      </div>
      
    </div>
    {/* row 2 */}
    <br></br>
    <div id='top' className='container'>
      <h4>Kids</h4>
      <button data-bs-toggle="collapse" data-bs-target="#demo2" className='btn btn-primary'>MORE</button>
    </div>
    <div className='container text-center' id='col1'>
      <div className='row'>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/kids-ethnic-set/q/0/v/5-6-years-kids-ethnic-set-mehzin-original-imag74mekk7s32ca.jpeg?q=70"/>
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
        <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/kids-ethnic-set/r/q/t/4-5-years-coty-patiyala-dhoti-pant-set-svm-fashion-original-imagjwhkfq67xhuz.jpeg?q=70" />
        <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/kxtaxzk0/kids-ethnic-set/s/y/3/6-12-months-ng-227-yellow-16-new-gen-original-imaga6s6gz3xuwdt.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/kids-ethnic-set/h/s/a/9-10-years-gmd0016-blk-fashion-dream-original-imag89vcggfaxn44-bb.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>

      </div>
      
    </div>
    <br></br>
    <div className='collapse container text-center' id='demo2'>
      <div className='row'>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/kdnf98w0hlty2aw-0/kids-apparel-combo/4/d/z/4-5-years-nfgc06-ftc-fashions-original-imafumnqfjthrc5t.jpeg?q=70"/>
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/kids-apparel-combo/c/4/z/1-2-years-ht-830-18-hena-textile-original-imagayryqgzhaw8q.jpeg?q=70"/>
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/k6ci8i80/kids-apparel-combo/t/e/y/10-11-years-capfrock-ftc-fashions-original-imafkzcdegdyzkfy.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/kids-dress/d/5/4/10-11-years-blueribjacket-ftc-fashions-original-imafz5g6mffxnkd9-bb.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>

      </div>
      
    </div>
{/* row 3 */}
    <br></br>
    <div id='top' className='container'>
      <h4>Womens</h4>
      <button data-bs-toggle="collapse" data-bs-target="#demo3" className='btn btn-primary'>MORE</button>
    </div>
    <div className='container text-center' id='col1'>
      <div className='row'>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/kyj0vbk0/sari/t/j/q/8-9-years-kids-saree-101-g-stuff-fashion-unstitched-original-imagaqznfufrh3ca.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/kshtxu80/shopsy-sari/h/i/r/free-1077-red-dhnik-creation-unstitched-original-imag6fnkhgmmqzkx.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/sari/w/5/n/free-pattu-saree-ejoty-fashion-unstitched-original-imag4abzywzyk5ry-bb.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/kt7jv680/shopsy-sari/1/w/v/free-bfsr-091-dori-unstitched-original-imag6hnghjtpe58t.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>

      </div>
      
    </div>
    <br></br>
    <div className='collapse container text-center' id='demo3'>
      <div className='row'>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/kzfvzww0/gown/l/z/g/16-s-short-sleeve-stitched-gown-badami-ne-style-60-original-imagbg8m9dpz4wtw.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/kzfvzww0/gown/n/t/z/17-xl-short-sleeve-stitched-gown-rama-green-ne-style-60-original-imagbg8mwdhswgzh.jpeg?q=70"/>
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/kybvo280/gown/f/j/g/na-free-half-sleeve-semi-stitched-bolly-peach-zinariya-fab-na-original-imagah9kxkz4ghf8.jpeg?q=70" />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/gown/i/a/q/na-xl-full-sleeve-stitched-re-40-raiyani-enterprise-na-original-imagc5mtp4acxzat.jpeg?q=70" />
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
    </div>
  )
}

export default Shop
