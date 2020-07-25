(this["webpackJsonpreact-conways-game-of-life"]=this["webpackJsonpreact-conways-game-of-life"]||[]).push([[0],{25:function(e,t,n){},58:function(e,t,n){e.exports=n(74)},63:function(e,t,n){},70:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(12),o=n.n(i),c=(n(63),n(41)),s=n.n(c),u=n(49),l=n(13),d=n(14),p=n(16),h=n(15),f=n(7),v={RUN_STOP:"RUN_STOP",UPDATE_BOARD:"UPDATE_BOARD",UPDATE_SIZE:"UPDATE_SIZE",UPDATE_SCORE:"UPDATE_SCORE",UPDATE_TIMER:"UPDATE_TIMER",TOGGLE_TORUS:"TOGGLE_TORUS",SAVE_PATTERN:"SAVE_PATTERN",DELETE_PATTERN:"DELETE_PATTERN",SELECT_PATTERN:"SELECT_PATTERN"};function m(e,t,n,a,r){return E(e-1,t-1,n,a,r)+E(e-1,t+0,n,a,r)+E(e-1,t+1,n,a,r)+E(e+0,t-1,n,a,r)+E(e+0,t+1,n,a,r)+E(e+1,t-1,n,a,r)+E(e+1,t+0,n,a,r)+E(e+1,t+1,n,a,r)}function E(e,t,n,a,r){return r&&(t>=a?t-=a:t<0&&(t+=a),e>=a?e-=a:e<0&&(e+=a)),e>=0&&t<a&&e>=0&&e<a&&n[e][t]?1:0}var g=function(e){return{type:v.RUN_STOP,payload:!e}},T=function(e){return{type:v.UPDATE_BOARD,payload:e}},b=function(e){return{type:v.UPDATE_SIZE,payload:e}},y=function(){return function(e,t){var n=t().board.gridSize,a=new Array(n).fill(!1).map((function(){return new Array(n).fill(!1)}));Object(f.b)((function(){e(P("initial")),e(g(!0)),e(T(a)),e(O(0))}))}},S=function(e){return{type:v.TOGGLE_TORUS,payload:!e}},O=function(e){return{type:v.UPDATE_SCORE,payload:e}},P=function(e){return{type:v.SELECT_PATTERN,payload:e}},R=function(){return function(e,t){var n=new Date,a=t().board;t().board.savedPatterns.some((function(e){return JSON.stringify(e.board)===JSON.stringify(a.boardTiles)}))||Object(f.b)((function(){e({type:v.SAVE_PATTERN,payload:{date:n,board:a.boardTiles,gridSize:a.gridSize,score:a.score,isTorus:a.torusMode}}),e(P(n.toString()))})),t().startstop&&e(P("initial"))}},A=function(e){return function(t){Object(f.b)((function(){t(T(e.board)),t(P(e.date.toString())),t(O(e.score)),t(S(!e.isTorus)),t(b(e.gridSize))}))}},C=function(){return function(e,t){var n=t().board,a=function(e,t,n){for(var a=new Array(t).fill(!1).map((function(){return new Array(t).fill(!1)})),r=t*t,i=0;i<t;i++)for(var o=0;o<t;o++){var c=m(i,o,e,t,n);e[i][o]&&c>=2&&c<=3?a[i][o]=!0:e[i][o]||3!==c?r--:a[i][o]=!0}return{nextBoard:a,numAlive:r}}(n.boardTiles,n.gridSize,n.torusMode),r=a.nextBoard,i=a.numAlive;Object(f.b)((function(){e(T(r)),e(function(e,t){return{type:v.UPDATE_SCORE,payload:e+t}}(n.score,i))})),0===i&&e(g(!0))}},j=(n(70),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={interval:null,board:a.props.board},a.canvasRef=r.a.createRef(),a.gridHeight=0,a.squareHeight=0,a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.setGridDimensions(),this.updateCanvas()}},{key:"componentDidUpdate",value:function(e){var t=this;e.isRunning!==this.props.isRunning&&this.props.isRunning?this.setState({interval:setInterval((function(){return t.updateBoard()}),this.props.timerInterval)}):e.isRunning===this.props.isRunning||this.props.isRunning||clearInterval(this.state.interval),e.gridSize===this.props.gridSize&&e.board===this.props.board||(this.setGridDimensions(),this.updateCanvas()),e.timerInterval!==this.props.timerInterval&&this.props.isRunning&&(clearInterval(this.state.interval),this.setState({interval:setInterval((function(){return t.updateBoard()}),this.props.timerInterval)}))}},{key:"updateBoard",value:function(){this.props.handleBoardTick(),this.updateCanvas()}},{key:"setGridDimensions",value:function(){this.gridHeight=this.canvasRef.current.height/this.props.gridSize,this.squareHeight=.9*this.gridHeight}},{key:"updateCanvas",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=this.canvasRef.current.getContext("2d");a.clearRect(0,0,this.canvasRef.current.width,this.canvasRef.current.height),this.props.board.forEach((function(r,i){r.forEach((function(r,o){a.fillStyle=r||n===i&&t===o?"#4A473E":"#B3AE99",a.fillRect(o*e.gridHeight,i*e.gridHeight,e.squareHeight,e.squareHeight)}))}))}},{key:"calcIndex",value:function(e){return{x:Math.floor((e.clientX-e.target.offsetLeft)/this.gridHeight),y:Math.floor((e.clientY-e.target.offsetTop)/this.gridHeight)}}},{key:"handleHover",value:function(e){var t=this.calcIndex(e),n=t.x,a=t.y;this.updateCanvas(n,a)}},{key:"handleClick",value:function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.calcIndex(t),a=n.x,r=n.y,e.next=3,this.props.handleTileClick(a,r);case 3:this.updateCanvas();case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("canvas",{id:"lucas-game-board",onMouseMove:function(t){return e.handleHover(t)},onClick:function(t){return e.handleClick(t)},onMouseLeave:function(){return e.updateCanvas()},ref:this.canvasRef,width:700,height:700})}}]),n}(r.a.Component)),N=Object(f.c)((function(e,t){return{board:e.board.boardTiles,gridSize:e.board.gridSize,isRunning:e.startstop,timerInterval:e.timer}}),(function(e){return{handleTileClick:function(t,n){e(function(e,t){return function(n,a){var r=a().board.boardTiles.map((function(e){return e.slice()}));r[t][e]=!r[t][e],Object(f.b)((function(){n(T(r)),n(g(!0)),n(O(0))}))}}(t,n))},handleBoardTick:function(){e(C())},savePattern:function(t){e(R())}}}))(j),_=n(96),k=n(93),D=n(94),w=n(90),U=(n(25),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleStart=function(){e.props.runGame(e.props.isRunning),e.props.isRunning||0!==e.props.score?e.props.isRunning||e.props.unsetCurrPattern():e.props.savePattern()},e}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.className},r.a.createElement(w.a,{variant:"contained",onClick:this.props.clearBoard},"Clear Pattern"),r.a.createElement(w.a,{variant:"contained",onClick:this.props.randomFill},"Random Pattern"),r.a.createElement(w.a,{variant:"contained",fullWidth:!0,onClick:this.handleStart},this.props.isRunning?"Stop":"Start"))}}]),n}(r.a.Component)),x=Object(f.c)((function(e){return{isRunning:e.startstop,score:e.board.score}}),(function(e){return{runGame:function(t){e(g(t))},randomFill:function(){e((function(e,t){for(var n=t().board.gridSize,a=new Array(n).fill(!1).map((function(){return new Array(n).fill(!1)})),r=Math.floor(Math.random()*(n*n-6*n)+5*n),i=0;i<r;i++){var o=Math.floor(Math.random()*n),c=Math.floor(Math.random()*n);a[o][c]=!0}Object(f.b)((function(){e(g(!0)),e(T(a)),e(O(0))}))}))},clearBoard:function(){e(y())},savePattern:function(){e(R())},unsetCurrPattern:function(){e(P("initial"))}}}))(U),I=n(97),M=n(92),z=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).gridSize=a.props.gridSize,a.timerSpeed=a.props.timerSpeed,a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.props.className},r.a.createElement("div",{className:"lucas-menu-options"},r.a.createElement("p",null,"Grid Size"),r.a.createElement(I.a,{defaultValue:this.gridSize,step:1,min:10,max:100,valueLabelDisplay:"auto",className:"lucas-menu-control",onChange:function(t,n){return e.props.handleGridSlider(n)}})),r.a.createElement("div",{className:"lucas-menu-options"},r.a.createElement("p",null,"Tick Interval (ms)"),r.a.createElement(I.a,{defaultValue:this.timerSpeed,step:10,min:10,max:1e3,valueLabelDisplay:"auto",className:"lucas-menu-control",onChange:function(t,n){return e.props.handleTimerSlider(n)}})),r.a.createElement("div",{className:"lucas-menu-options"},r.a.createElement("p",null,"Torus Mode"),r.a.createElement(M.a,{color:"default",className:"lucas-menu-control",checked:this.props.isTorus,onClick:function(){return e.props.handleTorus(e.props.isTorus)}})))}}]),n}(r.a.Component),B=Object(f.c)((function(e){return{gridSize:e.board.gridSize,isTorus:e.board.torusMode,timerSpeed:e.timer}}),(function(e){return{handleGridSlider:function(t){e(function(e){return function(t){t(b(e)),t(y())}}(t))},handleTimerSlider:function(t){e(function(e){return{type:v.UPDATE_TIMER,payload:e}}(t))},handleTorus:function(t){e(S(t))}}}))(z),G=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.className},r.a.createElement("h4",null,"Score:"),r.a.createElement("h1",null,this.props.score<9999999?this.props.score:this.props.score.toExponential(7)))}}]),n}(r.a.Component),L=Object(f.c)((function(e){return{score:e.board.score}}))(G),H=n(95),q=n(75),V=n(51),J=n.n(V),W=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleSave=function(){a.props.savePattern()},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.props.className,onMouseOut:this.resetPattern},r.a.createElement(w.a,{variant:"contained",fullWidth:!0,onClick:this.handleSave},"Save Current Pattern"),r.a.createElement("div",{className:"lucas-menu-saved-patterns"},this.props.history.map((function(t){return r.a.createElement("div",{className:"lucas-menu-options",key:t.date.toString()},r.a.createElement(H.a,{checked:e.props.currPattern===t.date.toString(),onChange:function(){return e.props.handleRadioChange(t)}}),r.a.createElement("h4",null,t.date.toString().slice(0,-33)),r.a.createElement(q.a,{className:"lucas-menu-control",onClick:function(){return e.props.handlePatternDelete(t.date)}},r.a.createElement(J.a,null)))}))))}}]),n}(r.a.Component),Z=Object(f.c)((function(e){return{history:e.board.savedPatterns,currPattern:e.board.currPattern}}),(function(e){return{handleRadioChange:function(t){e(A(t))},handlePatternDelete:function(t){e(function(e){return function(t,n){var a=n().board.currPattern;if(t({type:v.DELETE_PATTERN,payload:e}),a===e.toString())if(n().board.savedPatterns.length>0){var r=n().board.savedPatterns[0];t(A(r))}else t(y())}}(t))},savePattern:function(){e(R())}}}))(W),F=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleAccordion=function(e){return function(t,n){n?a.setState({expanded:e}):a.setState({expanded:!1})}},a.state={expanded:"instructions"},a}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"lucas-menu"},r.a.createElement(L,{className:"lucas-menu-score"}),r.a.createElement(_.a,{square:!0,expanded:"instructions"===this.state.expanded,onChange:this.handleAccordion("instructions")},r.a.createElement(k.a,null,"Instructions"),r.a.createElement(D.a,null,"lorem ipsum dolors")),r.a.createElement(_.a,{square:!0,expanded:"settings"===this.state.expanded,onChange:this.handleAccordion("settings")},r.a.createElement(k.a,null,"Settings"),r.a.createElement(D.a,null,r.a.createElement(B,{className:"lucas-menu-settings"}))),r.a.createElement(_.a,{square:!0,expanded:"patterns"===this.state.expanded,onChange:this.handleAccordion("patterns")},r.a.createElement(k.a,null,"Previous Patterns"),r.a.createElement(D.a,null,r.a.createElement(Z,{className:"lucas-menu-patterns"}))),r.a.createElement(x,{className:"lucas-menu-buttons"}))}}]),n}(r.a.Component),X=Object(f.c)((function(e){return{}}),(function(e){return{}}))(F);n(73);var Y=function(){return r.a.createElement("div",{className:"lucas-app"},r.a.createElement(N,null),r.a.createElement(X,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=n(19),K=Object($.c)({startstop:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.RUN_STOP:return t.payload;default:return e}},timer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.UPDATE_TIMER:return t.payload;default:return e}},board:Object($.c)({boardTiles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Array(10).fill(!1).map((function(){return new Array(10).fill(!1)})),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.UPDATE_BOARD:return t.payload;default:return e}},gridSize:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.UPDATE_SIZE:return t.payload;default:return e}},score:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.UPDATE_SCORE:return t.payload;default:return e}},savedPatterns:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.SAVE_PATTERN:return e.concat(t.payload).sort((function(e,t){return t.date-e.date}));case v.DELETE_PATTERN:return e.filter((function(e){return e.date!==t.payload}));default:return e}},currPattern:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"initial",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.SELECT_PATTERN:return t.payload;default:return e}},torusMode:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.TOGGLE_TORUS:return t.payload;default:return e}}})}),Q=n(52),ee=Object($.d)(K,Object($.a)(Q.a));window.store=ee,o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f.a,{store:ee},r.a.createElement(Y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.e3b03068.chunk.js.map