(this["webpackJsonpspring-cards-stack"]=this["webpackJsonpspring-cards-stack"]||[]).push([[0],{25:function(t,e,a){t.exports={container:"styles_container__2JaxF",deck:"styles_deck__2UAnu"}},36:function(t,e,a){},37:function(t,e,a){"use strict";a.r(e);var i=a(1),n=a.n(i),r=a(20),c=a.n(r),o=a(18),s=a(4),d=a(16),p=a(29),u=a(25),j=a.n(u),g=a(9),l=["https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg","https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg","https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg","https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg","https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg","https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg"],_=function(t){return{x:0,y:-4*t,scale:1,rot:20*Math.random()-10,delay:100*t}},b=function(t,e){return"perspective(1500px) rotateX(30deg) rotateY(".concat(t/10,"deg) rotateZ(").concat(t,"deg) scale(").concat(e,")")};function h(){var t=Object(i.useState)((function(){return new Set})),e=Object(s.a)(t,1)[0],a=Object(d.useSprings)(l.length,(function(t){return Object(o.a)(Object(o.a)({},_(t)),{},{from:{x:0,rot:0,scale:1.5,y:200}})})),n=Object(s.a)(a,2),r=n[0],c=n[1],u=Object(p.a)((function(t){var a=Object(s.a)(t.args,1)[0],i=t.down,n=Object(s.a)(t.movement,1)[0],r=Object(s.a)(t.direction,1)[0],o=t.velocity,d=r<0?-1:1;!i&&o>.2&&e.add(a),c.start((function(t){if(a===t){var r=e.has(a);return{x:r?(200+window.innerWidth)*d:i?n:0,rot:n/100+(r?10*d*o:0),scale:i?1.1:1,delay:void 0,config:{friction:50,tension:i?800:r?200:500}}}})),i||e.size!==l.length||setTimeout((function(){e.clear(),c.start((function(t){return _(t)}))}),600)}));return Object(g.jsx)(g.Fragment,{children:r.map((function(t,e){var a=t.x,i=t.y,n=t.rot,r=t.scale;return Object(g.jsx)(d.animated.div,{className:j.a.deck,style:{x:a,y:i},children:Object(g.jsx)(d.animated.div,Object(o.a)(Object(o.a)({},u(e)),{},{style:{transform:Object(d.to)([n,r],b),backgroundImage:"url(".concat(l[e],")")}}))},e)}))})}function m(){return Object(g.jsx)("div",{className:j.a.container,children:Object(g.jsx)(h,{})})}a(36);var f=document.getElementById("root");c.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(m,{})}),f)}},[[37,1,2]]]);
//# sourceMappingURL=main.aed1301b.chunk.js.map