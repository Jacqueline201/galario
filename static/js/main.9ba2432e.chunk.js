(this["webpackJsonpwater-bill-mgmt-w-sms"]=this["webpackJsonpwater-bill-mgmt-w-sms"]||[]).push([[0],{27:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),a=c.n(n),l=c(19),r=c.n(l),i=(c(27),c(5)),o=c(2),j=c(9),d=c(12);function b(e){var t=e.children,c=Object(d.a)(e,["children"]),n=!!localStorage.getItem("token");return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(o.b,Object(j.a)(Object(j.a)({},c),{},{render:function(e){var c=e.location;return n?t:Object(s.jsx)(o.a,{to:{pathname:"/login",state:{from:c}}})}}))})}c(33);var m=c(3),u=c(17),h=c.n(u),x=c(21),O=function(){var e=Object(x.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{token:"asdj12k4k213kas81240",user:{id:1,role:"customer",name:{first:"ISRAEL",last:"GALARIO"},address:"POB., ALCANTARA, ROMBLON",mobileNo:"917-1234521",accountNo:"2015-06-047",meterSerialNo:"14Y8 5991",lastBillNo:41}});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(o.g)(),t=Object(n.useState)(""),c=Object(m.a)(t,2),a=(c[0],c[1]),l=Object(n.useState)(""),r=Object(m.a)(l,2),i=(r[0],r[1]);return Object(s.jsxs)("div",{className:"",children:[Object(s.jsxs)("div",{className:"col-12 mb-4",children:[Object(s.jsx)("label",{htmlFor:"usernameInput",className:"form-label",children:"Username"}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"usernameInput",placeholder:"Username",onChange:function(e){a(e.target.value.trim())}})]}),Object(s.jsxs)("div",{className:"col-12 mb-4",children:[Object(s.jsx)("label",{htmlFor:"adminPwInput",className:"form-label",children:"Password"}),Object(s.jsx)("input",{type:"password",className:"form-control",id:"adminPwInput",placeholder:"Password",onChange:function(e){i(e.target.value.trim())}})]}),Object(s.jsx)("div",{className:"col-12 mb-3 pt-2",children:Object(s.jsx)("button",{type:"button",className:"btn btn-primary w-100",onClick:function(){O().then((function(t){localStorage.setItem("token",t),localStorage.setItem("role","admin"),e.push("/")}))},children:"Sign In"})})]})},N=Object(n.createContext)(),f=function(e){var t=e.children,c=Object(n.useState)(!0),a=Object(m.a)(c,2),l=a[0],r=a[1];return Object(s.jsx)(N.Provider,{value:{activeUser:l,setActiveUser:r},children:t})},v=function(e){var t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),c=decodeURIComponent(atob(t).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(c)},g=function(){var e=Object(o.g)(),t=Object(n.useRef)(!0),c=Object(n.useRef)(!0),a=Object(n.useState)(""),l=Object(m.a)(a,2),r=l[0],i=l[1],j=Object(n.useState)(""),d=Object(m.a)(j,2),b=d[0],u=d[1],h=Object(n.useContext)(N).setActiveUser,x=Object(n.useState)(!1),O=Object(m.a)(x,2),p=O[0],f=O[1],g=function(){f(!0);var s={username:r,password:b};fetch("https://sp1-blue-sparrow.herokuapp.com/auth/customer/login",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(s)}).then((function(e){return e.text()})).then((function(s){console.log(s),"Invalid Username"===s||"Incorrect Password"===s?(alert(s),f(!1),t.current.value="",c.current.value=""):(localStorage.setItem("token",s),localStorage.setItem("role",v(s).role),h(v(s).account),e.push("/"))})).catch((function(e){console.log(e),alert("Something went wrong..."),f(!1)}))};return Object(s.jsxs)("div",{className:"",children:[Object(s.jsxs)("div",{className:"col-12 mb-4",children:[Object(s.jsx)("label",{htmlFor:"accountNumberInput",className:"form-label",children:"Account No."}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"accountNumberInput",placeholder:"Account No.",ref:t,onChange:function(e){i(e.target.value.trim())}})]}),Object(s.jsxs)("div",{className:"col-12 mb-4",children:[Object(s.jsx)("label",{htmlFor:"customerPwInput",className:"form-label",children:"Password"}),Object(s.jsx)("input",{type:"password",className:"form-control",id:"customerPwInput",placeholder:"Password",ref:c,onChange:function(e){u(e.target.value.trim())}})]}),Object(s.jsx)("div",{className:"col-12 mb-3 pt-2",children:p?Object(s.jsxs)("button",{type:"button",className:"btn btn-primary w-100",disabled:p,children:[Object(s.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),Object(s.jsx)("span",{className:"visually-hidden",children:"Loading..."})]}):Object(s.jsx)("button",{type:"button",className:"btn btn-primary w-100",onClick:g,children:Object(s.jsx)("span",{children:"Login"})})})]})},y=c.p+"static/media/alcantara-seal.a1037ced.png",w=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"container sign-in-wrapper d-flex align-items-center  justify-content-center",children:[Object(s.jsxs)("div",{className:"col-12 col-md-6 ",children:[Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)("img",{src:y,alt:"Alcantara, Romblon - Municipal Seal",className:"img-thumbnail border-0",style:{height:"12rem",width:"12rem"}})}),Object(s.jsx)("p",{className:"display-6 text-center",children:"Municipality of Alcantara"}),Object(s.jsx)("p",{className:"h3 text-center",children:"Water Supply System"})]}),Object(s.jsxs)("div",{className:"col-12 col-md-6",children:[Object(s.jsx)("p",{className:"mr-auto h4",children:"Login As:"}),Object(s.jsxs)("ul",{className:"nav nav-tabs pt-1",id:"myTab",role:"tablist",children:[Object(s.jsx)("li",{className:"nav-item",role:"presentation",children:Object(s.jsx)("a",{className:"nav-link active",id:"home-tab","data-toggle":"tab",href:"#admin",role:"tab","aria-controls":"admin","aria-selected":"true",children:"Admin"})}),Object(s.jsx)("li",{className:"nav-item",role:"presentation",children:Object(s.jsx)("a",{className:"nav-link",id:"customer-tab","data-toggle":"tab",href:"#customer",role:"tab","aria-controls":"customer","aria-selected":"false",children:"Customer"})})]}),Object(s.jsxs)("div",{className:"tab-content col-12 flex-column p-3 border border-1",id:"myTabContent",children:[Object(s.jsx)("div",{className:"tab-pane fade show active",id:"admin",role:"tabpanel","aria-labelledby":"admin-tab",children:Object(s.jsx)(p,{})}),Object(s.jsx)("div",{className:"tab-pane fade",id:"customer",role:"tabpanel","aria-labelledby":"customer-tab",children:Object(s.jsx)(g,{})})]})]})]})})},S=(c(35),function(){var e=Object(o.g)(),t=localStorage.getItem("role"),c={pathname:"/admin",state:{from:e.location}},n={pathname:"/admin/accounts",state:{from:e.location}},a={pathname:"/customer",state:{from:e.location}},l={pathname:"/customer/bills",state:{from:e.location}};return Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)("span",{children:"WebApp"}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:[Object(s.jsxs)("div",{className:"navbar-nav d-flex w-25 justify-content-around",children:[Object(s.jsx)(i.b,{className:"nav-link",activeClassName:"active",exact:!0,to:"admin"===t?c:a,children:"admin"===t?"Home":"Account"}),Object(s.jsx)(i.b,{className:"nav-link",activeClassName:"active",to:"admin"===t?n:l,children:"admin"===t?"Accounts":"Bills"})]}),Object(s.jsx)("div",{className:"d-flex w-100 w-md-75 justify-content-md-end justify-content-center",children:Object(s.jsx)("button",{type:"button",className:"btn btn-link sign-out-btn",onClick:function(){e.push("/login"),localStorage.clear()},children:"Sign Out"})})]})]})})}),C=Object(n.createContext)(),A=function(e){var t=e.children,c=Object(n.useState)(),a=Object(m.a)(c,2),l=a[0],r=a[1];return Object(s.jsx)(C.Provider,{value:{data:l,setData:r},children:t})},k=Object(n.createContext)(),P=function(e){var t=e.children,c=Object(n.useContext)(C),a=Object(n.useState)(c[0]),l=Object(m.a)(a,2),r=l[0],i=l[1];return Object(s.jsx)(k.Provider,{value:{billOnDisplay:r,setBillOnDisplay:i},children:t})},I=(c(36),function(e){var t=e.bill,c=new Date(t.periodFrom).toDateString().substring(4,10),n=new Date(t.periodTo).toDateString().substring(4,10),a=Object(o.g)();return Object(s.jsx)("div",{className:"container bill-card-wrapper",children:Object(s.jsx)("div",{className:"row pt-3",children:Object(s.jsx)("div",{className:"col-12 col-md-10 mx-auto",children:Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("div",{className:"card-header",children:Object(s.jsxs)("div",{className:"row py-2",children:[Object(s.jsx)("div",{className:"col-12 col-md-2",children:Object(s.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(s.jsx)("p",{className:"h5",children:"Bill No."}),Object(s.jsxs)("p",{className:"h5 font-weight-normal",children:[" ","".concat(t.billNumber)," "]})]})}),Object(s.jsx)("div",{className:"col-12 col-md-5 ml-auto",children:Object(s.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(s.jsx)("p",{className:"h5",children:"Period Covered:"}),Object(s.jsx)("p",{className:"h5 font-weight-light",children:"".concat(c," - ").concat(n)})]})})]})}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("div",{className:"row g-2",children:Object(s.jsxs)("div",{className:"col-6 p-2 m-auto",children:[Object(s.jsx)("p",{className:"h5 text-center",children:"Meter Reading"}),Object(s.jsxs)("div",{className:"d-flex justify-content-between my-0 py-0",children:[Object(s.jsx)("p",{className:"font-weight-bold my-0 py-0",children:"Present: "}),Object(s.jsxs)("p",{className:"my-0 py-0",children:[" ",t.readingPresent," "]})]}),Object(s.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(s.jsx)("p",{className:"font-weight-bold my-0 py-0",children:"Previous: "}),Object(s.jsxs)("p",{className:"my-0 py-0",children:[" ",t.readingPrevious," "]})]}),Object(s.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(s.jsx)("p",{className:"font-weight-bold my-0 py-0",children:"Used in Cu. Meters: "}),Object(s.jsxs)("p",{className:"my-0 py-0",children:[" ",t.cumUsed," "]})]})]})}),Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{className:"row g-2",children:[Object(s.jsx)("p",{className:"h5 text-center",children:"Consumption"}),Object(s.jsxs)("div",{className:"col-8 m-auto",children:[Object(s.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(s.jsx)("p",{className:"font-weight-bold",children:"Charges"}),Object(s.jsx)("p",{className:"font-weight-bold",children:"Rates"})]}),Object(s.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(s.jsx)("p",{className:"h6",children:"0 - 10 CU.M: "}),Object(s.jsx)("p",{className:"",children:"PHP 50.00"})]}),Object(s.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(s.jsx)("p",{className:"h6",children:"Above 10 CU.M: "}),Object(s.jsx)("p",{className:"",children:"PHP 11.00 / CU.M"})]}),Object(s.jsx)("div",{className:"d-flex justify-content-start",children:Object(s.jsx)("p",{className:"h6",children:"Others: "})})]}),Object(s.jsxs)("div",{className:"col-4 m-auto",children:[Object(s.jsx)("p",{className:"font-weight-bold text-right",children:"Amount"}),Object(s.jsx)("div",{className:"d-flex justify-content-end",children:Object(s.jsx)("p",{className:"",children:"50.00"})}),Object(s.jsx)("div",{className:"d-flex justify-content-end",children:Object(s.jsx)("p",{className:"",children:"".concat(t.chargePerAboveTen,".00")})}),Object(s.jsx)("div",{className:"d-flex justify-content-end",children:Object(s.jsx)("p",{className:"",children:"0.00"})})]})]}),Object(s.jsx)("hr",{className:"my-1"}),Object(s.jsx)("div",{className:"row g-1",children:Object(s.jsxs)("div",{className:"col-6 ml-auto d-flex justify-content-between",children:[Object(s.jsx)("p",{className:"h5",children:"Total Amount"}),Object(s.jsx)("p",{className:"h5",children:"PHP ".concat(t.totalAmountDue,".00")})]})})]}),Object(s.jsx)("div",{className:"card-footer",children:Object(s.jsx)("div",{className:"d-flex w-100 justify-content-end",children:Object(s.jsx)("button",{className:"btn btn-outline-primary btn-lg px-4",type:"button",onClick:function(){a.goBack()},children:"Go Back"})})})]})})})})}),D=function(e){var t=e.bills,c=e.filter,n=e.viewBill,a={year2020:1577808e6,year2019:1546272e6},l="year"+c,r=t.sort((function(e,t){return t.billNumber-e.billNumber})).filter((function(e){return e.periodTo-a[l]<31556952e3}));return Object(s.jsx)("div",{className:"list-group",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("table",{className:"table table-hover table-striped text-center",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col",children:"Bill No."}),Object(s.jsx)("th",{scope:"col",children:"Period Covered"}),Object(s.jsx)("th",{scope:"col",children:"Consumption"}),Object(s.jsx)("th",{scope:"col",children:"Amount"}),Object(s.jsx)("th",{scope:"col"})]})}),Object(s.jsx)("tbody",{children:0!==r.length?r.map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"row",children:e.billNumber}),Object(s.jsx)("td",{children:"".concat(new Date(e.periodFrom).toDateString().substring(4,10)," - \n                      ").concat(new Date(e.periodTo).toDateString().substring(4,10))}),Object(s.jsx)("td",{children:"".concat(e.cumUsed," Cu. Meters")}),Object(s.jsx)("td",{children:"PHP ".concat(e.totalAmountDue)}),Object(s.jsx)("td",{className:"d-flex justify-content-around",children:Object(s.jsx)("button",{type:"button",className:"btn btn-sm btn-primary",onClick:function(e){n(e.target.value)},value:e.billNumber,children:"View Details"})})]},e.billNumber)})):Object(s.jsx)("tr",{children:Object(s.jsx)("td",{colSpan:5,className:"py-4",children:Object(s.jsxs)("em",{children:["No Available Records for ",new Date(c).toDateString()]})})})})]})})})},M=function(e){var t=e.endpoint,c=e.token,s=Object(n.useState)({data:null,loading:!0}),a=Object(m.a)(s,2),l=a[0],r=a[1];return Object(n.useEffect)((function(){r({data:null,loading:!0}),fetch("https://sp1-blue-sparrow.herokuapp.com/api/v1"+t,{method:"GET",headers:{"x-auth-token":c}}).then((function(e){return e.text()})).then((function(e){r({data:JSON.parse(e),loading:!1})})).catch((function(e){alert(e)}))}),[t,c]),l},B=function(){var e,t,c,a=localStorage.getItem("token"),l=v(a).account.accountNumber,r="/bill-management/bills/".concat(l),i=M({endpoint:r,token:a}).data,j=Object(o.g)(),d=Object(n.useContext)(k).setBillOnDisplay,b=Object(n.useState)(1577808e6),u=Object(m.a)(b,2),h=u[0],x=u[1];return Object(s.jsxs)("div",{className:"container pt-2",children:[Object(s.jsx)("p",{className:"display-5 text-center pt-2",children:"My Bills"}),Object(s.jsx)("div",{className:"row pt-3",children:Object(s.jsx)("div",{className:"col-4 ml-auto",children:Object(s.jsxs)("div",{className:"input-group",children:[Object(s.jsx)("span",{className:"input-group-text",children:"Year: "}),Object(s.jsxs)("button",{id:"yearFilter",className:"btn btn-outline-primary dropdown-toggle",type:"button","data-toggle":"dropdown","aria-expanded":"false",children:[" ",h," "]}),Object(s.jsxs)("ul",{className:"dropdown-menu",children:[Object(s.jsx)("li",{children:Object(s.jsx)("button",{className:"dropdown-item",type:"button",onClick:function(){x(1577808e6)},children:"2020"})}),Object(s.jsx)("li",{children:Object(s.jsx)("button",{className:"dropdown-item",type:"button",onClick:function(){x(1546272e6)},children:"2019"})})]})]})})}),Object(s.jsx)("div",{className:"row pt-2",children:Object(s.jsx)("div",{className:"col-12 col-md-10 m-auto",children:(e=i,t=h,c=function(e){var t=i.find((function(t){return t.billNumber===parseInt(e)}));d(t),j.push({pathname:"/customer/bills/".concat(e),state:{from:j.location}})},e?Object(s.jsx)(D,{bills:e,filter:t,viewBill:c}):Object(s.jsxs)("div",{className:"d-flex w-100 align-items-center justify-content-center",style:{height:"200px"},children:[Object(s.jsx)("div",{className:"spinner-grow mx-2",style:{width:"2.5rem",height:"2.5rem",transitionDelay:"0.25s"},role:"status",children:Object(s.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),Object(s.jsx)("div",{className:"spinner-grow mx-3",style:{width:"3rem",height:"3rem",transitionDelay:"1.25s"},role:"status",children:Object(s.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),Object(s.jsx)("div",{className:"spinner-grow mx-2",style:{width:"2.5rem",height:"2.5rem",transitionDelay:"2.25s"},role:"status",children:Object(s.jsx)("span",{className:"visually-hidden",children:"Loading..."})})]}))})})]})},L=function(){var e=Object(o.h)().path,t=Object(n.useContext)(k).billOnDisplay;return Object(s.jsxs)(o.d,{children:[Object(s.jsx)(o.b,{exact:!0,path:e,children:Object(s.jsx)(B,{})}),Object(s.jsx)(o.b,{path:"".concat(e,"/:billNo"),children:Object(s.jsx)(I,{bill:t})})]})},T=(c(37),function(){var e,t=localStorage.getItem("token"),c=v(t).account.accountNumber,n="/account-management/accounts/".concat(c),a=Object(o.g)(),l=M({endpoint:n,token:t}).data;return Object(s.jsxs)("div",{className:"container customer-page-wrapper",children:[Object(s.jsxs)("div",{className:"row pt-4",children:[Object(s.jsx)("div",{className:"col-12 col-md-8",children:Object(s.jsx)("p",{className:"display-5",children:"My Account"})}),Object(s.jsx)("div",{className:"col-12 col-md-4 d-flex align-items-center justify-content-end",children:Object(s.jsxs)("p",{className:"h5",children:["Account No.: ",Object(s.jsx)("span",{className:"font-weight-lighter",children:c})]})})]}),(e=l,e?Object(s.jsxs)("dl",{className:"row pt-4",children:[Object(s.jsx)("dt",{className:"col-sm-3",children:"Name"}),Object(s.jsx)("dd",{className:"col-sm-9",children:l.fullName}),Object(s.jsx)("dt",{className:"col-sm-3",children:"Address"}),Object(s.jsx)("dd",{className:"col-sm-9",children:l.address?l.address:"No Address"}),Object(s.jsx)("dt",{className:"col-sm-3",children:"Mobile No."}),Object(s.jsx)("dd",{className:"col-sm-9",children:void 0===l.mobileNumber?"No Mobile Number":"+63-".concat(l.mobileNumber.toString().substring(0,3),"-\n          ").concat(l.mobileNumber.toString().substring(3))}),Object(s.jsx)("dt",{className:"col-sm-3",children:"Meter Serial No."}),Object(s.jsx)("dd",{className:"col-sm-9",children:l.meterSerialNumber?l.meterSerialNumber:"NO METER SERIAL NO."})]}):Object(s.jsxs)("div",{className:"d-flex w-100 align-items-center justify-content-center",style:{height:"300px"},children:[Object(s.jsx)("div",{className:"spinner-grow mx-2",style:{width:"2.5rem",height:"2.5rem",transitionDelay:"0.25s"},role:"status",children:Object(s.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),Object(s.jsx)("div",{className:"spinner-grow mx-3",style:{width:"3rem",height:"3rem",transitionDelay:"1.25s"},role:"status",children:Object(s.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),Object(s.jsx)("div",{className:"spinner-grow mx-2",style:{width:"2.5rem",height:"2.5rem",transitionDelay:"2.25s"},role:"status",children:Object(s.jsx)("span",{className:"visually-hidden",children:"Loading..."})})]})),Object(s.jsx)("hr",{}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{className:"btn btn-success",type:"button",onClick:function(){a.push({pathname:"/customer/bills",state:{from:a.location}})},children:"View My Bills"})})]})}),F=function(){return Object(s.jsxs)("table",{className:"table table-hover table-striped",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col",children:"Account No."}),Object(s.jsx)("th",{scope:"col",children:"Name"}),Object(s.jsx)("th",{scope:"col",children:"Mobile No."}),Object(s.jsx)("th",{scope:"col"})]})}),Object(s.jsx)("tbody",{children:[{accountNo:"1101",name:"juan santos",mobileNo:"912-3456"},{accountNo:"1102",name:"john cruz",mobileNo:"912-5205"},{accountNo:"1103",name:"mark lopez",mobileNo:"912-6812"},{accountNo:"1104",name:"peter tan",mobileNo:"912-2546"},{accountNo:"1105",name:"beth carlos",mobileNo:"912-6481"}].map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"row",children:e.accountNo}),Object(s.jsx)("td",{children:e.name}),Object(s.jsx)("td",{children:"0".concat(e.mobileNo)}),Object(s.jsxs)("td",{className:"d-flex justify-content-around",children:[Object(s.jsx)("button",{type:"button",className:"btn btn-sm btn-secondary",children:"View"}),Object(s.jsx)("button",{type:"button",className:"btn btn-sm btn-secondary",children:"Issue Statement"})]})]},e.accountNo)}))})]})},U=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"container h-100",children:[Object(s.jsx)("p",{className:"h1",children:"ACCOUNTS"}),Object(s.jsx)(F,{})]})})},R=function(){return Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col-12 col-md-6 d-flex flex-column",children:[Object(s.jsx)("button",{className:"btn btn-outline-primary mb-1",type:"button",children:"Poblacion"}),Object(s.jsx)("button",{className:"btn btn-outline-primary mb-1",type:"button",children:"Gui-ob"}),Object(s.jsx)("button",{className:"btn btn-outline-primary mb-1",type:"button",children:"Madalag"})]}),Object(s.jsxs)("div",{className:"col-12 col-md-6 d-flex flex-column",children:[Object(s.jsx)("button",{className:"btn btn-outline-primary mb-1",type:"button",children:"Bagsik"}),Object(s.jsx)("button",{className:"btn btn-outline-primary mb-1",type:"button",children:"Lawan"}),Object(s.jsx)("button",{className:"btn btn-outline-primary mb-1",type:"button",children:"Camili"})]})]})},E=function(){return Object(s.jsxs)("div",{className:"input-group input-group-lg",children:[Object(s.jsx)("input",{type:"text",className:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-lg",placeholder:"Type an account number or name..."}),Object(s.jsx)("button",{className:"btn btn-lg btn-outline-secondary",type:"button",id:"inputGroup-sizing-lg",children:"Search"})]})},G=(c(38),function(){return Object(s.jsxs)("div",{className:"home-wrapper container d-flex flex-column justify-content-around",children:[Object(s.jsx)("div",{className:"row w-100 ",children:Object(s.jsxs)("div",{className:"col-12 col-md-8 mx-auto",children:[Object(s.jsx)("p",{className:"display-6 text-center",children:"Search for an Account"}),Object(s.jsx)(E,{})]})}),Object(s.jsx)("div",{className:"row w-100 ",children:Object(s.jsxs)("div",{className:"col-12 col-md-10 mx-auto",children:[Object(s.jsx)("p",{className:"display-6 text-center",children:"Issue New Statements per Barangay"}),Object(s.jsx)(R,{})]})}),Object(s.jsx)("div",{className:"row w-100 ",children:Object(s.jsx)("div",{className:"col-12 col-md-10 mx-auto",children:Object(s.jsx)("p",{className:"display-6 text-center",children:"Create a New Account"})})})]})}),z=function(){var e=localStorage.getItem("role"),t=Object(n.useState)(!1),c=Object(m.a)(t,2),a=c[0],l=c[1];return Object(n.useEffect)((function(){l("admin"===e)}),[e]),Object(s.jsxs)("div",{className:"h-100",children:[Object(s.jsx)(S,{}),a?Object(s.jsxs)(o.d,{children:[Object(s.jsx)(o.b,{exact:!0,path:"/admin",children:Object(s.jsx)(G,{})}),Object(s.jsx)(o.b,{path:"/admin/accounts",children:Object(s.jsx)(U,{})})]}):Object(s.jsx)(A,{children:Object(s.jsx)(P,{children:Object(s.jsxs)(o.d,{children:[Object(s.jsx)(o.b,{exact:!0,path:"/customer",children:Object(s.jsx)(T,{})}),Object(s.jsx)(o.b,{path:"/customer/bills",children:Object(s.jsx)(L,{})})]})})})]})},H=function(e){var t=e.children,c=Object(d.a)(e,["children"]),a=Object(o.g)(),l=localStorage.getItem("role");return console.log("role filter"),console.log(l),Object(n.useEffect)((function(){"admin"===l?a.push("/admin"):"customer"===l?a.push("/customer"):a.push("/login")}),[l,a]),Object(s.jsxs)(o.d,{children:[Object(s.jsx)(o.b,Object(j.a)(Object(j.a)({},c),{},{path:"/admin",render:function(e){return t}})),Object(s.jsx)(o.b,Object(j.a)(Object(j.a)({},c),{},{path:"/customer",render:function(e){return t}}))]})};var J=function(){return Object(s.jsx)(i.a,{basename:"/sp1-water-supply",children:Object(s.jsx)(f,{children:Object(s.jsxs)(o.d,{children:[Object(s.jsx)(o.b,{path:"/login",render:function(){return Object(s.jsx)(w,{})}}),Object(s.jsx)(b,{path:"/",children:Object(s.jsx)(H,{children:Object(s.jsx)(z,{})})})]})})})},V=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,l=t.getTTFB;c(e),s(e),n(e),a(e),l(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(J,{})}),document.getElementById("root")),V()}},[[39,1,2]]]);
//# sourceMappingURL=main.9ba2432e.chunk.js.map