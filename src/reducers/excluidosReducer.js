import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
const initialState = [
  
    ]
    
const idExcluidos = createSlice({
    name:'excluidos',
    initialState,

    reducers:{
        excluirid(state ,action){
       const ids = action.payload
      
       const newState = state.slice();
       
       newState.push(ids);
       state = newState
     
       return newState;
       
        },

        atualizaexcludeid(state,action){
         
          
        }
    }

})


export const  {excluirid,atualizaexcludeid} = idExcluidos.actions

export default  idExcluidos.reducer