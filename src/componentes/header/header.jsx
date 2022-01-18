import React from "react";
import './header.css'
import Carousel from 'react-bootstrap/Carousel'
import { useSelector } from "react-redux";



import { Navecagao } from "../navbar/navegacao";


export const Header = () => {
  
 const post = useSelector(item => item.post).slice(-5)


console.log(post)

  return (
    <div >
      <Navecagao/>
<div className="slidercontent">

<div className="headerslider">
  <Carousel>
      {post.map(item => (
 <Carousel.Item>
 <img
   className="d-block w-100 imgslider"
   src={`./${item.imagem}`}
   alt="First slide"
  
   
 />
 <Carousel.Caption>
   <h3>{item.titulo.substr(0,20)}...</h3>
   <p>{item.conteudo.substr(0,30)}...</p>
 </Carousel.Caption>
</Carousel.Item>
      ))}  
 
  </Carousel> </div>

</div>
    
   
    </div>
  )
}

