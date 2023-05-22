"use strict";(self.webpackChunkfootball_results=self.webpackChunkfootball_results||[]).push([[84],{3084:function(n,e,s){s.r(e),s.d(e,{default:function(){return Y}});var t,r,o,i,a,l,u,c,d,x,g,Z,h,f,p,j=s(9439),w=s(2791),b=s(1413),m=s(168),v=s(6444),y=v.ZP.div(t||(t=(0,m.Z)(["\n  padding-left: 15px;\n  padding-right: 15px;\n\n  margin: 0 auto;\n  width: 800px;\n"]))),F=s(184),S=function(n){var e=n.children;return(0,F.jsx)(y,{children:e})},k=v.ZP.section(r||(r=(0,m.Z)(["\n  padding: 10px 0;\n  display: flex;\n  justify-content: center;\n"]))),P=v.ZP.caption(o||(o=(0,m.Z)(["\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 10px;\n"]))),A=v.ZP.table(i||(i=(0,m.Z)(["\n  border-collapse: collapse;\n"]))),C=v.ZP.thead(a||(a=(0,m.Z)(["\n  background-color: #95b7e6;\n  color: white;\n  text-transform: uppercase;\n"]))),q=v.ZP.tr(l||(l=(0,m.Z)(["\n  text-align: center;\n"]))),T=v.ZP.th(u||(u=(0,m.Z)(["\n  font-weight: 500;\n  width: 90px;\n  padding: 5px;\n  border: 1px solid #2a2a2a;\n"]))),O=v.ZP.td(c||(c=(0,m.Z)(["\n  width: 90px;\n  padding: 5px;\n  border: 1px solid #2a2a2a;\n"]))),E=function(n){n.bavovna,n.kabans,n.pensy;var e=n.teams;return(0,F.jsx)(S,{children:(0,F.jsx)(k,{children:(0,F.jsxs)(A,{children:[(0,F.jsx)(P,{children:"Vsrata Lite League"}),(0,F.jsx)(C,{children:(0,F.jsxs)(q,{children:[(0,F.jsx)(T,{children:"\u041a\u043e\u043c\u0430\u043d\u0434\u0438"}),(0,F.jsx)(T,{children:"\u041f\u0435\u0440\u0435\u043c"}),(0,F.jsx)(T,{children:"\u041d\u0456\u0447\u0438\u0457"}),(0,F.jsx)(T,{children:"\u041f\u043e\u0440\u0430\u0437"}),(0,F.jsx)(T,{children:"\u0417\u0430\u0431\u0438\u0442\u043e"}),(0,F.jsx)(T,{children:"\u041f\u0440\u043e\u043f\u0443\u0449"}),(0,F.jsx)(T,{children:"\u0420\u0456\u0437\u043d"}),(0,F.jsx)(T,{children:"\u041e\u0447\u043a\u0438"})]})}),(0,F.jsx)("tbody",{children:e.map((function(n){return(0,F.jsxs)(q,{children:[(0,F.jsx)(O,{children:n.name}),(0,F.jsx)(O,{children:n.results.wins}),(0,F.jsx)(O,{children:n.results.draws}),(0,F.jsx)(O,{children:n.results.losses}),(0,F.jsx)(O,{children:n.results.goalsFor}),(0,F.jsx)(O,{children:n.results.goalsAgainst}),(0,F.jsx)(O,{children:n.results.goalsFor-n.results.goalsAgainst}),(0,F.jsx)(O,{children:3*n.results.wins+n.results.draws})]},n._id)}))})]})})})},L=s(3433),B=v.ZP.li(d||(d=(0,m.Z)(["\n  display: flex;\n  gap: 10px;\n  padding: 10px 0;\n  justify-content: center;\n  align-items: center;\n\n  :nth-child(2n + 1) {\n    background-color: rgb(230, 230, 230);\n  }\n"]))),K=v.ZP.div(x||(x=(0,m.Z)([""]))),_=v.ZP.button(g||(g=(0,m.Z)(["\n  border: none;\n  border-radius: 3px;\n  padding: 3px;\n  background-color: #95b7e6;\n"]))),z=(v.ZP.button(Z||(Z=(0,m.Z)(["\n  border: none;\n  border-radius: 3px;\n  padding: 3px;\n  background-color: #95b7e6;\n  &:hover {\n    background-color: rgb(113, 180, 235);\n  }\n"]))),v.ZP.ul(h||(h=(0,m.Z)([""])))),R=v.ZP.div(f||(f=(0,m.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.3);\n  z-index: 1200;\n"]))),I=v.ZP.div(p||(p=(0,m.Z)(["\n  width: 400px;\n  height: 200px;\n  padding: 10px;\n  background-color: #fff;\n"]))),V=s(4164),D=document.querySelector("#modal-root"),G=function(n){var e=n.onClose,s=n.children;(0,w.useEffect)((function(){return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}));var t=function(n){"Escape"===n.code&&e()};return(0,V.createPortal)((0,F.jsx)(R,{onClick:function(n){n.target===n.currentTarget&&e()},children:(0,F.jsx)(I,{children:s})}),D)},H=s(887),J=function(n){var e=n.team,s=n.submit,t=n.increment,r=n.close,o=(0,H.cI)(),i=o.register,a=o.handleSubmit;return(0,F.jsxs)("form",{onSubmit:a((function(n){console.log(n),s(n),t(),r()})),children:[(0,F.jsxs)("div",{role:"group","aria-label":"Select a value",children:[(0,F.jsx)("p",{children:"\u0413\u043e\u043b \u0437\u0430\u0431\u0438\u0432:"}),e.map((function(n){return(0,F.jsxs)("label",{children:[(0,F.jsx)("input",(0,b.Z)({type:"radio",value:n},i("goal"))),n]})})),(0,F.jsx)("p",{children:"\u041f\u0430\u0441 \u0432\u0456\u0434\u0434\u0430\u0432:"}),e.map((function(n){return(0,F.jsxs)("label",{children:[(0,F.jsx)("input",(0,b.Z)({type:"radio",value:n},i("pass"))),n]})}))]}),(0,F.jsx)("button",{type:"submit",children:"\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u0438"})]})},M=function(n){var e=n.updateFunction,s=n.teamOne,t=n.teamTwo,r=n.teamOneSquad,o=n.teamTwoSquad,i=(0,w.useState)(!1),a=(0,j.Z)(i,2),l=a[0],u=a[1],c=(0,w.useState)(!1),d=(0,j.Z)(c,2),x=d[0],g=d[1],Z=(0,w.useState)(0),h=(0,j.Z)(Z,2),f=h[0],p=h[1],b=(0,w.useState)(0),m=(0,j.Z)(b,2),v=m[0],y=m[1],S=(0,w.useState)(!1),k=(0,j.Z)(S,2),P=k[0],A=k[1],C=(0,w.useState)([]),q=(0,j.Z)(C,2),T=q[0],O=q[1],E=(0,w.useState)([]),R=(0,j.Z)(E,2),I=R[0],V=R[1],D=function(){u(!l)},H=function(){g(!x)};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(B,{children:[(0,F.jsx)(z,{children:T.map((function(n){return(0,F.jsxs)("li",{children:[(0,F.jsx)("span",{style:{marginRight:8},children:n.pass}),(0,F.jsx)("span",{children:n.goal})]})}))}),(0,F.jsx)("p",{children:s}),!P&&(0,F.jsx)(_,{type:"button",onClick:function(){return u(!0)},children:"+"}),(0,F.jsxs)(K,{children:[(0,F.jsx)("span",{children:f}),(0,F.jsx)("span",{children:"-"}),(0,F.jsx)("span",{children:v})]}),!P&&(0,F.jsx)(_,{type:"button",onClick:function(){return g(!0)},children:"+"}),(0,F.jsx)("p",{children:t}),(0,F.jsx)(z,{children:I.map((function(n){return(0,F.jsxs)("li",{children:[(0,F.jsx)("span",{style:{marginRight:8},children:n.goal}),(0,F.jsx)("span",{children:n.pass})]})}))}),(0,F.jsx)(_,{disabled:P,type:"button",onClick:function(){A(!0),e(f,v)},children:"\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u0438"})]}),l&&(0,F.jsxs)(G,{onClose:D,children:[(0,F.jsx)(_,{type:"button",onClick:D,children:"\u0425"}),(0,F.jsx)(J,{team:r,submit:function(n){O([].concat((0,L.Z)(T),[n]))},increment:function(){p((function(n){return n+1}))},close:D})]}),x&&(0,F.jsxs)(G,{onClose:H,children:[(0,F.jsx)(_,{type:"button",onClick:H,children:"\u0425"}),(0,F.jsx)(J,{team:o,submit:function(n){V([].concat((0,L.Z)(I),[n]))},increment:function(){y((function(n){return n+1}))},close:H})]})]})},N=["\u041c\u043a\u0420\u0435\u0439","\u0414\u0456\u043c\u0430\u0441","\u0420\u0430\u0444\u0430","\u0411\u0456\u043b\u0438\u0439","\u0420\u0430\u043c\u043e\u043d"],Q=["\u0421\u0442\u0430\u0441","\u0421\u0430\u0441","\u0412\u0454\u0442\u0430\u043b\u044c","\u0404\u0432\u0433\u0435\u043d","\u0414\u0456\u043c\u043e\u043d"],U=["\u0416\u0435\u043a\u0430","\u0422\u044c\u043e\u0441\u0441\u0430","\u0421\u0414","\u0424\u0456\u043b","\u0421\u043b\u0430\u0432\u0430"],W=function(n){var e=n.updateBavovnaKabans,s=n.updateBavovnaPensy,t=n.updateKabansPensy;return(0,F.jsx)(S,{children:(0,F.jsxs)("ul",{children:[(0,F.jsx)(M,{updateFunction:e,teamOne:"\u0411\u0430\u0432\u043e\u0432\u043d\u0430",teamTwo:"\u041a\u0430\u0431\u0430\u043d\u0438",teamOneSquad:N,teamTwoSquad:Q}),(0,F.jsx)(M,{updateFunction:s,teamOne:"\u0411\u0430\u0432\u043e\u0432\u043d\u0430",teamTwo:"\u041f\u0435\u043d\u0441\u0438",teamOneSquad:N,teamTwoSquad:U}),(0,F.jsx)(M,{updateFunction:t,teamOne:"\u041a\u0430\u0431\u0430\u043d\u0438",teamTwo:"\u041f\u0435\u043d\u0441\u0438",teamOneSquad:Q,teamTwoSquad:U})]})})},X=s(1623);function Y(){var n=(0,w.useState)([]),e=(0,j.Z)(n,2),s=e[0],t=e[1],r=(0,w.useState)({wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0}),o=(0,j.Z)(r,2),i=o[0],a=o[1],l=(0,w.useState)({wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0}),u=(0,j.Z)(l,2),c=u[0],d=u[1],x=(0,w.useState)({wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0}),g=(0,j.Z)(x,2),Z=g[0],h=g[1];return(0,w.useEffect)((function(){(0,X.L)().then(t)}),[]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(E,{bavovna:i,kabans:c,pensy:Z,teams:s}),(0,F.jsx)(W,{updateBavovnaKabans:function(n,e){!function(n,e,s,t){s((function(s){return(0,b.Z)((0,b.Z)({},s),{},{goalsFor:s.goalsFor+n,goalsAgainst:s.goalsAgainst+e})})),t((function(s){return(0,b.Z)((0,b.Z)({},s),{},{goalsFor:s.goalsFor+e,goalsAgainst:s.goalsAgainst+n})})),n>e&&(s((function(n){return(0,b.Z)((0,b.Z)({},n),{},{wins:n.wins+1})})),t((function(n){return(0,b.Z)((0,b.Z)({},n),{},{losses:n.losses+1})}))),n<e&&(s((function(n){return(0,b.Z)((0,b.Z)({},n),{},{losses:n.losses+1})})),t((function(n){return(0,b.Z)((0,b.Z)({},n),{},{wins:n.wins+1})}))),n===e&&(s((function(n){return(0,b.Z)((0,b.Z)({},n),{},{draws:n.draws+1})})),t((function(n){return(0,b.Z)((0,b.Z)({},n),{},{draws:n.draws+1})})))}(n,e,a,d)},updateBavovnaPensy:function(n,e){!function(n,e,s,t){s((function(s){return(0,b.Z)((0,b.Z)({},s),{},{goalsFor:s.goalsFor+n,goalsAgainst:s.goalsAgainst+e})})),t((function(s){return(0,b.Z)((0,b.Z)({},s),{},{goalsFor:s.goalsFor+e,goalsAgainst:s.goalsAgainst+n})})),n>e&&(s((function(n){return(0,b.Z)((0,b.Z)({},n),{},{wins:n.wins+1})})),t((function(n){return(0,b.Z)((0,b.Z)({},n),{},{losses:n.losses+1})}))),n<e&&(s((function(n){return(0,b.Z)((0,b.Z)({},n),{},{losses:n.losses+1})})),t((function(n){return(0,b.Z)((0,b.Z)({},n),{},{wins:n.wins+1})}))),n===e&&(s((function(n){return(0,b.Z)((0,b.Z)({},n),{},{draws:n.draws+1})})),t((function(n){return(0,b.Z)((0,b.Z)({},n),{},{draws:n.draws+1})})))}(n,e,a,h)},updateKabansPensy:function(n,e){!function(n,e,s,t){s((function(s){return(0,b.Z)((0,b.Z)({},s),{},{goalsFor:s.goalsFor+n,goalsAgainst:s.goalsAgainst+e})})),t((function(s){return(0,b.Z)((0,b.Z)({},s),{},{goalsFor:s.goalsFor+e,goalsAgainst:s.goalsAgainst+n})})),n>e&&(s((function(n){return(0,b.Z)((0,b.Z)({},n),{},{wins:n.wins+1})})),t((function(n){return(0,b.Z)((0,b.Z)({},n),{},{losses:n.losses+1})}))),n<e&&(s((function(n){return(0,b.Z)((0,b.Z)({},n),{},{losses:n.losses+1})})),t((function(n){return(0,b.Z)((0,b.Z)({},n),{},{wins:n.wins+1})}))),n===e&&(s((function(n){return(0,b.Z)((0,b.Z)({},n),{},{draws:n.draws+1})})),t((function(n){return(0,b.Z)((0,b.Z)({},n),{},{draws:n.draws+1})})))}(n,e,d,h)}})]})}}}]);
//# sourceMappingURL=84.c414f55f.chunk.js.map