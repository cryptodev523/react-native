(window.webpackJsonp=window.webpackJsonp||[]).push([[528],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return u}));var n=a(0),b=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),p=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},O=function(e){var t=p(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},m=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),O=p(a),m=n,u=O["".concat(r,".").concat(m)]||O[m]||j[m]||l;return a?b.a.createElement(u,c(c({ref:t},o),{},{components:a})):b.a.createElement(u,c({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var o=2;o<l;o++)r[o]=a[o];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},610:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(2),b=a(7),l=(a(0),a(1006)),r={id:"animatedvalue",title:"AnimatedValue"},c={unversionedId:"animatedvalue",id:"version-0.62/animatedvalue",isDocsHomePage:!1,title:"AnimatedValue",description:"Standard value for driving animations. One Animated.Value can drive multiple properties in a synchronized fashion, but can only be driven by one mechanism at a time. Using a new mechanism (e.g. starting a new animation, or calling setValue) will stop any previous ones.",source:"@site/versioned_docs/version-0.62/animatedvalue.md",slug:"/animatedvalue",permalink:"/docs/0.62/animatedvalue",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.62/animatedvalue.md",version:"0.62",lastUpdatedAt:1603945169},i=[{value:"Methods",id:"methods",children:[]},{value:"Methods",id:"methods-1",children:[{value:"<code>setValue()</code>",id:"setvalue",children:[]},{value:"<code>setOffset()</code>",id:"setoffset",children:[]},{value:"<code>flattenOffset()</code>",id:"flattenoffset",children:[]},{value:"<code>extractOffset()</code>",id:"extractoffset",children:[]},{value:"<code>addListener()</code>",id:"addlistener",children:[]},{value:"<code>removeListener()</code>",id:"removelistener",children:[]},{value:"<code>removeAllListeners()</code>",id:"removealllisteners",children:[]},{value:"<code>stopAnimation()</code>",id:"stopanimation",children:[]},{value:"<code>resetAnimation()</code>",id:"resetanimation",children:[]},{value:"<code>interpolate()</code>",id:"interpolate",children:[]},{value:"<code>animate()</code>",id:"animate",children:[]},{value:"<code>stopTracking()</code>",id:"stoptracking",children:[]},{value:"<code>track()</code>",id:"track",children:[]}]}],o={rightToc:i};function p(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Standard value for driving animations. One ",Object(l.b)("inlineCode",{parentName:"p"},"Animated.Value")," can drive multiple properties in a synchronized fashion, but can only be driven by one mechanism at a time. Using a new mechanism (e.g. starting a new animation, or calling ",Object(l.b)("inlineCode",{parentName:"p"},"setValue"),") will stop any previous ones."),Object(l.b)("p",null,"Typically initialized with ",Object(l.b)("inlineCode",{parentName:"p"},"new Animated.Value(0);")),Object(l.b)("p",null,"See also ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"animated"}),Object(l.b)("inlineCode",{parentName:"a"},"Animated")),"."),Object(l.b)("h3",{id:"methods"},"Methods"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"animatedvalue#setvalue"}),Object(l.b)("inlineCode",{parentName:"a"},"setValue"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"animatedvalue#setoffset"}),Object(l.b)("inlineCode",{parentName:"a"},"setOffset"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"animatedvalue#flattenoffset"}),Object(l.b)("inlineCode",{parentName:"a"},"flattenOffset"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"animatedvalue#extractoffset"}),Object(l.b)("inlineCode",{parentName:"a"},"extractOffset"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"animatedvalue#addlistener"}),Object(l.b)("inlineCode",{parentName:"a"},"addListener"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"animatedvalue#removelistener"}),Object(l.b)("inlineCode",{parentName:"a"},"removeListener"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"animatedvalue#removealllisteners"}),Object(l.b)("inlineCode",{parentName:"a"},"removeAllListeners"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"animatedvalue#stopanimation"}),Object(l.b)("inlineCode",{parentName:"a"},"stopAnimation"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"animatedvalue#resetanimation"}),Object(l.b)("inlineCode",{parentName:"a"},"resetAnimation"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"animatedvalue#interpolate"}),Object(l.b)("inlineCode",{parentName:"a"},"interpolate"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"animatedvalue#animate"}),Object(l.b)("inlineCode",{parentName:"a"},"animate"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"animatedvalue#stoptracking"}),Object(l.b)("inlineCode",{parentName:"a"},"stopTracking"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"animatedvalue#track"}),Object(l.b)("inlineCode",{parentName:"a"},"track")))),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"methods-1"},"Methods"),Object(l.b)("h3",{id:"setvalue"},Object(l.b)("inlineCode",{parentName:"h3"},"setValue()")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"setValue(value);\n")),Object(l.b)("p",null,"Directly set the value. This will stop any animations running on the value and update all the bound properties."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"value"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"setoffset"},Object(l.b)("inlineCode",{parentName:"h3"},"setOffset()")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"setOffset(offset);\n")),Object(l.b)("p",null,"Sets an offset that is applied on top of whatever value is set, whether via ",Object(l.b)("inlineCode",{parentName:"p"},"setValue"),", an animation, or ",Object(l.b)("inlineCode",{parentName:"p"},"Animated.event"),". Useful for compensating things like the start of a pan gesture."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"offset"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Offset value")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"flattenoffset"},Object(l.b)("inlineCode",{parentName:"h3"},"flattenOffset()")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"flattenOffset();\n")),Object(l.b)("p",null,"Merges the offset value into the base value and resets the offset to zero. The final output of the value is unchanged."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"extractoffset"},Object(l.b)("inlineCode",{parentName:"h3"},"extractOffset()")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"extractOffset();\n")),Object(l.b)("p",null,"Sets the offset value to the base value, and resets the base value to zero. The final output of the value is unchanged."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"addlistener"},Object(l.b)("inlineCode",{parentName:"h3"},"addListener()")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"addListener(callback);\n")),Object(l.b)("p",null,"Adds an asynchronous listener to the value so you can observe updates from animations. This is useful because there is no way to synchronously read the value because it might be driven natively."),Object(l.b)("p",null,"Returns a string that serves as an identifier for the listener."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"callback"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The callback function which will receive an object with a ",Object(l.b)("inlineCode",{parentName:"td"},"value")," key set to the new value.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"removelistener"},Object(l.b)("inlineCode",{parentName:"h3"},"removeListener()")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"removeListener(id);\n")),Object(l.b)("p",null,"Unregister a listener. The ",Object(l.b)("inlineCode",{parentName:"p"},"id")," param shall match the identifier previously returned by ",Object(l.b)("inlineCode",{parentName:"p"},"addListener()"),"."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Id for the listener being removed.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"removealllisteners"},Object(l.b)("inlineCode",{parentName:"h3"},"removeAllListeners()")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"removeAllListeners();\n")),Object(l.b)("p",null,"Remove all registered listeners."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"stopanimation"},Object(l.b)("inlineCode",{parentName:"h3"},"stopAnimation()")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"stopAnimation([callback]);\n")),Object(l.b)("p",null,"Stops any running animation or tracking. ",Object(l.b)("inlineCode",{parentName:"p"},"callback")," is invoked with the final value after stopping the animation, which is useful for updating state to match the animation position with layout."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"callback"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A function that will receive the final value.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"resetanimation"},Object(l.b)("inlineCode",{parentName:"h3"},"resetAnimation()")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"resetAnimation([callback]);\n")),Object(l.b)("p",null,"Stops any animation and resets the value to its original."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"callback"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A function that will receive the original value.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"interpolate"},Object(l.b)("inlineCode",{parentName:"h3"},"interpolate()")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"interpolate(config);\n")),Object(l.b)("p",null,"Interpolates the value before updating the property, e.g. mapping 0-1 to 0-10."),Object(l.b)("p",null,"See ",Object(l.b)("inlineCode",{parentName:"p"},"AnimatedInterpolation.js")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"config"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"object"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See below.")))),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"config")," object is composed of the following keys:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"inputRange"),": an array of numbers"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"outputRange"),": an array of numbers or strings"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"easing")," (optional): a function that returns a number, given an input number"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"extrapolate")," (optional): a string such as 'extend', 'identity', or 'clamp'"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"extrapolateLeft")," (optional): a string such as 'extend', 'identity', or 'clamp'"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"extrapolateRight")," (optional): a string such as 'extend', 'identity', or 'clamp'")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"animate"},Object(l.b)("inlineCode",{parentName:"h3"},"animate()")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"animate(animation, callback);\n")),Object(l.b)("p",null,"Typically only used internally, but could be used by a custom Animation class."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"animation"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Animation"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See ",Object(l.b)("inlineCode",{parentName:"td"},"Animation.js"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"callback"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback function.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"stoptracking"},Object(l.b)("inlineCode",{parentName:"h3"},"stopTracking()")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"stopTracking();\n")),Object(l.b)("p",null,"Typically only used internally."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"track"},Object(l.b)("inlineCode",{parentName:"h3"},"track()")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"track(tracking);\n")),Object(l.b)("p",null,"Typically only used internally."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"tracking"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AnimatedNode"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See ",Object(l.b)("inlineCode",{parentName:"td"},"AnimatedNode.js"))))))}p.isMDXComponent=!0}}]);