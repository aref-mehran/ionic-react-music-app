"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[5605],{5155:function(e,t,o){o.d(t,{g:function(){return r}});var r=function(e,t,o,r,n){return a(e[1],t[1],o[1],r[1],n).map((function(a){return i(e[0],t[0],o[0],r[0],a)}))},i=function(e,t,o,r,i){return i*(3*t*Math.pow(i-1,2)+i*(-3*o*i+3*o+r*i))-e*Math.pow(i-1,3)},a=function(e,t,o,r,i){return n((r-=i)-3*(o-=i)+3*(t-=i)-(e-=i),3*o-6*t+3*e,3*t-3*e,e).filter((function(e){return e>=0&&e<=1}))},n=function(e,t,o,r){if(0===e)return function(e,t,o){var r=t*t-4*e*o;return r<0?[]:[(-t+Math.sqrt(r))/(2*e),(-t-Math.sqrt(r))/(2*e)]}(t,o,r);var i=(3*(o/=e)-(t/=e)*t)/3,a=(2*t*t*t-9*t*o+27*(r/=e))/27;if(0===i)return[Math.pow(-a,1/3)];if(0===a)return[Math.sqrt(-i),-Math.sqrt(-i)];var n=Math.pow(a/2,2)+Math.pow(i/3,3);if(0===n)return[Math.pow(a/2,.5)-t/3];if(n>0)return[Math.pow(-a/2+Math.sqrt(n),1/3)-Math.pow(a/2+Math.sqrt(n),1/3)-t/3];var s=Math.sqrt(Math.pow(-i/3,3)),d=Math.acos(-a/(2*Math.sqrt(Math.pow(-i/3,3)))),l=2*Math.pow(s,1/3);return[l*Math.cos(d/3)-t/3,l*Math.cos((d+2*Math.PI)/3)-t/3,l*Math.cos((d+4*Math.PI)/3)-t/3]}},8190:function(e,t,o){o.d(t,{a:function(){return a},d:function(){return n}});var r=o(3598),i=o(3052),a=function(e,t,o,a,n){return(0,r.mG)(void 0,void 0,void 0,(function(){var s;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:if(e)return[2,e.attachViewToDom(t,o,n,a)];if("string"!==typeof o&&!(o instanceof HTMLElement))throw new Error("framework delegate is missing");return s="string"===typeof o?t.ownerDocument&&t.ownerDocument.createElement(o):o,a&&a.forEach((function(e){return s.classList.add(e)})),n&&Object.assign(s,n),t.appendChild(s),[4,new Promise((function(e){return(0,i.c)(s,e)}))];case 1:return r.sent(),[2,s]}}))}))},n=function(e,t){if(t){if(e){var o=t.parentElement;return e.removeViewFromDom(o,t)}t.remove()}return Promise.resolve()}},5605:function(e,t,o){o.r(t),o.d(t,{ion_modal:function(){return y}});var r=o(3598),i=o(1459),a=o(661),n=o(8190),s=o(9221),d=o(2807),l=o(8831),c=o(8463),m=o(5155),h=o(7734),p=o(3052),f=(o(9770),.93),u=function(e,t){return(0,p.j)(400,e/Math.abs(1.1*t),500)},b=function(e,t){var o=(0,c.c)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),r=(0,c.c)().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),i=(0,c.c)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(r);if(t){var a=window.innerWidth<768,n="ION-MODAL"===t.tagName&&void 0!==t.presentingElement,s=(0,c.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),d=document.body;if(a){var l=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",m="translateY("+(n?"-10px":l)+") scale("+f+")";s.afterStyles({transform:m}).beforeAddWrite((function(){return d.style.setProperty("background-color","black")})).addElement(t).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:m,borderRadius:"10px 10px 0 0"}]),i.addAnimation(s)}else if(i.addAnimation(o),n){m="translateY(-10px) scale("+(n?f:1)+")";s.afterStyles({transform:m}).addElement(t.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:m}]);var h=(0,c.c)().afterStyles({transform:m}).addElement(t.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:m}]);i.addAnimation([s,h])}else r.fromTo("opacity","0","1")}else i.addAnimation(o);return i},w=function(e,t,o){void 0===o&&(o=500);var r=(0,c.c)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i=(0,c.c)().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),a=(0,c.c)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(o).addAnimation(i);if(t){var n=window.innerWidth<768,s="ION-MODAL"===t.tagName&&void 0!==t.presentingElement,d=(0,c.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(e){if(1===e){t.style.setProperty("overflow","");var o=Array.from(l.querySelectorAll("ion-modal")).filter((function(e){return void 0!==e.presentingElement})).length;o<=1&&l.style.setProperty("background-color","")}})),l=document.body;if(n){var m=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",h="translateY("+(s?"-10px":m)+") scale("+f+")";d.addElement(t).keyframes([{offset:0,filter:"contrast(0.85)",transform:h,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),a.addAnimation(d)}else if(a.addAnimation(r),s){h="translateY(-10px) scale("+(s?f:1)+")";d.addElement(t.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:h},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);var p=(0,c.c)().addElement(t.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:h},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);a.addAnimation([d,p])}else i.fromTo("opacity","1","0")}else a.addAnimation(r);return a},v=function(e){var t=(0,c.c)(),o=(0,c.c)(),r=(0,c.c)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),r.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([o,r])},x=function(e){var t=(0,c.c)(),o=(0,c.c)(),r=(0,c.c)(),i=e.querySelector(".modal-wrapper");return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r.addElement(i).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),t.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([o,r])},y=function(){function e(e){var t=this;(0,i.r)(this,e),this.didPresent=(0,i.e)(this,"ionModalDidPresent",7),this.willPresent=(0,i.e)(this,"ionModalWillPresent",7),this.willDismiss=(0,i.e)(this,"ionModalWillDismiss",7),this.didDismiss=(0,i.e)(this,"ionModalDidDismiss",7),this.gestureAnimationDismissing=!1,this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.onBackdropTap=function(){t.dismiss(void 0,s.B)},this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),t.dismiss()},this.onLifecycle=function(e){var o=t.usersElement,r=g[e.type];if(o&&r){var i=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(i)}}}return e.prototype.swipeToCloseChanged=function(e){this.gesture?this.gesture.enable(e):e&&this.initSwipeToClose()},e.prototype.connectedCallback=function(){(0,s.e)(this.el)},e.prototype.present=function(){return(0,r.mG)(this,void 0,void 0,(function(){var e,t,o,a=this;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".modal-wrapper")))throw new Error("container is undefined");return t=Object.assign(Object.assign({},this.componentProps),{modal:this.el}),o=this,[4,(0,n.a)(this.delegate,e,this.component,["ion-page"],t)];case 1:return o.usersElement=r.sent(),[4,(0,l.e)(this.usersElement)];case 2:return r.sent(),(0,i.c)((function(){return a.el.classList.add("show-modal")})),[4,(0,s.d)(this,"modalEnter",b,v,this.presentingElement)];case 3:return r.sent(),this.swipeToClose&&this.initSwipeToClose(),[2]}}))}))},e.prototype.initSwipeToClose=function(){var e=this;if("ios"===(0,a.b)(this)){var t=this.leaveAnimation||a.c.get("modalLeave",w),o=this.animation=t(this.el,this.presentingElement);this.gesture=function(e,t,o){var r=e.offsetHeight,i=!1,a=(0,h.createGesture)({el:e,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:function(e){var t=e.event.target;return null===t||!t.closest||null===t.closest("ion-content, ion-footer")},onStart:function(){t.progressStart(!0,i?1:0)},onMove:function(e){var o=(0,p.j)(1e-4,e.deltaY/r,.9999);t.progressStep(o)},onEnd:function(e){var n=e.velocityY,s=(0,p.j)(1e-4,e.deltaY/r,.9999),d=(e.deltaY+1e3*n)/r>=.5,l=d?-.001:.001;d?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),l+=(0,m.g)([0,0],[.32,.72],[0,1],[1,1],s)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),l+=(0,m.g)([0,0],[1,0],[.68,.28],[1,1],s)[0]);var c=u(d?s*r:(1-s)*r,n);i=d,a.enable(!1),t.onFinish((function(){d||a.enable(!0)})).progressEnd(d?1:0,l,c),d&&o()}});return a}(this.el,o,(function(){e.gestureAnimationDismissing=!0,e.animation.onFinish((function(){return(0,r.mG)(e,void 0,void 0,(function(){return(0,r.Jh)(this,(function(e){switch(e.label){case 0:return[4,this.dismiss(void 0,"gesture")];case 1:return e.sent(),this.gestureAnimationDismissing=!1,[2]}}))}))}))})),this.gesture.enable(!0)}},e.prototype.dismiss=function(e,t){return(0,r.mG)(this,void 0,void 0,(function(){var o,i;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return this.gestureAnimationDismissing&&"gesture"!==t?[2,!1]:(o=s.h.get(this)||[],[4,(0,s.f)(this,e,t,"modalLeave",w,x,this.presentingElement)]);case 1:return(i=r.sent())?[4,(0,n.d)(this.delegate,this.usersElement)]:[3,3];case 2:r.sent(),this.animation&&this.animation.destroy(),o.forEach((function(e){return e.destroy()})),r.label=3;case 3:return this.animation=void 0,[2,i]}}))}))},e.prototype.onDidDismiss=function(){return(0,s.g)(this.el,"ionModalDidDismiss")},e.prototype.onWillDismiss=function(){return(0,s.g)(this.el,"ionModalWillDismiss")},e.prototype.render=function(){var e,t=this.htmlAttributes,o=(0,a.b)(this);return(0,i.h)(i.H,Object.assign({"no-router":!0,"aria-modal":"true",tabindex:"-1"},t,{style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign((e={},e[o]=!0,e["modal-card"]=void 0!==this.presentingElement&&"ios"===o,e),(0,d.g)(this.cssClass)),onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),(0,i.h)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),"ios"===o&&(0,i.h)("div",{class:"modal-shadow"}),(0,i.h)("div",{tabindex:"0"}),(0,i.h)("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper"}),(0,i.h)("div",{tabindex:"0"}))},Object.defineProperty(e.prototype,"el",{get:function(){return(0,i.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{swipeToClose:["swipeToCloseChanged"]}},enumerable:!1,configurable:!0}),e}(),g={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};y.style={ios:".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - 40px)}}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}[dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{display:none}.modal-card.sc-ion-modal-ios-h ion-backdrop.sc-ion-modal-ios{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-ion-modal-ios-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:0.18}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{-webkit-box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1)}}",md:".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}"}},2807:function(e,t,o){o.d(t,{c:function(){return a},g:function(){return n},h:function(){return i},o:function(){return d}});var r=o(3598),i=function(e,t){return null!==t.closest(e)},a=function(e,t){var o;return"string"===typeof e&&e.length>0?Object.assign(((o={"ion-color":!0})["ion-color-"+e]=!0,o),t):t},n=function(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return t[e]=!0})),t},s=/^[a-z][a-z0-9+\-.]*:/,d=function(e,t,o,i){return(0,r.mG)(void 0,void 0,void 0,(function(){var a;return(0,r.Jh)(this,(function(r){return null!=e&&"#"!==e[0]&&!s.test(e)&&(a=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,a.push(e,o,i)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=5605.1707e258.chunk.js.map