System.register([],(function(a,t){return{execute:function(){a((()=>{"use strict";var a={d:(t,e)=>{for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o:(a,t)=>Object.prototype.hasOwnProperty.call(a,t),r:a=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}},t={};function e(a){return a.replace(/sekuntia?/,"sekunnin")}function i(a){return a.replace(/minuuttia?/,"minuutin")}function n(a){return a.replace(/tuntia?/,"tunnin")}function u(a){return a.replace(/(viikko|viikkoa)/,"viikon")}function r(a){return a.replace(/(kuukausi|kuukautta)/,"kuukauden")}function l(a){return a.replace(/(vuosi|vuotta)/,"vuoden")}a.r(t),a.d(t,{default:()=>w});var o={lessThanXSeconds:{one:"alle sekunti",other:"alle {{count}} sekuntia",futureTense:e},xSeconds:{one:"sekunti",other:"{{count}} sekuntia",futureTense:e},halfAMinute:{one:"puoli minuuttia",other:"puoli minuuttia",futureTense:function(a){return"puolen minuutin"}},lessThanXMinutes:{one:"alle minuutti",other:"alle {{count}} minuuttia",futureTense:i},xMinutes:{one:"minuutti",other:"{{count}} minuuttia",futureTense:i},aboutXHours:{one:"noin tunti",other:"noin {{count}} tuntia",futureTense:n},xHours:{one:"tunti",other:"{{count}} tuntia",futureTense:n},xDays:{one:"päivä",other:"{{count}} päivää",futureTense:function(a){return a.replace(/päivää?/,"päivän")}},aboutXWeeks:{one:"noin viikko",other:"noin {{count}} viikkoa",futureTense:u},xWeeks:{one:"viikko",other:"{{count}} viikkoa",futureTense:u},aboutXMonths:{one:"noin kuukausi",other:"noin {{count}} kuukautta",futureTense:r},xMonths:{one:"kuukausi",other:"{{count}} kuukautta",futureTense:r},aboutXYears:{one:"noin vuosi",other:"noin {{count}} vuotta",futureTense:l},xYears:{one:"vuosi",other:"{{count}} vuotta",futureTense:l},overXYears:{one:"yli vuosi",other:"yli {{count}} vuotta",futureTense:l},almostXYears:{one:"lähes vuosi",other:"lähes {{count}} vuotta",futureTense:l}};function s(a){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.width?String(t.width):a.defaultWidth;return a.formats[e]||a.formats[a.defaultWidth]}}const k={date:s({formats:{full:"eeee d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"d.M.y"},defaultWidth:"full"}),time:s({formats:{full:"HH.mm.ss zzzz",long:"HH.mm.ss z",medium:"HH.mm.ss",short:"HH.mm"},defaultWidth:"full"}),dateTime:s({formats:{full:"{{date}} 'klo' {{time}}",long:"{{date}} 'klo' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};var d={lastWeek:"'viime' eeee 'klo' p",yesterday:"'eilen klo' p",today:"'tänään klo' p",tomorrow:"'huomenna klo' p",nextWeek:"'ensi' eeee 'klo' p",other:"P"};function m(a){return function(t,e){var i;if("formatting"===(null!=e&&e.context?String(e.context):"standalone")&&a.formattingValues){var n=a.defaultFormattingWidth||a.defaultWidth,u=null!=e&&e.width?String(e.width):n;i=a.formattingValues[u]||a.formattingValues[n]}else{var r=a.defaultWidth,l=null!=e&&e.width?String(e.width):a.defaultWidth;i=a.values[l]||a.values[r]}return i[a.argumentCallback?a.argumentCallback(t):t]}}var h={narrow:["T","H","M","H","T","K","H","E","S","L","M","J"],abbreviated:["tammi","helmi","maalis","huhti","touko","kesä","heinä","elo","syys","loka","marras","joulu"],wide:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"]},f={narrow:h.narrow,abbreviated:h.abbreviated,wide:["tammikuuta","helmikuuta","maaliskuuta","huhtikuuta","toukokuuta","kesäkuuta","heinäkuuta","elokuuta","syyskuuta","lokakuuta","marraskuuta","joulukuuta"]},v={narrow:["S","M","T","K","T","P","L"],short:["su","ma","ti","ke","to","pe","la"],abbreviated:["sunn.","maan.","tiis.","kesk.","torst.","perj.","la"],wide:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"]},c={narrow:v.narrow,short:v.short,abbreviated:v.abbreviated,wide:["sunnuntaina","maanantaina","tiistaina","keskiviikkona","torstaina","perjantaina","lauantaina"]};const p={ordinalNumber:function(a,t){return Number(a)+"."},era:m({values:{narrow:["eaa.","jaa."],abbreviated:["eaa.","jaa."],wide:["ennen ajanlaskun alkua","jälkeen ajanlaskun alun"]},defaultWidth:"wide"}),quarter:m({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartaali","2. kvartaali","3. kvartaali","4. kvartaali"]},defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:m({values:h,defaultWidth:"wide",formattingValues:f,defaultFormattingWidth:"wide"}),day:m({values:v,defaultWidth:"wide",formattingValues:c,defaultFormattingWidth:"wide"}),dayPeriod:m({values:{narrow:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},abbreviated:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},wide:{am:"ap",pm:"ip",midnight:"keskiyöllä",noon:"keskipäivällä",morning:"aamupäivällä",afternoon:"iltapäivällä",evening:"illalla",night:"yöllä"}},defaultWidth:"wide"})};function y(a){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.width,n=i&&a.matchPatterns[i]||a.matchPatterns[a.defaultMatchWidth],u=t.match(n);if(!u)return null;var r,l=u[0],o=i&&a.parsePatterns[i]||a.parsePatterns[a.defaultParseWidth],s=Array.isArray(o)?function(a,t){for(var e=0;e<a.length;e++)if(a[e].test(l))return e}(o):function(a,t){for(var e in a)if(a.hasOwnProperty(e)&&a[e].test(l))return e}(o);return r=a.valueCallback?a.valueCallback(s):s,{value:r=e.valueCallback?e.valueCallback(r):r,rest:t.slice(l.length)}}}var b,g={ordinalNumber:(b={matchPattern:/^(\d+)(\.)/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}},function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=a.match(b.matchPattern);if(!e)return null;var i=e[0],n=a.match(b.parsePattern);if(!n)return null;var u=b.valueCallback?b.valueCallback(n[0]):n[0];return{value:u=t.valueCallback?t.valueCallback(u):u,rest:a.slice(i.length)}}),era:y({matchPatterns:{narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^e/i,/^j/i]},defaultParseWidth:"any"}),quarter:y({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:y({matchPatterns:{narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},defaultParseWidth:"any"}),day:y({matchPatterns:{narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},defaultParseWidth:"any"}),dayPeriod:y({matchPatterns:{narrow:/^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,any:/^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiyö/i,noon:/^keskipäivä/i,morning:/aamupäivällä/i,afternoon:/iltapäivällä/i,evening:/illalla/i,night:/yöllä/i}},defaultParseWidth:"any"})};const w={code:"fi",formatDistance:function(a,t,e){var i=o[a],n=1===t?i.one:i.other.replace("{{count}}",String(t));return null!=e&&e.addSuffix?e.comparison&&e.comparison>0?i.futureTense(n)+" kuluttua":n+" sitten":n},formatLong:k,formatRelative:function(a,t,e,i){return d[a]},localize:p,match:g,options:{weekStartsOn:1,firstWeekContainsDate:4}};return t})())}}}));