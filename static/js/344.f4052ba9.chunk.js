"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[344],{1227:(e,t,n)=>{var r=n(4994);t.A=void 0;var a=r(n(39)),i=n(579),l=(0,a.default)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"AddOutlined");t.A=l},1344:(e,t,n)=>{n.r(t),n.d(t,{default:()=>W});var r=n(6954),a=n(9456),i=n(7057),l=n(1906),d=n(3471),s=n(1806),h=n(3460),c=n(2420),o=n(9650),x=n(4882),j=n(8076),g=n(3336),A=n(579);const b=e=>{let{Rabbits:t}=e;const n=(0,a.wA)(),r=[];t.map((e=>r.push({id:t.indexOf(e)+1,_id:e._id,gender:e.gender,name:e.name,breed:e.breed,photoRabbit:e.photoRabbit,dateBirthDay:e.dateBirthDay,cage:e.cage,mother:e.mother,father:e.father,favorite:e.favorite})));const b=e=>{const t=e.target.parentElement.parentElement.getAttribute("_id");n((0,i.mj)(t)).then((()=>n((0,i.YZ)())))},u=e=>{const t=e.target.parentElement.parentElement.getAttribute("_id");n((0,i.Ak)(t))};return(0,A.jsx)("div",{style:{height:400,width:"100%"},children:(0,A.jsx)(o.A,{component:g.A,children:(0,A.jsxs)(s.A,{sx:{minWidth:650},size:"small","aria-label":"a dense table",children:[(0,A.jsx)(x.A,{children:(0,A.jsxs)(j.A,{children:[(0,A.jsx)(c.A,{align:"center",children:"ID"}),(0,A.jsx)(c.A,{align:"right",children:"Name"}),(0,A.jsx)(c.A,{align:"right",children:"Gender"}),(0,A.jsx)(c.A,{align:"right",children:"Breed"}),(0,A.jsx)(c.A,{align:"center",children:"Date BirthDay"}),(0,A.jsx)(c.A,{align:"right",children:"Mother"}),(0,A.jsx)(c.A,{align:"right",children:"Father"}),(0,A.jsx)(c.A,{align:"right",children:"cage"}),(0,A.jsx)(c.A,{align:"right",children:"Photo Rabbit"}),(0,A.jsx)(c.A,{align:"right",children:"favorite"}),(0,A.jsx)(c.A,{align:"center",children:"Edit"}),(0,A.jsx)(c.A,{align:"center",children:"Delete"})]})}),(0,A.jsx)(h.A,{children:r.map((e=>(0,A.jsxs)(j.A,{_id:e._id,sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,A.jsx)(c.A,{component:"th",scope:"row",align:"center",children:e.id}),(0,A.jsx)(c.A,{align:"right",children:e.name}),(0,A.jsx)(c.A,{align:"right",children:e.gender}),(0,A.jsx)(c.A,{align:"right",children:e.breed}),(0,A.jsx)(c.A,{align:"right",children:e.dateBirthDay}),(0,A.jsx)(c.A,{align:"right",children:e.mother}),(0,A.jsx)(c.A,{align:"right",children:e.father}),(0,A.jsx)(c.A,{align:"right",children:e.cage}),(0,A.jsx)(c.A,{align:"right",children:e.photoRabbit}),(0,A.jsx)(c.A,{align:"right",children:e.favorite.toString()}),(0,A.jsx)(c.A,{align:"center",children:(0,A.jsx)(l.A,{variant:"outlined",startIcon:(0,A.jsx)(d.A,{}),type:"text",onClick:u,children:"Edit"})}),(0,A.jsx)(c.A,{align:"center",children:(0,A.jsx)(l.A,{variant:"outlined",startIcon:(0,A.jsx)(d.A,{}),type:"text",onClick:b,children:"Delete"})})]},e._id)))})]})})})};var u=n(3758),m=n(5043),v=n(3931);const p=()=>{const e=(0,a.wA)(),{rabbits:t}=(0,a.d4)(v.Ar),n=(0,a.d4)(v.RQ);return(0,m.useEffect)((()=>{e((0,i.YZ)()),e((0,i.sW)())}),[e]),(0,A.jsx)("div",{children:n?(0,A.jsx)(u.a,{}):t?(0,A.jsx)(b,{Rabbits:t}):null})};var f=n(5475),C=n(1227),_=n(3797),M=n(6946),k=n(5795),S=n(3193),y=n(9190),B=n(9285),D=n(5984);const w=e=>{let{breedSelect:t,onChangeBreed:n}=e;const r=(0,a.d4)(v.an);return(0,A.jsxs)(S.A,{fullWidth:!0,children:[(0,A.jsx)(y.A,{id:"Breed",children:"Breed"}),(0,A.jsx)(B.A,{labelId:"Breed",id:"Breed",value:t,label:"Breed",onChange:n,children:r.map((e=>(0,A.jsx)(D.A,{value:e.name,children:e.name},e.name)))})]})},F=e=>{let{gender:t,onChangeGender:n}=e;return(0,A.jsxs)(S.A,{fullWidth:!0,children:[(0,A.jsx)(y.A,{id:"Gender",children:"Gender"}),(0,A.jsxs)(B.A,{labelId:"Gender",id:"Gender",value:t,label:"Gender",onChange:n,children:[(0,A.jsx)(D.A,{value:"\u0421\u0430\u043c\u0435\u0446\u044c",children:"\u0421\u0430\u043c\u0435\u0446\u044c"}),(0,A.jsx)(D.A,{value:"\u0421\u0430\u043c\u043a\u0430",children:"\u0421\u0430\u043c\u043a\u0430"})]})]})},I=e=>{let{mother:t,onChangeMother:n}=e;const{rabbits:r}=(0,a.d4)(v.Ar);return(0,A.jsxs)(S.A,{fullWidth:!0,children:[(0,A.jsx)(y.A,{id:"Mother",children:"Mother"}),(0,A.jsx)(B.A,{labelId:"Mother",id:"Mother",value:t,label:"Mother",onChange:n,children:r.map((e=>"\u0421\u0430\u043c\u043a\u0430"===e.gender?(0,A.jsx)(D.A,{id:e._id,value:e.name,children:e.name},e._id):(0,A.jsx)(D.A,{value:"-",children:"-"})))})]})},R=e=>{let{father:t,onChangeFather:n}=e;const{rabbits:r}=(0,a.d4)(v.Ar);return(0,A.jsxs)(S.A,{fullWidth:!0,children:[(0,A.jsx)(y.A,{id:"Father",children:"Father"}),(0,A.jsx)(B.A,{labelId:"Father",id:"Father",value:t,label:"Father",onChange:n,children:r.map((e=>"\u0421\u0430\u043c\u0435\u0446\u044c"===e.gender?(0,A.jsx)(D.A,{id:e._id,value:e.name,children:e.name},e._id):(0,A.jsx)(D.A,{value:"-",children:"-"})))})]})},E={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function G(e){let{openModal:t,closeModal:n}=e;const[r,d]=(0,m.useState)(""),[s,h]=(0,m.useState)(""),[c,o]=(0,m.useState)(""),[x,j]=(0,m.useState)(""),[g,b]=(0,m.useState)(""),[u,v]=(0,m.useState)(!0),p=(0,a.wA)(),f={name:r,breed:c,gender:s,mother:x,father:g};(0,m.useEffect)((()=>{v(!(""!==s&""!==r))}),[u,s,r]);return(0,A.jsx)("div",{children:(0,A.jsx)(_.A,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,A.jsx)(M.A,{sx:E,children:(0,A.jsxs)("form",{onSubmit:e=>{e.preventDefault(),p((0,i.Yl)(f)).then((e=>201===e.payload?n():"")).then((()=>p((0,i.YZ)())))},children:[(0,A.jsxs)("div",{children:[(0,A.jsx)(k.A,{helperText:"Please enter name rabbit",id:"Name",label:"Name",onChange:e=>{if("Name"===e.target.id)d(e.target.value)}}),(0,A.jsx)(w,{breedSelect:c,onChangeBreed:e=>{o(e.target.value)}}),(0,A.jsx)(F,{gender:s,onChangeGender:e=>{h(e.target.value)}}),(0,A.jsx)(I,{gender:x,onChangeMother:e=>{j(e.target.value)}}),(0,A.jsx)(R,{gender:g,onChangeFather:e=>{b(e.target.value)}})]}),(0,A.jsxs)("div",{children:[(0,A.jsx)(l.A,{type:"submit",disabled:u,variant:"outlined",children:"Add"}),(0,A.jsx)(l.A,{variant:"outlined",onClick:n,children:"Cancel"})]})]})})})})}const N=()=>{const[e,t]=(0,m.useState)(!1);return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)("div",{children:[(0,A.jsx)(l.A,{variant:"outlined",startIcon:(0,A.jsx)(C.A,{}),type:"text",onClick:()=>{t(!0)},children:"ADD Rabbit"}),(0,A.jsx)(f.k2,{to:"/rabbits/breedList",className:CSS.linked,children:(0,A.jsx)(l.A,{variant:"outlined",startIcon:(0,A.jsx)(C.A,{}),type:"text",children:"Breed"})}),e?(0,A.jsx)(G,{openModal:e,closeModal:()=>{t(!1)}}):""]})})};function W(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("div",{className:r.A.component,children:(0,A.jsx)(p,{})}),(0,A.jsx)("div",{children:(0,A.jsx)(N,{})})]})}},3471:(e,t,n)=>{var r=n(4994);t.A=void 0;var a=r(n(39)),i=n(579),l=(0,a.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.A=l},3931:(e,t,n)=>{n.d(t,{Ar:()=>r,RQ:()=>a,an:()=>i});const r=e=>e.rabbits,a=e=>e.rabbits.isLoading,i=e=>e.rabbits.breed},6954:(e,t,n)=>{n.d(t,{A:()=>r});const r={component:"App_component__1of+-"}}}]);
//# sourceMappingURL=344.f4052ba9.chunk.js.map