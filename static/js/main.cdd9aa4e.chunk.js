(this["webpackJsonpblog-redux"]=this["webpackJsonpblog-redux"]||[]).push([[0],{59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},71:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){"use strict";c.r(t);var a=c(1),i=c.n(a),n=c(20),o=c.n(n),s=(c(59),c(60),c(61),c(62),c(5)),r=c(15),d=c(9),j=c(13),l=(c(71),c(0)),u=function(e){var t=Object(s.c)((function(e){return e.post}));console.log(t);return Object(l.jsxs)("div",{className:"cardscontent",children:[Object(l.jsx)("div",{className:"cardimg",children:Object(l.jsx)(j.b,{className:"links",to:"/post/"+e.id,children:Object(l.jsx)("img",{src:"".concat("/projeto-blog-redux/"+e.imagem),style:{width:"100%",height:"100%",objectFit:"cover"}})})}),Object(l.jsxs)("div",{className:"infoscards",children:[Object(l.jsxs)("div",{className:"infocarduser",children:[Object(l.jsx)(r.a,{icon:d.h}),Object(l.jsx)("span",{children:e.usuario})]}),Object(l.jsxs)("div",{className:"infocarddata",children:[Object(l.jsx)(r.a,{icon:d.b}),Object(l.jsx)("span",{children:e.data})]})]}),Object(l.jsx)("div",{className:"conteudocard",children:Object(l.jsx)("p",{children:e.conteudo})})]})},b=function(){var e=Object(s.c)((function(e){return e.post})).filter((function(e){return e}));function t(e){var t=e.split("/");return new Date(t[2],t[1]-1,t[0])}e.sort((function(e,c){return new Date(t(e.data))-new Date(t(c.data))}));var c=e.slice(-2);return Object(l.jsx)("div",{className:"coluna1",children:c.map((function(e){return Object(l.jsx)(u,{imagem:e.imagem,usuario:e.autor,data:e.data,conteudo:e.conteudo,id:e.id})}))})},x=(c(73),c(74),function(e){return Object(l.jsx)("div",{className:"cards2",children:Object(l.jsxs)("div",{className:"contentimgcard2",children:[Object(l.jsx)("div",{children:Object(l.jsx)(j.b,{className:"links",to:"/post/"+e.id,children:Object(l.jsx)("img",{src:"".concat("/projeto-blog-redux/"+e.imagem),style:{width:"100%",height:"100%",objectFit:"cover",webkitBorderRadius:"10px 10px 10px 10px",mozBorderRadius:"10px 10px 10px 10px",borderRadius:"10px 10px 10px 10px"}})})}),Object(l.jsxs)("div",{className:"noticiaimagemcima",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(r.a,{icon:d.h}),Object(l.jsx)("span",{children:Object(l.jsx)("b",{children:e.autor})})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(r.a,{icon:d.b}),Object(l.jsx)("span",{children:Object(l.jsx)("b",{children:e.data})})]})]}),Object(l.jsxs)("div",{className:"noticiaimagembaixo",children:[Object(l.jsx)("div",{children:Object(l.jsx)("span",{children:Object(l.jsx)("b",{children:e.categoria})})}),Object(l.jsx)("div",{children:Object(l.jsx)("h2",{children:e.titulo})})]})]})})}),O=(c(75),function(e){return Object(l.jsxs)("div",{className:"contentcard3",children:[Object(l.jsx)("div",{className:"imgcard3",children:Object(l.jsx)(j.b,{className:"links",to:"/post/"+e.id,children:Object(l.jsx)("img",{src:"".concat("/projeto-blog-redux/"+e.imagem),style:{width:"100%",height:"100%",objectFit:"cover",webkitBorderRadius:"10px 10px 10px 10px",mozBorderRadius:"10px 10px 10px 10px",borderRadius:"10px 10px 10px 10px"}})})}),Object(l.jsxs)("div",{className:"conteudocard3",children:[Object(l.jsx)("div",{className:"categoriacard3",children:Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:Object(l.jsx)("b",{children:e.categoria})})})}),Object(l.jsxs)("div",{className:"titulocard3",children:[Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:e.titulo})}),Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:e.conteudo})})]}),Object(l.jsxs)("div",{className:"infocards3",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(r.a,{icon:d.h}),Object(l.jsx)("span",{children:e.autor})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(r.a,{icon:d.b}),Object(l.jsx)("span",{children:e.data})]})]})]})]})}),m=function(){Object(s.b)();var e=Object(s.c)((function(e){return e.post})),t=(Object(s.c)((function(e){return e.excluir})),e.filter((function(e){return e})));function c(e){var t=e.split("/");return new Date(t[2],t[1]-1,t[0])}t.sort((function(e,t){return new Date(c(e.data))-new Date(c(t.data))}));var a=t.slice(-3,-2),i=t.slice(-6,-3);return console.log(i),Object(l.jsxs)("div",{className:"coluna2",children:[Object(l.jsx)("div",{className:"espacocard2",children:a.map((function(e){return Object(l.jsx)(x,{imagem:e.imagem,autor:e.autor,data:e.data,titulo:e.titulo,categoria:e.categoria,id:e.id})}))}),Object(l.jsx)("div",{className:"espacocard3",children:i.map((function(e){return Object(l.jsx)(O,{imagem:e.imagem,conteudo:e.conteudo,categoria:e.categoria,titulo:e.titulo,data:e.data,autor:e.autor,id:e.id})}))})]})},p=(c(76),function(){Object(s.b)();var e=Object(s.c)((function(e){return e.post})),t=(Object(s.c)((function(e){return e.excluir})),e.filter((function(e){return e})));function c(e){var t=e.split("/");return new Date(t[2],t[1]-1,t[0])}t.sort((function(e,t){return new Date(c(e.data))-new Date(c(t.data))}));var a=t.slice(-9,-3),i=a.slice(-3),n=a.slice(-6,-3),o=i.map((function(e){return Object(l.jsx)("div",{className:"columnnoticia3",children:Object(l.jsx)(u,{imagem:e.imagem,usuario:e.autor,data:e.data,conteudo:e.conteudo})})})),r=n.map((function(e){return Object(l.jsx)("div",{className:"columnnoticia3",children:Object(l.jsx)(u,{imagem:e.imagem,usuario:e.autor,data:e.data,conteudo:e.conteudo,id:e.id})})}));return Object(l.jsxs)("div",{className:"coluna3",children:[Object(l.jsx)("div",{className:"coluna33",children:o}),Object(l.jsx)("div",{className:"coluna35",children:r})]})}),h=(c(77),function(){var e=Object(s.c)((function(e){return e.post})),t=(Object(s.c)((function(e){return e.excluir})),e.filter((function(e){return e})));function c(e){var t=e.split("/");return new Date(t[2],t[1]-1,t[0])}t.sort((function(e,t){return new Date(c(e.data))-new Date(c(t.data))}));t.slice(-11,-9);return Object(l.jsx)("div",{className:"coluna4"})}),g=(c(78),function(){return Object(l.jsx)("div",{className:"coluna5",children:Object(l.jsx)("div",{className:"newcaster",style:{width:"100%",minHeight:"317px",backgroundImage:"url(/projeto-blog-redux/Rectangle4.png)",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:Object(l.jsxs)("div",{className:"newcastertextos",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"ola mundo"})}),Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:"is simply dummy text of the printing and typesetting industry."})})]})})})}),v=function(){Object(s.c)((function(e){return e.post})),Object(s.c)((function(e){return e.excluir}));return Object(l.jsx)("div",{id:"conteudo",children:Object(l.jsxs)(i.a.Fragment,{children:[Object(l.jsx)(b,{}),Object(l.jsx)(m,{}),Object(l.jsx)(p,{},3),Object(l.jsx)(h,{}),Object(l.jsx)(g,{})]})})},f=(c(79),function(){return Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsx)("p",{children:"is simply dummy text of the printing and typesetting industry."}),Object(l.jsx)("p",{children:"Footer do blog "})]})}),N=(c(80),c(46)),y=(c(81),c(99)),k=c(98),w=c(100),S=(c(82),function(){var e=Object(s.c)((function(e){return e.post})).map((function(e){return e.categoria})),t=e.filter((function(t,c){return e.indexOf(t)===c}));return Object(l.jsx)(y.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(l.jsxs)(k.a,{children:[Object(l.jsx)(y.a.Brand,{children:Object(l.jsx)(j.b,{className:"linksbrand",to:"/",children:" Personal blog"})}),Object(l.jsx)(y.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(l.jsx)(y.a.Collapse,{id:"responsive-navbar-nav",children:Object(l.jsx)(w.a,{className:"ms-auto",children:t.map((function(e){return Object(l.jsxs)(w.a.Link,{children:[" ",Object(l.jsx)(j.b,{className:"linkscategoria",to:"/categoria/".concat(e),children:e})]})}))})})]})})}),z=function(){var e=Object(s.c)((function(e){return e.post})).slice(-5);return console.log(e),Object(l.jsxs)("div",{children:[Object(l.jsx)(S,{}),Object(l.jsx)("div",{className:"slidercontent",children:Object(l.jsxs)("div",{className:"headerslider",children:[Object(l.jsx)(N.a,{children:e.map((function(e){return Object(l.jsxs)(N.a.Item,{children:[Object(l.jsx)("img",{className:"d-block w-100 imgslider",src:"".concat("/projeto-blog-redux/"+e.imagem),alt:"First slide"}),Object(l.jsxs)(N.a.Caption,{children:[Object(l.jsxs)("h3",{children:[e.titulo.substr(0,20),"..."]}),Object(l.jsxs)("p",{children:[e.conteudo.substr(0,30),"..."]})]})]})}))})," "]})})]})};function D(){return Object(l.jsxs)(i.a.Fragment,{children:[Object(l.jsx)(z,{}),Object(l.jsx)(v,{}),Object(l.jsx)(f,{})]})}var C=c(3),F=(c(85),c(86),function(e){return Object(l.jsxs)("div",{className:e.barraadm,children:[Object(l.jsx)("div",{className:"gruposidebar1",children:Object(l.jsxs)(j.b,{to:"/:user/adm/addPost",className:"linkaddpost",children:[Object(l.jsx)("div",{className:"iconsidebar",children:Object(l.jsx)(r.a,{size:"2x",icon:d.d})}),Object(l.jsx)("div",{className:"linksidebar",children:Object(l.jsx)("p",{children:Object(l.jsx)("b",{children:"Add Post"})})})]})}),Object(l.jsx)("div",{className:"gruposidebar2",children:Object(l.jsxs)(j.b,{to:"/:user/adm/editpost",className:"linkaddpost",children:[Object(l.jsx)("div",{className:"iconsidebar",children:Object(l.jsx)(r.a,{size:"2x",icon:d.c})}),Object(l.jsx)("div",{className:"linksidebar",children:Object(l.jsx)("p",{children:Object(l.jsx)("b",{children:"Editar Post"})})})]})})]})}),R=(c(87),c(4)),P=function(e){return Object(l.jsx)("div",{className:e.conteudo,children:Object(l.jsx)(R.a,{})})},E=function(){var e=Object(a.useState)(!1),t=Object(C.a)(e,2),c=t[0],i=t[1],n=Object(a.useState)("conteudoadm"),o=Object(C.a)(n,2),s=o[0],j=o[1],u=Object(a.useState)("sidebar"),b=Object(C.a)(u,2),x=b[0],O=b[1],m=Object(a.useState)("botao"),p=Object(C.a)(m,2),h=p[0],g=p[1],v=Object(a.useState)(),f=Object(C.a)(v,2);f[0],f[1],window.location.pathname.includes("adm");return Object(l.jsxs)("div",{className:"adm",children:[Object(l.jsx)("div",{children:Object(l.jsx)(F,{barraadm:x})}),Object(l.jsxs)("div",{className:"conteudobtncontent",children:[Object(l.jsx)("div",{className:"botaoabrir",children:Object(l.jsx)(r.a,{className:h,onClick:function(){i(!c),c?(j("conteudoadm"),O("sidebar"),g("botao"),console.log(c)):(j("conteudoadm2"),O("sidebaradm2"),g("botao2"),console.log(c))},size:"2x",icon:d.a})}),Object(l.jsx)(P,{conteudo:s})]})]})},q=(c(88),c(34)),B=(c(89),c(54)),L=c.n(B),I=(new Date).toLocaleDateString(),T=function(){var e=Object(s.c)((function(e){return e.post})).map((function(e){return Object(l.jsx)(A,{id:e.id,titulo:e.titulo,conteudo:e.conteudo,autor:e.autor,categoria:e.categoria,data:e.data,imagem:e.imagem,idbtn:e.id,titulotxt:e.titulo,conteudotxt:e.conteudo,imagetxt:e.imagem,categoriatxt:e.categoria},e.id)}));return Object(l.jsx)("div",{children:e})},A=function(e){var t=Object(s.b)(),c=Object(a.useState)(!0),i=Object(C.a)(c,2),n=i[0],o=i[1],j=Object(a.useState)(),u=Object(C.a)(j,2),b=u[0],x=u[1],O=Object(a.useState)(!0),m=Object(C.a)(O,2),p=m[0],h=m[1],g=Object(a.useState)(e.id),v=Object(C.a)(g,2),f=v[0],N=(v[1],Object(a.useState)(e.titulo)),y=Object(C.a)(N,2),k=y[0],w=y[1],S=Object(a.useState)(e.conteudo),z=Object(C.a)(S,2),D=z[0],F=z[1],R=Object(a.useState)(e.categoria),P=Object(C.a)(R,2),E=P[0],q=P[1],B=Object(a.useState)(e.autor),T=Object(C.a)(B,2),A=T[0],H=(T[1],Object(a.useState)(e.imagem)),M=Object(C.a)(H,2),X=M[0],_=M[1],G=Object(a.useState)(I),K=Object(C.a)(G,2),Q=K[0],Y=(K[1],Object(s.c)((function(e){return e.post})),function(e){h(!p)}),Z=function(){console.log(n),n?(x("editposting"),o(!1)):(x("editpostingaberto"),o(!0))};Object(a.useEffect)((function(){x("editpostingaberto")}),[]);return Object(l.jsx)("div",{className:"editpost",children:Object(l.jsx)(L.a,{trigger:Object(l.jsx)(J,{}),className:"colapseedit",triggerWhenOpen:Object(l.jsx)(V,{}),onOpen:Z,onClose:Z,children:p?Object(l.jsxs)("div",{className:b,id:e.id,children:[Object(l.jsxs)("div",{className:"title",children:[" ",Object(l.jsx)("h4",{children:"titulo"}),"   ",e.titulo]}),Object(l.jsxs)("div",{className:"title",children:[Object(l.jsx)("h4",{children:"conteudo"})," ",e.conteudo]}),Object(l.jsxs)("div",{className:"autor",children:[Object(l.jsx)("h4",{children:"Autor"}),e.autor]}),Object(l.jsxs)("div",{className:"categoria",children:[Object(l.jsx)("h4",{children:"Categproa"}),e.categoria]}),Object(l.jsxs)("div",{className:"date",children:[Object(l.jsx)("h4",{children:"Data"}),e.data]}),Object(l.jsxs)("div",{className:"image",children:[Object(l.jsx)("h4",{children:"imagem"}),Object(l.jsx)("div",{className:"imgedit",children:Object(l.jsx)("img",{src:"/projeto-blog-redux/"+e.imagem})})]}),Object(l.jsxs)("div",{className:"grupobotaoeditar",children:[Object(l.jsx)("div",{className:"grupoeditardelete",children:Object(l.jsxs)("a",{onClick:function(){t(W({id:f}))},children:[Object(l.jsx)(r.a,{className:"delete",size:"1x",icon:d.g}),"Delete"]})}),Object(l.jsx)("div",{className:"grupoeditardelete",children:Object(l.jsxs)("a",{onClick:Y,children:[Object(l.jsx)(r.a,{className:"editar",size:"1x",icon:d.c}),"Editar"]})})]})]}):Object(l.jsxs)("div",{className:b,children:[Object(l.jsx)("label",{children:Object(l.jsx)("b",{children:"Edite o titulo"})}),Object(l.jsx)("br",{}),Object(l.jsx)("textarea",{className:"campotextoedit",onChange:function(e){return w(e.target.value)},defaultValue:e.titulotxt}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{children:Object(l.jsx)("b",{children:"Edite o conteudo"})})," ",Object(l.jsx)("br",{}),Object(l.jsx)("textarea",{className:"campotextoedit",onChange:function(e){return F(e.target.value)},defaultValue:e.conteudotxt}),Object(l.jsx)("br",{})," ",Object(l.jsx)("label",{children:Object(l.jsx)("b",{children:"Edite a categoria"})})," ",Object(l.jsx)("br",{}),Object(l.jsx)("textarea",{className:"campotextoedit",onChange:function(e){return q(e.target.value)},defaultValue:e.categoriatxt}),Object(l.jsx)("br",{})," ",Object(l.jsx)("label",{children:Object(l.jsx)("b",{children:"Edite a imagem"})})," ",Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"file",onChange:function(e){var t=new FormData;t.append("image",e.target.files[0]);var c=new XMLHttpRequest;c.onload=function(){var e=JSON.parse(c.responseText);_(e.data.url)},c.open("post","https://api.imgbb.com/1/upload?key=9e481d21945658079d809f93dcf0b98c",!0),c.send(t)}}),Object(l.jsx)("br",{})," ",Object(l.jsx)("label",{children:Object(l.jsx)("b",{children:"Salvar"})})," ",Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"button",value:"salvar",onClick:function(){t(U({id:f,titulo:k,conteudo:D,autor:A,categoria:E,imagem:X,data:Q}))}}),Object(l.jsx)("input",{type:"button",value:"voltar",onClick:Y})]})})})},J=function(){return Object(l.jsx)("div",{className:"botaoedit",children:Object(l.jsx)(r.a,{size:"2x",icon:d.e})})},V=function(){return Object(l.jsx)("div",{className:"botaoedit",children:Object(l.jsx)(r.a,{size:"2x",icon:d.f})})},H=(new Date,Object(q.b)({name:"post",initialState:[{id:0,titulo:"Melhores formas de aproveitar sua viagem de carro neste fim de ano",conteudo:"conteudo um",categoria:"trips",data:"22/12/2021",autor:"marcelo",imagem:"layertrip1.png"},{id:1,titulo:"titulo dois",conteudo:"conteudo dois",categoria:"tech",data:"12/12/2021",autor:"fernando",imagem:"tecnologia33.jpg"},{id:2,titulo:"titulo treis",conteudo:"conteudo treis",categoria:"peoople",data:"11/02/2021",autor:"juliana",imagem:"layerpeople1.png"},{id:3,titulo:"titulo quatro",conteudo:"conteudo quatro",categoria:"nature",data:"05/12/2021",autor:"manel",imagem:"layernature1.png"},{id:4,titulo:"titulo cinco",conteudo:"conteudo cinco",categoria:"fashion",data:"08/12/2021",autor:"zeca",imagem:"layerfashion1.png"},{id:5,titulo:"titulo seis",conteudo:"conteudo seis",categoria:"peoople",data:"07/05/2021",autor:"jao",imagem:"layerpeople2.jpg"},{id:6,titulo:"titulo sete",conteudo:"conteudo sete",categoria:"trips",data:"12/08/2021",autor:"fernando",imagem:"layertrip2.png"},{id:7,titulo:"titulo oito",conteudo:"conteudo oito",categoria:"tech",data:"11/12/2021",autor:"mariana",imagem:"layerfashion1.png"},{id:8,titulo:"titulo nove",conteudo:"conteudo nove",categoria:"nature",data:"10/12/2021",autor:"fernando",imagem:"layernature2.jpg"},{id:9,titulo:"titulo dez",conteudo:"conteudo dez",categoria:"tech",data:"11/12/2021",autor:"joao",imagem:"layertech2.png"},{id:10,titulo:"titulo onze",conteudo:"conteudo onze",categoria:"nature",data:"12/12/2021",autor:"bruno",imagem:"layernature3.jpg"},{id:11,titulo:"titulo douze",conteudo:"conteudo douze",categoria:"trips",data:"04/12/2021",autor:"bruno",imagem:"layertrip2.png"},{id:12,titulo:"titulo treze",conteudo:"conteudo treze",categoria:"trips",data:"06/12/2021",autor:"bruno",imagem:"layertrip3.png"},{id:13,titulo:"titulo quatorze",conteudo:"conteudo quatorze",categoria:"animal",data:"07/12/2021",autor:"bruno viana",imagem:"layeranimals1.jpg"},{id:14,titulo:"titulo quinze",conteudo:"conteudo quinze",categoria:"animal",data:"11/12/2021",autor:"jessica lima",imagem:"layeranimals2.jpg"}],reducers:{addpost:function(e,t){var c={id:t.payload.id,autor:t.payload.autor,titulo:t.payload.titulo,conteudo:t.payload.conteudo,categoria:t.payload.categoria,imagem:t.payload.imagem,data:t.payload.data},a=e.slice();return a.push(c),e=a,a},Editarpost:function(e,t){console.log(t.payload.id),e[t.payload.id]=t.payload},removePost:function(e,t){return console.log(t.payload.id),e.filter((function(e,c){return c!==t.payload.id}))}}})),M=H.actions,X=M.addpost,U=M.Editarpost,W=M.removePost,_=H.reducer,G=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.post})),c=Object(a.useState)(),i=Object(C.a)(c,2),n=i[0],o=i[1],r=Object(a.useState)(),d=Object(C.a)(r,2),j=d[0],u=d[1],b=Object(a.useState)(),x=Object(C.a)(b,2),O=x[0],m=x[1],p=Object(a.useState)(),h=Object(C.a)(p,2),g=h[0],f=h[1],N=Object(a.useState)(),y=Object(C.a)(N,2),k=y[0],w=y[1],S=new Date;return Object(l.jsxs)("div",{className:"addPost",children:[Object(l.jsx)("h1",{children:"add post"}),Object(l.jsx)("input",{type:"text",name:"titulo",onChange:function(e){return u(e.target.value)},placeholder:"titulo",className:"inputtitulo"}),Object(l.jsx)("textarea",{id:"textopost",onChange:function(e){return o(e.target.value)},placeholder:"Add post",rows:"4"}),Object(l.jsx)("input",{type:"text",name:"categoria",onChange:function(e){return w(e.target.value)},placeholder:"categoria",className:"inputcategoria"}),Object(l.jsx)("input",{type:"file",onChange:function(e){var t=new FormData;t.append("image",e.target.files[0]),console.log(t);var c=new XMLHttpRequest;c.onload=function(){var e=JSON.parse(c.responseText);f(e.data.display_url)},c.open("post","https://api.imgbb.com/1/upload?key=9e481d21945658079d809f93dcf0b98c"),c.send(t)},name:"file",placeholder:"enviar foto"}),Object(l.jsxs)("select",{name:"usuarios",onChange:function(e){return m(e.target.value)},id:"usuarios",children:[Object(l.jsx)("option",{children:" "}),Object(l.jsx)("option",{value:"volvo",children:"Volvo"})]}),Object(l.jsx)("input",{type:"button",onClick:function(c){e(X({id:t.length,titulo:j,conteudo:n,categoria:k,imagem:g,data:S.toLocaleDateString(),autor:O}))},value:"enviar"}),Object(l.jsx)("input",{type:"button",onClick:function(){console.log(t)},value:"novadata"}),Object(l.jsx)(v,{})]})},K=(c(90),function(){var e=Object(s.c)((function(e){return e.post})),t=e.map((function(e){return e.categoria})),c=t.filter((function(e,c){return t.indexOf(e)===c})),a=e.filter((function(e){return e}));function i(e){var t=e.split("/");return new Date(t[2],t[1]-1,t[0])}a.sort((function(e,t){return new Date(i(e.data))-new Date(i(t.data))}));var n=a.slice(-3),o=a.slice(-6,-3);return console.log(n),Object(l.jsxs)("div",{className:"sidebarposts",children:[Object(l.jsxs)("div",{className:"sidebarcategorie",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h4",{children:"Categorias"})}),Object(l.jsx)("div",{className:"catsidebarnome",children:c.map((function(e){return Object(l.jsxs)("div",{className:"nomecatside",children:[" ",Object(l.jsx)("p",{children:e})]})}))})]}),Object(l.jsxs)("div",{className:"ultimaspostagem",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h4",{children:"Ultimas postagens"})}),Object(l.jsxs)("div",{className:"imagembarultimas",children:[Object(l.jsx)("div",{className:"ultimospostside1",children:n.map((function(e){return Object(l.jsx)("div",{className:"imgsidebarsingle",children:Object(l.jsx)("img",{src:"".concat("/projeto-blog-redux/"+e.imagem)})})}))}),Object(l.jsx)("div",{className:"ultimospostside1",children:o.map((function(e){return Object(l.jsx)("div",{className:"imgsidebarsingle",children:Object(l.jsx)("img",{src:"".concat("/projeto-blog-redux/"+e.imagem)})})}))})]})]})]})}),Q=(c(91),function(){var e=i.a.createRef(),t=Object(R.h)();console.log(t);var c=Object(s.c)((function(e){return e.post})).find((function(e){return e.id==t.post}));return Object(l.jsxs)("div",{className:"singlepost",children:[Object(l.jsx)(S,{}),Object(l.jsxs)("div",{className:"conteudosinglepost",children:[Object(l.jsxs)("div",{className:"corposinglepost",children:[Object(l.jsx)("div",{className:"imgsinglepost",children:Object(l.jsx)("div",{ref:e,style:{backgroundImage:"url(".concat("/projeto-blog-redux/"+c.imagem,")"),height:"400px",width:"100%",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",objectFit:"cover"}})}),Object(l.jsxs)("div",{className:"conteudo",children:[Object(l.jsx)("div",{className:"tituloconteudosingle",children:Object(l.jsx)("h2",{children:c.titulo})}),Object(l.jsx)("div",{className:"paragrafosingle",children:Object(l.jsx)("p",{children:c.conteudo})})]})]}),Object(l.jsx)("div",{className:"barra",children:Object(l.jsx)(K,{})})]})]})}),Y=(c(92),c(93),function(){var e=Object(R.h)();console.log(e.categoria);var t=Object(s.c)((function(e){return e.post})).filter((function(t){return t.categoria==e.categoria}));return Object(l.jsxs)("div",{className:"categoriasesao",children:[Object(l.jsx)(S,{}),Object(l.jsx)("div",{className:"contentcategoria",children:Object(l.jsx)("div",{className:"postcategorias",children:t.map((function(e){return Object(l.jsx)(Z,{image:e.imagem,conteudo:e.conteudo,titulo:e.titulo,data:e.data})}))})}),Object(l.jsx)(f,{})]})}),Z=function(e){return Object(l.jsxs)("div",{className:"cardcategoria",children:[Object(l.jsx)("div",{className:"titulocardcat",children:Object(l.jsx)("h1",{children:e.titulo})}),Object(l.jsx)("div",{className:"infoscardcat",children:Object(l.jsx)("p",{children:e.data})}),Object(l.jsxs)("div",{className:"corpocardcat",children:[Object(l.jsx)("div",{className:"corpoimgcard",children:Object(l.jsx)("div",{className:"imgcard",style:{height:"260px",width:"400px",backgroundImage:"url(".concat("/projeto-blog-redux/"+e.image,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}})}),Object(l.jsx)("div",{className:"corpocard",children:Object(l.jsx)("p",{children:e.conteudo})})]})]})},$=(c(94),function(){return Object(l.jsx)("div",{className:"dashboard",children:Object(l.jsx)("h1",{children:"dashboard "})})}),ee=(c(95),function(){return Object(l.jsx)("div",{className:"testecomponent"})});var te=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(R.d,{children:[Object(l.jsx)(R.b,{path:"/",element:Object(l.jsx)(D,{})}),Object(l.jsxs)(R.b,{path:":user/adm",element:Object(l.jsx)(E,{}),children:[Object(l.jsx)(R.b,{index:!0,element:Object(l.jsx)($,{})}),Object(l.jsx)(R.b,{path:"addpost",element:Object(l.jsx)(G,{})}),Object(l.jsx)(R.b,{path:"editpost",element:Object(l.jsx)(T,{})})]}),Object(l.jsx)(R.b,{path:"/post/:post",element:Object(l.jsx)(Q,{})}),Object(l.jsx)(R.b,{path:"/categoria/:categoria",element:Object(l.jsx)(Y,{})}),Object(l.jsx)(R.b,{path:"/testecomponents",element:Object(l.jsx)(ee,{})})]})})},ce=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,101)).then((function(t){var c=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,o=t.getTTFB;c(e),a(e),i(e),n(e),o(e)}))},ae=Object(q.b)({name:"excluidos",initialState:[],reducers:{excluirid:function(e,t){var c=t.payload,a=e.slice();return a.push(c),e=a,a},atualizaexcludeid:function(e,t){}}}),ie=ae.actions,ne=(ie.excluirid,ie.atualizaexcludeid,ae.reducer),oe=Object(q.a)({reducer:{post:_,excluir:ne}});o.a.render(Object(l.jsx)(j.a,{hashType:"slash",children:Object(l.jsx)(s.a,{store:oe,children:Object(l.jsx)(te,{})})}),document.getElementById("root")),ce()}},[[96,1,2]]]);
//# sourceMappingURL=main.cdd9aa4e.chunk.js.map