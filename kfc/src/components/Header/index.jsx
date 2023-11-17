import React from 'react'
import logo from '../assets/image/kfcLogo.svg'
import header from '../Header/header.css'
import { Heading, Button, Box,Text, Center} from '@chakra-ui/react'
// import findImg from '../assets/image/vector2.svg'
import Menu from '../Menu'
const Header = () => {
  return (
    <div>
    <div className="location">
        <p><i class="bi bi-geo-alt-fill"></i> Allow location access for local store menu and promos<a style={{backgroundColor:"black",marginLeft:"8px", color:"white", borderRadius:"85px"}} href="">Set Location</a></p>
        </div>
    <hr/> 
    <div className="headerWrapper">
        <div className="logo">
            <a href="">
            <img src={logo} alt="logo"/>
            </a>
            </div>
            <div className="tag">
            <ul>
                <li><a href="">Menu</a></li>
                <li><a href="">Deals</a></li>
            </ul>
        
        </div>
        
       
        <div className="auth-link">
            <ul>
                <li><i class="bi bi-person-circle"></i><a href="">SignIn</a></li>
                <li style={{ margin: "0 0 0 0"}}><a href="">Rs0.00</a></li>
                <li style={{ margin: "0 0 0 0"}}><a href=""><img style={{width:"15px", display:"flex",justifyContent:"flex-start"}} src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQAwHa1Q955ajLdgVxAI0AZKfcGP81nckbIUPKRizsypEc9suRp"alt="cart"/></a></li>
            </ul>
            
        </div>

    </div> 

{/* <nav class="navbar sticky-top navbar-light bg-light">
  <div class="container" fontSize="5px">
    <a class="navbar-brand" href="#">
      <img src={logo} alt="kfc" width="60" height="24"/>
    </a>
    <ul className="tag">
    <li><a class="navbar-menu" href="">
      Menu
    </a></li>
    <li><a class="navbar-rewards" href="">
      Rewards
      </a></li>
      <li> <a class="navbar-career" href="">
      Career
    </a></li>
    <li><a class="navbar-merch" href="">
      Merch
    </a></li>
    <li><a class="navbar-find" href="">
      Find a KFC
      <img src={findImg} alt="kfc" width="5" height="2"/>
    </a></li> */}

    {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      </ul>
   
  </div> */}

       
{/* </nav> */}

    <Box maxW='100%' m='0' p='0'>
  
  <Text p='4px' fontSize='7px'bg='black'color='white' textAlign='center'>
  <i style={{color:"rgb(228,0,43)"}} class="bi bi-geo-alt-fill"></i>
    Start an Order for Pickup Or Delivery
  </Text>
</Box>

    </div>
    
  )
}


export default Header