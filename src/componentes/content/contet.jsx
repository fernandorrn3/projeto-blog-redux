import React from "react";
import './content.css'
import { Coluna1 } from "./coluna1/coluna1";
import { Coluna2 } from "./coluna2/coluna2";
import { Coluna3 } from "./coluna33/coluna3";
import { Coluna4 } from "./coluna4/coluna4";
import { Coluna5 } from "./coluna5/coluna5";

import { useSelector, useDispatch } from 'react-redux'

export  const Content = () => {

   const posts = useSelector(state => state.post)
   const excluidos = useSelector(state => state.excluir)
   
 


     

   
   return (
      
      <div id='conteudo'>


        <React.Fragment>

            <Coluna1 />

         
             <Coluna2  />
             
         

            
             <Coluna3 key={3}/>
            
             
           
             <Coluna4 />
             
             
             <Coluna5 />

            </React.Fragment>



      </div>



   );
}