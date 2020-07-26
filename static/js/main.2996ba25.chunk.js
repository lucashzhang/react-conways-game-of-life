(this["webpackJsonpreact-conways-game-of-life"]=this["webpackJsonpreact-conways-game-of-life"]||[]).push([[0],{22:function(e,t,n){},58:function(e,t,n){e.exports=n(74)},63:function(e,t,n){},70:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(16),o=n.n(i),c=(n(63),n(41)),s=n.n(c),l=n(49),u=n(12),d=n(13),p=n(15),h=n(14),f=n(8),m={RUN_STOP:"RUN_STOP",UPDATE_BOARD:"UPDATE_BOARD",UPDATE_SIZE:"UPDATE_SIZE",UPDATE_SCORE:"UPDATE_SCORE",UPDATE_TIMER:"UPDATE_TIMER",TOGGLE_TORUS:"TOGGLE_TORUS",SAVE_PATTERN:"SAVE_PATTERN",DELETE_PATTERN:"DELETE_PATTERN",SELECT_PATTERN:"SELECT_PATTERN"};function v(e,t,n,a,r){return E(e-1,t-1,n,a,r)+E(e-1,t+0,n,a,r)+E(e-1,t+1,n,a,r)+E(e+0,t-1,n,a,r)+E(e+0,t+1,n,a,r)+E(e+1,t-1,n,a,r)+E(e+1,t+0,n,a,r)+E(e+1,t+1,n,a,r)}function E(e,t,n,a,r){return r&&(t>=a?t-=a:t<0&&(t+=a),e>=a?e-=a:e<0&&(e+=a)),e>=0&&t<a&&e>=0&&e<a&&n[e][t]?1:0}var g=function(e){return{type:m.RUN_STOP,payload:!e}},b=function(e){return{type:m.UPDATE_BOARD,payload:e}},y=function(e){return{type:m.UPDATE_SIZE,payload:e}},T=function(){return function(e,t){var n=t().board.gridSize,a=new Array(n).fill(!1).map((function(){return new Array(n).fill(!1)}));Object(f.b)((function(){e(A("initial")),e(g(!0)),e(b(a)),e(O(0))}))}},S=function(e){return{type:m.TOGGLE_TORUS,payload:!e}},O=function(e){return{type:m.UPDATE_SCORE,payload:e}},A=function(e){return{type:m.SELECT_PATTERN,payload:e}},P=function(){return function(e,t){var n=new Date,a=t().board;t().board.savedPatterns.some((function(e){return JSON.stringify(e.board)===JSON.stringify(a.boardTiles)}))||Object(f.b)((function(){e({type:m.SAVE_PATTERN,payload:{date:n,board:a.boardTiles,gridSize:a.gridSize,score:a.score,isTorus:a.torusMode}}),e(A(n.toString()))})),t().startstop&&e(A("initial"))}},R=function(e){return function(t){Object(f.b)((function(){t(b(e.board)),t(A(e.date.toString())),t(O(e.score)),t(S(!e.isTorus)),t(y(e.gridSize))}))}},w=function(){return function(e,t){var n=t().board,a=function(e,t,n){for(var a=new Array(t).fill(!1).map((function(){return new Array(t).fill(!1)})),r=t*t,i=0;i<t;i++)for(var o=0;o<t;o++){var c=v(i,o,e,t,n);e[i][o]&&c>=2&&c<=3?a[i][o]=!0:e[i][o]||3!==c?r--:a[i][o]=!0}return{nextBoard:a,numAlive:r}}(n.boardTiles,n.gridSize,n.torusMode),r=a.nextBoard,i=a.numAlive;Object(f.b)((function(){e(b(r)),e(function(e,t){return{type:m.UPDATE_SCORE,payload:e+t}}(n.score,i))})),0===i&&e(g(!0))}},C=(n(70),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).updateDimension=function(){a.setState({dimension:75*window.innerHeight/100}),a.setGridDimensions(),a.updateCanvas()},a.state={interval:null,board:a.props.board,dimension:75*window.innerHeight/100},a.canvasRef=r.a.createRef(),a.gridHeight=0,a.squareHeight=0,a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.updateDimension(),window.addEventListener("resize",this.updateDimension)}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("resize",(function(){return e.updateDimension()}))}},{key:"componentDidUpdate",value:function(e){var t=this;e.isRunning!==this.props.isRunning&&this.props.isRunning?this.setState({interval:setInterval((function(){return t.updateBoard()}),this.props.timerInterval)}):e.isRunning===this.props.isRunning||this.props.isRunning||clearInterval(this.state.interval),e.gridSize===this.props.gridSize&&e.board===this.props.board||(this.setGridDimensions(),this.updateCanvas()),e.timerInterval!==this.props.timerInterval&&this.props.isRunning&&(clearInterval(this.state.interval),this.setState({interval:setInterval((function(){return t.updateBoard()}),this.props.timerInterval)}))}},{key:"updateBoard",value:function(){this.props.handleBoardTick(),this.updateCanvas()}},{key:"setGridDimensions",value:function(){this.gridHeight=this.canvasRef.current.height/this.props.gridSize,this.squareHeight=.9*this.gridHeight}},{key:"updateCanvas",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=this.canvasRef.current.getContext("2d");a.clearRect(0,0,this.canvasRef.current.width,this.canvasRef.current.height),this.props.board.forEach((function(r,i){r.forEach((function(r,o){a.fillStyle=r||n===i&&t===o?"#4A473E":"#B3AE99",a.fillRect(o*e.gridHeight,i*e.gridHeight,e.squareHeight,e.squareHeight)}))}))}},{key:"calcIndex",value:function(e){return{x:Math.floor((e.clientX-e.target.offsetLeft)/this.gridHeight),y:Math.floor((e.clientY-e.target.offsetTop)/this.gridHeight)}}},{key:"handleHover",value:function(e){var t=this.calcIndex(e),n=t.x,a=t.y;this.updateCanvas(n,a)}},{key:"handleClick",value:function(){var e=Object(l.a)(s.a.mark((function e(t){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.calcIndex(t),a=n.x,r=n.y,e.next=3,this.props.handleTileClick(a,r);case 3:this.updateCanvas();case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("canvas",{id:"lucas-game-board",onMouseMove:function(t){return e.handleHover(t)},onClick:function(t){return e.handleClick(t)},onMouseLeave:function(){return e.updateCanvas()},ref:this.canvasRef,width:this.state.dimension,height:this.state.dimension})}}]),n}(r.a.Component)),j=Object(f.c)((function(e,t){return{board:e.board.boardTiles,gridSize:e.board.gridSize,isRunning:e.startstop,timerInterval:e.timer}}),(function(e){return{handleTileClick:function(t,n){e(function(e,t){return function(n,a){var r=a().board.boardTiles.map((function(e){return e.slice()}));r[t][e]=!r[t][e],Object(f.b)((function(){n(b(r)),n(g(!0)),n(O(0))}))}}(t,n))},handleBoardTick:function(){e(w())},savePattern:function(t){e(P())}}}))(C),k=n(97),N=n(94),_=n(95),D=n(91),U=(n(22),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleStart=function(){e.props.runGame(e.props.isRunning),e.props.isRunning||0!==e.props.score?e.props.isRunning||e.props.unsetCurrPattern():e.props.savePattern()},e}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.className},r.a.createElement(D.a,{variant:"contained",color:"primary",onClick:this.handleStart},this.props.isRunning?"Stop":"Start"),r.a.createElement(D.a,{variant:"contained",color:"primary",onClick:this.props.clearBoard},"Clear Pattern"),r.a.createElement(D.a,{variant:"contained",color:"primary",onClick:this.props.randomFill},"Random Pattern"))}}]),n}(r.a.Component)),x=Object(f.c)((function(e){return{isRunning:e.startstop,score:e.board.score}}),(function(e){return{runGame:function(t){e(g(t))},randomFill:function(){e((function(e,t){for(var n=t().board.gridSize,a=new Array(n).fill(!1).map((function(){return new Array(n).fill(!1)})),r=Math.floor(Math.random()*(n*n-6*n)+5*n),i=0;i<r;i++){var o=Math.floor(Math.random()*n),c=Math.floor(Math.random()*n);a[o][c]=!0}Object(f.b)((function(){e(g(!0)),e(b(a)),e(O(0))}))}))},clearBoard:function(){e(T())},savePattern:function(){e(P())},unsetCurrPattern:function(){e(A("initial"))}}}))(U),I=n(98),M=n(93),z=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).gridSize=a.props.gridSize,a.timerSpeed=a.props.timerSpeed,a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.props.className},r.a.createElement("div",{className:"lucas-menu-options"},r.a.createElement("p",null,"Grid Size"),r.a.createElement(I.a,{defaultValue:this.gridSize,step:1,min:10,max:100,valueLabelDisplay:"auto",className:"lucas-menu-control",onChange:function(t,n){return e.props.handleGridSlider(n)}})),r.a.createElement("div",{className:"lucas-menu-options"},r.a.createElement("p",null,"Tick Interval (ms)"),r.a.createElement(I.a,{defaultValue:this.timerSpeed,step:10,min:10,max:1e3,valueLabelDisplay:"auto",className:"lucas-menu-control",onChange:function(t,n){return e.props.handleTimerSlider(n)}})),r.a.createElement("div",{className:"lucas-menu-options"},r.a.createElement("p",null,"Torus Mode"),r.a.createElement(M.a,{color:"primary",className:"lucas-menu-control",checked:this.props.isTorus,onClick:function(){return e.props.handleTorus(e.props.isTorus)}})))}}]),n}(r.a.Component),L=Object(f.c)((function(e){return{gridSize:e.board.gridSize,isTorus:e.board.torusMode,timerSpeed:e.timer}}),(function(e){return{handleGridSlider:function(t){e(function(e){return function(t){t(y(e)),t(T())}}(t))},handleTimerSlider:function(t){e(function(e){return{type:m.UPDATE_TIMER,payload:e}}(t))},handleTorus:function(t){e(S(t))}}}))(z),G=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.className},r.a.createElement("h4",null,"Score:"),r.a.createElement("h1",null,this.props.score<9999999?this.props.score:this.props.score.toExponential(7)))}}]),n}(r.a.Component),B=Object(f.c)((function(e){return{score:e.board.score}}))(G),H=n(96),q=n(75),V=n(51),J=n.n(V),W=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleSave=function(){e.props.savePattern()},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.props.className,onMouseOut:this.resetPattern},r.a.createElement(D.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:this.handleSave},"Save Current Pattern"),r.a.createElement("div",{className:"lucas-menu-saved-patterns"},this.props.history.map((function(t){return r.a.createElement("div",{className:"lucas-menu-options",key:t.date.toString()},r.a.createElement(H.a,{checked:e.props.currPattern===t.date.toString(),color:"primary",onChange:function(){return e.props.handleRadioChange(t)}}),r.a.createElement("h4",null,t.date.toString().slice(0,-33)),r.a.createElement(q.a,{className:"lucas-menu-control",color:"primary",onClick:function(){return e.props.handlePatternDelete(t.date)}},r.a.createElement(J.a,null)))}))))}}]),n}(r.a.Component),Z=Object(f.c)((function(e){return{history:e.board.savedPatterns,currPattern:e.board.currPattern}}),(function(e){return{handleRadioChange:function(t){e(R(t))},handlePatternDelete:function(t){e(function(e){return function(t,n){var a=n().board.currPattern;if(t({type:m.DELETE_PATTERN,payload:e}),a===e.toString())if(n().board.savedPatterns.length>0){var r=n().board.savedPatterns[0];t(R(r))}else t(T())}}(t))},savePattern:function(){e(P())}}}))(W),F=n(99),X=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.className},r.a.createElement("p",null,r.a.createElement(F.a,{href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life",target:"_blank"},"Conway's Game of Life")," is a zero player game that represents cellular automation."),r.a.createElement("h4",null,"Rules"),r.a.createElement("ol",null,r.a.createElement("li",null,"Any live cell with fewer than two live neighbours dies, as if by underpopulation."),r.a.createElement("li",null,"Any live cell with two or three live neighbours lives on to the next generation."),r.a.createElement("li",null,"Any live cell with more than three live neighbours dies, as if by overpopulation."),r.a.createElement("li",null,"Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.")),r.a.createElement("p",null,"Click on a board tile to toggle whether it is alive. A dark tile represents a live cell and a light tile represents a dead one. Press start to begin the automation"))}}]),n}(r.a.Component),Y=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleAccordion=function(e){return function(t,n){n?a.setState({expanded:e}):a.setState({expanded:!1})}},a.state={expanded:"instructions"},a}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"lucas-menu"},r.a.createElement(B,{className:"lucas-menu-score"}),r.a.createElement(k.a,{square:!0,expanded:"instructions"===this.state.expanded,onChange:this.handleAccordion("instructions")},r.a.createElement(N.a,null,"Instructions"),r.a.createElement(_.a,null,r.a.createElement(X,null))),r.a.createElement(k.a,{square:!0,expanded:"settings"===this.state.expanded,onChange:this.handleAccordion("settings")},r.a.createElement(N.a,null,"Settings"),r.a.createElement(_.a,null,r.a.createElement(L,{className:"lucas-menu-settings"}))),r.a.createElement(k.a,{square:!0,expanded:"patterns"===this.state.expanded,onChange:this.handleAccordion("patterns")},r.a.createElement(N.a,null,"Previous Patterns"),r.a.createElement(_.a,null,r.a.createElement(Z,{className:"lucas-menu-patterns"}))),r.a.createElement(x,{className:"lucas-menu-buttons"}))}}]),n}(r.a.Component),$=Object(f.c)((function(e){return{}}),(function(e){return{}}))(Y);n(73);var K=function(){return r.a.createElement("div",{className:"lucas-app"},r.a.createElement(j,null),r.a.createElement($,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=n(20),ee=Object(Q.c)({startstop:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.RUN_STOP:return t.payload;default:return e}},timer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.UPDATE_TIMER:return t.payload;default:return e}},board:Object(Q.c)({boardTiles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Array(10).fill(!1).map((function(){return new Array(10).fill(!1)})),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.UPDATE_BOARD:return t.payload;default:return e}},gridSize:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.UPDATE_SIZE:return t.payload;default:return e}},score:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.UPDATE_SCORE:return t.payload;default:return e}},savedPatterns:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.SAVE_PATTERN:return e.concat(t.payload).sort((function(e,t){return t.date-e.date}));case m.DELETE_PATTERN:return e.filter((function(e){return e.date!==t.payload}));default:return e}},currPattern:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"initial",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.SELECT_PATTERN:return t.payload;default:return e}},torusMode:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.TOGGLE_TORUS:return t.payload;default:return e}}})}),te=n(52),ne=Object(Q.d)(ee,Object(Q.a)(te.a));window.store=ne,o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f.a,{store:ne},r.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.2996ba25.chunk.js.map