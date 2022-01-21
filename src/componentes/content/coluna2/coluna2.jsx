import React from "react";
import './coluna2.css'
import { useSelector, useDispatch } from 'react-redux';
import { Card2 } from "../../../cards2/card2";
import { Cards3 } from "../../../cards3/cards3";
import { Link } from "react-router-dom";

export const Coluna2 = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.post)
    const social = useSelector(state => state.excluir)
 



    const filtrar = data.filter(function (elemento) {
        return elemento
     })

     function toDate(dateStr) {
        var parts = dateStr.split("/");
        return new Date(parts[2], parts[1] - 1, parts[0]);
    }
  
     filtrar.sort(function compare(a, b) {
        const dateeA = new Date(toDate(a.data));
        const dateeB = new Date(toDate(b.data));
        return dateeA - dateeB;
     })

     const newDate = filtrar.slice(-3,-2)

     const newDate2 = filtrar.slice(-6,-3)
  
   

    
console.log(newDate2)
    
    



return (
    
    <div className='coluna2'>
   

   <div className="espacocard2">
       {newDate.map(item => (
 <Card2 imagem={item.imagem} autor={item.autor} data={item.data} titulo={item.titulo} categoria={item.categoria} id={item.id}/>
       ))}
  
  </div>

<div className="espacocard3">
{newDate2.map(item => (
    <Cards3 imagem={item.imagem} conteudo={item.conteudo} categoria={item.categoria}
     titulo={item.titulo} data={item.data} autor={item.autor} id={item.id}/>
))}
</div>
   
   </div>
   
        
 


)

    




}