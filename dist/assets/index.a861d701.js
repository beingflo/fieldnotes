var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,o=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&s(e,a,t[a]);if(r)for(var a of r(t))n.call(t,a)&&s(e,a,t[a]);return e},c=(e,r)=>t(e,a(r));import{R as u,t as m,u as i,E as d,S as p,H as b,T as g,a as E,r as h,b as v,Z as y,c as f}from"./vendor.bbe35798.js";var w="http://localhost:3030";const x=(e,t)=>{switch(t.type){case"set-notes":return c(o({},e),{noteList:t.noteList});default:return e}},N=(e,t)=>{switch(t.type){case"set-waiting":return c(o({},e),{waiting:Math.max(e.waiting+(t.waiting?1:-1),0)});default:return e}},C=(e,t)=>{switch(t.type){case"set-status":return c(o({},e),{status:t.status});default:return e}},S=(e,t)=>{t({type:"set-status",status:e})};var O,k;(k=O||(O={})).OK="OK",k.REDIRECT="REDIRECT";const P={waiting:0,noteList:[],currentNote:void 0,status:O.OK},L=u.createContext({state:P,dispatch:()=>{}}),T=({children:e})=>{const t=u.useMemo((()=>({"set-notes":x,"set-waiting":N,[D]:I,"set-status":C})),[]),[a,r]=u.useReducer(((e,a)=>{if(a.type in t){return(0,t[a.type])(e,a)}return e}),P);return u.createElement(L.Provider,{value:{state:a,dispatch:r}},e)},j=()=>{const{state:e}=u.useContext(L);return e},R=()=>{const{dispatch:e}=u.useContext(L);return e},D="set-current-note",I=(e,t)=>{switch(t.type){case D:return c(o({},e),{currentNote:t.note});default:return e}},F=e=>{if(!e.ok)throw Error(e.statusText);return e},K=e=>{m.error(e.toString())},M=`${w}/notes`,$=e=>{fetch(M,{credentials:"include",method:"GET",headers:{"Content-Type":"application/json"}}).then(F).then((e=>e.json())).then((t=>{((e,t)=>{t({type:"set-notes",noteList:e})})(t,e),S(O.OK,e)})).catch((()=>{S(O.REDIRECT,e)}))};const z=`${w}/user`,B=`${w}/session`,G=(e,t=(()=>{}),a=K)=>{fetch(B,{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(F).then(t).catch(a)},H=()=>{const e=i({extensions:[p,b,g],content:"<p>Write something nice...</p>",autofocus:"end",editable:!0,editorProps:{attributes:{class:"prose p-2 focus:outline-none h-screen"}}});return u.createElement(d,{editor:e})},J=()=>{const e=R(),t=(()=>{const{noteList:e}=j();return e})();return u.useCallback((()=>{fetch(B,{credentials:"include",method:"DELETE",headers:{"Content-Type":"application/json"}}).then(F).catch(K),S(O.REDIRECT,e)}),[e]),u.createElement("div",{className:"h-screen flex"},u.createElement("div",null,"Sidebar",u.createElement("ul",null,t.map((e=>u.createElement("li",null,e.metainfo))))),u.createElement("div",{className:"w-1/2"},u.createElement(H,null)))};const U=()=>u.createElement("div",{className:"spinner w-6 h-6"},u.createElement("div",{className:"double-bounce1 bg-white"}),u.createElement("div",{className:"double-bounce2 bg-white"})),W=()=>u.createElement("div",{className:"flex h-48 md:h-screen"},u.createElement("div",{className:"spinner m-auto w-12 h-12"},u.createElement("div",{className:"double-bounce1 bg-yellow-300"}),u.createElement("div",{className:"double-bounce2 bg-green-500"}))),Z=()=>{const e=R(),[t,a]=u.useState(""),[r,l]=u.useState(""),[n,s]=u.useState(!1),o=u.useCallback((a=>{s(!0),G({name:t,password:r},(()=>{$(e),s(!1)})),a.preventDefault()}),[e,t,r,n]),c=!t||!r;return u.createElement("div",{className:"mt-12"},u.createElement("form",{className:"grid grid-cols-1 gap-6",onSubmit:o},u.createElement("label",{className:"block"},u.createElement("span",{className:"text-gray-700 text-sm"},"Username"),u.createElement("input",{type:"text",className:"mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-gray-400 placeholder-gray-400",placeholder:"Enter your username",value:t,onChange:e=>{var t;return a(null==(t=null==e?void 0:e.target)?void 0:t.value)}})),u.createElement("label",{className:"block"},u.createElement("span",{className:"text-gray-700 text-sm"},"Password"),u.createElement("input",{type:"password",className:"mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-gray-400 placeholder-gray-400",placeholder:"Enter your password",value:r,onChange:e=>{var t;return l(null==(t=null==e?void 0:e.target)?void 0:t.value)}})),u.createElement("button",{type:"submit",disabled:c,className:"w-full py-3 mt-14 bg-gray-800 rounded-md disabled:bg-gray-400\n                    font-medium text-white uppercase\n                    focus:outline-none hover:bg-gray-700 hover:shadow-none"},u.createElement("div",{className:"relative"},u.createElement("span",null,"Login"),n&&u.createElement("span",{className:"absolute pl-2"},u.createElement(U,null))))))},q=()=>{const e=R(),[t,a]=u.useState(""),[r,l]=u.useState(""),[n,s]=u.useState(""),[o,c]=u.useState(""),[m,i]=u.useState(!1),d=u.useCallback((a=>{i(!0),((e,t=(()=>{}),a=K)=>{fetch(z,{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(F).then(t).catch(a)})({name:t,password:r},(()=>{G({name:t,password:r},(()=>{$(e),i(!1)}))})),a.preventDefault()}),[e,t,r,m]),p=r===n&&""!==r,b=r!==n&&(""!==r||""!==n),g=!p||!t;return u.createElement("div",{className:"mt-12"},u.createElement("form",{className:"grid grid-cols-1 gap-6",onSubmit:d},u.createElement("label",{className:"block"},u.createElement("span",{className:"text-gray-700 text-sm"},"Username"),u.createElement("input",{type:"text",className:"mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-gray-400 placeholder-gray-400",placeholder:"Choose a username",value:t,onChange:e=>{var t;return a(null==(t=null==e?void 0:e.target)?void 0:t.value)}})),u.createElement("label",{className:"block"},u.createElement("span",{className:"text-gray-700 text-sm"},"Password"),u.createElement("input",{type:"password",className:"mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-gray-400 placeholder-gray-400",placeholder:"Enter your password",autoComplete:"new-password",value:r,onChange:e=>{var t;return l(null==(t=null==e?void 0:e.target)?void 0:t.value)}})),u.createElement("label",{className:"block"},u.createElement("span",{className:"text-gray-700 text-sm"},"Confirm Password"),u.createElement("div",{className:"relative"},u.createElement("input",{type:"password",className:"mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-gray-400 placeholder-gray-400",placeholder:"Confirm your password",autoComplete:"new-password",value:n,onChange:e=>{var t;return s(null==(t=null==e?void 0:e.target)?void 0:t.value)}}),p&&u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","stroke-width":"2",className:"fill-current text-green-500 absolute top-3 right-3"},u.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm4.768 9.14a1 1 0 1 0-1.536-1.28l-4.3 5.159-2.225-2.226a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.475-.067l5-6z"})),b&&u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","stroke-width":"2",className:"fill-current text-red-500 absolute top-3 right-3"},u.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm3.707 8.707a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293a1 1 0 1 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293z"})))),u.createElement("label",{className:"block mt-4"},u.createElement("span",{className:"text-gray-500 text-sm"},"Email address (optional)"),u.createElement("input",{type:"email",className:"mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-gray-400 placeholder-gray-400",placeholder:"Enter your email address",value:o,onChange:e=>{var t;return c(null==(t=null==e?void 0:e.target)?void 0:t.value)}})),u.createElement("button",{type:"submit",disabled:g,className:"w-full py-3 mt-10 bg-gray-800 disabled:bg-gray-400 rounded-md\n                    font-medium text-white uppercase\n                    focus:outline-none hover:bg-gray-700 hover:shadow-none"},u.createElement("div",{className:"relative"},u.createElement("span",null,"Create account"),m&&u.createElement("span",{className:"absolute pl-2"},u.createElement(U,null))))))};const A=()=>u.createElement("div",{className:"flex h-auto"},u.createElement("div",{className:"p-8 shadow-2xl rounded-md mx-2 sm:mx-auto my-8 w-full sm:max-w-md"},u.createElement(E.Group,null,u.createElement(E.List,{className:"grid grid-cols-3"},u.createElement(E,{as:h.exports.Fragment},(({selected:e})=>u.createElement("div",{className:"flex"},u.createElement("button",{className:`text-2xl font-bold mx-auto ${e&&"highlight"}`},"Login")))),u.createElement("h2",{className:"text-2xl font-bold text-center"},"|"),u.createElement(E,{as:h.exports.Fragment},(({selected:e})=>u.createElement("div",{className:"flex"},u.createElement("button",{className:`text-2xl font-bold mx-auto ${e&&"highlight"}`},"Sign up"))))),u.createElement(E.Panels,null,u.createElement(E.Panel,null,u.createElement(Z,null)),u.createElement(E.Panel,null,u.createElement(q,null)))))),Q=()=>{const e=R(),t=(()=>{const{status:e}=j();return e})(),[a,r]=u.useState(!0);return u.useEffect((()=>{$(e),r(!1)}),[e]),u.createElement(u.Fragment,null,u.createElement(v,{position:"top-center",autoClose:5e3,transition:y,hideProgressBar:!0,closeOnClick:!0,pauseOnFocusLoss:!1,draggable:!0,pauseOnHover:!0}),a?u.createElement(W,null):u.createElement(u.Fragment,null,t===O.OK?u.createElement(J,null):u.createElement(A,null)))};f.render(u.createElement(u.StrictMode,null,u.createElement(T,null,u.createElement(Q,null))),document.getElementById("root"));
