import React from "react";
import { useSelector } from "react-redux";
import './coluna4.css';
import { Link } from "react-router-dom";
export const Coluna4 = () => {
   const data = useSelector(state => state.post)
   const idsexcluidos = useSelector(state => state.excluir)

   const data1 = data.filter(function (el) {
      return el
   })


   function toDate(dateStr) {
      var parts = dateStr.split("/");

      return new Date(parts[2], parts[1] - 1, parts[0]);
   }



   data1.sort(function compare(a, b) {
      const dateeA = new Date(toDate(a.data));
      const dateeB = new Date(toDate(b.data));
      return dateeA - dateeB;
   })




   const newdata = data1.slice(-11, -9)






   return (
      <div className='coluna4'>

         
      </div>
   )
}