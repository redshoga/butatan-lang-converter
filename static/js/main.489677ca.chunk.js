(this["webpackJsonpbutatan-lang-converter"]=this["webpackJsonpbutatan-lang-converter"]||[]).push([[0],{10:function(t,e,a){t.exports=a(15)},15:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),u=a(5),l=a(6),i=a(8),s=a(7),h=a(1),p=a(9),m=a(2),b=a.n(m),g=function(t){return t.replace(/[\u3041-\u3096]/g,(function(t){var e=t.charCodeAt(0)+96;return String.fromCharCode(e)}))},f=function(t){var e=t;return[[["\u304d\u3083","\u304b"],["\u304d\u3085","\u304f"],["\u304d\u3087","\u3053"],["\u304e\u3083","\u304c"],["\u304e\u3085","\u3050"],["\u304e\u3087","\u3054"],["\u3057\u3083","\u3055"],["\u3057\u3085","\u3059"],["\u3057\u3087","\u305d"],["\u3058\u3083","\u3056"],["\u3058\u3085","\u305a"],["\u3058\u3087","\u305e"],["\u3061\u3083","\u305f"],["\u3061\u3085","\u3064"],["\u3061\u3087","\u3068"],["\u3062\u3083","\u3060"],["\u3062\u3085","\u3065"],["\u3062\u3087","\u3069"],["\u306b\u3083","\u306a"],["\u306b\u3085","\u306c"],["\u306b\u3087","\u306e"],["\u3072\u3083","\u306f"],["\u3072\u3085","\u3075"],["\u3072\u3087","\u307b"],["\u3073\u3083","\u3070"],["\u3073\u3085","\u3076"],["\u3073\u3087","\u307c"],["\u3074\u3083","\u3071"],["\u3074\u3085","\u3077"],["\u3074\u3087","\u307d"],["\u307f\u3083","\u307e"],["\u307f\u3085","\u3080"],["\u307f\u3087","\u3082"],["\u308a\u3083","\u3089"],["\u308a\u3085","\u308b"],["\u308a\u3087","\u308d"]],[["\u3055","\u305f"],["\u3057","\u3061"],["\u3059","\u3064"],["\u305b","\u3066"],["\u3068","\u3068"],["\u3056","\u3060"],["\u3058","\u3062"],["\u305a","\u3065"],["\u305c","\u3067"],["\u305e","\u3069"]],[["\u3084","\u3042"],["\u3086","\u3046"],["\u3088","\u304a"]],[["\u3089","\u3042"],["\u308a","\u3044"],["\u308b","\u3046"],["\u308c","\u3048"],["\u308d","\u304a"]],[["\u3044","\u3048"],["\u304d","\u3051"],["\u3057","\u305b"],["\u306b","\u306d"],["\u3072","\u3078"],["\u307f","\u3081"],["\u308a","\u308c"],["\u304e","\u3052"],["\u3058","\u305c"],["\u3062","\u3067"],["\u3073","\u3079"],["\u3074","\u307a"]],[["\u3061","\u3066\u3043"],["\u3064","\u3068\u3045"],["\u3062","\u3067\u3043"],["\u3065","\u3069\u3045"]]].forEach((function(t){t.forEach((function(t){e=function(t,e,a){var n=t;return n=(n=n.replace(new RegExp(e,"gm"),a,"gm")).replace(new RegExp(g(e),"gm"),g(a),"gm")}(e,t[0],t[1])}))})),e},v=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(i.a)(this,Object(s.a)(e).call(this,t))).state={japanese:"\u3074\u3093\u304f\u306e\u3076\u305f\u3067\u3059",butatan:"\u307a\u3093\u304f\u306e\u3076\u305f\u3067\u3068\u3045"},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.clickButton=a.clickButton.bind(Object(h.a)(a)),a.openTweet=a.openTweet.bind(Object(h.a)(a)),a}return Object(p.a)(e,t),Object(l.a)(e,[{key:"handleChange",value:function(t){this.setState({japanese:t.target.value})}},{key:"clickButton",value:function(t){this.setState({butatan:f(this.state.japanese)})}},{key:"openTweet",value:function(){window.open("https://twitter.com/intent/tweet?text=".concat(this.state.butatan),"_blank")}},{key:"render",value:function(){return c.a.createElement("div",{className:b.a.container},c.a.createElement("h1",null,"\u3076\u305f\u305f\u3093\u8a9e\u5909\u63db\u6a5f"),c.a.createElement("p",null,"\u307f\u3093\u306a\u3067\u3076\u305f\u305f\u3093\u8a9e\u3092\u5b66\u307c\u3046"),c.a.createElement("main",null,c.a.createElement("textarea",{className:b.a.textarea,value:this.state.japanese,onChange:this.handleChange}),c.a.createElement("button",{onClick:this.clickButton,className:b.a.convertButton},"\u3076\u305f\u305f\u3093\u8a9e\u306b\u5909\u63db\u2193"),c.a.createElement("textarea",{readOnly:!0,className:b.a.textarea,value:this.state.butatan}),c.a.createElement("button",{onClick:this.openTweet,className:b.a.tweetButton},"\u3068\u3045\u3044\u30fc\u3068")),c.a.createElement("p",null,c.a.createElement("a",{href:"https://github.com/redshoga/butatan-lang-converter"},"GitHub (redshoga/butatan-lang-converter)")))}}]),e}(c.a.Component);o.a.render(c.a.createElement(v,null),document.getElementById("root"))},2:function(t,e,a){t.exports={container:"App_container__3ZWSR",convertButton:"App_convertButton__2gSf2",tweetButton:"App_tweetButton__39WYs",textarea:"App_textarea__3aJHF"}}},[[10,1,2]]]);
//# sourceMappingURL=main.489677ca.chunk.js.map