(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,a){e.exports={root:"style_root__3eY4W",labelsRoot:"style_labelsRoot__JxGig",label:"style_label__1r9cj",selectRoot:"style_selectRoot__DJuIs",select:"style_select__10ijX",reflektorLabel:"style_reflektorLabel__2rbYT",reflektorSelect:"style_reflektorSelect__2-qFD"}},14:function(e,t,a){e.exports={root:"style_root__3tsyb"}},17:function(e,t,a){e.exports=a(33)},23:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(12),l=a.n(o),s=(a(23),a(5)),i=a(3),c=a(4),u=a(15),m=a(13),h=a(16),_=a(10),d=a(1),p=a.n(d),g=[n.a.createElement("option",{key:0,value:0},"A"),n.a.createElement("option",{key:1,value:1},"B"),n.a.createElement("option",{key:2,value:2},"C"),n.a.createElement("option",{key:3,value:3},"D"),n.a.createElement("option",{key:4,value:4},"E"),n.a.createElement("option",{key:5,value:5},"F"),n.a.createElement("option",{key:6,value:6},"G"),n.a.createElement("option",{key:7,value:7},"H"),n.a.createElement("option",{key:8,value:8},"I"),n.a.createElement("option",{key:9,value:9},"J"),n.a.createElement("option",{key:10,value:10},"K"),n.a.createElement("option",{key:11,value:11},"L"),n.a.createElement("option",{key:12,value:12},"M"),n.a.createElement("option",{key:13,value:13},"N"),n.a.createElement("option",{key:14,value:14},"O"),n.a.createElement("option",{key:15,value:15},"P"),n.a.createElement("option",{key:16,value:16},"Q"),n.a.createElement("option",{key:17,value:17},"R"),n.a.createElement("option",{key:18,value:18},"S"),n.a.createElement("option",{key:19,value:19},"T"),n.a.createElement("option",{key:20,value:20},"U"),n.a.createElement("option",{key:21,value:21},"V"),n.a.createElement("option",{key:22,value:22},"W"),n.a.createElement("option",{key:23,value:23},"X"),n.a.createElement("option",{key:24,value:24},"Y"),n.a.createElement("option",{key:25,value:25},"Z")],v=[n.a.createElement("option",{key:0,value:1},"I"),n.a.createElement("option",{key:1,value:2},"II"),n.a.createElement("option",{key:2,value:3},"III"),n.a.createElement("option",{key:3,value:4},"IV"),n.a.createElement("option",{key:4,value:5},"V")],b=[n.a.createElement("option",{key:0,value:"B"},"UKW-B (Wehrmacht)"),n.a.createElement("option",{key:1,value:"C"},"UKW-C (Luftwaffe)")];var f=function(e){var t=e.rotorChoices,a=e.rotorStarts,r=e.reflektor,o=Object(_.a)(t,3),l=o[0],s=o[1],i=o[2],c=Object(_.a)(a,3),u=c[0],m=c[1],h=c[2];return n.a.createElement("div",{className:p.a.root},n.a.createElement("h3",null,"Settings"),n.a.createElement("div",{className:p.a.labelsRoot},n.a.createElement("label",{className:p.a.label},"Rotor 1"),n.a.createElement("label",{className:p.a.label},"Rotor 2"),n.a.createElement("label",{className:p.a.label},"Rotor 3")),n.a.createElement("div",{className:p.a.selectRoot},n.a.createElement("select",{className:p.a.select,dark:"dark"===e.theme?"true":"false",name:"rotor1",value:l,onChange:function(t){return e.onSelectChange(t.target.name,t.target.value)}},v),n.a.createElement("select",{className:p.a.select,dark:"dark"===e.theme?"true":"false",name:"rotor2",value:s,onChange:function(t){return e.onSelectChange(t.target.name,t.target.value)}},v),n.a.createElement("select",{className:p.a.select,dark:"dark"===e.theme?"true":"false",name:"rotor3",value:i,onChange:function(t){return e.onSelectChange(t.target.name,t.target.value)}},v)),n.a.createElement("div",{className:p.a.labelsRoot},n.a.createElement("label",{className:p.a.label},"Start 1"),n.a.createElement("label",{className:p.a.label},"Start 2"),n.a.createElement("label",{className:p.a.label},"Start 3")),n.a.createElement("div",{className:p.a.selectRoot},n.a.createElement("select",{className:p.a.select,dark:"dark"===e.theme?"true":"false",name:"start1",value:u,onChange:function(t){return e.onSelectChange(t.target.name,t.target.value)}},g),n.a.createElement("select",{className:p.a.select,dark:"dark"===e.theme?"true":"false",name:"start2",value:m,onChange:function(t){return e.onSelectChange(t.target.name,t.target.value)}},g),n.a.createElement("select",{className:p.a.select,dark:"dark"===e.theme?"true":"false",name:"start3",value:h,onChange:function(t){return e.onSelectChange(t.target.name,t.target.value)}},g)),n.a.createElement("label",{className:p.a.reflektorLabel},"Reflektor"),n.a.createElement("select",{className:p.a.reflektorSelect,dark:"dark"===e.theme?"true":"false",name:"reflektor",value:r,onChange:function(t){return e.onSelectChange(t.target.name,t.target.value)}},b))},k=a(8),y=a.n(k),E=function(e){return n.a.createElement("div",{className:y.a.root},n.a.createElement("textarea",{className:y.a.input,dark:"dark"===e.theme?"true":"false",placeholder:"your message",autoComplete:"off",rows:8,value:e.message,onChange:function(t){return e.inputChange(t.target.value,e.crypto)}}),n.a.createElement("textarea",{className:y.a.input,dark:"dark"===e.theme?"true":"false",readOnly:!0,placeholder:"encoded message",autoComplete:"off",rows:8,value:e.encoded}))},C=a(14),w=a.n(C),N=function(){return n.a.createElement("div",{className:w.a.root},n.a.createElement("p",null,"Now try copying the encrypted message and paste it anywhere to send it to a friend. This same web app can be used to decrypt the message by copy/pasting the sent message into the first box.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("b",null,"Important: "),"Be sure to also share the exact same settings you used.",n.a.createElement("br",null),n.a.createElement("i",null,"example: 3 1 3, D A G, UKW-B, AB CD EF GH IJ KL MN OP QR ST")))},S=a(9),j=a.n(S);var R=function(e){return n.a.createElement("div",{className:j.a.pair},"Pair ",e.num,n.a.createElement("div",null,n.a.createElement("select",{className:j.a.select,dark:"dark"===e.theme?"true":"false",value:e.pairKey,onChange:function(t){return e.onChangeKey(t.target.value,e.num)}},n.a.createElement("option",null,e.pairKey),e.possible)),n.a.createElement("div",null,n.a.createElement("select",{className:j.a.select,dark:"dark"===e.theme?"true":"false",value:e.pairValue,onChange:function(t){return e.onChangeValue(t.target.value,e.num)}},n.a.createElement("option",null,e.pairValue),e.possible)))},x=a(7),O=a.n(x);var q=function(e){var t=function(){return e.possible.map(function(e,t){return n.a.createElement("option",{key:t},e)})},a=function(t){return Object.keys(e.board[t])[0]};return n.a.createElement("div",{className:O.a.root},n.a.createElement("div",{className:O.a.title},"Plugboard"),n.a.createElement("div",{className:O.a.board},[1,2,3,4,5].map(function(r,o){return n.a.createElement(R,{key:o,theme:e.theme,num:r,possible:t(),pairKey:a(r),pairValue:e.board[r][a(r)],onChangeKey:e.onChangeKey,onChangeValue:e.onChangeValue})})),n.a.createElement("div",{className:O.a.board},[6,7,8,9,10].map(function(r,o){return n.a.createElement(R,{key:o,theme:e.theme,num:r,possible:t(),pairKey:a(r),pairValue:e.board[r][a(r)],onChangeKey:e.onChangeKey,onChangeValue:e.onChangeValue})})))},K=a(2),V=a.n(K),I=["e","k","m","f","l","g","d","q","v","z","n","t","o","w","y","h","x","u","s","p","a","i","b","r","c","j"],T=["a","j","d","k","s","i","r","u","x","b","l","h","w","t","m","c","q","g","z","n","p","y","f","v","o","e"],z=["b","d","f","h","j","l","c","p","r","t","x","v","z","n","y","e","i","w","g","a","k","m","u","s","q","o"],B=["e","s","o","v","p","z","j","a","y","q","u","i","r","h","x","l","n","f","t","g","k","d","c","m","w","b"],L=["v","z","b","r","g","i","t","y","u","p","s","d","n","h","l","x","a","w","m","j","q","o","f","e","c","k"],P=function(){function e(t,a){switch(Object(i.a)(this,e),this.__position=a,t){case 1:this.__letters=I,this.__turnover="q";break;case 2:this.__letters=T,this.__turnover="e";break;case 3:this.__letters=z,this.__turnover="v";break;case 4:this.__letters=B,this.__turnover="j";break;case 5:this.__letters=L,this.__turnover="z";break;default:console.error("error invalid Rotor input. using default mapping."),this.__letters=I}}return Object(c.a)(e,[{key:"getCurrentPosition",value:function(){return this.__position}},{key:"getTurnover",value:function(){return this.__turnover}},{key:"getChar",value:function(e){return this.__letters[e]}},{key:"findIndex",value:function(e){return this.__letters.indexOf(e)}},{key:"rotorStep",value:function(){++this.__position,this.__position>25&&(this.__position=0)}}]),e}(),W={a:"y",b:"r",c:"u",d:"h",e:"q",f:"s",g:"l",h:"d",i:"p",j:"x",k:"n",l:"g",m:"o",n:"k",o:"m",p:"i",q:"e",r:"b",s:"f",t:"z",u:"c",v:"w",w:"v",x:"j",y:"a",z:"t"},F={a:"f",b:"v",c:"p",d:"j",e:"i",f:"a",g:"o",h:"y",i:"e",j:"d",k:"r",l:"z",m:"x",n:"w",o:"g",p:"c",q:"t",r:"k",s:"u",t:"q",u:"s",v:"b",w:"n",x:"m",y:"h",z:"l"},A=function(){function e(t,a,r,n,o,l,s,c){switch(Object(i.a)(this,e),this.__rotor1=new P(t,n),this.__rotor2=new P(a,o),this.__rotor3=new P(r,l),this.__plugboard=c,s){case"B":this.__reflektor=W;break;case"C":this.__reflektor=F;break;default:this.__reflektor=W}}return Object(c.a)(e,[{key:"write",value:function(e){var t=e.toLowerCase().split("");for(var a in t){var r=!1,n=!1,o=this.__rotor3.getTurnover(),l=String.fromCharCode(this.__rotor3.getCurrentPosition()+97),s=this.__rotor2.getTurnover(),i=String.fromCharCode(this.__rotor2.getCurrentPosition()+97);o===l&&(r=!0);var c=t[a];/^[a-z]$/.test(c)&&(c=this.__plugboard[c]?this.__plugboard[c]:c,c=this.__writeRotorForward(this.__rotor3,c),c=this.__writeRotorForward(this.__rotor2,c),c=this.__writeRotorForward(this.__rotor1,c),c=this.__reflektor[c],c=this.__writeRotorReverse(this.__rotor1,c),c=this.__writeRotorReverse(this.__rotor2,c),c=this.__writeRotorReverse(this.__rotor3,c),c=this.__plugboard[c]?this.__plugboard[c]:c,t[a]=c,this.__rotor3.rotorStep(),r&&this.__rotor2.rotorStep(),s===i&&(n=!0),n&&this.__rotor1.rotorStep())}return t.join("")}},{key:"__writeRotorForward",value:function(e,t){var a=e.getCurrentPosition(),r=(t.charCodeAt(0)-97+a)%26,n=e.getChar(r).charCodeAt(0);return n=n-a<97?n-(a-26):n-a,String.fromCharCode(n)}},{key:"__writeRotorReverse",value:function(e,t){var a=e.getCurrentPosition(),r=t.charCodeAt(0),n=r+a>122?String.fromCharCode(r+(a-26)):String.fromCharCode(r+a),o=e.findIndex(n),l=o-a<0?o-(a-26)+97:o-a+97;return String.fromCharCode(l)}}]),e}();A.propTypes={rotor1:V.a.number.isRequired,start1:V.a.number.isRequired,rotor2:V.a.number.isRequired,start2:V.a.number.isRequired,rotor3:V.a.number.isRequired,start3:V.a.number.isRequired,plugboard:V.a.object.isRequired};var D=a(6),J=a.n(D),M=10,G=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={rotor1:1,rotor2:2,rotor3:3,start1:0,start2:0,start3:0,reflektor:"B",plugboard:[{sent:"inel"},{a:"b"},{c:"d"},{e:"f"},{g:"h"},{i:"j"},{k:"l"},{m:"n"},{o:"p"},{q:"r"},{s:"t"}],possible:["u","v","w","x","y","z"],message:"",encoded:""},a.toggleTheme=function(){a.setState(function(e){var t="light"===e.theme?"dark":"light";return localStorage.theme=t,{theme:t}})},a.onMessageWrite=function(e,t){a.setState({message:e,encoded:t.write(e)})},a.choiceChange=function(e,t){var r;/[0-9]/.test(t)&&(t=parseInt(t,M)),a.setState((r={},Object(s.a)(r,e,t),Object(s.a)(r,"message",""),Object(s.a)(r,"encoded",""),r))},a.plugboardChangeKey=function(e,t){a.setState(function(a){var r=Object.keys(a.plugboard[t])[0],n=a.possible;n[n.indexOf(e)]=r;var o=a.plugboard[t][r],l=a.plugboard;return r=e,l[t]=Object(s.a)({},r,o),{plugboard:l,possible:n,message:"",encoded:""}})},a.plugboardChangeValue=function(e,t){a.setState(function(a){var r=a.plugboard,n=Object.keys(r[t])[0],o=r[t][n],l=a.possible;return l[l.indexOf(e)]=o,o=e,r[t]=Object(s.a)({},n,o),{plugboard:r,possible:l,message:"",encoded:""}})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({theme:localStorage.theme||"light"})}},{key:"render",value:function(){var e=this.state,t=e.rotor1,a=e.rotor2,r=e.rotor3,o=e.start1,l=e.start2,s=e.start3,i=e.reflektor,c=function(e){var t={},a=!0,r=!1,n=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done);a=!0){var s=o.value,i=Object.keys(s)[0];t[i]=s[i],t[s[i]]=i}}catch(c){r=!0,n=c}finally{try{a||null==l.return||l.return()}finally{if(r)throw n}}return t}(e.plugboard),u=new A(t,a,r,o,l,s,"B",c);return n.a.createElement("div",{className:J.a.root,dark:"dark"===this.state.theme?"true":"false"},n.a.createElement("div",{className:J.a.header},n.a.createElement("h1",{className:J.a.title},"Enigma M3 Web")),n.a.createElement("div",{className:J.a.content},n.a.createElement(f,{theme:this.state.theme,rotorChoices:[t,a,r],rotorStarts:[o,l,s],reflektor:i,onSelectChange:this.choiceChange}),n.a.createElement(q,{theme:this.state.theme,board:this.state.plugboard,possible:this.state.possible,onChangeKey:this.plugboardChangeKey,onChangeValue:this.plugboardChangeValue}),n.a.createElement(E,{theme:this.state.theme,inputChange:this.onMessageWrite,message:this.state.message,encoded:this.state.encoded,crypto:u}),n.a.createElement(N,{theme:this.state.theme})),n.a.createElement("footer",null,n.a.createElement("button",{className:J.a.themetoggle,dark:"dark"===this.state.theme?"true":"false",onClick:this.toggleTheme},"Toggle ","dark"===this.state.theme?"Light":"Dark"," Theme")))}}]),t}(n.a.Component);l.a.render(n.a.createElement(G,null),document.getElementById("root"))},6:function(e,t,a){e.exports={root:"style_root__1H1Lg",header:"style_header__3UPkN",themetoggle:"style_themetoggle__3mn2p",title:"style_title__qykJ1",content:"style_content__3csCv"}},7:function(e,t,a){e.exports={root:"style_root__3ZFN4",title:"style_title__5tgsb",board:"style_board__2S5ST"}},8:function(e,t,a){e.exports={root:"style_root__boX-4",input:"style_input__2LtGh"}},9:function(e,t,a){e.exports={pair:"style_pair__NEK3W",select:"style_select__eV8yM"}}},[[17,2,1]]]);