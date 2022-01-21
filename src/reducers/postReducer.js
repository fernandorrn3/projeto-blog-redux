import { createSlice } from '@reduxjs/toolkit'
import { Editpost } from '../componentes/adm/contentadm/editpost/editpost'
const fullData = new Date()

const initialState = [
    {
        id:0,
        titulo:'Melhores formas de aproveitar sua viagem de carro neste fim de ano',
        conteudo:'conteudo um',
        categoria:'trips',
        data:  '22/12/2021',
        autor:'marcelo',
        imagem:'layertrip1.png'
       
    },
    {
        id:1,
        titulo:'titulo dois',
        conteudo:'conteudo dois',
        categoria:'tech',
        data: '12/12/2021',
        autor:'fernando',
        imagem:'tecnologia33.jpg'
    },
    {
        id:2,
        titulo:'titulo treis',
        conteudo:'conteudo treis',
        categoria:'peoople',
        data: '11/02/2021',
        autor:'juliana',
        imagem:'layerpeople1.png'
    },
    {
        id:3,
        titulo:'titulo quatro',
        conteudo:'conteudo quatro',
        categoria:'nature',
        data: '05/12/2021',
        autor:'manel',
        imagem:'layernature1.png'
    },
    {
        id:4,
        titulo:'titulo cinco',
        conteudo:'conteudo cinco',
        categoria:'fashion',
        data: '08/12/2021',
        autor:'zeca',
        imagem:'layerfashion1.png'
    },
    {
        id:5,
        titulo:'titulo seis',
        conteudo:'conteudo seis',
        categoria:'peoople',
        data: '07/05/2021',
        autor:'jao',
        imagem:'layerpeople2.jpg'
    },
    {
        id:6,
        titulo:'titulo sete',
        conteudo:'conteudo sete',
        categoria:'trips',
        data: '12/08/2021',
        autor:'fernando',
        imagem:'layertrip2.png'
    },
    {
        id:7,
        titulo:'titulo oito',
        conteudo:'conteudo oito',
        categoria:'tech',
        data: '11/12/2021',
        autor:'mariana',
        imagem:'layerfashion1.png'
    },
    {
        id:8,
        titulo:'titulo nove',
        conteudo:'conteudo nove',
        categoria:'nature',
        data: '10/12/2021',
        autor:'fernando',
        imagem:'layernature2.jpg'
    },
    {
        id:9,
        titulo:'titulo dez',
        conteudo:'conteudo dez',
        categoria:'tech',
        data: '11/12/2021',
        autor:'joao',
        imagem:'layertech2.png'
    },
    {
        id:10,
        titulo:'titulo onze',
        conteudo:'conteudo onze',
        categoria:'nature',
        data: '12/12/2021',
        autor:'bruno',
        imagem:'layernature3.jpg'
    },
    {
        id:11,
        titulo:'titulo douze',
        conteudo:'conteudo douze',
        categoria:'trips',
        data: '04/12/2021',
        autor:'bruno',
        imagem:'layertrip2.png'
    },
    {
        id:12,
        titulo:'titulo treze',
        conteudo:'conteudo treze',
        categoria:'trips',
        data: '06/12/2021',
        autor:'bruno',
        imagem:'layertrip3.png'
    },

    {
        id:13,
        titulo:'titulo quatorze',
        conteudo:'conteudo quatorze',
        categoria:'animal',
        data:'07/12/2021',
        autor:'bruno viana',
        imagem:'layeranimals1.jpg'
    },
    {
        id:14,
        titulo:'titulo quinze',
        conteudo:'conteudo quinze',
        categoria:'animal',
        data:'11/12/2021',
        autor:'jessica lima',
        imagem:'layeranimals2.jpg'
    }
]




  const postReducer = createSlice({
    name:'post',
   
    initialState,
  reducers:{
 addpost(state,action){
     const data = {
         id:action.payload.id,
         autor:action.payload.autor,
         titulo:action.payload.titulo,
         conteudo:action.payload.conteudo,
         categoria:action.payload.categoria,
         imagem:action.payload.imagem,
         data:action.payload.data,
         
     }

     const newData = state.slice()
     newData.push(data)

     state = newData

     

     return newData
 },

 Editarpost(state,action){
console.log(action.payload.id)

state[action.payload.id] = action.payload



 },

 removePost (state,action){
    console.log(action.payload.id)
   return state.filter(function(item, index){
       return index !== action.payload.id
    })

 }

 
  }
   

})


export const {addpost,Editarpost,removePost} = postReducer.actions
export default  postReducer.reducer