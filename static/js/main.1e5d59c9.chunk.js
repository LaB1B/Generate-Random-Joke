(this.webpackJsonprandom_jokes=this.webpackJsonprandom_jokes||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){},28:function(t,e,n){var i={"./Band Octopus.gif":29,"./Cute Sushi.gif":30,"./Dancin_sumo.gif":31,"./Gif":3,"./Gif.js":3,"./Icecream_jumping.gif":32,"./Robot_Deal_with_it.gif":33,"./Robot_dancin.gif":34,"./Rock_orange.gif":35,"./telivision_robot_dancin.gif":36};function o(t){var e=a(t);return n(e)}function a(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}o.keys=function(){return Object.keys(i)},o.resolve=a,t.exports=o,o.id=28},29:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/Band Octopus.6108f95a.gif"},3:function(t,e,n){"use strict";n.r(e);e.default=[{name:"Telivision Robot",color:"#F3E7E4",path:"telivision_robot_dancin.gif",button:"info"},{name:"cute_shushi",color:"#F9DE85",path:"Cute Sushi.gif",button:"secondary"},{name:"Dancin_sumo",color:"#0084C2",path:"Dancin_sumo.gif",button:"warning"},{name:"Icecream_jumping",color:"#8ECBE3",path:"Icecream_jumping.gif",button:"dark"},{name:"Robot_dancin",color:"#44B8DC",path:"Robot_dancin.gif",button:"danger"},{name:"Rock_orange",color:"#EBEBEB",path:"Rock_orange.gif",button:"warning"},{name:"Robot Deal with it",color:"#F89A47",path:"Robot_Deal_with_it.gif",button:"secondary"},{name:"Ocotupus Ban",color:"#64D9D6",path:"Band Octopus.gif",button:"danger"}]},30:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/Cute Sushi.f78dbfbe.gif"},31:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/Dancin_sumo.91b706e2.gif"},32:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/Icecream_jumping.1404600d.gif"},33:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/Robot_Deal_with_it.60c68112.gif"},34:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/Robot_dancin.aa62431e.gif"},35:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/Rock_orange.63e685dc.gif"},36:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/telivision_robot_dancin.8cc44901.gif"},56:function(t,e,n){"use strict";n.r(e);var i=n(2),o=n.n(i),a=n(19),c=n.n(a),s=(n(25),n(6)),r=n(7),u=n(9),h=n(8),l=(n(26),n(0)),d=function(t){Object(u.a)(i,t);var e=Object(h.a)(i);function i(){var t;Object(s.a)(this,i);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={Joke:{},buttonClicked:!1,punchLine:"",punchLineGiven:!1},t.GenerateJoke=function(){t.setState({Joke:t.props.joke,buttonClicked:!0})},t.handleReload=function(){window.location.reload()},t.RenderPunchLine=function(){t.setState({punchLine:t.state.Joke.punchline,punchLineGiven:!0})},t}return Object(r.a)(i,[{key:"RenderJoke",value:function(){return 0===this.state.Joke.length?null:Object(l.jsx)("div",{children:Object(l.jsx)("h4",{className:"setup",children:this.state.Joke.setup})})}},{key:"render",value:function(){return Object(l.jsxs)("div",{className:"theme",style:{backgroundColor:this.props.GIF.color},children:[Object(l.jsx)("img",{width:"440px",src:n(28)("./".concat(this.props.GIF.path)).default,alt:""}),Object(l.jsxs)("div",{className:"Jokes w-75",children:[Object(l.jsx)("button",{className:"btn btn-".concat(this.props.GIF.button,"  w-25 m-4"),onClick:!1===this.state.buttonClicked?this.GenerateJoke:!1===this.state.punchLineGiven?this.RenderPunchLine:this.handleReload,children:!1===this.state.buttonClicked?"Spit a Joke":!1===this.state.punchLineGiven?"Get Punchline":"more...."}),Object(l.jsx)("h4",{className:"setup",children:this.state.Joke.setup}),Object(l.jsx)("p",{className:"punchline",children:this.state.punchLine})]}),Object(l.jsx)("p",{className:"sideNote",children:"Refresh the page for new joke"})]})}}]),i}(i.Component),f=n(3),p=n(20),b=n.n(p),g=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={RandomGif:f.default[Math.floor(Math.random()*f.default.length)],joke:{}},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;b()("https://generatejoke.herokuapp.com/api/jokes/random").then((function(e){return t.setState({joke:e.data})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){return this.state.joke.length<=0?Object(l.jsx)("h1",{children:"helloh "}):Object(l.jsx)(o.a.Fragment,{children:Object(l.jsx)(d,{joke:this.state.joke,GIF:this.state.RandomGif})})}}]),n}(i.Component),j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(e){var n=e.getCLS,i=e.getFID,o=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),i(t),o(t),a(t),c(t)}))};n(55);c.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),j()}},[[56,1,2]]]);
//# sourceMappingURL=main.1e5d59c9.chunk.js.map