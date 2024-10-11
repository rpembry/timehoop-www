(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))l(f);new MutationObserver(f=>{for(const r of f)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function s(f){const r={};return f.integrity&&(r.integrity=f.integrity),f.referrerPolicy&&(r.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?r.credentials="include":f.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(f){if(f.ep)return;f.ep=!0;const r=s(f);fetch(f.href,r)}})();const Ue=(t,i)=>t===i,ve={equals:Ue};let Se=Re;const $=1,ae=2,Ce={owned:null,cleanups:null,context:null,owner:null};var M=null;let ge=null,Ve=null,_=null,S=null,A=null,fe=0;function Ge(t,i){const s=_,l=M,f=t.length===0,r=i===void 0?l:i,c=f?Ce:{owned:null,cleanups:null,context:r?r.context:null,owner:r},u=f?t:()=>t(()=>Q(()=>X(c)));M=c,_=null;try{return Z(u,!0)}finally{_=s,M=l}}function se(t,i){i=i?Object.assign({},ve,i):ve;const s={value:t,observers:null,observerSlots:null,comparator:i.equals||void 0},l=f=>(typeof f=="function"&&(f=f(s.value)),Ee(s,f));return[Xe.bind(s),l]}function q(t,i,s){const l=Te(t,i,!1,$);ue(l)}function Ke(t,i,s){Se=ze;const l=Te(t,i,!1,$);l.user=!0,A?A.push(l):ue(l)}function Q(t){if(_===null)return t();const i=_;_=null;try{return t()}finally{_=i}}function Je(t){Ke(()=>Q(t))}function qe(t){return M===null||(M.cleanups===null?M.cleanups=[t]:M.cleanups.push(t)),t}function Xe(){if(this.sources&&this.state)if(this.state===$)ue(this);else{const t=S;S=null,Z(()=>re(this),!1),S=t}if(_){const t=this.observers?this.observers.length:0;_.sources?(_.sources.push(this),_.sourceSlots.push(t)):(_.sources=[this],_.sourceSlots=[t]),this.observers?(this.observers.push(_),this.observerSlots.push(_.sources.length-1)):(this.observers=[_],this.observerSlots=[_.sources.length-1])}return this.value}function Ee(t,i,s){let l=t.value;return(!t.comparator||!t.comparator(l,i))&&(t.value=i,t.observers&&t.observers.length&&Z(()=>{for(let f=0;f<t.observers.length;f+=1){const r=t.observers[f],c=ge&&ge.running;c&&ge.disposed.has(r),(c?!r.tState:!r.state)&&(r.pure?S.push(r):A.push(r),r.observers&&Ne(r)),c||(r.state=$)}if(S.length>1e6)throw S=[],new Error},!1)),i}function ue(t){if(!t.fn)return;X(t);const i=fe;Qe(t,t.value,i)}function Qe(t,i,s){let l;const f=M,r=_;_=M=t;try{l=t.fn(i)}catch(c){return t.pure&&(t.state=$,t.owned&&t.owned.forEach(X),t.owned=null),t.updatedAt=s+1,Oe(c)}finally{_=r,M=f}(!t.updatedAt||t.updatedAt<=s)&&(t.updatedAt!=null&&"observers"in t?Ee(t,l):t.value=l,t.updatedAt=s)}function Te(t,i,s,l=$,f){const r={fn:t,state:l,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:i,owner:M,context:M?M.context:null,pure:s};return M===null||M!==Ce&&(M.owned?M.owned.push(r):M.owned=[r]),r}function oe(t){if(t.state===0)return;if(t.state===ae)return re(t);if(t.suspense&&Q(t.suspense.inFallback))return t.suspense.effects.push(t);const i=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<fe);)t.state&&i.push(t);for(let s=i.length-1;s>=0;s--)if(t=i[s],t.state===$)ue(t);else if(t.state===ae){const l=S;S=null,Z(()=>re(t,i[0]),!1),S=l}}function Z(t,i){if(S)return t();let s=!1;i||(S=[]),A?s=!0:A=[],fe++;try{const l=t();return Ze(s),l}catch(l){s||(A=null),S=null,Oe(l)}}function Ze(t){if(S&&(Re(S),S=null),t)return;const i=A;A=null,i.length&&Z(()=>Se(i),!1)}function Re(t){for(let i=0;i<t.length;i++)oe(t[i])}function ze(t){let i,s=0;for(i=0;i<t.length;i++){const l=t[i];l.user?t[s++]=l:oe(l)}for(i=0;i<s;i++)oe(t[i])}function re(t,i){t.state=0;for(let s=0;s<t.sources.length;s+=1){const l=t.sources[s];if(l.sources){const f=l.state;f===$?l!==i&&(!l.updatedAt||l.updatedAt<fe)&&oe(l):f===ae&&re(l,i)}}}function Ne(t){for(let i=0;i<t.observers.length;i+=1){const s=t.observers[i];s.state||(s.state=ae,s.pure?S.push(s):A.push(s),s.observers&&Ne(s))}}function X(t){let i;if(t.sources)for(;t.sources.length;){const s=t.sources.pop(),l=t.sourceSlots.pop(),f=s.observers;if(f&&f.length){const r=f.pop(),c=s.observerSlots.pop();l<f.length&&(r.sourceSlots[c]=l,f[l]=r,s.observerSlots[l]=c)}}if(t.tOwned){for(i=t.tOwned.length-1;i>=0;i--)X(t.tOwned[i]);delete t.tOwned}if(t.owned){for(i=t.owned.length-1;i>=0;i--)X(t.owned[i]);t.owned=null}if(t.cleanups){for(i=t.cleanups.length-1;i>=0;i--)t.cleanups[i]();t.cleanups=null}t.state=0}function et(t){return t instanceof Error?t:new Error(typeof t=="string"?t:"Unknown error",{cause:t})}function Oe(t,i=M){throw et(t)}function tt(t,i){return Q(()=>t(i||{}))}function nt(t,i,s){let l=s.length,f=i.length,r=l,c=0,u=0,g=i[f-1].nextSibling,w=null;for(;c<f||u<r;){if(i[c]===s[u]){c++,u++;continue}for(;i[f-1]===s[r-1];)f--,r--;if(f===c){const y=r<l?u?s[u-1].nextSibling:s[r-u]:g;for(;u<r;)t.insertBefore(s[u++],y)}else if(r===u)for(;c<f;)(!w||!w.has(i[c]))&&i[c].remove(),c++;else if(i[c]===s[r-1]&&s[u]===i[f-1]){const y=i[--f].nextSibling;t.insertBefore(s[u++],i[c++].nextSibling),t.insertBefore(s[--r],y),i[f]=s[r]}else{if(!w){w=new Map;let k=u;for(;k<r;)w.set(s[k],k++)}const y=w.get(i[c]);if(y!=null)if(u<y&&y<r){let k=c,x=1,C;for(;++k<f&&k<r&&!((C=w.get(i[k]))==null||C!==y+x);)x++;if(x>y-u){const b=i[c];for(;u<y;)t.insertBefore(s[u++],b)}else t.replaceChild(s[u++],i[c++])}else c++;else i[c++].remove()}}}const _e="_$DX_DELEGATE";function it(t,i,s,l={}){let f;return Ge(r=>{f=r,i===document?t():ot(i,t(),i.firstChild?null:void 0,s)},l.owner),()=>{f(),i.textContent=""}}function st(t,i,s){let l;const f=()=>{const c=document.createElement("template");return c.innerHTML=t,c.content.firstChild},r=()=>(l||(l=f())).cloneNode(!0);return r.cloneNode=r,r}function at(t,i=window.document){const s=i[_e]||(i[_e]=new Set);for(let l=0,f=t.length;l<f;l++){const r=t[l];s.has(r)||(s.add(r),i.addEventListener(r,rt))}}function xe(t,i,s){return Q(()=>t(i,s))}function ot(t,i,s,l){if(s!==void 0&&!l&&(l=[]),typeof i!="function")return le(t,i,l,s);q(f=>le(t,i(),f,s),l)}function rt(t){let i=t.target;const s=`$$${t.type}`,l=t.target,f=t.currentTarget,r=g=>Object.defineProperty(t,"target",{configurable:!0,value:g}),c=()=>{const g=i[s];if(g&&!i.disabled){const w=i[`${s}Data`];if(w!==void 0?g.call(i,w,t):g.call(i,t),t.cancelBubble)return}return i.host&&typeof i.host!="string"&&!i.host._$host&&i.contains(t.target)&&r(i.host),!0},u=()=>{for(;c()&&(i=i._$host||i.parentNode||i.host););};if(Object.defineProperty(t,"currentTarget",{configurable:!0,get(){return i||document}}),t.composedPath){const g=t.composedPath();r(g[0]);for(let w=0;w<g.length-2&&(i=g[w],!!c());w++){if(i._$host){i=i._$host,u();break}if(i.parentNode===f)break}}else u();r(l)}function le(t,i,s,l,f){for(;typeof s=="function";)s=s();if(i===s)return s;const r=typeof i,c=l!==void 0;if(t=c&&s[0]&&s[0].parentNode||t,r==="string"||r==="number"){if(r==="number"&&(i=i.toString(),i===s))return s;if(c){let u=s[0];u&&u.nodeType===3?u.data!==i&&(u.data=i):u=document.createTextNode(i),s=H(t,s,l,u)}else s!==""&&typeof s=="string"?s=t.firstChild.data=i:s=t.textContent=i}else if(i==null||r==="boolean")s=H(t,s,l);else{if(r==="function")return q(()=>{let u=i();for(;typeof u=="function";)u=u();s=le(t,u,s,l)}),()=>s;if(Array.isArray(i)){const u=[],g=s&&Array.isArray(s);if(ye(u,i,s,f))return q(()=>s=le(t,u,s,l,!0)),()=>s;if(u.length===0){if(s=H(t,s,l),c)return s}else g?s.length===0?Me(t,u,l):nt(t,s,u):(s&&H(t),Me(t,u));s=u}else if(i.nodeType){if(Array.isArray(s)){if(c)return s=H(t,s,l,i);H(t,s,null,i)}else s==null||s===""||!t.firstChild?t.appendChild(i):t.replaceChild(i,t.firstChild);s=i}}return s}function ye(t,i,s,l){let f=!1;for(let r=0,c=i.length;r<c;r++){let u=i[r],g=s&&s[t.length],w;if(!(u==null||u===!0||u===!1))if((w=typeof u)=="object"&&u.nodeType)t.push(u);else if(Array.isArray(u))f=ye(t,u,g)||f;else if(w==="function")if(l){for(;typeof u=="function";)u=u();f=ye(t,Array.isArray(u)?u:[u],Array.isArray(g)?g:[g])||f}else t.push(u),f=!0;else{const y=String(u);g&&g.nodeType===3&&g.data===y?t.push(g):t.push(document.createTextNode(y))}}return f}function Me(t,i,s=null){for(let l=0,f=i.length;l<f;l++)t.insertBefore(i[l],s)}function H(t,i,s,l){if(s===void 0)return t.textContent="";const f=l||document.createTextNode("");if(i.length){let r=!1;for(let c=i.length-1;c>=0;c--){const u=i[c];if(f!==u){const g=u.parentNode===t;!r&&!c?g?t.replaceChild(f,u):t.insertBefore(f,s):g&&u.remove()}else r=!0}}else t.insertBefore(f,s);return[f]}var lt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ft(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ae={exports:{}};/*!
 * Pikaday
 *
 * Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/Pikaday/Pikaday
 */(function(t,i){(function(s,l){var f;{try{f=require("moment")}catch{}t.exports=l(f)}})(lt,function(s){var l=typeof s=="function",f=!!window.addEventListener,r=window.document,c=window.setTimeout,u=function(n,e,a,o){f?n.addEventListener(e,a,!!o):n.attachEvent("on"+e,a)},g=function(n,e,a,o){f?n.removeEventListener(e,a,!!o):n.detachEvent("on"+e,a)},w=function(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")},y=function(n,e){return(" "+n.className+" ").indexOf(" "+e+" ")!==-1},k=function(n,e){y(n,e)||(n.className=n.className===""?e:n.className+" "+e)},x=function(n,e){n.className=w((" "+n.className+" ").replace(" "+e+" "," "))},C=function(n){return/Array/.test(Object.prototype.toString.call(n))},b=function(n){return/Date/.test(Object.prototype.toString.call(n))&&!isNaN(n.getTime())},W=function(n){var e=n.getDay();return e===0||e===6},he=function(n){return n%4===0&&n%100!==0||n%400===0},U=function(n,e){return[31,he(n)?29:28,31,30,31,30,31,31,30,31,30,31][e]},P=function(n){b(n)&&n.setHours(0,0,0,0)},L=function(n,e){return n.getTime()===e.getTime()},I=function(n,e,a){var o,h;for(o in e)h=n[o]!==void 0,h&&typeof e[o]=="object"&&e[o]!==null&&e[o].nodeName===void 0?b(e[o])?a&&(n[o]=new Date(e[o].getTime())):C(e[o])?a&&(n[o]=e[o].slice(0)):n[o]=I({},e[o],a):(a||!h)&&(n[o]=e[o]);return n},V=function(n,e,a){var o;r.createEvent?(o=r.createEvent("HTMLEvents"),o.initEvent(e,!0,!1),o=I(o,a),n.dispatchEvent(o)):r.createEventObject&&(o=r.createEventObject(),o=I(o,a),n.fireEvent("on"+e,o))},z=function(n){return n.month<0&&(n.year-=Math.ceil(Math.abs(n.month)/12),n.month+=12),n.month>11&&(n.year+=Math.floor(Math.abs(n.month)/12),n.month-=12),n},E={field:null,bound:void 0,ariaLabel:"Use the arrow keys to pick a date",position:"bottom left",reposition:!0,format:"YYYY-MM-DD",toString:null,parse:null,defaultDate:null,setDefaultDate:!1,firstDay:0,firstWeekOfYearMinDays:4,formatStrict:!1,minDate:null,maxDate:null,yearRange:10,showWeekNumber:!1,pickWholeWeek:!1,minYear:0,maxYear:9999,minMonth:void 0,maxMonth:void 0,startRange:null,endRange:null,isRTL:!1,yearSuffix:"",showMonthAfterYear:!1,showDaysInNextAndPreviousMonths:!1,enableSelectionDaysInNextAndPreviousMonths:!1,numberOfMonths:1,mainCalendar:"left",container:void 0,blurFieldOnSelect:!0,i18n:{previousMonth:"Previous Month",nextMonth:"Next Month",months:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},theme:null,events:[],onSelect:null,onOpen:null,onClose:null,onDraw:null,keyboardInput:!0},ee=function(n,e,a){for(e+=n.firstDay;e>=7;)e-=7;return a?n.i18n.weekdaysShort[e]:n.i18n.weekdays[e]},ce=function(n){var e=[],a="false";if(n.isEmpty)if(n.showDaysInNextAndPreviousMonths)e.push("is-outside-current-month"),n.enableSelectionDaysInNextAndPreviousMonths||e.push("is-selection-disabled");else return'<td class="is-empty"></td>';return n.isDisabled&&e.push("is-disabled"),n.isToday&&e.push("is-today"),n.isSelected&&(e.push("is-selected"),a="true"),n.hasEvent&&e.push("has-event"),n.isInRange&&e.push("is-inrange"),n.isStartRange&&e.push("is-startrange"),n.isEndRange&&e.push("is-endrange"),'<td data-day="'+n.day+'" class="'+e.join(" ")+'" aria-selected="'+a+'"><button class="pika-button pika-day" type="button" data-pika-year="'+n.year+'" data-pika-month="'+n.month+'" data-pika-day="'+n.day+'">'+n.day+"</button></td>"},te=function(n,e){n.setHours(0,0,0,0);var a=n.getDate(),o=n.getDay(),h=e,d=h-1,p=7,v=function(O){return(O+p-1)%p};n.setDate(a+d-v(o));var m=new Date(n.getFullYear(),0,h),D=24*60*60*1e3,R=(n.getTime()-m.getTime())/D,T=1+Math.round((R-d+v(m.getDay()))/p);return T},ne=function(n,e,a,o){var h=new Date(a,e,n),d=l?s(h).isoWeek():te(h,o);return'<td class="pika-week">'+d+"</td>"},ie=function(n,e,a,o){return'<tr class="pika-row'+(a?" pick-whole-week":"")+(o?" is-selected":"")+'">'+(e?n.reverse():n).join("")+"</tr>"},G=function(n){return"<tbody>"+n.join("")+"</tbody>"},Ie=function(n){var e,a=[];for(n.showWeekNumber&&a.push("<th></th>"),e=0;e<7;e++)a.push('<th scope="col"><abbr title="'+ee(n,e)+'">'+ee(n,e,!0)+"</abbr></th>");return"<thead><tr>"+(n.isRTL?a.reverse():a).join("")+"</tr></thead>"},Ye=function(n,e,a,o,h,d){var p,v,m,D=n._o,R=a===D.minYear,T=a===D.maxYear,O='<div id="'+d+'" class="pika-title" role="heading" aria-live="assertive">',K,j,F=!0,B=!0;for(m=[],p=0;p<12;p++)m.push('<option value="'+(a===h?p-e:12+p-e)+'"'+(p===o?' selected="selected"':"")+(R&&p<D.minMonth||T&&p>D.maxMonth?' disabled="disabled"':"")+">"+D.i18n.months[p]+"</option>");for(K='<div class="pika-label">'+D.i18n.months[o]+'<select class="pika-select pika-select-month" tabindex="-1">'+m.join("")+"</select></div>",C(D.yearRange)?(p=D.yearRange[0],v=D.yearRange[1]+1):(p=a-D.yearRange,v=1+a+D.yearRange),m=[];p<v&&p<=D.maxYear;p++)p>=D.minYear&&m.push('<option value="'+p+'"'+(p===a?' selected="selected"':"")+">"+p+"</option>");return j='<div class="pika-label">'+a+D.yearSuffix+'<select class="pika-select pika-select-year" tabindex="-1">'+m.join("")+"</select></div>",D.showMonthAfterYear?O+=j+K:O+=K+j,R&&(o===0||D.minMonth>=o)&&(F=!1),T&&(o===11||D.maxMonth<=o)&&(B=!1),e===0&&(O+='<button class="pika-prev'+(F?"":" is-disabled")+'" type="button">'+D.i18n.previousMonth+"</button>"),e===n._o.numberOfMonths-1&&(O+='<button class="pika-next'+(B?"":" is-disabled")+'" type="button">'+D.i18n.nextMonth+"</button>"),O+="</div>"},$e=function(n,e,a){return'<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="'+a+'">'+Ie(n)+G(e)+"</table>"},me=function(n){var e=this,a=e.config(n);e._onMouseDown=function(h){if(e._v){h=h||window.event;var d=h.target||h.srcElement;if(d)if(y(d,"is-disabled")||(y(d,"pika-button")&&!y(d,"is-empty")&&!y(d.parentNode,"is-disabled")?(e.setDate(new Date(d.getAttribute("data-pika-year"),d.getAttribute("data-pika-month"),d.getAttribute("data-pika-day"))),a.bound&&c(function(){e.hide(),a.blurFieldOnSelect&&a.field&&a.field.blur()},100)):y(d,"pika-prev")?e.prevMonth():y(d,"pika-next")&&e.nextMonth()),y(d,"pika-select"))e._c=!0;else if(h.preventDefault)h.preventDefault();else return h.returnValue=!1,!1}},e._onChange=function(h){h=h||window.event;var d=h.target||h.srcElement;d&&(y(d,"pika-select-month")?e.gotoMonth(d.value):y(d,"pika-select-year")&&e.gotoYear(d.value))},e._onKeyChange=function(h){if(h=h||window.event,e.isVisible())switch(h.keyCode){case 13:case 27:a.field&&a.field.blur();break;case 37:e.adjustDate("subtract",1);break;case 38:e.adjustDate("subtract",7);break;case 39:e.adjustDate("add",1);break;case 40:e.adjustDate("add",7);break;case 8:case 46:e.setDate(null);break}},e._parseFieldValue=function(){if(a.parse)return a.parse(a.field.value,a.format);if(l){var h=s(a.field.value,a.format,a.formatStrict);return h&&h.isValid()?h.toDate():null}else return new Date(Date.parse(a.field.value))},e._onInputChange=function(h){var d;h.firedBy!==e&&(d=e._parseFieldValue(),b(d)&&e.setDate(d),e._v||e.show())},e._onInputFocus=function(){e.show()},e._onInputClick=function(){e.show()},e._onInputBlur=function(){var h=r.activeElement;do if(y(h,"pika-single"))return;while(h=h.parentNode);e._c||(e._b=c(function(){e.hide()},50)),e._c=!1},e._onClick=function(h){h=h||window.event;var d=h.target||h.srcElement,p=d;if(d){!f&&y(d,"pika-select")&&(d.onchange||(d.setAttribute("onchange","return;"),u(d,"change",e._onChange)));do if(y(p,"pika-single")||p===a.trigger)return;while(p=p.parentNode);e._v&&d!==a.trigger&&p!==a.trigger&&e.hide()}},e.el=r.createElement("div"),e.el.className="pika-single"+(a.isRTL?" is-rtl":"")+(a.theme?" "+a.theme:""),u(e.el,"mousedown",e._onMouseDown,!0),u(e.el,"touchend",e._onMouseDown,!0),u(e.el,"change",e._onChange),a.keyboardInput&&u(r,"keydown",e._onKeyChange),a.field&&(a.container?a.container.appendChild(e.el):a.bound?r.body.appendChild(e.el):a.field.parentNode.insertBefore(e.el,a.field.nextSibling),u(a.field,"change",e._onInputChange),a.defaultDate||(a.defaultDate=e._parseFieldValue(),a.setDefaultDate=!0));var o=a.defaultDate;b(o)?a.setDefaultDate?e.setDate(o,!0):e.gotoDate(o):e.gotoDate(new Date),a.bound?(this.hide(),e.el.className+=" is-bound",u(a.trigger,"click",e._onInputClick),u(a.trigger,"focus",e._onInputFocus),u(a.trigger,"blur",e._onInputBlur)):this.show()};return me.prototype={config:function(n){this._o||(this._o=I({},E,!0));var e=I(this._o,n,!0);e.isRTL=!!e.isRTL,e.field=e.field&&e.field.nodeName?e.field:null,e.theme=typeof e.theme=="string"&&e.theme?e.theme:null,e.bound=!!(e.bound!==void 0?e.field&&e.bound:e.field),e.trigger=e.trigger&&e.trigger.nodeName?e.trigger:e.field,e.disableWeekends=!!e.disableWeekends,e.disableDayFn=typeof e.disableDayFn=="function"?e.disableDayFn:null;var a=parseInt(e.numberOfMonths,10)||1;if(e.numberOfMonths=a>4?4:a,b(e.minDate)||(e.minDate=!1),b(e.maxDate)||(e.maxDate=!1),e.minDate&&e.maxDate&&e.maxDate<e.minDate&&(e.maxDate=e.minDate=!1),e.minDate&&this.setMinDate(e.minDate),e.maxDate&&this.setMaxDate(e.maxDate),C(e.yearRange)){var o=new Date().getFullYear()-10;e.yearRange[0]=parseInt(e.yearRange[0],10)||o,e.yearRange[1]=parseInt(e.yearRange[1],10)||o}else e.yearRange=Math.abs(parseInt(e.yearRange,10))||E.yearRange,e.yearRange>100&&(e.yearRange=100);return e},toString:function(n){return n=n||this._o.format,b(this._d)?this._o.toString?this._o.toString(this._d,n):l?s(this._d).format(n):this._d.toDateString():""},getMoment:function(){return l?s(this._d):null},setMoment:function(n,e){l&&s.isMoment(n)&&this.setDate(n.toDate(),e)},getDate:function(){return b(this._d)?new Date(this._d.getTime()):null},setDate:function(n,e){if(!n)return this._d=null,this._o.field&&(this._o.field.value="",V(this._o.field,"change",{firedBy:this})),this.draw();if(typeof n=="string"&&(n=new Date(Date.parse(n))),!!b(n)){var a=this._o.minDate,o=this._o.maxDate;b(a)&&n<a?n=a:b(o)&&n>o&&(n=o),this._d=new Date(n.getTime()),P(this._d),this.gotoDate(this._d),this._o.field&&(this._o.field.value=this.toString(),V(this._o.field,"change",{firedBy:this})),!e&&typeof this._o.onSelect=="function"&&this._o.onSelect.call(this,this.getDate())}},clear:function(){this.setDate(null)},gotoDate:function(n){var e=!0;if(b(n)){if(this.calendars){var a=new Date(this.calendars[0].year,this.calendars[0].month,1),o=new Date(this.calendars[this.calendars.length-1].year,this.calendars[this.calendars.length-1].month,1),h=n.getTime();o.setMonth(o.getMonth()+1),o.setDate(o.getDate()-1),e=h<a.getTime()||o.getTime()<h}e&&(this.calendars=[{month:n.getMonth(),year:n.getFullYear()}],this._o.mainCalendar==="right"&&(this.calendars[0].month+=1-this._o.numberOfMonths)),this.adjustCalendars()}},adjustDate:function(n,e){var a=this.getDate()||new Date,o=parseInt(e)*24*60*60*1e3,h;n==="add"?h=new Date(a.valueOf()+o):n==="subtract"&&(h=new Date(a.valueOf()-o)),this.setDate(h)},adjustCalendars:function(){this.calendars[0]=z(this.calendars[0]);for(var n=1;n<this._o.numberOfMonths;n++)this.calendars[n]=z({month:this.calendars[0].month+n,year:this.calendars[0].year});this.draw()},gotoToday:function(){this.gotoDate(new Date)},gotoMonth:function(n){isNaN(n)||(this.calendars[0].month=parseInt(n,10),this.adjustCalendars())},nextMonth:function(){this.calendars[0].month++,this.adjustCalendars()},prevMonth:function(){this.calendars[0].month--,this.adjustCalendars()},gotoYear:function(n){isNaN(n)||(this.calendars[0].year=parseInt(n,10),this.adjustCalendars())},setMinDate:function(n){n instanceof Date?(P(n),this._o.minDate=n,this._o.minYear=n.getFullYear(),this._o.minMonth=n.getMonth()):(this._o.minDate=E.minDate,this._o.minYear=E.minYear,this._o.minMonth=E.minMonth,this._o.startRange=E.startRange),this.draw()},setMaxDate:function(n){n instanceof Date?(P(n),this._o.maxDate=n,this._o.maxYear=n.getFullYear(),this._o.maxMonth=n.getMonth()):(this._o.maxDate=E.maxDate,this._o.maxYear=E.maxYear,this._o.maxMonth=E.maxMonth,this._o.endRange=E.endRange),this.draw()},setStartRange:function(n){this._o.startRange=n},setEndRange:function(n){this._o.endRange=n},draw:function(n){if(!(!this._v&&!n)){var e=this._o,a=e.minYear,o=e.maxYear,h=e.minMonth,d=e.maxMonth,p="",v;this._y<=a&&(this._y=a,!isNaN(h)&&this._m<h&&(this._m=h)),this._y>=o&&(this._y=o,!isNaN(d)&&this._m>d&&(this._m=d));for(var m=0;m<e.numberOfMonths;m++)v="pika-title-"+Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,2),p+='<div class="pika-lendar">'+Ye(this,m,this.calendars[m].year,this.calendars[m].month,this.calendars[0].year,v)+this.render(this.calendars[m].year,this.calendars[m].month,v)+"</div>";this.el.innerHTML=p,e.bound&&e.field.type!=="hidden"&&c(function(){e.trigger.focus()},1),typeof this._o.onDraw=="function"&&this._o.onDraw(this),e.bound&&e.field.setAttribute("aria-label",e.ariaLabel)}},adjustPosition:function(){var n,e,a,o,h,d,p,v,m,D,R,T;if(!this._o.container){if(this.el.style.position="absolute",n=this._o.trigger,e=n,a=this.el.offsetWidth,o=this.el.offsetHeight,h=window.innerWidth||r.documentElement.clientWidth,d=window.innerHeight||r.documentElement.clientHeight,p=window.pageYOffset||r.body.scrollTop||r.documentElement.scrollTop,R=!0,T=!0,typeof n.getBoundingClientRect=="function")D=n.getBoundingClientRect(),v=D.left+window.pageXOffset,m=D.bottom+window.pageYOffset;else for(v=e.offsetLeft,m=e.offsetTop+e.offsetHeight;e=e.offsetParent;)v+=e.offsetLeft,m+=e.offsetTop;(this._o.reposition&&v+a>h||this._o.position.indexOf("right")>-1&&v-a+n.offsetWidth>0)&&(v=v-a+n.offsetWidth,R=!1),(this._o.reposition&&m+o>d+p||this._o.position.indexOf("top")>-1&&m-o-n.offsetHeight>0)&&(m=m-o-n.offsetHeight,T=!1),this.el.style.left=v+"px",this.el.style.top=m+"px",k(this.el,R?"left-aligned":"right-aligned"),k(this.el,T?"bottom-aligned":"top-aligned"),x(this.el,R?"right-aligned":"left-aligned"),x(this.el,T?"top-aligned":"bottom-aligned")}},render:function(n,e,a){var o=this._o,h=new Date,d=U(n,e),p=new Date(n,e,1).getDay(),v=[],m=[];P(h),o.firstDay>0&&(p-=o.firstDay,p<0&&(p+=7));for(var D=e===0?11:e-1,R=e===11?0:e+1,T=e===0?n-1:n,O=e===11?n+1:n,K=U(T,D),j=d+p,F=j;F>7;)F-=7;j+=7-F;for(var B=!1,Y=0,be=0;Y<j;Y++){var N=new Date(n,e,1+(Y-p)),De=b(this._d)?L(N,this._d):!1,Pe=L(N,h),je=o.events.indexOf(N.toDateString())!==-1,we=Y<p||Y>=d+p,J=1+(Y-p),de=e,pe=n,We=o.startRange&&L(o.startRange,N),Le=o.endRange&&L(o.endRange,N),Fe=o.startRange&&o.endRange&&o.startRange<N&&N<o.endRange,Be=o.minDate&&N<o.minDate||o.maxDate&&N>o.maxDate||o.disableWeekends&&W(N)||o.disableDayFn&&o.disableDayFn(N);we&&(Y<p?(J=K+J,de=D,pe=T):(J=J-d,de=R,pe=O));var He={day:J,month:de,year:pe,hasEvent:je,isSelected:De,isToday:Pe,isDisabled:Be,isEmpty:we,isStartRange:We,isEndRange:Le,isInRange:Fe,showDaysInNextAndPreviousMonths:o.showDaysInNextAndPreviousMonths,enableSelectionDaysInNextAndPreviousMonths:o.enableSelectionDaysInNextAndPreviousMonths};o.pickWholeWeek&&De&&(B=!0),m.push(ce(He)),++be===7&&(o.showWeekNumber&&m.unshift(ne(Y-p,e,n,o.firstWeekOfYearMinDays)),v.push(ie(m,o.isRTL,o.pickWholeWeek,B)),m=[],be=0,B=!1)}return $e(o,v,a)},isVisible:function(){return this._v},show:function(){this.isVisible()||(this._v=!0,this.draw(),x(this.el,"is-hidden"),this._o.bound&&(u(r,"click",this._onClick),this.adjustPosition()),typeof this._o.onOpen=="function"&&this._o.onOpen.call(this))},hide:function(){var n=this._v;n!==!1&&(this._o.bound&&g(r,"click",this._onClick),this._o.container||(this.el.style.position="static",this.el.style.left="auto",this.el.style.top="auto"),k(this.el,"is-hidden"),this._v=!1,n!==void 0&&typeof this._o.onClose=="function"&&this._o.onClose.call(this))},destroy:function(){var n=this._o;this.hide(),g(this.el,"mousedown",this._onMouseDown,!0),g(this.el,"touchend",this._onMouseDown,!0),g(this.el,"change",this._onChange),n.keyboardInput&&g(r,"keydown",this._onKeyChange),n.field&&(g(n.field,"change",this._onInputChange),n.bound&&(g(n.trigger,"click",this._onInputClick),g(n.trigger,"focus",this._onInputFocus),g(n.trigger,"blur",this._onInputBlur))),this.el.parentNode&&this.el.parentNode.removeChild(this.el)}},me})})(Ae);var ut=Ae.exports;const ke=ft(ut);var ht=st("<div class=calculator-container><h1>Time Hoop - Date Arithmetic</h1><div class=background-image></div><div class=input-group><label>From Date:</label><input type=text readonly></div><div class=input-group><label>Number of Days:</label><input type=number></div><div class=input-group><label>Operation:</label><select><option value=+>+</option><option value=->-</option></select></div><div class=input-group><label>Target Date:</label><input type=text readonly>");const ct=()=>{const[t,i]=se(new Date),[s,l]=se(0),[f,r]=se("+"),[c,u]=se(new Date);let g,w;const y=x=>{const C=String(x.getDate()).padStart(2,"0"),b=String(x.getMonth()+1).padStart(2,"0"),W=x.getFullYear();return`${b}/${C}/${W}`},k=()=>{const x=new Date(t()),C=parseInt(s(),10),b=f()==="+"?new Date(x.getTime()+C*24*60*60*1e3):new Date(x.getTime()-C*24*60*60*1e3);u(b),w.value=y(b)};return Je(()=>{const x=new ke({field:g,defaultDate:t(),setDefaultDate:!0,onSelect:b=>{i(b),g.value=y(b),k()}}),C=new ke({field:w,defaultDate:c(),setDefaultDate:!0,onSelect:b=>{u(b),w.value=y(b),k()}});qe(()=>{x.destroy(),C.destroy()}),k(),g.value=y(t()),w.value=y(c())}),(()=>{var x=ht(),C=x.firstChild,b=C.nextSibling,W=b.nextSibling,he=W.firstChild,U=he.nextSibling,P=W.nextSibling,L=P.firstChild,I=L.nextSibling,V=P.nextSibling,z=V.firstChild,E=z.nextSibling,ee=V.nextSibling,ce=ee.firstChild,te=ce.nextSibling,ne=g;typeof ne=="function"?xe(ne,U):g=U,I.$$input=G=>{l(G.target.value),k()},E.addEventListener("change",G=>{r(G.target.value),k()});var ie=w;return typeof ie=="function"?xe(ie,te):w=te,q(()=>I.value=s()),q(()=>E.value=f()),x})()};at(["input"]);const dt=document.getElementById("root");it(()=>tt(ct,{}),dt);
