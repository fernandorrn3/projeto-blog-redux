import React from "react";
import './editpost.css';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { Editarpost } from "../../../../reducers/postReducer";
import { removePost } from "../../../../reducers/postReducer";
import { useState } from "react";
import { useEffect } from "react";
import Collapsible from 'react-collapsible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { faSortUp } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
const dataup = new Date().toLocaleDateString()
export const Editpost = () => {


    const selecionar = useSelector(state => state.post)

    const listaitem = selecionar.map((item) =>
        <Listaposts
            key={item.id}
            id={item.id}
            titulo={item.titulo}
            conteudo={item.conteudo}
            autor={item.autor}
            categoria={item.categoria}
            data={item.data}
            imagem={item.imagem}
            idbtn={item.id}
            titulotxt={item.titulo}
            conteudotxt={item.conteudo}
            imagetxt={item.imagem}
            categoriatxt={item.categoria}
        />

    )


    return (


        <div>


            {listaitem}




        </div>


    )
}



const Listaposts = (props) => {


    const dispatch = useDispatch()
    const [aberto, setaberto] = useState(true)
    const [classe, setclasse] = useState()
    const [editpost, seteditpost] = useState(true)
    const [id, setid] = useState(props.id)
    const [titulo, settitulo] = useState(props.titulo)
    const [conteudo, setconteudo] = useState(props.conteudo)
    const [categoria, setcategoria] = useState(props.categoria)
    const [autor, setautor] = useState(props.autor)
    const [imagem, setimagem] = useState(props.imagem)
    const [data, setdata] = useState(dataup)


    const selecionar = useSelector(state => state.post)

    const abriredit = (e) => {


        if (editpost) {
            seteditpost(false)


        } else {
            seteditpost(true)


        }
    }

    const salvaedit = () => {
        dispatch(Editarpost({
            id: id,
            titulo: titulo,
            conteudo: conteudo,
            autor: autor,
            categoria: categoria,
            imagem: imagem,
            data: data
        }))
    }

    const removerpost = () => {
        dispatch(removePost({
            id: id
        }))
    }

    const abrircolaps = () => {
        console.log(aberto)
        if (aberto) {
            setclasse('editposting')
            setaberto(false)
        } else {
            setclasse('editpostingaberto')
            setaberto(true)
        }
    }

    useEffect(() => {
        setclasse('editpostingaberto')
    }, [])

    const editarimagem = (e) => {
        const form = new FormData()
        form.append('image', e.target.files[0])
        const xhttp = new XMLHttpRequest()
        xhttp.onload = () => {

            const obj = JSON.parse(xhttp.responseText)
            setimagem(obj.data.url)




        }

        xhttp.open('post', 'https://api.imgbb.com/1/upload?key=9e481d21945658079d809f93dcf0b98c', true)
        xhttp.send(form)
    }

    const retorno = () => {
        console.log(selecionar)
    }

    return (
        <div className={'editpost'}>



            <Collapsible trigger={<Abre />} className="colapseedit" triggerWhenOpen={<Fecha />} onOpen={abrircolaps} onClose={abrircolaps}  >

                {editpost ? <div className={classe} id={props.id}>

                    <div className="title"> <h4>titulo</h4>   {props.titulo}</div>

                    <div className="title"><h4>conteudo</h4> {props.conteudo}</div>

                    <div className="autor"><h4>Autor</h4>{props.autor}</div>

                    <div className="categoria"><h4>Categproa</h4>{props.categoria}</div>

                    <div className="date"><h4>Data</h4>{props.data}</div>

                    <div className="image"><h4>imagem</h4><div className="imgedit"><img src={props.imagem} /></div></div>

                    <div className="grupobotaoeditar">
                        <div className="grupoeditardelete" >
                            <a href="#" onClick={removerpost}>
                                <FontAwesomeIcon className="delete" size="1x" icon={faTrashAlt}></FontAwesomeIcon>
                                Delete
                            </a>

                        </div>


                        <div className="grupoeditardelete" >
                            <a href="#" onClick={abriredit}>
                                <FontAwesomeIcon className="editar" size="1x" icon={faEdit}></FontAwesomeIcon>
                                Editar
                            </a>

                        </div>

                      
                    </div>
                </div> :

                    <div className={classe} >

                        <label><b>Edite o titulo</b></label><br />
                        <textarea className="campotextoedit" onChange={e => settitulo(e.target.value)}
                            defaultValue={props.titulotxt} />

                        <br /><label><b>Edite o conteudo</b></label> <br />
                        <textarea className="campotextoedit" onChange={e => setconteudo(e.target.value)}
                            defaultValue={props.conteudotxt} />

                        <br /> <label><b>Edite a categoria</b></label> <br />
                        <textarea className="campotextoedit" onChange={e => setcategoria(e.target.value)}
                            defaultValue={props.categoriatxt} />

                        <br /> <label><b>Edite a imagem</b></label> <br />
                        <input type={'file'} onChange={editarimagem} />

                        <br /> <label><b>Salvar</b></label> <br />

                        <input type={'button'} value={'salvar'} onClick={salvaedit} />
                        <input type={'button'} value={'voltar'} onClick={abriredit} />





                    </div>

                }




            </Collapsible>





        </div>
    )
}




const Abre = () => {
    return (
        <div className="botaoedit">
            <FontAwesomeIcon size="2x" icon={faSortDown}></FontAwesomeIcon>


        </div>


    )
}



const Fecha = () => {
    return (
        <div className="botaoedit">
            <FontAwesomeIcon size="2x" icon={faSortUp}></FontAwesomeIcon>


        </div>


    )
}