(this["webpackJsonpphase-tracker"]=this["webpackJsonpphase-tracker"]||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(6),c=a.n(r),s=(a(16),a(7)),o=a(8),l=a(10),u=a(9),d=a(21),m=a(22),p=(a(17),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).createCards=function(){var e={1:{title:"Upkeep",description:"Untap, Draw"},2:{title:"Main Phase 1",description:"Play one land, any card you can cast, activate abilities on creatures"},3:{title:"Declare Attacks",description:"Play instants, activate abilities on creatures"},4:{title:"Declare Blocks",description:"Play instants, activate abilities on creatures"},5:{title:"Damage",description:"Play instants, activate abilities on creatures"},6:{title:"Main Phase 2",description:"Play one land if not played yet, any card you can cast, activate abilities on creatures"},7:{title:"End Step",description:"Play instants, activate abilities on creatures"}};return Object.keys(e).map((function(t){return i.a.createElement(d.a,{style:{flex:1,maxHeight:"12%"},text:"dark",className:"mb-2",bg:n.state.counter==t?"":"secondary"},i.a.createElement(d.a.Body,null,i.a.createElement(d.a.Title,{style:{fontSize:"1.3vw"}},e[t].title),i.a.createElement(d.a.Text,{style:{fontSize:".99vw"}},e[t].description)))}))},n.increment=function(){n.setState({counter:n.state.counter<7?n.state.counter+1:1}),console.log(n.state.counter)},n.state={counter:1},n}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"App",style:{maxHeight:"95vh"}},i.a.createElement("header",{className:"App-header",style:{height:"90vh"}},i.a.createElement("div",{style:{display:"flex",flexDirection:"column",maxHeight:"90vh"}},this.createCards()),i.a.createElement(m.a,{variant:"primary",onClick:this.increment},"Next"))))}}]),a}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(18);c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.ac5947f3.chunk.js.map