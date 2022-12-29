import{w as P,r as E,c as v,d as w,o as m,a as O,b as R,e as j,f as N,g as se,h as T,n as h,u as r,t as H,v as ne,T as oe,s as ye,i as ae,j as I,k as he,l as x,m as _e,F as B,p as be,q as G,x as re,y as z,z as W,A as Oe,$ as k,B as Ce,C as we,D as Ie,E as Ee,_ as Te}from"./index-a14e1371.js";import{i as Se,n as xe,t as le,r as Ne,a as F,b as Pe,c as $e,u as ke,d as U,e as ue,f as M,_ as ie,w as Be,g as b,h as ze,p as Me,j as Le,T as q,E as K,k as De,l as Ae,m as Re,o as je}from"./base-3e483739.js";function ce(t){var s;const e=Ne(t);return(s=e==null?void 0:e.$el)!=null?s:e}const pe=F?window:void 0;function He(...t){let s,e,n,o;if(Se(t[0])||Array.isArray(t[0])?([e,n,o]=t,s=pe):[s,e,n,o]=t,!s)return xe;Array.isArray(e)||(e=[e]),Array.isArray(n)||(n=[n]);const a=[],l=()=>{a.forEach(d=>d()),a.length=0},i=(d,f,_)=>(d.addEventListener(f,_,o),()=>d.removeEventListener(f,_,o)),c=P(()=>ce(s),d=>{l(),d&&a.push(...e.flatMap(f=>n.map(_=>i(d,f,_))))},{immediate:!0,flush:"post"}),g=()=>{c(),l()};return le(g),g}function Fe(t,s=!1){const e=E(),n=()=>e.value=Boolean(t());return n(),Pe(n,s),e}const L=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D="__vueuse_ssr_handlers__";L[D]=L[D]||{};L[D];var J=Object.getOwnPropertySymbols,Ue=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable,Ve=(t,s)=>{var e={};for(var n in t)Ue.call(t,n)&&s.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&J)for(var n of J(t))s.indexOf(n)<0&&Qe.call(t,n)&&(e[n]=t[n]);return e};function Ze(t,s,e={}){const n=e,{window:o=pe}=n,a=Ve(n,["window"]);let l;const i=Fe(()=>o&&"ResizeObserver"in o),c=()=>{l&&(l.disconnect(),l=void 0)},g=P(()=>ce(t),f=>{c(),i.value&&o&&f&&(l=new ResizeObserver(s),l.observe(f,a))},{immediate:!0,flush:"post"}),d=()=>{c(),g()};return le(d),{isSupported:i,stop:d}}var X;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(X||(X={}));var Ge=Object.defineProperty,Y=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable,ee=(t,s,e)=>s in t?Ge(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,Ke=(t,s)=>{for(var e in s||(s={}))We.call(s,e)&&ee(t,e,s[e]);if(Y)for(var e of Y(s))qe.call(s,e)&&ee(t,e,s[e]);return t};const Je={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Ke({linear:$e},Je);const Xe={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},Ye=t=>t,te=E(0),et=()=>{const t=ke("zIndex",2e3),s=v(()=>t.value+te.value);return{initialZIndex:t,currentZIndex:s,nextZIndex:()=>(te.value++,s.value)}},tt=U({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),st=["textContent"],nt=w({name:"ElBadge"}),ot=w({...nt,props:tt,setup(t,{expose:s}){const e=t,n=ue("badge"),o=v(()=>e.isDot?"":M(e.value)&&M(e.max)?e.max<e.value?`${e.max}+`:`${e.value}`:`${e.value}`);return s({content:o}),(a,l)=>(m(),O("div",{class:h(r(n).b())},[R(a.$slots,"default"),j(oe,{name:`${r(n).namespace.value}-zoom-in-center`,persisted:""},{default:N(()=>[se(T("sup",{class:h([r(n).e("content"),r(n).em("content",a.type),r(n).is("fixed",!!a.$slots.default),r(n).is("dot",a.isDot)]),textContent:H(r(o))},null,10,st),[[ne,!a.hidden&&(r(o)||a.isDot)]])]),_:1},8,["name"])],2))}});var at=ie(ot,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const rt=Be(at),A={},lt=U({a11y:{type:Boolean,default:!0},locale:{type:b(Object)},size:ze,button:{type:b(Object)},experimentalFeatures:{type:b(Object)},keyboardNavigation:{type:Boolean,default:!0},message:{type:b(Object)},zIndex:Number,namespace:{type:String,default:"el"}});w({name:"ElConfigProvider",props:lt,setup(t,{slots:s}){P(()=>t.message,n=>{Object.assign(A,n??{})},{immediate:!0,deep:!0});const e=Me(t);return()=>R(s,"default",{config:e==null?void 0:e.value})}});const de=["success","info","warning","error"],p=Ye({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:F?document.body:void 0}),ut=U({customClass:{type:String,default:p.customClass},center:{type:Boolean,default:p.center},dangerouslyUseHTMLString:{type:Boolean,default:p.dangerouslyUseHTMLString},duration:{type:Number,default:p.duration},icon:{type:Le,default:p.icon},id:{type:String,default:p.id},message:{type:b([String,Object,Function]),default:p.message},onClose:{type:b(Function),required:!1},showClose:{type:Boolean,default:p.showClose},type:{type:String,values:de,default:p.type},offset:{type:Number,default:p.offset},zIndex:{type:Number,default:p.zIndex},grouping:{type:Boolean,default:p.grouping},repeatNum:{type:Number,default:p.repeatNum}}),it={destroy:()=>!0},y=ye([]),ct=t=>{const s=y.findIndex(o=>o.id===t),e=y[s];let n;return s>0&&(n=y[s-1]),{current:e,prev:n}},pt=t=>{const{prev:s}=ct(t);return s?s.vm.exposed.bottom.value:0},dt=["id"],ft=["innerHTML"],mt=w({name:"ElMessage"}),gt=w({...mt,props:ut,emits:it,setup(t,{expose:s}){const e=t,{Close:n}=De,o=ue("message"),a=E(),l=E(!1),i=E(0);let c;const g=v(()=>e.type?e.type==="error"?"danger":e.type:"info"),d=v(()=>{const u=e.type;return{[o.bm("icon",u)]:u&&q[u]}}),f=v(()=>e.icon||q[e.type]||""),_=v(()=>pt(e.id)),Q=v(()=>e.offset+_.value),me=v(()=>i.value+Q.value),ge=v(()=>({top:`${Q.value}px`,zIndex:e.zIndex}));function $(){e.duration!==0&&({stop:c}=Ae(()=>{S()},e.duration))}function V(){c==null||c()}function S(){l.value=!1}function ve({code:u}){u===Xe.esc&&S()}return ae(()=>{$(),l.value=!0}),P(()=>e.repeatNum,()=>{V(),$()}),He(document,"keydown",ve),Ze(a,()=>{i.value=a.value.getBoundingClientRect().height}),s({visible:l,bottom:me,close:S}),(u,Z)=>(m(),I(oe,{name:r(o).b("fade"),onBeforeLeave:u.onClose,onAfterLeave:Z[0]||(Z[0]=St=>u.$emit("destroy")),persisted:""},{default:N(()=>[se(T("div",{id:u.id,ref_key:"messageRef",ref:a,class:h([r(o).b(),{[r(o).m(u.type)]:u.type&&!u.icon},r(o).is("center",u.center),r(o).is("closable",u.showClose),u.customClass]),style:he(r(ge)),role:"alert",onMouseenter:V,onMouseleave:$},[u.repeatNum>1?(m(),I(r(rt),{key:0,value:u.repeatNum,type:r(g),class:h(r(o).e("badge"))},null,8,["value","type","class"])):x("v-if",!0),r(f)?(m(),I(r(K),{key:1,class:h([r(o).e("icon"),r(d)])},{default:N(()=>[(m(),I(_e(r(f))))]),_:1},8,["class"])):x("v-if",!0),R(u.$slots,"default",{},()=>[u.dangerouslyUseHTMLString?(m(),O(B,{key:1},[x(" Caution here, message could've been compromised, never use user's input as message "),T("p",{class:h(r(o).e("content")),innerHTML:u.message},null,10,ft)],2112)):(m(),O("p",{key:0,class:h(r(o).e("content"))},H(u.message),3))]),u.showClose?(m(),I(r(K),{key:2,class:h(r(o).e("closeBtn")),onClick:be(S,["stop"])},{default:N(()=>[j(r(n))]),_:1},8,["class","onClick"])):x("v-if",!0)],46,dt),[[ne,l.value]])]),_:3},8,["name","onBeforeLeave"]))}});var vt=ie(gt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let yt=1;const fe=t=>{const s=!t||G(t)||re(t)||z(t)?{message:t}:t,e={...p,...s};if(!e.appendTo)e.appendTo=document.body;else if(G(e.appendTo)){let n=document.querySelector(e.appendTo);Re(n)||(n=document.body),e.appendTo=n}return e},ht=t=>{const s=y.indexOf(t);if(s===-1)return;y.splice(s,1);const{handler:e}=t;e.close()},_t=({appendTo:t,...s},e)=>{const{nextZIndex:n}=et(),o=`message_${yt++}`,a=s.onClose,l=document.createElement("div"),i={...s,zIndex:n()+s.zIndex,id:o,onClose:()=>{a==null||a(),ht(f)},onDestroy:()=>{W(null,l)}},c=j(vt,i,z(i.message)||re(i.message)?{default:z(i.message)?i.message:()=>i.message}:null);c.appContext=e||C._context,W(c,l),t.appendChild(l.firstElementChild);const g=c.component,f={id:o,vnode:c,vm:g,handler:{close:()=>{g.exposed.visible.value=!1}},props:c.component.props};return f},C=(t={},s)=>{if(!F)return{close:()=>{}};if(M(A.max)&&y.length>=A.max)return{close:()=>{}};const e=fe(t);if(e.grouping&&y.length){const o=y.find(({vnode:a})=>{var l;return((l=a.props)==null?void 0:l.message)===e.message});if(o)return o.props.repeatNum+=1,o.props.type=e.type,o.handler}const n=_t(e,s);return y.push(n),n.handler};de.forEach(t=>{C[t]=(s={},e)=>{const n=fe(s);return C({...n,type:t},e)}});function bt(t){for(const s of y)(!t||t===s.props.type)&&s.handler.close()}C.closeAll=bt;C._context=null;const Ot=je(C,"$message");const Ct=t=>(Ie("data-v-c304063f"),t=t(),Ee(),t),wt=Ct(()=>T("div",{style:{"text-align":"center"}},"home 首页",-1)),It={class:"btn"},Et=["onClick"],Tt=w({__name:"HomePage",setup(t){const s=we(),e=Oe(),n=v(()=>e.routes),o=a=>{s.push({path:a})};return ae(()=>{e.routes.length<1&&k.GetDynamicRoutes().then(a=>{console.log(a),Ot({message:"hhhhh",type:"warning"}),e.addRoutes(a.data,s)}),console.log("1111",k)}),k.TestApi().then(a=>{console.log(a)}),(a,l)=>(m(),O(B,null,[wt,T("div",It,[(m(!0),O(B,null,Ce(r(n),(i,c)=>(m(),O("button",{key:c,onClick:g=>o(i.path)},H(i.name),9,Et))),128))])],64))}});const Pt=Te(Tt,[["__scopeId","data-v-c304063f"]]);export{Pt as default};
