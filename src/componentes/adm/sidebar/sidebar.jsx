import React from "react";
import './sidebar.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
export const Sidebar = (barraadm) => {

    return (
        <div className={barraadm.barraadm}>

                <div className="gruposidebar1">
                <Link to="/:user/adm/addPost" className="linkaddpost">
                <div className="iconsidebar"><FontAwesomeIcon size="2x" icon={faPlusSquare}></FontAwesomeIcon></div>
                <div className="linksidebar"><p><b>Add Post</b></p></div>
                </Link>
                </div>

                <div className="gruposidebar2">
                <Link to="/:user/adm/editpost" className="linkaddpost">
                <div className="iconsidebar"><FontAwesomeIcon size="2x" icon={faEdit}></FontAwesomeIcon></div>
                <div className="linksidebar"><p><b>Editar Post</b></p></div>
                </Link>
                </div>

        </div>
    )
}