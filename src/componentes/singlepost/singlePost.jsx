import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Navecagao } from "../navbar/navegacao";
import { useEffect } from "react";
import './singlePost.css'
import { NavItem } from "react-bootstrap";

export const Singlepost = () => {
  const imagem = React.createRef()
  let params = useParams();
  console.log(params)
  const post = useSelector(state => state.post).find(post => post.id == params.post)


 
  const postRecente = useSelector(state => state.post)


 const filtrar = postRecente.filter(function(elemento){
   return elemento
 })

  function toDate(dateStr) {
    
    var parts = dateStr.split("/");
   
    return new Date(parts[2], parts[1] - 1, parts[0]);
}


filtrar.sort(function (a, b) {
  const dateeA = new Date(toDate(a.data));
  const dateeB = new Date(toDate(b.data));
  return dateeA - dateeB;
})


const novaData = filtrar.slice(-5)
  
  const elementosbarra = novaData.map((item =>
    <div className="elementosbarrasingle">
<div><h4>{item.titulo}</h4></div>
<div><p>{item.conteudo}</p></div>
    </div>
    ))

 

  return (

    <div className="singlepost">
      <Navecagao />
      <div className="conteudosinglepost">
        <div className="imgsinglepost">
          <div  ref={imagem} style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/' +post.imagem})`,
            height:'400px',
            width:'100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}></div>
        </div>



        <div className="corposinglepost">
          <div className="conteudo">
        <div className="tituloconteudosingle"><h2>{post.titulo}</h2></div>
        <div className="paragrafosingle"><p>{post.conteudo}</p></div>
          </div>

          <div className="barra">
{elementosbarra}
          </div>
        </div>
      </div>

    </div>
  )
}