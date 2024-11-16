(()=>{"use strict";var e={};let t;e.m={},e.u=e=>e+".script.js",e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(t=n.currentScript.src),!t)){var i=n.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=i[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.b=document.baseURI||self.location.href;const n=document.getElementById("production_calculator_btn"),i=document.getElementById("power_calculator_btn"),o=document.getElementById("set_research_btn"),r=document.getElementById("set_recipes_btn"),s=document.getElementById("production_inputs_container"),c=(document.getElementById("production_input_list_container"),document.getElementById("add_production_input_btn")),a=document.getElementById("production_outputs_container"),d=(document.getElementById("production_output_list_container"),document.getElementById("add_production_output_btn")),l=document.getElementById("power_output_container"),u=document.getElementById("power_output_field"),m=document.getElementById("share_production_btn"),h=document.getElementById("share_power_btn"),p=(document.getElementById("production_calculator_canvas"),document.getElementById("power_calculator_canvas"),document.getElementById("notifs_container"));class f{#e=["default","success","warning","error"];constructor(e,t,n="default",i=0){this.element,this.timeout,this.#e.includes(n)||(n="default"),this.#t(e,t,n),i&&(this.timeout=setTimeout(this.#n.bind(this),i)),this.#i()}#t(e,t,n){this.element=document.createElement("div"),n&&this.element.classList.add(n),this.element.innerHTML=`<h1>${e}</h1><p>${t}</p><br><a href="">Close message</a>`,this.element.children[3].addEventListener("click",this.#n.bind(this))}#i(){p.prepend(this.element)}#n(e){e?.preventDefault(),this.element.remove(),clearTimeout(this.timeout)}}function y(e){}function _(){n.classList.remove("active"),i.classList.add("active"),s.classList.add("hidden"),a.classList.add("hidden"),l.classList.remove("hidden"),m.classList.add("hidden"),h.classList.remove("hidden")}new Set([[n,function(){n.classList.add("active"),i.classList.remove("active"),s.classList.remove("hidden"),a.classList.remove("hidden"),l.classList.add("hidden"),m.classList.remove("hidden"),h.classList.add("hidden")}],[i,_],[o,function(){new f("TODO","This is not yet implemented, sorry.","default",1e4)}],[r,function(){new f("TODO","This is not yet implemented, sorry.","default",1e4)}],[c,function(){new f("TODO","This is not yet implemented, sorry.","default",1e4)}],[d,function(){new f("TODO","This is not yet implemented, sorry.","default",1e4)}],[m,function(){new f("TODO","This is not yet implemented, sorry.","default",1e4)}],[h,function(){new f("TODO","This is not yet implemented, sorry.","default",1e4)}]]).forEach((([e,t])=>e.addEventListener("click",t))),function(){if(t=new Worker(new URL(e.p+e.u(495),e.b),{type:void 0}),t.addEventListener("message",y),window.location.search)try{const[e,t,n,i]=function(){const e=new URLSearchParams(window.location.search),t=e.get("c");if(!["prod","pwr"].includes(t))throw["Invalid Calculator",'The selected calculator (after the question mark in the URL) is invalid.<br>Possible modes: "prd" and "pwr".'];let n,i,o;try{n=JSON.parse(e.get("research")??"[]"),i=JSON.parse(e.get("recipes")??"[]"),o=JSON.parse(e.get("data")??"{}")}catch(e){throw["Invalid JSON",'The JSON parameters (after the question mark in the URL) seem to be malformed.<br>If you\'ve got some time, could you maybe <a target="_blank" href="https://github.com/TimKoenig96/coi-calculator/issues/new">create an issue</a>?<br>To fix this, remove everything after the question mark and recreate the calculation.']}return[t,n,i,o]}();"pwr"===e&&(_(),u.value=Number(i.power_output??0))}catch(e){new f(e[0],e[1],"error")}}()})();