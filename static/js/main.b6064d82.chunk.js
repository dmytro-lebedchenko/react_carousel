(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(7),a=n.n(i),s=n(2),c=n(3),o=n(5),r=n(4),l=n(1),u=n.n(l),p=(n(12),n(0)),m=function(t){Object(o.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={position:0},t.buttonHandler=function(e){var n=t.props,i=n.images,a=n.step,s=n.infinite,c=t.state.position;"previous"===e&&(c-a>=0?t.setState({position:c-a}):s&&t.setState({position:i.length-a})),"next"===e&&(c+a<i.length?t.setState({position:c+a}):s&&t.setState({position:0}))},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.images,i=e.frameSize,a=e.itemWidth,s=e.animationDuration,c=e.infinite,o=this.state.position;return Object(p.jsxs)("div",{className:"Carousel",style:{maxWidth:"".concat(i*a,"px"),overflow:"hidden"},children:[Object(p.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(".concat(-o*a,"px)"),transition:"".concat(s,"ms")},children:n.map((function(t,e){return Object(p.jsx)("li",{className:"Carousel__item",style:{minWidth:"".concat(a,"px"),minHeight:"".concat(a,"px")},children:Object(p.jsx)("img",{src:t,alt:"pic-".concat(e),className:"Carousel__img"})},t)}))}),Object(p.jsxs)("div",{className:"Carousel__buttons",children:[Object(p.jsx)("button",{className:"Carousel__buttons--prev button is-warning is-medium",type:"button",onClick:function(){return t.buttonHandler("previous")},disabled:o<=0&&!c,"aria-label":"PREV"}),Object(p.jsx)("button",{className:"Carousel__buttons--next button is-warning is-medium",type:"button","data-cy":"next",onClick:function(){return t.buttonHandler("next")},disabled:o>=n.length-1&&!c,"aria-label":"NEXT"})]})]})}}]),n}(u.a.Component),b=(n(14),n(15),function(t){Object(o.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.images,i=e.step,a=e.frameSize,s=e.itemWidth,c=e.animationDuration,o=e.infinite;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{"data-cy":"title",className:"App__title title",children:"Carousel with ".concat(n.length," images")}),Object(p.jsxs)("form",{className:"App__options",children:[Object(p.jsxs)("label",{className:"App__input App__input--item-width",children:["Item width:",Object(p.jsx)("input",{type:"number",min:"0",defaultValue:s,onChange:function(e){t.setState({itemWidth:+e.target.value})}})]}),Object(p.jsxs)("label",{className:"App__input",children:["Frame size:",Object(p.jsx)("input",{type:"number",min:"2",max:n.length,defaultValue:a,onChange:function(e){t.setState({frameSize:+e.target.value})}})]}),Object(p.jsxs)("label",{className:"App__input App__input--step",children:["Step:",Object(p.jsx)("input",{type:"number",min:"0",max:n.length,defaultValue:i,onChange:function(e){t.setState({step:+e.target.value})}})]}),Object(p.jsxs)("label",{className:" App__input App__input--animation-duration",children:["Animation duration:",Object(p.jsx)("input",{type:"number",min:"0",defaultValue:c,onChange:function(e){t.setState({animationDuration:+e.target.value})}})]}),Object(p.jsxs)("label",{className:"App__input",children:["Infinite:",Object(p.jsx)("input",{type:"checkbox",checked:o,className:"App__input--checkbox",onChange:function(){t.setState({infinite:!o})}})]})]}),Object(p.jsx)(m,{images:n,step:i,frameSize:a,itemWidth:s,animationDuration:c,infinite:o})]})}}]),n}(u.a.Component));a.a.render(Object(p.jsx)(b,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b6064d82.chunk.js.map