(this["webpackJsonpcellar-fe"]=this["webpackJsonpcellar-fe"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),i=n.n(c),o=(n(15),n(1)),s=n.n(o),l=n(2),u=n(3),h=n(5),m=n(4),p=n(6),d=function(){return fetch("https://the-vino-cellar.herokuapp.com/api/v1/vinos").then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return e.message}))},v=function(e){var t={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}};return fetch("https://the-vino-cellar.herokuapp.com/api/v1/vinos",t).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return e.message}))},f=function(e){return fetch("https://the-vino-cellar.herokuapp.com/api/v1/vinos/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return e.message}))},y=n(9),g=(n(17),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(y.a)({},a,r))},n.handleSubmit=function(e){return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,s.a.awrap(v(n.state));case 3:n.props.getWines(),n.setState({vineyard:"",name:"",color:"",type:"",year:"",rating:""});case 5:case"end":return t.stop()}}))},n.state={vineyard:"",name:"",color:"",type:"",year:"",rating:""},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"WineForm"},r.a.createElement("h2",{className:"add-wine"},"Add Wine"),r.a.createElement("form",{className:"wine-input",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",value:this.state.vineyard,name:"vineyard",placeholder:"Vineyard",onChange:this.handleChange}),r.a.createElement("input",{type:"text",value:this.state.name,name:"name",placeholder:"Bottle Name",onChange:this.handleChange}),r.a.createElement("input",{type:"text",value:this.state.color,name:"color",placeholder:"Color",onChange:this.handleChange}),r.a.createElement("input",{type:"text",value:this.state.type,name:"type",placeholder:"Type",onChange:this.handleChange}),r.a.createElement("input",{type:"number",value:this.state.year,name:"year",placeholder:"Year",onChange:this.handleChange}),r.a.createElement("input",{type:"number",value:this.state.rating,name:"rating",placeholder:"Rating",onChange:this.handleChange}),r.a.createElement("button",{className:"add"},"Submit")))}}]),t}(a.Component)),E=(n(18),function(e){var t=e.id,n=e.vineyard,a=e.name,c=e.color,i=e.type,o=e.year,s=e.rating,l=e.removeVino;return r.a.createElement("div",{className:"vino"},r.a.createElement("h3",{className:"vineyard"},n),r.a.createElement("h4",{className:"name"},a),r.a.createElement("p",{className:"color"},c),r.a.createElement("p",{className:"type"},i),r.a.createElement("p",{className:"year"},"Year: ",o),r.a.createElement("p",{className:"rating"},"Rating: ",s),r.a.createElement("button",{className:"delete",onClick:function(){return l(t)}},"Delete Wine"))}),w=(n(19),function(e){var t=e.wines,n=e.removeVino,a=t.map((function(e){return r.a.createElement(E,{id:e.id,vineyard:e.vineyard,name:e.name,color:e.color,type:e.type,year:e.year,rating:e.rating,removeVino:n})}));return r.a.createElement("div",{className:"wines"},r.a.createElement("h2",{className:"wine"},"Your Cellar"),r.a.createElement("section",{className:"wine-container"},a))}),b=(n(20),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(h.a)(this,Object(m.a)(t).call(this))).getWines=function(){return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(d().then((function(t){return e.setState({wines:t})})).catch((function(e){return e.message})));case 2:case"end":return t.stop()}}))},e.removeVino=function(t){return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.awrap(f(t));case 2:e.getWines();case 3:case"end":return n.stop()}}))},e.state={wines:[]},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getWines()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Vino Cellar"),r.a.createElement("section",null,r.a.createElement(g,{getWines:this.getWines}),r.a.createElement(w,{wines:this.state.wines,removeVino:this.removeVino})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.7b61302b.chunk.js.map