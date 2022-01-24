import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Navecagao } from "../navbar/navegacao";
import {SidebarPost} from './sidebarposts'
import './singlePost.css'


export const Singlepost = () => {
  const imagem = React.createRef()
  let params = useParams();
  console.log(params)
  const post = useSelector(state => state.post).find(post => post.id == params.post)



  




  return (

    <div className="singlepost">
      <Navecagao />
      <div className="conteudosinglepost">




        <div className="corposinglepost">
          <div className="imgsinglepost">
            <div ref={imagem} style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + '/' + post.imagem})`,
              height: '400px',
              width: '100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              objectFit: 'cover'
            }}></div>
          </div>
          <div className="conteudo">
            <div className="tituloconteudosingle"><h2>{post.titulo}</h2></div>
            <div className="paragrafosingle"><p>{post.conteudo}</p></div>
          </div>


        </div>
        <div className="barra">
         
             <SidebarPost/>
         
         
        </div>
      </div>

    </div>
  )
}