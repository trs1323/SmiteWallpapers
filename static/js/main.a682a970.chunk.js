(this.webpackJsonpssc=this.webpackJsonpssc||[]).push([[0],{14:function(e,t,s){},15:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),i=s(9),c=s.n(i),r=(s(14),s(15),s(2)),o=s(3),l=s(4),d=s(5),h=s(7),j=s(6),u=s(0),f=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).state={},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=[];Object.keys(this.props.allSkins).map((function(s,n){e.props.allSkins[s][0].includes(e.props.godName)&&t.push(e.props.allSkins[s])})),this.setState({filteredData:t})}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"skins-header ",children:[Object(u.jsx)("p",{onClick:this.props.goBack,children:"Go Back"}),Object(u.jsx)("h1",{className:"header",children:this.props.godName})]}),this.state.filteredData&&Object(u.jsx)("div",{className:"skins",children:this.state.filteredData.map((function(e,t){return Object(u.jsxs)("div",{className:"single-skin",children:[Object(u.jsxs)("div",{className:"single-skin",children:[Object(u.jsx)("img",{src:e[4],width:"300",alt:e[0]}),Object(u.jsx)("div",{className:"skin-name",children:Object(u.jsx)("p",{children:e[0]})})]}),Object(u.jsxs)("div",{className:"links",children:[Object(u.jsx)("a",{href:e[1],rel:"noreferrer",target:"_blank",children:"1920x1080"}),Object(u.jsx)("a",{href:e[2],rel:"noreferrer",target:"_blank",children:"2056x1446"}),Object(u.jsx)("a",{href:e[3],rel:"noreferrer",target:"_blank",children:"3840x2160"}),Object(u.jsx)("a",{href:e[4],rel:"noreferrer",target:"_blank",children:"1080x1920"})]})]},e[0])}))})]})}}]),s}(n.Component),p=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).sendSlug=function(){for(var t=function(t){var s="".concat(e.state.allUpdates[t].title).concat(e.state.allUpdates[t].id);if(e.state.allUpdates[t].real_categories.includes("PC")){if(15808===e.state.allUpdates[t].id)return"continue";fetch("https://cms.smitegame.com/wp-json/smite-api/get-post/1?slug=".concat(e.state.allUpdates[t].slug)).then((function(e){return e.json()})).then((function(n){var a,i,c,l=n.content.split("\n"),d=l.filter((function(e){return e.startsWith("<li><a href=")||e.startsWith('<p class="name">')||e.startsWith("<h3>")||e.startsWith("<h5>Recolor ")||e.startsWith("<h5>Shadows Over Hercopolis</h5>")||e.startsWith("<h5>Legend of the Foxes</h5>")}));for(a=0,i=(d=d.filter((function(e){return"<h5>Recolor &#8211; Shogun Hachiman</h5>"!==e&&"<h5>Recolor &#8211; Red Rum Baron Samedi</h5>"!==e&&"<h5>Recolor &#8211; Myrmidon Achilles</h5>"!==e}))).length;a<i;a+=5){var h=(c=d.slice(a,a+5))[0].indexOf(">",1),j=c[0].indexOf("<",1),u=c[0].slice(h+1,j);c[0]=u;var f="=",p=".jpg",m=c[1].indexOf(f),O=c[1].indexOf(p);-1===O&&(O=c[1].indexOf(".png"));var g=c[1].slice(m+2,O+4);c[1]=g,m=c[2].indexOf(f),-1===(O=c[2].indexOf(p))&&(O=c[2].indexOf(".png")),g=c[2].slice(m+2,O+4),c[2]=g,m=c[3].indexOf(f),-1===(O=c[3].indexOf(p))&&(O=c[3].indexOf(".png")),g=c[3].slice(m+2,O+4),c[3]=g,m=c[4].indexOf(f),-1===(O=c[4].indexOf(p))&&(O=c[4].indexOf(".png")),g=c[4].slice(m+2,O+4),c[4]=g;var b="".concat(t).concat(a);e.setState({allSkins:Object(o.a)(Object(o.a)({},e.state.allSkins),{},Object(r.a)({},b,c))})}e.setState(Object(r.a)({},s,Object(o.a)(Object(o.a)({},n),{},{new:l,filteredArr:d})))}),(function(e){console.log(e)}))}},s=0;s<e.state.allUpdates.length;s++)t(s)},e.setGodName=function(t){e.setState({godName:t,showGodSkins:!0})},e.goBack=function(){e.setState({showGodSkins:!1})},e.state={allSkins:{},showGodSkins:!1,godName:""},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cms.smitegame.com/wp-json/smite-api/get-posts/1?tag=update-notes&per_page=10000").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,allUpdates:t}),e.sendSlug()}),(function(t){e.setState({isLoaded:!0,error:t})})),fetch("https://cms.smitegame.com/wp-json/smite-api/all-gods/1?").then((function(e){return e.json()})).then((function(t){e.setState({gods:t})}))}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{children:[this.state.showGodSkins?Object(u.jsx)("div",{children:Object(u.jsx)(f,{allSkins:this.state.allSkins,godName:this.state.godName,goBack:this.goBack})}):this.state.gods&&Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"header",children:"Smite Card Art Wallpapers"}),Object(u.jsx)("div",{className:"home",children:this.state.gods.map((function(t,s){return Object(u.jsxs)("div",{onClick:function(){return e.setGodName(t.name)},className:"single-god",id:t.name.replace(/\s/g,""),children:[Object(u.jsx)("div",{className:"home-godcardart",children:Object(u.jsx)("img",{src:t.card.replace(/[']/g,""),alt:t.name})}),Object(u.jsx)("div",{className:"god-name",children:Object(u.jsx)("p",{onClick:function(){return e.setGodName(t.name)},children:t.name})})]},t.id)}))})]}),Object(u.jsxs)("footer",{className:"footer",children:[Object(u.jsx)("p",{children:"Smite Wallpapers By Tanner Shilson."}),Object(u.jsx)("p",{children:"Data & Art provided by Hi-Rez Studios. \xa9 Hi-Rez Studios, Inc. All rights reserved."})]})]})}}]),s}(n.Component);var m=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(p,{})})},O=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,18)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),n(e),a(e),i(e),c(e)}))};c.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.a682a970.chunk.js.map