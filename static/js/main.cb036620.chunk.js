(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),s=(n(13),n(1)),l=n(2),i=n(4),u=n(3),h=n(5),m=function(e){var t=e.name,n=e.id,a=e.email;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5 tc"},r.a.createElement("img",{alt:"monsterphoto",src:"https://robohash.org/".concat(n,"?set=set2")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,a)))},d=function(e){var t=e.monsters;return r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(m,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},f=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba br2 b--green bg-lightest-blue",type:"search",placeholder:"search for monsters",onChange:t}))},p=function(e){return r.a.createElement("div",{className:"br4",style:{overflowY:"scroll",border:"8px groove #706E7E",height:"780px"}},e.children,";")},g=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={hasError:!1},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h2",null,"Ooops. An error has occured!"):this.props.children}}]),t}(a.Component),E=(n(14),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfiled:t.target.value})},e.state={monsters:[],searchfiled:""},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e.setState({monsters:t})})}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchfiled,a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return 0===t.length?r.a.createElement("h1",{className:"tc f1"},"Loading..."):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1",id:"heading"},"Monster Friends"),r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement(p,null,r.a.createElement(g,null,r.a.createElement(d,{monsters:a}))))}}]),t}(r.a.Component)),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)})};n(15);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),b()},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.cb036620.chunk.js.map