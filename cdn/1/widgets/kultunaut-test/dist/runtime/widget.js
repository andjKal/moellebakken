System.register(["jimu-core/react","jimu-core"],(function(e,t){var r={},o={};return{setters:[function(e){r.default=e.default},function(e){o.BaseWidget=e.BaseWidget}],execute:function(){e((()=>{var e={891:e=>{"use strict";e.exports=o},315:e=>{"use strict";e.exports=r}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var i={};return n.p=window.jimuConfig.baseUrl,(()=>{"use strict";n.r(i),n.d(i,{__set_webpack_public_path__:()=>d,default:()=>o});var e=n(315),t=n(891);class r extends t.BaseWidget{componentDidMount(){var e;const t=(null===(e=this.props.config)||void 0===e?void 0:e.selectedId)||"1206";this.loadScript(t)}loadScript(e){const t=`nautwidget${e}`;if(document.getElementById(t))return;const r=document.createElement("script");r.id=t,r.async=!0,r.type="text/javascript",r.src=`https://www.kultunaut.dk/perl/widget/type-nynaut/load.js?Id=${e}`,document.head.appendChild(r)}render(){var t;const r=(null===(t=this.props.config)||void 0===t?void 0:t.selectedId)||"1206";return e.default.createElement("div",{id:`widget${r}`})}}const o=r;function d(e){n.p=e}})(),i})())}}}));