import React from "react";
import './coluna1.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { Cards } from "../../../cards/cards";


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
 {data2.map(item =>(
    <Cards imagem={item.imagem} usuario={item.autor} data={item.data} conteudo={item.conteudo}/>
 ))}

       
      </div>
   )
}