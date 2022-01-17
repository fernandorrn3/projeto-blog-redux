import React from "react"
import './navegacao.css'
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



export const Navecagao = ()=>{
const datas = useSelector(state => state.post)


const ids = datas.map(o => o.categoria)



const filtro2 = ids.filter(function(item,index){
  return ids.indexOf(item) === index
})


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand ><Link className="linksbrand" to={'/'}> Personal blog</Link></Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="ms-auto">
            {filtro2.map(item =>(
           <Nav.Link  > <Link className="linkscategoria" to={`/categoria/${item}`}>{item}</Link></Nav.Link>
            ))}
            
           
          </Nav>
        
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}