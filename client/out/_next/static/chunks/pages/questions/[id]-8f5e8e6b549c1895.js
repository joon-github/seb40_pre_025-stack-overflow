(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{4992:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return d}});var n=t(29),i=t(8472),a=t.n(i),o=t(7794),r=t.n(o),l=t(1163),c=t(7294),x=t(5893);function d(){var e=(0,c.useState)({title:"",body:"",answers:{data:[]}}),s=e[0],t=e[1],i=(0,c.useState)([]),o=(i[0],i[1],(0,c.useState)([])),d=o[0],u=o[1],f=(0,l.useRouter)().query.id,j=Number(f);console.log(j),(0,c.useEffect)((function(){(0,n.Z)(r().mark((function e(){var s,n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://54.180.175.144:8080/post/".concat(j,"?page=1&size=5"));case 2:return e.next=4,e.sent.json();case 4:s=e.sent,n=s.data,t(n);case 7:case"end":return e.stop()}}),e)})))()}),[f]);return console.log(s),(0,x.jsxs)("div",{className:"jsx-141548498",children:[(0,x.jsx)("div",{className:"jsx-141548498",children:(0,x.jsxs)("h1",{className:"jsx-141548498 questionTitle",children:[" ",s?s.title:null]})}),(0,x.jsxs)("div",{className:"jsx-141548498 qusetionInfoContainer",children:[(0,x.jsx)("div",{className:"jsx-141548498 sub-c",children:(0,x.jsx)("span",{className:"jsx-141548498 fc-light"})}),(0,x.jsx)("div",{className:"jsx-141548498",children:(0,x.jsx)("span",{className:"jsx-141548498 fc-light"})}),(0,x.jsx)("div",{className:"jsx-141548498",children:(0,x.jsx)("span",{className:"jsx-141548498 fc-light"})})]}),(0,x.jsx)("hr",{className:"jsx-141548498 bar"}),(0,x.jsx)("div",{className:"jsx-141548498",children:(0,x.jsx)("h1",{className:"jsx-141548498 questionComentBox",children:s?s.body:null})}),(0,x.jsx)("hr",{className:"jsx-141548498 bar"}),(0,x.jsx)("div",{className:"jsx-141548498",children:(0,x.jsx)("h1",{className:"jsx-141548498 answerCount",children:"Answer"})}),(0,x.jsx)("div",{className:"jsx-141548498",children:(0,x.jsx)("div",{className:"jsx-141548498 questionComentBox",children:s?s.answers.data.map((function(e){return(0,x.jsx)("div",{className:"jsx-141548498 answerCss",children:e?e.body:"a"})})):null})}),(0,x.jsx)("hr",{className:"jsx-141548498 bar"}),(0,x.jsx)("div",{className:"jsx-141548498",children:(0,x.jsx)("h1",{className:"jsx-141548498 youAnswertitle",children:"Your Answer"})}),(0,x.jsx)("div",{className:"jsx-141548498",children:(0,x.jsxs)("div",{className:"jsx-141548498 editorContainer",children:[(0,x.jsx)("textarea",{value:d,onChange:function(e){return u(e.target.value)},className:"jsx-141548498 editor"}),(0,x.jsx)("div",{className:"jsx-141548498",children:(0,x.jsx)("div",{onClick:function(){var e={body:d,userId:localStorage.getItem("user")};fetch("http://54.180.175.144:8080/answer/".concat(localStorage.getItem("user"),"/").concat(j),{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){console.log(e),location.reload()}))},className:"jsx-141548498 answerPostButton",children:"Post Your Answer"})})]})}),(0,x.jsx)(a(),{id:"141548498",children:[".questionTitle.jsx-141548498{font-weight:400;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding:3%;}",".qusetionInfoContainer.jsx-141548498{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:50%;margin-bottom:40px;}",".questionComentBox.jsx-141548498{display:block;font-size:15px;margin:5%;}",".answerCount.jsx-141548498{font-weight:400;display:block;margin:20px;}",".youAnswertitle.jsx-141548498{font-size:22px;margin:20px;}",".answerCss.jsx-141548498{padding:2%;border-bottom:1px dashed gray;width:80%;}",".editorContainer.jsx-141548498{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;}",".editor.jsx-141548498{width:80%;min-width:10rem;height:15rem;resize:none;margin-bottom:10px;margin-right:30px;margin-left:30px;}",".editorTitle.jsx-141548498{font-size:22px;}",".answerPostButtonContainer.jsx-141548498{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start;width:5%;margin-top:30px;}",".answerPostButton.jsx-141548498{font-size:24px;font-weight:400;color:white;width:12%;border:solid #67b9f3 1px;background-color:#67b9f3;padding:1% 3%;border-radius:7px;cursor:pointer;margin:20px;}",".answerPostButton.jsx-141548498:hover{background-color:hsl(206deg 100% 40%);}",".bar.jsx-141548498{width:95%;}"]})]})}},3359:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/questions/[id]",function(){return t(4992)}])},29:function(e,s,t){"use strict";function n(e,s,t,n,i,a,o){try{var r=e[a](o),l=r.value}catch(c){return void t(c)}r.done?s(l):Promise.resolve(l).then(n,i)}function i(e){return function(){var s=this,t=arguments;return new Promise((function(i,a){var o=e.apply(s,t);function r(e){n(o,i,a,r,l,"next",e)}function l(e){n(o,i,a,r,l,"throw",e)}r(void 0)}))}}t.d(s,{Z:function(){return i}})}},function(e){e.O(0,[774,888,179],(function(){return s=3359,e(e.s=s);var s}));var s=e.O();_N_E=s}]);