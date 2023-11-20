function e(e){return e&&e.__esModule?e.default:e}function t(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var r=globalThis.parcelRequire77dd,n=r.register;n("h0EEC",function(n,o){Object.defineProperty(n.exports,"__esModule",{value:!0,configurable:!0}),t(n.exports,"default",()=>l);var s=r("ayMG0"),a=r("acw62");r("aoYtd");var i=r("iwhH4");class c extends /*@__PURE__*/e(a).Component{constructor(e){super(e),console.log("parent constructor()")}componentDidMount(){console.log("parent componentDidMount()")}render(){return console.log("parent render()"),/*#__PURE__*/(0,s.jsxs)("div",{children:[/*#__PURE__*/(0,s.jsx)("div",{children:"About"}),/*#__PURE__*/(0,s.jsx)(i.default,{name:"Rohit Sharma"})]})}}var l=c}),n("iwhH4",function(n,o){t(n.exports,"default",()=>l);var s=r("ayMG0"),a=r("acw62"),i=r("gxbk0");class c extends /*@__PURE__*/e(a).Component{constructor(e){super(e),//create state here
this.state={userInfo:{name:"Test User",avatar_url:"https://avatars.githubusercontent.com/u/106429788?v=4"}},console.log("child constructor()")}async componentDidMount(){let e=await fetch("https://api.github.com/users/rohitsharma02p"),t=await e.json();this.setState({userInfo:t}),console.log("child componentDidMount()")}render(){return console.log("child render()"),/*#__PURE__*/(0,s.jsxs)("div",{children:[/*#__PURE__*/(0,s.jsx)("h1",{children:"Profile class component"}),/*#__PURE__*/(0,s.jsx)(i.default.Consumer,{children:({user:e})=>/*#__PURE__*/(0,s.jsxs)("h1",{children:["Email: ",e.email]})}),/*#__PURE__*/(0,s.jsxs)("div",{children:["Name:",this.props.name]}),/*#__PURE__*/(0,s.jsxs)("div",{children:["Name from State:",this.state.userInfo.name]}),/*#__PURE__*/(0,s.jsx)("img",{src:this.state.userInfo.avatar_url,alt:"missing profile"})]})}}var l/* 
 Parent constructor
 Parent render
 child constructor
 chile render

 dom is updated (Commit Phase)
*/=c});//# sourceMappingURL=About.8a062c37.js.map

//# sourceMappingURL=About.8a062c37.js.map
