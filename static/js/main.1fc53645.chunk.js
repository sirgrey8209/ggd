(this.webpackJsonpggd=this.webpackJsonpggd||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),s=n(4),c=n.n(s),r=(n(13),n(2)),l=n(5),u=n(6),o=n(8),d=n(7),m=(n(14),n.p+"static/media/correct.d875afe6.wav"),h=n.p+"static/media/fail.38cda430.mp3",b=n.p+"static/media/wrong.0afb49d7.mp3",j=n(0),v=new Audio(m),k=new Audio(h),f=new Audio(b),N=function(t){Object(o.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(l.a)(this,n),(i=e.call(this,t)).state={isGamePlaying:!1,waitingGameStart:void 0,num1:void 0,num2:void 0,answer:void 0,correctPlaying:!1,timerDuration:void 0,timerLeft:void 0},i.tickHandle=void 0,i.lastTickTime=+new Date,i}return Object(u.a)(n,[{key:"handleClickNumber",value:function(t){var e=this;if(!this.state.correctPlaying){var n=this.state.answer;if(void 0===n?0!==t&&(n=t):n<10&&(n=10*n+t),n!==this.state.answer){var i=Object(r.a)({},this.state);i.answer=n,i.answer===i.num1*i.num2?(i.correctPlaying=!0,v.play(),setTimeout((function(){var t=Object(r.a)({},e.state);t.correctPlaying=!1,e.setNewProblem(t),e.setState(t)}),500)):n>=10&&(f.play(),i.answer=void 0),this.setState(i)}}}},{key:"handleClickStart",value:function(){var t=this;if(void 0===this.state.waitingGameStart){var e=Object(r.a)({},this.state);e.isGamePlaying=!1,e.waitingGameStart=3e3,this.setState(e)}else{var n=Object(r.a)({},this.state);n.isGamePlaying=!1,n.waitingGameStart-=1e3,this.setState(n)}void 0===this.tickHandle&&(this.lastTickTime=+new Date,this.tickHandle=setInterval((function(){return t.tickGame()}),30))}},{key:"setNewProblem",value:function(t){t.num1=Math.floor(8*Math.random())+2,t.num2=Math.floor(9*Math.random())+1,t.answer=void 0,t.timerEnd=+new Date+5e3,t.timerDuration=5e3,t.timerLeft=5e3}},{key:"tickGame",value:function(){var t=+new Date,e=t-this.lastTickTime;this.lastTickTime=t;var n=Object(r.a)({},this.state);!1===n.isGamePlaying?void 0===n.waitingGameStart?clearInterval(this.tickHandle):(n.waitingGameStart-=e,n.waitingGameStart<0&&(n.isGamePlaying=!0,n.waitingGameStart=void 0,this.setNewProblem(n))):!1===n.correctPlaying&&(n.timerLeft-=e,n.timerLeft<0&&(k.play(),n.timerLeft=0,n.isGamePlaying=!1,clearInterval(this.tickHandle),this.tickHandle=void 0)),this.setState(n)}},{key:"renderProblem",value:function(){var t=void 0===this.state.num1?"?":this.state.num1,e=void 0===this.state.num2?"?":this.state.num2,n=void 0===this.state.answer?"?":this.state.answer;return Object(j.jsxs)("div",{className:"problem",children:[Object(j.jsx)("div",{className:"box",children:Object(j.jsx)("span",{className:"text-num",children:t})}),Object(j.jsx)("div",{className:"text-op",children:"\xd7"}),Object(j.jsx)("div",{className:"box",children:Object(j.jsx)("span",{className:"text-num",children:e})}),Object(j.jsx)("div",{className:"text-op",children:"="}),Object(j.jsx)("div",{className:"box",children:Object(j.jsx)("span",{className:"text-num",children:n})})]})}},{key:"renderTimer",value:function(){var t=this.state.timerLeft/this.state.timerDuration*100;return Object(j.jsx)("div",{className:"timer",children:Object(j.jsx)("div",{className:"timer-gauge",style:{width:t+"%"}})})}},{key:"renderKeypad",value:function(){var t=this;return Object(j.jsxs)("div",{className:"input",children:[Object(j.jsxs)("div",{className:"input-row",children:[Object(j.jsx)("button",{className:"input-button",onClick:function(){return t.handleClickNumber(7)},children:"7"}),Object(j.jsx)("button",{className:"input-button",onClick:function(){return t.handleClickNumber(8)},children:"8"}),Object(j.jsx)("button",{className:"input-button",onClick:function(){return t.handleClickNumber(9)},children:"9"})]}),Object(j.jsxs)("div",{className:"input-row",children:[Object(j.jsx)("button",{className:"input-button",onClick:function(){return t.handleClickNumber(4)},children:"4"}),Object(j.jsx)("button",{className:"input-button",onClick:function(){return t.handleClickNumber(5)},children:"5"}),Object(j.jsx)("button",{className:"input-button",onClick:function(){return t.handleClickNumber(6)},children:"6"})]}),Object(j.jsxs)("div",{className:"input-row",children:[Object(j.jsx)("button",{className:"input-button",onClick:function(){return t.handleClickNumber(1)},children:"1"}),Object(j.jsx)("button",{className:"input-button",onClick:function(){return t.handleClickNumber(2)},children:"2"}),Object(j.jsx)("button",{className:"input-button",onClick:function(){return t.handleClickNumber(3)},children:"3"})]}),Object(j.jsxs)("div",{className:"input-row",children:[Object(j.jsx)("button",{className:"input-button",onClick:function(){}}),Object(j.jsx)("button",{className:"input-button",onClick:function(){return t.handleClickNumber(0)},children:"0"}),Object(j.jsx)("button",{className:"input-button",onClick:function(){}})]})]})}},{key:"renderStartButton",value:function(){var t=this;if(void 0===this.state.waitingGameStart)return Object(j.jsx)("div",{className:"input",children:Object(j.jsx)("button",{className:"start-button",onClick:function(){return t.handleClickStart()},children:"Start"})});var e=Math.floor(this.state.waitingGameStart/1e3)+1;return Object(j.jsx)("div",{className:"input",children:Object(j.jsx)("button",{className:"start-button",onClick:function(){return t.handleClickStart()},children:e})})}},{key:"render",value:function(){return this.state.isGamePlaying?Object(j.jsxs)("div",{className:"game",children:[this.renderProblem(),this.renderTimer(),this.renderKeypad()]}):Object(j.jsxs)("div",{className:"game",children:[this.renderProblem(),this.renderStartButton()]})}}]),n}(a.a.Component),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),i(t),a(t),s(t),c(t)}))};c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.1fc53645.chunk.js.map