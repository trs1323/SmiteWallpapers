(this.webpackJsonpssc=this.webpackJsonpssc||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n.n(s),a=n(20),c=n.n(a),r=(n(26),n(27),n(10)),o=n(17),l=n(11),d=n(12),h=n(14),j=n(13),u=n(8),p=n(1),m=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={},e}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(){var e=this;window.onpopstate=function(t){e.props.goBack()}}},{key:"componentDidMount",value:function(){var e=this,t=[];Object.keys(this.props.allSkins).map((function(n,s){e.props.allSkins[n][0].includes(e.props.godName)&&t.push(e.props.allSkins[n])})),this.setState({filteredData:t})}},{key:"render",value:function(){return Object(p.jsx)(u.a,{children:Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"skins-header ",children:[Object(p.jsx)(u.b,{to:"/",children:Object(p.jsx)("h1",{className:"go-back",onClick:this.props.goBack,children:"Go Back"})}),Object(p.jsx)("h1",{className:"header",children:this.props.godName})]}),this.state.filteredData&&Object(p.jsx)("div",{className:"skins",children:this.state.filteredData.map((function(e,t){return Object(p.jsxs)("div",{className:"single-skin",children:[Object(p.jsxs)("div",{className:"single-skin",children:[Object(p.jsx)("img",{src:e[4],width:"300",alt:e[0]}),Object(p.jsx)("div",{className:"skin-name",children:Object(p.jsx)("p",{children:e[0]})})]}),Object(p.jsxs)("div",{className:"links",children:[Object(p.jsx)("a",{href:e[1],rel:"noreferrer",target:"_blank",children:"1920x1080"}),Object(p.jsx)("a",{href:e[2],rel:"noreferrer",target:"_blank",children:"2056x1446"}),Object(p.jsx)("a",{href:e[3],rel:"noreferrer",target:"_blank",children:"3840x2160"}),Object(p.jsx)("a",{href:e[4],rel:"noreferrer",target:"_blank",children:"Mobile"})]})]},e[0]+t)}))})]})})}}]),n}(s.Component),f=n(2),b=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).getAllUpdates=function(){return new Promise((function(t,n){fetch("https://cms.smitegame.com/wp-json/smite-api/get-posts/1?tag=update-notes&per_page=10000",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(n){var s=n.filter((function(e){return e.real_categories.includes("PC")}));e.setState({allUpdates:s}),fetch("https://cms.smitegame.com/wp-json/smite-api/all-gods/1?",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(n){e.setState({gods:n}),t()}))}))}))},e.sendSlug=function(){return new Promise((function(t,n){for(var s=function(n){if(e.state.allUpdates[n].real_categories.includes("PC")){if(15808===e.state.allUpdates[n].id)return"continue";fetch("https://cms.smitegame.com/wp-json/smite-api/get-post/1?slug=".concat(e.state.allUpdates[n].slug),{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(s){var i,a,c,l=s.content.split("\n").filter((function(e){return e.startsWith("<li><a href=")||e.startsWith('<p class="name">')||e.startsWith("<h3>")||e.startsWith("<h5>Recolor ")||e.startsWith("<h5>Shadows Over Hercopolis</h5>")||e.startsWith("<h5>Legend of the Foxes</h5>")}));for(i=0,a=(l=l.filter((function(e){return"<h5>Recolor &#8211; Shogun Hachiman</h5>"!==e&&"<h5>Recolor &#8211; Red Rum Baron Samedi</h5>"!==e&&"<h5>Recolor &#8211; Myrmidon Achilles</h5>"!==e&&'<li><a href="https://www.smitegame.com/news/8-6-bonus-update-notes-live-june-29/">More details here</a>!</li>'!==e&&'<li><a href="https://www.smitegame.com/news/8-8-bonus-update-notes-live-september-7th/">More details here!</a></li>'!==e}))).length;i<a;i+=5){var d=(c=l.slice(i,i+5))[0].indexOf(">",1),h=c[0].indexOf("<",1),j=c[0].slice(d+1,h);c[0]=j;var u="=",p=".jpg",m=c[1].indexOf(u),f=c[1].indexOf(p);-1===f&&(f=c[1].indexOf(".png"));var b=c[1].slice(m+2,f+4);c[1]=b,m=c[2].indexOf(u),-1===(f=c[2].indexOf(p))&&(f=c[2].indexOf(".png")),b=c[2].slice(m+2,f+4),c[2]=b,m=c[3].indexOf(u),-1===(f=c[3].indexOf(p))&&(f=c[3].indexOf(".png")),b=c[3].slice(m+2,f+4),c[3]=b,m=c[4].indexOf(u),-1===(f=c[4].indexOf(p))&&(f=c[4].indexOf(".png")),b=c[4].slice(m+2,f+4),c[4]=b;var O="".concat(n).concat(i);e.setState({allSkins:Object(o.a)(Object(o.a)({},e.state.allSkins),{},Object(r.a)({},O,c))}),Object.keys(e.state.allSkins).length>750&&t()}}),(function(e){console.log(e)}))}},i=0;i<e.state.allUpdates.length;i++)s(i)}))},e.setGodName=function(t){e.setState({godName:t,showGodSkins:!0})},e.goBack=function(){e.setState({showGodSkins:!1})},e.filterSkinsToGods=function(){Object.keys(e.state.gods).map((function(t,n){Object.keys(e.state.allSkins).map((function(n,s){e.state.allSkins[n][0].includes(t.god_name_EN)}))}))},e.promise=function(){e.getAllUpdates().then((function(){e.sendSlug().then((function(){e.setState({skinsloaded:!0})}))}))},e.state={allSkins:{},skinsloaded:!1,showGodSkins:!1,godName:""},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.promise()}},{key:"render",value:function(){var e=this;return Object(p.jsx)(u.a,{children:Object(p.jsx)(f.c,{children:Object(p.jsxs)("div",{children:[this.state.showGodSkins?Object(p.jsx)(f.a,{path:"/skins",children:Object(p.jsx)("div",{children:Object(p.jsx)(m,{allSkins:this.state.allSkins,godName:this.state.godName,goBack:this.goBack})})}):this.state.gods&&this.state.skinsloaded?Object(p.jsxs)(f.a,{path:"/",children:[" ",Object(p.jsx)("div",{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:"header",children:"Smite Card Art Wallpapers"}),Object(p.jsx)("div",{className:"home",children:this.state.gods.map((function(t,n){return Object(p.jsx)(u.b,{to:"skins",children:Object(p.jsxs)("div",{onClick:function(){return e.setGodName(t.name)},className:"single-god",id:t.name.replace(/\s/g,""),children:[Object(p.jsx)("div",{className:"home-godcardart",children:Object(p.jsx)("img",{src:t.card.replace(/[']/g,""),alt:t.name})}),Object(p.jsx)("div",{className:"god-name",children:Object(p.jsx)("p",{onClick:function(){return e.setGodName(t.name)},children:t.name})})]})},t.id)}))})]})})]}):Object(p.jsx)("h1",{className:"loading",children:"Loading..."}),Object(p.jsxs)("footer",{className:"footer",children:[Object(p.jsx)("p",{children:"Smite Wallpapers By Tanner Shilson."}),Object(p.jsx)("p",{children:"Data & Art provided by Hi-Rez Studios. \xa9 Hi-Rez Studios, Inc. All rights reserved."})]})]})})})}}]),n}(s.Component);var O=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(b,{})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),i(e),a(e),c(e)}))};c.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(O,{})}),document.getElementById("root")),g()}},[[37,1,2]]]);
//# sourceMappingURL=main.1c4270a0.chunk.js.map