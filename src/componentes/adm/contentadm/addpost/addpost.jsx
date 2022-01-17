import React, { useState } from "react";
import './addpost.css'
import { useDispatch } from "react-redux";
import { addpost } from "../../../../reducers/postReducer";
import { useSelector } from "react-redux";
import { Content } from "../../../content/contet";

export const Addpost = () => {
const dispatch = useDispatch()
const selecionar = useSelector(elemento => elemento.post)

const [conteudo,setconteudo] = useState()
const [titulo , settitulo] = useState()
const [autor, setautor] = useState()
const [imagem, setimage] = useState()
const [categoria, setcategoria] = useState()







const pegarConteudo = (e) => setconteudo(e.target.value)
const pegarTitulo = (e) => settitulo(e.target.value)
const pegaAutor = (e) => setautor(e.target.value)
const pegaCategoria = (e) => setcategoria(e.target.value)

const pegarimagem = (e) => {
    
  
   var form = new FormData();
form.append("image", e.target.files[0])
console.log(form)
    const xhttp = new XMLHttpRequest();
    xhttp.onload = () =>{
        const obj = JSON.parse(xhttp.responseText)
        
        setimage(obj.data.display_url)
    }
    
    xhttp.open('post', 'https://api.imgbb.com/1/upload?key=9e481d21945658079d809f93dcf0b98c')
    
    xhttp.send(form)
}

const data = new Date()
const enviarpost = (Event) =>{
   
  dispatch(addpost({
id:selecionar.length,
titulo:titulo,
conteudo:conteudo,
categoria:categoria,
imagem:imagem,
data:data.toLocaleDateString(),
autor:autor,

  }))


}

const novadata = () =>{
    console.log(selecionar)
}

    return (
        <div className="addPost">
            <h1>add post</h1>
            <input type='text' name="titulo" onChange={pegarTitulo} placeholder="titulo" className="inputtitulo" />
            <textarea id="textopost" onChange={pegarConteudo} placeholder="Add post" rows="4"></textarea>
            <input type='text' name="categoria" onChange={pegaCategoria} placeholder="categoria" className="inputcategoria" />
            <input type='file' onChange={pegarimagem} name='file' placeholder='enviar foto'/>
            <select name="usuarios" onChange={pegaAutor} id="usuarios">
            <option  > </option>
                <option  value="volvo">Volvo</option>
              
            </select>
            <input type="button" onClick={enviarpost} value="enviar" />
            <input type="button" onClick={novadata} value="novadata" />

            <Content/>
          
        </div>
    )

}