import React from "react";
import { Navbar } from "../navbar/navbar";
import {Content} from '../content/contet';
import {Footer} from "../footer/footer";
import { Header } from "../header/header";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Cards } from "../../cards/cards";
export default function Expenses() {


    return (
      <React.Fragment>
          
<Header />
<Cards/>
<Content />
<Footer/>
      </React.Fragment>
    )
  }