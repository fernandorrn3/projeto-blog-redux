import React from "react";
import './coluna1.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export const Coluna1 = () => {
   

   const datastore = useSelector(state => state.post)
  

   
 



   const filtrar = datastore.filter(function (elemento) {
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

   

  
   const data2 = filtrar.slice(-2)

  
 
 
   

 


   return (
      <div className='coluna1'>

         <div className='noticia1'>

         <Link className="link" to={`/post/${data2[1].id}`}>
            <div className='cp22' style={{
               width: '100%',
               minHeight: '360px',
               backgroundImage: "url(" + process.env.PUBLIC_URL  + '/' + data2[1].imagem + ")", 
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat',
               backgroundSize: 'cover'
            }}>
               <div className='textoetitulocards'>
                
                 <div>
                 <h4>{data2[1].titulo.substr(0,20)}</h4>
                    <p>{data2[1].conteudo.substr(0,30)}</p>
                    </div> 
               </div>
            </div></Link>
            
         </div>
         <div className='noticia2'>
           <Link className="link" to={`/post/${data2[0].id}`}> <div className='cp23' style={{
               width: '100%',
               minHeight: '360px',
               backgroundImage: "url(" + process.env.PUBLIC_URL  + '/' + data2[0].imagem + ")",
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat',
               backgroundSize: 'cover'
            }}>
                <div className='textoetitulocards'>
                 <div>
                    <h4>{data2[0].titulo.substr(0,20)}...</h4>
                    <p>{data2[0].conteudo.substr(0,30)}</p>
                    </div> 
                 
               </div>
            </div></Link>
            
         </div>
      </div>
   )
}