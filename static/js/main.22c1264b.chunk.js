(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,r){e.exports=r(22)},18:function(e,t,r){},22:function(e,t,r){"use strict";r.r(t);var a=r(0),o=r.n(a),n=r(8),l=r.n(n),i=(r(18),r(1)),s=r(2),c=r(4),u=r(5),m=r(10),d=r(9),h=r(11),p=r(6),g={root:{padding:"0 1rem"},labelsRoot:{display:"flex",justifyContent:"space-between"},label:{fontSize:"1.10rem"},selectRoot:{display:"flex",justifyContent:"space-between"},select:{fontSize:"1.05rem",border:"none",margin:"1rem 0",padding:"2px 4px",_dark:{backgroundColor:"#603030",color:"#eeeeee"}},reflektorLabel:{fontSize:"1.10rem"},reflektorSelect:{fontSize:"1.05rem",border:"none",margin:"1rem",padding:"2px 12px",_dark:{backgroundColor:"#603030",color:"#eeeeee"}}},b=[o.a.createElement("option",{key:0,value:0},"A"),o.a.createElement("option",{key:1,value:1},"B"),o.a.createElement("option",{key:2,value:2},"C"),o.a.createElement("option",{key:3,value:3},"D"),o.a.createElement("option",{key:4,value:4},"E"),o.a.createElement("option",{key:5,value:5},"F"),o.a.createElement("option",{key:6,value:6},"G"),o.a.createElement("option",{key:7,value:7},"H"),o.a.createElement("option",{key:8,value:8},"I"),o.a.createElement("option",{key:9,value:9},"J"),o.a.createElement("option",{key:10,value:10},"K"),o.a.createElement("option",{key:11,value:11},"L"),o.a.createElement("option",{key:12,value:12},"M"),o.a.createElement("option",{key:13,value:13},"N"),o.a.createElement("option",{key:14,value:14},"O"),o.a.createElement("option",{key:15,value:15},"P"),o.a.createElement("option",{key:16,value:16},"Q"),o.a.createElement("option",{key:17,value:17},"R"),o.a.createElement("option",{key:18,value:18},"S"),o.a.createElement("option",{key:19,value:19},"T"),o.a.createElement("option",{key:20,value:20},"U"),o.a.createElement("option",{key:21,value:21},"V"),o.a.createElement("option",{key:22,value:22},"W"),o.a.createElement("option",{key:23,value:23},"X"),o.a.createElement("option",{key:24,value:24},"Y"),o.a.createElement("option",{key:25,value:25},"Z")],v=[o.a.createElement("option",{key:0,value:1},"I"),o.a.createElement("option",{key:1,value:2},"II"),o.a.createElement("option",{key:2,value:3},"III"),o.a.createElement("option",{key:3,value:4},"IV"),o.a.createElement("option",{key:4,value:5},"V")],y=[o.a.createElement("option",{key:0,value:"B"},"UKW-B (Wehrmacht)"),o.a.createElement("option",{key:1,value:"C"},"UKW-C (Luftwaffe)")];var k=function(e){var t=e.rotorChoices,r=e.rotorStarts,a=e.reflektor,n=Object(p.a)(t,3),l=n[0],s=n[1],c=n[2],u=Object(p.a)(r,3),m=u[0],d=u[1],h=u[2];return o.a.createElement("div",{style:g.root},o.a.createElement("h3",null,"Settings"),o.a.createElement("div",{style:g.labelsRoot},o.a.createElement("label",{style:g.label},"Rotor 1"),o.a.createElement("label",{style:g.label},"Rotor 2"),o.a.createElement("label",{style:g.label},"Rotor 3")),o.a.createElement("div",{style:g.selectRoot},o.a.createElement("select",{style:Object(i.a)({},g.select,"dark"===e.theme?g.select._dark:null),name:"rotor1",value:l,onChange:function(t){return e.onSelectChange(t.target.name,t.target.value)}},v),o.a.createElement("select",{style:Object(i.a)({},g.select,"dark"===e.theme?g.select._dark:null),name:"rotor2",value:s,onChange:function(t){return e.onSelectChange(t.target.name,t.target.value)}},v),o.a.createElement("select",{style:Object(i.a)({},g.select,"dark"===e.theme?g.select._dark:null),name:"rotor3",value:c,onChange:function(t){return e.onSelectChange(t.target.name,t.target.value)}},v)),o.a.createElement("div",{style:g.labelsRoot},o.a.createElement("label",{style:g.label},"Start 1"),o.a.createElement("label",{style:g.label},"Start 2"),o.a.createElement("label",{style:g.label},"Start 3")),o.a.createElement("div",{style:g.selectRoot},o.a.createElement("select",{style:Object(i.a)({},g.select,"dark"===e.theme?g.select._dark:null),name:"start1",value:m,onChange:function(t){return e.onSelectChange(t.target.name,t.target.value)}},b),o.a.createElement("select",{style:Object(i.a)({},g.select,"dark"===e.theme?g.select._dark:null),name:"start2",value:d,onChange:function(t){return e.onSelectChange(t.target.name,t.target.value)}},b),o.a.createElement("select",{style:Object(i.a)({},g.select,"dark"===e.theme?g.select._dark:null),name:"start3",value:h,onChange:function(t){return e.onSelectChange(t.target.name,t.target.value)}},b)),o.a.createElement("label",{style:g.reflektorLabel},"Reflektor"),o.a.createElement("select",{style:Object(i.a)({},g.reflektorSelect,"dark"===e.theme?g.reflektorSelect._dark:null),name:"reflektor",value:a,onChange:function(t){return e.onSelectChange(t.target.name,t.target.value)}},y))},f={root:{margin:"8px auto"},input:{width:"90%",maxWidth:"320px",resize:"none",border:"3px solid #999999",borderRadius:"8px",margin:"8px",boxShadow:"0 1px 4px 0 #999999",_dark:{backgroundColor:"#603030",color:"#eeeeee",boxShadow:"0 1px 4px 0 #666666"}}},_=function(e){return o.a.createElement("div",{style:f.root},o.a.createElement("textarea",{style:Object(i.a)({},f.input,"dark"===e.theme?f.input._dark:null),placeholder:"your message",autoComplete:"off",rows:8,value:e.message,onChange:function(t){return e.inputChange(t.target.value,e.crypto)}}),o.a.createElement("textarea",{style:Object(i.a)({},f.input,"dark"===e.theme?f.input._dark:null),readOnly:!0,placeholder:"encoded message",autoComplete:"off",rows:8,value:e.encoded}))},E={root:{padding:"16px 24px",fontSize:"1rem"}},C=function(){return o.a.createElement("div",{style:E.root},o.a.createElement("p",null,"Now try copying the encrypted message and paste it anywhere to send it to a friend. This same web app can be used to decrypt the message by copy/pasting the sent message into the first box.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("b",null,"Important: "),"Be sure to also share the exact same settings you used.",o.a.createElement("br",null),o.a.createElement("i",null,"example: 3 1 3, D A G, UKW-B, AB CD EF GH IJ KL MN OP QR ST")))},x={root:{fontSize:"0.9rem"},title:{fontSize:"1.10rem",margin:"0.8rem auto"},board:{display:"flex",justify:"space-between",margin:"0 auto"},pair:{margin:"0 auto"},select:{border:"none",margin:"0.25rem",fontSize:"1.10rem",_dark:{backgroundColor:"#603030",color:"#eeeeee"}}};var w=function(e){var t=function(){return e.possible.map(function(e,t){return o.a.createElement("option",{key:t},e)})},r=function(t,r,a,n){return o.a.createElement("div",{style:x.pair},"Pair ",t,o.a.createElement("div",null,o.a.createElement("select",{style:Object(i.a)({},x.select,"dark"===e.theme?x.select._dark:null),value:a,onChange:function(r){return e.onChangeKey(r.target.value,t)}},o.a.createElement("option",null,a),r)),o.a.createElement("div",null,o.a.createElement("select",{style:Object(i.a)({},x.select,"dark"===e.theme?x.select._dark:null),value:n,onChange:function(r){return e.onChangeValue(r.target.value,t)}},o.a.createElement("option",null,n),r)))},a=function(t){return Object.keys(e.board[t])[0]};return o.a.createElement("div",{style:x.root},o.a.createElement("div",{style:x.title},"Plugboard"),o.a.createElement("div",{style:x.board},r(1,t(),a(1),e.board[1][a(1)]),r(2,t(),a(2),e.board[2][a(2)]),r(3,t(),a(3),e.board[3][a(3)]),r(4,t(),a(4),e.board[4][a(4)]),r(5,t(),a(5),e.board[5][a(5)])),o.a.createElement("div",{style:x.board},r(6,t(),a(6),e.board[6][a(6)]),r(7,t(),a(7),e.board[7][a(7)]),r(8,t(),a(8),e.board[8][a(8)]),r(9,t(),a(9),e.board[9][a(9)]),r(10,t(),a(10),e.board[10][a(10)])))},S=r(3),j=r.n(S),O=["e","k","m","f","l","g","d","q","v","z","n","t","o","w","y","h","x","u","s","p","a","i","b","r","c","j"],R=["a","j","d","k","s","i","r","u","x","b","l","h","w","t","m","c","q","g","z","n","p","y","f","v","o","e"],z=["b","d","f","h","j","l","c","p","r","t","x","v","z","n","y","e","i","w","g","a","k","m","u","s","q","o"],q=["e","s","o","v","p","z","j","a","y","q","u","i","r","h","x","l","n","f","t","g","k","d","c","m","w","b"],I=["v","z","b","r","g","i","t","y","u","p","s","d","n","h","l","x","a","w","m","j","q","o","f","e","c","k"],T=function(){function e(t,r){switch(Object(c.a)(this,e),this.__position=r,t){case 1:this.__letters=O,this.__turnover="q";break;case 2:this.__letters=R,this.__turnover="e";break;case 3:this.__letters=z,this.__turnover="v";break;case 4:this.__letters=q,this.__turnover="j";break;case 5:this.__letters=I,this.__turnover="z";break;default:console.error("error invalid Rotor input. using default mapping."),this.__letters=O}}return Object(u.a)(e,[{key:"getCurrentPosition",value:function(){return this.__position}},{key:"getTurnover",value:function(){return this.__turnover}},{key:"getChar",value:function(e){return this.__letters[e]}},{key:"findIndex",value:function(e){return this.__letters.indexOf(e)}},{key:"rotorStep",value:function(){++this.__position,this.__position>25&&(this.__position=0)}}]),e}(),B={a:"y",b:"r",c:"u",d:"h",e:"q",f:"s",g:"l",h:"d",i:"p",j:"x",k:"n",l:"g",m:"o",n:"k",o:"m",p:"i",q:"e",r:"b",s:"f",t:"z",u:"c",v:"w",w:"v",x:"j",y:"a",z:"t"},K={a:"f",b:"v",c:"p",d:"j",e:"i",f:"a",g:"o",h:"y",i:"e",j:"d",k:"r",l:"z",m:"x",n:"w",o:"g",p:"c",q:"t",r:"k",s:"u",t:"q",u:"s",v:"b",w:"n",x:"m",y:"h",z:"l"},W=function(){function e(t,r,a,o,n,l,i,s){switch(Object(c.a)(this,e),this.__rotor1=new T(t,o),this.__rotor2=new T(r,n),this.__rotor3=new T(a,l),this.__plugboard=s,i){case"B":this.__reflektor=B;break;case"C":this.__reflektor=K;break;default:this.__reflektor=B}}return Object(u.a)(e,[{key:"write",value:function(e){var t=e.toLowerCase().split("");for(var r in t){var a=!1,o=!1,n=this.__rotor3.getTurnover(),l=String.fromCharCode(this.__rotor3.getCurrentPosition()+97),i=this.__rotor2.getTurnover(),s=String.fromCharCode(this.__rotor2.getCurrentPosition()+97);n===l&&(a=!0);var c=t[r];/^[a-z]$/.test(c)&&(c=this.__plugboard[c]?this.__plugboard[c]:c,c=this.__writeRotorForward(this.__rotor3,c),c=this.__writeRotorForward(this.__rotor2,c),c=this.__writeRotorForward(this.__rotor1,c),c=this.__reflektor[c],c=this.__writeRotorReverse(this.__rotor1,c),c=this.__writeRotorReverse(this.__rotor2,c),c=this.__writeRotorReverse(this.__rotor3,c),c=this.__plugboard[c]?this.__plugboard[c]:c,t[r]=c,this.__rotor3.rotorStep(),a&&this.__rotor2.rotorStep(),i===s&&(o=!0),o&&this.__rotor1.rotorStep())}return t.join("")}},{key:"__writeRotorForward",value:function(e,t){var r=e.getCurrentPosition(),a=(t.charCodeAt(0)-97+r)%26,o=e.getChar(a).charCodeAt(0);return o=o-r<97?o-(r-26):o-r,String.fromCharCode(o)}},{key:"__writeRotorReverse",value:function(e,t){var r=e.getCurrentPosition(),a=t.charCodeAt(0),o=a+r>122?String.fromCharCode(a+(r-26)):String.fromCharCode(a+r),n=e.findIndex(o),l=n-r<0?n-(r-26)+97:n-r+97;return String.fromCharCode(l)}}]),e}();W.propTypes={rotor1:j.a.number.isRequired,start1:j.a.number.isRequired,rotor2:j.a.number.isRequired,start2:j.a.number.isRequired,rotor3:j.a.number.isRequired,start3:j.a.number.isRequired,plugboard:j.a.object.isRequired};var P={root:{textAlign:"center"},header:{border:"1px solid #603030",backgroundColor:"#603030",color:"#fefefe"},themetoggle:{borderRadius:"8px",margin:"8px 4px",padding:"4px",fontSize:"0.8rem",backgroundColor:"transparent",border:"1px solid #000000",boxShadow:"0 1px 4px 0 #999999",_dark:{border:"1px solid #eeeeee",color:"#eeeeee",boxShadow:"0 1px 4px 0 #666666"}},title:{fontSize:"1.35rem"},content:{margin:"0 auto",padding:"8px",maxWidth:"800px"}},A=10,L=function(e){function t(){var e,r;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return(r=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={theme:"light",rotor1:1,rotor2:2,rotor3:3,start1:0,start2:0,start3:0,reflektor:"B",plugboard:[{sent:"inel"},{a:"b"},{c:"d"},{e:"f"},{g:"h"},{i:"j"},{k:"l"},{m:"n"},{o:"p"},{q:"r"},{s:"t"}],possible:["u","v","w","x","y","z"],message:"",encoded:""},r.getCookieByKey=function(e){var t=decodeURIComponent(document.cookie);if(t&&0!==t.length){var r=t.split(";"),a=!0,o=!1,n=void 0;try{for(var l,i=r[Symbol.iterator]();!(a=(l=i.next()).done);a=!0){var s=l.value.split("=");if(s[0]===e)return s[1]}}catch(c){o=!0,n=c}finally{try{a||null==i.return||i.return()}finally{if(o)throw n}}}return""},r.toggleTheme=function(){r.setState(function(e){var t="light"===e.theme?"dark":"light",r=new Date;return r.setTime(r.getTime()+864e5),document.cookie="theme=".concat(t,";expires=").concat(r.toUTCString(),";path=/;"),{theme:t}})},r.onMessageWrite=function(e,t){r.setState({message:e,encoded:t.write(e)})},r.choiceChange=function(e,t){var a;/[0-9]/.test(t)&&(t=parseInt(t,A)),r.setState((a={},Object(s.a)(a,e,t),Object(s.a)(a,"message",""),Object(s.a)(a,"encoded",""),a))},r.plugboardChangeKey=function(e,t){r.setState(function(r){var a=Object.keys(r.plugboard[t])[0],o=r.possible;o[o.indexOf(e)]=a;var n=r.plugboard[t][a],l=r.plugboard;return a=e,l[t]=Object(s.a)({},a,n),{plugboard:l,possible:o,message:"",encoded:""}})},r.plugboardChangeValue=function(e,t){r.setState(function(r){var a=r.plugboard,o=Object.keys(a[t])[0],n=a[t][o],l=r.possible;return l[l.indexOf(e)]=n,n=e,a[t]=Object(s.a)({},o,n),{plugboard:a,possible:l,message:"",encoded:""}})},r}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({theme:this.getCookieByKey("theme")||"light"})}},{key:"render",value:function(){var e=this.state,t=e.rotor1,r=e.rotor2,a=e.rotor3,n=e.start1,l=e.start2,s=e.start3,c=e.reflektor,u=function(e){var t={},r=!0,a=!1,o=void 0;try{for(var n,l=e[Symbol.iterator]();!(r=(n=l.next()).done);r=!0){var i=n.value,s=Object.keys(i)[0];t[s]=i[s],t[i[s]]=s}}catch(c){a=!0,o=c}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return t}(e.plugboard),m=new W(t,r,a,n,l,s,"B",u),d="dark"===this.state.theme?{backgroundColor:"#333333",color:"#eeeeee"}:{backgroundColor:"#eeeeee",color:"#000000"};return o.a.createElement("div",{style:Object(i.a)({},P.root,d)},o.a.createElement("div",{style:P.header},o.a.createElement("h1",{style:P.title},"Enigma M3 Web")),o.a.createElement("div",{style:P.content},o.a.createElement(k,{theme:this.state.theme,rotorChoices:[t,r,a],rotorStarts:[n,l,s],reflektor:c,onSelectChange:this.choiceChange}),o.a.createElement(w,{theme:this.state.theme,board:this.state.plugboard,possible:this.state.possible,onChangeKey:this.plugboardChangeKey,onChangeValue:this.plugboardChangeValue}),o.a.createElement(_,{theme:this.state.theme,inputChange:this.onMessageWrite,message:this.state.message,encoded:this.state.encoded,crypto:m}),o.a.createElement(C,{theme:this.state.theme})),o.a.createElement("footer",null,o.a.createElement("button",{className:"anybutton",style:Object(i.a)({},P.themetoggle,"dark"===this.state.theme?P.themetoggle._dark:null),onClick:this.toggleTheme},"Toggle ","dark"===this.state.theme?"Light":"Dark"," Theme")))}}]),t}(o.a.Component);l.a.render(o.a.createElement(L,null),document.getElementById("root"))}},[[12,2,1]]]);