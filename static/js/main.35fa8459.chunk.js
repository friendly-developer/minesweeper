(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(7),i=n.n(c),s=n(2),o=n(5),u=n(11),l=n(8),j=n(9),O=n(12),v=n(10),d=n(0),p=function(e){Object(O.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isClicked:!1},e.onClick=function(t){t.preventDefault(),t.stopPropagation(),e.state.isClicked||e.props.gameOver||e.setState({isClicked:!0},e.callOnUpdate)},e}return Object(j.a)(n,[{key:"callOnUpdate",value:function(){var e=this.props;(0,e.onUpdate)(e.row,e.col)}},{key:"render",value:function(){var e=this.state.isClicked,t=this.props,n=t.distance,r=void 0===n?"":n,a=t.isMine?"\u2205":r,c=e?"sweeper-cell open":"sweeper-cell";return Object(d.jsx)("div",{className:c,onClick:this.onClick,children:e&&a?a:""})}}]),n}(a.a.Component),b=function(){for(var e=0,t={};e<10;){var n=Math.ceil(100*Math.random())-1;!t[n]&&n<100&&(t[String(n).padStart(2,"0")]=!0,e+=1)}return t},f=function(e,t,n){for(var r=0,a=e-1;a<=e+1;a+=1)for(var c=t-1;c<=t+1;c+=1)if(!(c<0||c>=n.length)){var i=n[c][a];i&&i.isMine&&(r+=1)}return r},h=function(e,t){for(var n=[],r=b(),a=0;a<e;a+=1){for(var c=[],i=0;i<t;i+=1){var s={};r["".concat(a).concat(i)]&&(s.isMine=!0),c.push(s)}n.push(c)}return n}(10,10);var m=function(e){var t=e.updateGameOver,n=e.gameOver,a=e.updateCounter,c=Object(r.useState)(h),i=Object(s.a)(c,2),l=i[0],j=i[1],O=Object(r.useState)(0),v=Object(s.a)(O,2),b=v[0],m=v[1];Object(r.useEffect)((function(){a(b)}),[b]);var x,g=function(e,n){var r=Object(u.a)(l),a=r[n][e];a.isMine?t(!0):(r[n][e]=Object(o.a)(Object(o.a)({},a),{},{distance:f(e,n,l)}),j(r),m(b+1))};return Object(d.jsx)("div",{className:"sweeper-grid",children:(x=l,x.map((function(e,t){return Object(d.jsx)("div",{className:"sweeper-cols",children:e.map((function(e,r){return Object(d.jsx)(p,Object(o.a)({onUpdate:g,row:r,col:t,gameOver:n},e),"".concat(t,"-").concat(r))}))},t)})))})},x=function(e){var t=e.remaining,n=e.gameOver,r=100-t;return Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly"},children:[Object(d.jsxs)("h2",{children:["Total Mines: ",10]}),10===r&&Object(d.jsx)("h2",{children:"You Won! Congrats"}),n?Object(d.jsx)("h2",{children:"Game Over! Better luck next time..!"}):Object(d.jsxs)("h2",{children:["Remaining Cells: ",r]})]})};var g=function(){var e=Object(r.useState)(0),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),i=Object(s.a)(c,2),o=i[0],u=i[1];return Object(d.jsxs)("div",{className:"sweeper-container",children:[Object(d.jsx)(x,{remaining:n,gameOver:o}),Object(d.jsx)(m,{updateCounter:a,updateGameOver:u,gameOver:o})]})};n(18);var C=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(g,{})})};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.35fa8459.chunk.js.map