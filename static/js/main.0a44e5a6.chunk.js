(this["webpackJsonpnews-explorer-frontend"]=this["webpackJsonpnews-explorer-frontend"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),c=n.n(a),r=n(28),o=n.n(r),i=n(20),l=n(2),u=n(3),d=(n(35),n(36),n(25),n(7)),b=(n(26),n.p+"static/media/logout-light.f8a155bb.svg"),j=Object(a.createContext)();var h=function(e){var t=e.isOpen,n=e.isLoggedIn,a=e.onLogOut,r=e.onSignIn,o=c.a.useContext(j);return Object(s.jsxs)("nav",{className:"nav ".concat(t?"nav_active":""),children:[Object(s.jsx)(d.b,{className:"nav__link nav__link_active-light",to:"/",children:"Home"}),n&&Object(s.jsx)(d.b,{className:"nav__link",to:"/saved-news",children:"Saved Articles"}),n?Object(s.jsxs)("button",{className:"nav__button nav__button_theme_light",onClick:a,children:[o.name,Object(s.jsx)("img",{className:"nav__icon",src:b,alt:"icon"})]}):Object(s.jsx)("button",{className:"nav__button nav__button_type_sign-in",onClick:r,children:"Sign in"})]})};var m=function(e){var t=e.onSignIn,n=e.menuButtonVisible,c=e.isLoggedIn,r=e.onLogOut,o=Object(a.useState)(!1),i=Object(l.a)(o,2),u=i[0],d=i[1],b=Object(a.useCallback)((function(){d(!1),t()}),[t]);return Object(s.jsxs)("header",{className:"header ".concat(u?"header_active":""),children:[Object(s.jsxs)("div",{className:"header__wrapper",children:[Object(s.jsx)("div",{className:"header__logo",children:"NewsExplorer"}),n&&Object(s.jsx)("button",{className:"header__button ".concat(u?"header__button_type_expanded":"header__button_type_closed"),onClick:function(){d(!u)}})]}),Object(s.jsx)(h,{isOpen:u,onSignIn:b,isLoggedIn:c,onLogOut:r}),u&&Object(s.jsx)("div",{className:"header__overlay"})]})},p=(n(42),n(14)),O=n(11),_=function(e){var t=e.onSubmit,n=Object(a.useState)({}),s=Object(l.a)(n,2),c=s[0],r=s[1],o=Object(a.useState)({}),i=Object(l.a)(o,2),u=i[0],d=i[1],b=Object(a.useState)(!1),j=Object(l.a)(b,2),h=j[0],m=j[1],_=Object(a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];r(e),d(t),m(n)}),[r,d,m]);return{values:c,handleChange:function(e){var t=e.target,n=t.name,s=t.value;r(Object(O.a)(Object(O.a)({},c),{},Object(p.a)({},n,s))),d(Object(O.a)(Object(O.a)({},u),{},Object(p.a)({},n,t.validationMessage))),m(t.closest("form").checkValidity())},handleSubmit:function(e){e.preventDefault(),e.target.checkValidity()&&(t(c),_())},handleInvalid:function(e){e.preventDefault()},resetForm:_,errors:u,isValid:h}};var f=function(e){var t,n=_({onSubmit:function(t){e.onSearch(t.keyword)}}),a=n.handleSubmit,c=n.handleChange,r=n.handleInvalid,o=n.values,i=n.errors;return Object(s.jsxs)("form",{className:"searchForm",onSubmit:a,children:[Object(s.jsx)("h1",{className:"searchForm__title",children:"What's going on in the world?"}),Object(s.jsx)("p",{className:"searchForm__subtitle",children:"Find the latest news on any topic and save them in your personal account."}),Object(s.jsxs)("div",{className:"searchForm__input-wrapper",children:[Object(s.jsx)("input",{className:"searchForm__input",placeholder:"Enter topic",onChange:c,onInvalid:r,value:null!==(t=o.keyword)&&void 0!==t?t:"",name:"keyword",required:!0,disabled:e.isLoading}),Object(s.jsx)("button",{type:"submit",className:"searchForm__button button button_type_primary",children:"Search"})]}),Object(s.jsx)("span",{className:"searchForm__input-error",children:i.keyword})]})},v=(n(43),n.p+"static/media/profile-img.62572d9a.jpg");var g=function(){return Object(s.jsxs)("section",{className:"about",children:[Object(s.jsx)("div",{className:"about__img-container",children:Object(s.jsx)("img",{alt:"Profile",className:"about__img",src:v})}),Object(s.jsxs)("div",{className:"about__text-container",children:[Object(s.jsx)("h3",{className:"about__title",children:"About the Author"}),Object(s.jsx)("p",{className:"about__text",children:"My name is Yuliya Khilko. I'm a full-stack web develolper. The stack is comprised of Node.js and MingoDB(back-end), HTML5/CSS/JavaScript and React.js(front-end)."}),Object(s.jsx)("p",{className:"about__text",children:"I recieved my training trought Ptacticum by Yandex. The course taught me the fundamentals of JavaScript, html and CSS. Further into the couse I was exposed to React.js ans Node.js. My experience was great. The best part about it is that the course is project-based. I've learned a lot by doing those independent projects. I also appreciate that I've got some experince with code reviews."})]})]})},x=(n(44),n(17)),N=n.n(x);n(45);var k=function(e){var t=e.article;return Object(s.jsxs)("li",{className:"card",children:[t.urlToImage&&Object(s.jsx)("img",{className:"card__img",src:t.urlToImage,alt:"article"}),e.children,Object(s.jsxs)("div",{className:"card__description-wrapper",children:[Object(s.jsx)("p",{className:"card__date",children:N()(t.publishedAt).format("MMMM D, YYYY")}),Object(s.jsx)("a",{className:"card__link",href:t.url,children:Object(s.jsx)("h2",{className:"card__title",children:t.title})}),Object(s.jsx)("p",{className:"card__text",children:t.description}),Object(s.jsx)("p",{className:"card__source",children:t.source})]})]})};var w=function(e){return Object(s.jsxs)("section",{className:"newsCardList",children:[Object(s.jsx)("h3",{className:"newsCardList__title",children:"Search results"}),Object(s.jsx)("ul",{className:"newsCardList__gallery",children:e.articles.map((function(t,n){return Object(s.jsx)(k,{article:t,children:Object(s.jsx)("div",{className:"card__buttons-wrapper card__buttons-wrapper_placement_right",children:Object(s.jsxs)("button",{type:"button",className:"card__button",disabled:!e.isLoggedIn,onClick:function(){return function(t){e.onBookmarkClick(t)}(t)},children:[Object(s.jsx)("svg",{className:t.isBookmarked?"card__button-bookmark_marked":"card__button-bookmark",width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{d:"M11.382 15.714L6 19.942V4h12v15.942l-5.382-4.228-.618-.486-.618.486z"})}),!e.isLoggedIn&&Object(s.jsx)("span",{className:"card__tooltip-text",children:"Sign in to save articles"})]})})},n)}))}),e.isShowMoreVisible&&Object(s.jsx)("button",{className:"newsCardList__btn",type:"button",onClick:e.onShowMore,children:"Show more"})]})},S=(n(46),n.p+"static/media/not-found.b9740c3b.svg");var y=function(e){return Object(s.jsxs)("div",{className:"notFound",children:[Object(s.jsx)("img",{className:"notFound__icon",src:S,alt:"icon"}),Object(s.jsx)("h2",{className:"notFound__title",children:"Nothing found"}),Object(s.jsx)("p",{className:"notFound__text",children:e.children})]})};n(47);var I=function(){return Object(s.jsxs)("div",{className:"preloader",children:[Object(s.jsx)("i",{className:"circle-preloader"}),Object(s.jsx)("p",{className:"preloader__text",children:"Searching for news..."})]})};var C=function(e){var t=e.onSignIn,n=e.menuButtonVisible,a=e.isLoggedIn,c=e.isLoading,r=e.onLogOut,o=e.onSearch,i=e.isNothingFound,l=e.errorMessage,u=e.isSearching,d=e.articles,b=e.isShowMoreVisible,j=e.onShowMore,h=e.onBookmarkClick;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("section",{className:"main",children:Object(s.jsxs)("div",{className:"main__overlay",children:[Object(s.jsx)(m,{onSignIn:t,menuButtonVisible:n,isLoggedIn:a,onLogOut:r}),Object(s.jsx)(f,{onSearch:o,isLoading:c})]})}),i&&Object(s.jsx)(y,{children:l}),c&&Object(s.jsx)(I,{}),u&&Object(s.jsx)(w,{articles:d,isShowMoreVisible:b,onShowMore:j,isLoggedIn:a,onBookmarkClick:h}),Object(s.jsx)(g,{})]})},L=n.p+"static/media/logout.bde199c2.svg";var M=function(e){var t=e.isOpen,n=e.onLogOut,a=c.a.useContext(j);return Object(s.jsxs)("nav",{className:"nav ".concat(t?"nav_active":""),children:[Object(s.jsx)(d.b,{className:"nav__link",to:"/",children:"Home"}),Object(s.jsx)(d.b,{className:"nav__link nav__link_active-dark",to:"/saved-news",children:"Saved Articles"}),Object(s.jsxs)("button",{className:"nav__button",onClick:n,children:[a.name,Object(s.jsx)("img",{className:"nav__icon",src:L,alt:"icon"})]})]})};var F=function(e){var t=e.menuButtonVisible,n=e.onLogOut,c=Object(a.useState)(!1),r=Object(l.a)(c,2),o=r[0],i=r[1];return Object(s.jsxs)("header",{className:"header header_theme_light ".concat(o?"header_active-light":""),children:[Object(s.jsxs)("div",{className:"header__wrapper header__wrapper_light",children:[Object(s.jsx)("div",{className:"header__logo",children:"NewsExplorer"}),t&&Object(s.jsx)("button",{className:"header__button ".concat(o?"header__button-dark_type_expanded":"header__button-dark_type_closed"),onClick:function(){i(!o)}})]}),Object(s.jsx)(M,{isOpen:o,onLogOut:n}),o&&Object(s.jsx)("div",{className:"header__overlay"})]})};n(48);var B=function(e){var t=e.savedNews,n=e.onDelete;return Object(s.jsx)("ul",{className:"savedNews",children:t.map((function(e,t){return Object(s.jsx)(k,{article:e,children:Object(s.jsxs)("div",{className:"card__buttons-wrapper card__buttons-wrapper_placement_spaceout",children:[Object(s.jsx)("p",{className:"card__keyword",children:(a=e.keyword,a.charAt(0).toUpperCase()+a.substr(1))}),Object(s.jsxs)("button",{type:"button",className:"card__button",onClick:function(){return function(e){n(e)}(e)},children:[Object(s.jsx)("svg",{className:"card__button-trash",width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 3H9v2H3v2h18V5h-6V3zM5 9v11a2 2 0 002 2h10a2 2 0 002-2V9h-2v11H7V9H5zm4 0v9h2V9H9zm4 0v9h2V9h-2z"})}),Object(s.jsx)("span",{className:"card__tooltip-text",children:"Remove from saved"})]})]})},t);var a}))})};n(49);var E=function(e){var t,n,a,r=e.savedNews,o=c.a.useContext(j),i=function(e){var t={};return e.forEach((function(e){t[e]=0})),e.filter((function(e){return 1===++t[e]})).sort((function(e,n){return t[n]-t[e]}))}(r.map((function(e){return e.keyword})).reduce((function(e,t){return e.push(t.charAt(0).toUpperCase()+t.substr(1)),e}),[])),l=(n=3,a=2,(t=i).length<=n?t.join(", "):"".concat(t[0],", ").concat(t[1],", and ").concat(t.length-a," more"));return Object(s.jsxs)("section",{className:"savedArticles",children:[Object(s.jsx)("h1",{className:"savedArticles__title",children:"Saved Articles"}),Object(s.jsxs)("p",{className:"savedArticles__text",children:[o.name,", you have ",r.length," saved articles"]}),Object(s.jsxs)("p",{children:["By keywords:"," ",Object(s.jsxs)("span",{className:"savedArticles__accent",children:[l,"."]})]})]})};var A=function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(F,{onLogOut:e.onLogOut,menuButtonVisible:e.menuButtonVisible,isLoggedIn:e.isLoggedIn}),e.isNothingFound?Object(s.jsx)(y,{children:e.errorMessage}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(E,{savedNews:e.savedNews}),0!==e.savedNews.length&&Object(s.jsx)(B,{savedNews:e.savedNews,onDelete:e.onDelete})]})]})},T=(n(50),n.p+"static/media/github-icon.0f290413.svg"),V=n.p+"static/media/facebook-icon.4c3c64e4.svg";var D=function(){return Object(s.jsxs)("footer",{className:"footer",children:[Object(s.jsx)("p",{className:"footer__copywrite",children:"\xa9 2020 Supersite, Powered by News API"}),Object(s.jsxs)("div",{className:"footer__links",children:[Object(s.jsxs)("div",{className:"footer__group-left",children:[Object(s.jsx)(d.b,{className:"footer__link",to:"/",children:"Home"}),Object(s.jsx)("a",{className:"footer__link footer__link_type_nav",href:"https://practicum.yandex.com/",children:"Practicum by Yandex"})]}),Object(s.jsxs)("div",{className:"footer__group-right",children:[Object(s.jsx)("a",{href:"https://github.com",className:"footer__link",children:Object(s.jsx)("img",{alt:"github icon",src:T})}),Object(s.jsx)("a",{href:"https://www.facebook.com",className:"footer__link footer__link_type_social",children:Object(s.jsx)("img",{alt:"facebook icon",src:V})})]})]})]})};n(51),n(52);var q=function(e){return Object(s.jsx)("div",{className:"popup ".concat(e.isOpen?"popup_opened":""),onClick:function(t){t.target.classList.contains("popup_opened")&&e.onClose()},children:Object(s.jsxs)("div",{className:"popup__container",children:[Object(s.jsx)("button",{className:"popup__btn",type:"button",onClick:e.onClose}),e.children]})})};var P=function(e){return Object(s.jsx)("div",{className:"infoToolTip",children:Object(s.jsxs)(q,{isOpen:e.isOpen,onClose:e.onClose,children:[Object(s.jsx)("p",{className:"infoToolTip__text",children:"Registration successfully completed!"}),Object(s.jsx)("button",{className:"button-link",type:"button",onClick:e.onSignInClick,children:"Sign in"})]})})};var Y=function(e){var t,n,a=e.onClose,c=e.isOpen,r=e.serverMessage,o=e.onLogin,i=e.onSignUpClick,l=e.isDisabledInput,u=_({onSubmit:function(e){var t=e.email,n=e.password;o({email:t,password:n})}}),d=u.handleSubmit,b=u.handleChange,j=u.handleInvalid,h=u.values,m=u.errors,p=u.isValid;return Object(s.jsxs)(q,{onClose:a,isOpen:c,children:[Object(s.jsxs)("form",{className:"form",onSubmit:d,children:[Object(s.jsx)("h2",{className:"form__title",children:"Sign in"}),Object(s.jsx)("label",{className:"form__input-label",htmlFor:"email",children:"Email"}),Object(s.jsx)("input",{name:"email",className:"form__input",type:"email",placeholder:"Enter email",required:!0,value:null!==(t=h.email)&&void 0!==t?t:"",onChange:b,onInvalid:j,disabled:l}),Object(s.jsx)("span",{className:"form__input-error",children:m.email}),Object(s.jsx)("label",{className:"form__input-label",htmlFor:"password",children:"Password"}),Object(s.jsx)("input",{name:"password",className:"form__input",type:"password",placeholder:"Enter password",required:!0,value:null!==(n=h.password)&&void 0!==n?n:"",onChange:b,onInvalid:j,disabled:l}),Object(s.jsx)("span",{className:"form__input-error",children:m.password}),Object(s.jsxs)("div",{className:"form__button-wrapper",children:[Object(s.jsx)("span",{className:"form__server-message",children:r}),Object(s.jsx)("button",{className:"button ".concat(p?"button_type_primary":"button_type_disabled"),type:"submit",disabled:!p,children:"Sign in"})]})]}),Object(s.jsxs)("div",{className:"form__wrapper",children:[Object(s.jsx)("p",{children:"or"}),Object(s.jsx)("button",{className:"button-link",type:"button",onClick:i,children:"Sign up"})]})]})};var U=function(e){var t,n,a,c=_({onSubmit:function(t){var n=t.email,s=t.password,a=t.userName;e.onRegister({email:n,password:s,name:a})}}),r=c.handleSubmit,o=c.handleChange,i=c.handleInvalid,l=c.values,u=c.errors,d=c.isValid;return Object(s.jsxs)(q,{onClose:e.onClose,isOpen:e.isOpen,children:[Object(s.jsxs)("form",{className:"form",onSubmit:r,children:[Object(s.jsx)("h2",{className:"form__title",children:"Sign up"}),Object(s.jsx)("label",{className:"form__input-label",htmlFor:"email",children:"Email"}),Object(s.jsx)("input",{name:"email",className:"form__input",type:"email",placeholder:"Enter email",required:!0,value:null!==(t=l.email)&&void 0!==t?t:"",onChange:o,onInvalid:i,disabled:e.isDisabledInput}),Object(s.jsx)("span",{className:"form__input-error",children:u.email}),Object(s.jsx)("label",{className:"form__input-label",htmlFor:"password",children:"Password"}),Object(s.jsx)("input",{name:"password",className:"form__input",type:"password",placeholder:"Enter password",required:!0,value:null!==(n=l.password)&&void 0!==n?n:"",onChange:o,onInvalid:i,disabled:e.isDisabledInput}),Object(s.jsx)("span",{className:"form__input-error",children:u.password}),Object(s.jsx)("label",{className:"form__input-label",htmlFor:"username",children:"Username"}),Object(s.jsx)("input",{name:"userName",className:"form__input",type:"text",placeholder:"Enter your username",required:!0,minLength:"2",maxLength:"30",value:null!==(a=l.userName)&&void 0!==a?a:"",onChange:o,onInvalid:i,disabled:e.isDisabledInput}),Object(s.jsx)("span",{className:"form__input-error",children:u.userName}),Object(s.jsxs)("div",{className:"form__button-wrapper",children:[Object(s.jsx)("span",{className:"form__server-message",children:e.serverMessage}),Object(s.jsx)("button",{className:"button ".concat(d?"button_type_primary":"button_type_disabled"),type:"submit",disabled:!d,children:"Sign up"})]})]}),Object(s.jsxs)("div",{className:"form__wrapper",children:[Object(s.jsx)("p",{children:"or"}),Object(s.jsx)("button",{className:"button-link",type:"button",onClick:e.onSignInClick,children:"Sign in"})]})]})},J=n(9),R=n.n(J),z=n(15),H=n(18),G=n(19),K=N()(),W=K.format("YYYY-MM-DD"),Q=K.subtract(7,"day").format("YYYY-MM-DD"),X=new(function(){function e(t){Object(H.a)(this,e),this.options=t}return Object(G.a)(e,[{key:"searchNews",value:function(e){return fetch("".concat(this.options.baseUrl,"?q=").concat(e,"&from=").concat(Q,"&to=").concat(W,"&pageSize=100&language=en&apiKey=").concat("9b8c2025d24e4347b94b2eb0e72a7dc3"),{method:"GET"}).then(function(){var e=Object(z.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=2;break}return e.abrupt("return",t.json());case 2:return e.next=4,t.json();case 4:return n=e.sent,e.abrupt("return",Promise.reject(n.error||n.message));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}]),e}())({baseUrl:"https://nomoreparties.co/news/v2/everything"}),Z=new(function(){function e(t){Object(H.a)(this,e),this.options=t}return Object(G.a)(e,[{key:"setToken",value:function(e){this.token=e}},{key:"register",value:function(e){return this.authRequest("/signup","POST",JSON.stringify(e))}},{key:"authorize",value:function(e){return this.authRequest("/signin","POST",JSON.stringify(e))}},{key:"getUser",value:function(){return this.request("/users/me","GET")}},{key:"getSavedArticles",value:function(){return this.request("/articles","GET")}},{key:"getAppInfo",value:function(){return Promise.all([this.getSavedArticles(),this.getUser()])}},{key:"addBookmark",value:function(e){return this.request("/articles","POST",JSON.stringify({keyword:e.keyword,title:e.title,description:e.description,publishedAt:e.publishedAt,source:e.source,url:e.url,urlToImage:e.urlToImage}))}},{key:"removeBookmark",value:function(e){return this.request("/articles/".concat(e),"DELETE")}},{key:"request",value:function(e,t,n){return fetch("".concat(this.options.baseUrl).concat(e),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.token)},method:t,body:n}).then(function(){var e=Object(z.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=2;break}return e.abrupt("return",t.json());case 2:return e.next=4,t.json();case 4:return n=e.sent,e.abrupt("return",Promise.reject(n.error||n.message));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"authRequest",value:function(e,t,n){return fetch("".concat(this.options.baseUrl).concat(e),{headers:{"Content-Type":"application/json"},method:t,body:n}).then(function(){var e=Object(z.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=2;break}return e.abrupt("return",t.json());case 2:return e.next=4,t.json();case 4:return n=e.sent,e.abrupt("return",Promise.reject(n.error||n.message));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}]),e}())({baseUrl:"https://api.ykhilko.news-explorer.students.nomoreparties.site"}),$=function(e){var t=e.isLoggedIn,n=e.onSignIn,c=e.component;return Object(a.useEffect)((function(){t||n()}),[t,n]),Object(s.jsx)(u.b,{children:function(){return t?Object(s.jsx)(c,Object(O.a)({},e)):Object(s.jsx)(u.a,{to:"/"})}})},ee="Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.",te="Sorry, but nothing matched your search terms.",ne=Object(u.h)((function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),o=Object(l.a)(r,2),d=o[0],b=o[1],h=Object(a.useState)(!1),m=Object(l.a)(h,2),p=m[0],O=m[1],_=Object(a.useState)(!1),f=Object(l.a)(_,2),v=f[0],g=f[1],x=Object(a.useState)(!0),N=Object(l.a)(x,2),k=N[0],w=N[1],S=Object(a.useState)([]),y=Object(l.a)(S,2),I=y[0],L=y[1],M=I.length,F=Object(a.useState)(!1),B=Object(l.a)(F,2),E=B[0],T=B[1],V=Object(a.useState)(!1),q=Object(l.a)(V,2),J=q[0],R=q[1],z=Object(a.useState)(!1),H=Object(l.a)(z,2),G=H[0],K=H[1],W=Object(a.useState)([]),Q=Object(l.a)(W,2),ne=Q[0],se=Q[1],ae=Object(a.useState)(3),ce=Object(l.a)(ae,2),re=ce[0],oe=ce[1],ie=Object(a.useState)(!0),le=Object(l.a)(ie,2),ue=le[0],de=le[1],be=Object(a.useState)(""),je=Object(l.a)(be,2),he=je[0],me=je[1],pe=Object(u.g)(),Oe=Object(a.useState)({}),_e=Object(l.a)(Oe,2),fe=_e[0],ve=_e[1],ge=Object(a.useState)([]),xe=Object(l.a)(ge,2),Ne=xe[0],ke=xe[1],we=Object(a.useState)(!0),Se=Object(l.a)(we,2),ye=Se[0],Ie=Se[1],Ce=Object(a.useState)(""),Le=Object(l.a)(Ce,2),Me=Le[0],Fe=Le[1],Be=Object(a.useState)(!1),Ee=Object(l.a)(Be,2),Ae=Ee[0],Te=Ee[1];function Ve(){c(!1),T(!1),localStorage.clear(),se([]),pe.push("/")}var De=Object(a.useCallback)((function(){b(!1),O(!1),g(!1),w(!0)}),[b,O,g,w]);function qe(){w(!1),De(),Fe(""),O(!0)}var Pe=Object(a.useCallback)((function(e){"Escape"===e.key&&De()}),[De]);return Object(a.useEffect)((function(){if(localStorage.getItem("jwt")){var e=JSON.parse(localStorage.getItem("storedArticles"));e&&(L(e),se(e.slice(0,3)),T(!0))}}),[3]),Object(a.useEffect)((function(){return document.addEventListener("keydown",Pe),function(){document.removeEventListener("keydown",Pe)}}),[Pe]),Object(a.useEffect)((function(){var e=localStorage.getItem("jwt");e&&(Z.setToken(e),c(!0),Z.getAppInfo().then((function(e){var t=Object(l.a)(e,2),n=t[0],s=t[1];Ie(!1),c(!0);var a=n.filter((function(e){return e.owner===s._id}));ke(a),ve(s)})).catch((function(e){K(!0),me(e)}))),Ie(!1)}),[n]),ye?null:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(j.Provider,{value:fe,children:Object(s.jsxs)(u.d,{children:[Object(s.jsx)($,{path:"/saved-news",exact:!0,component:A,onSignIn:qe,menuButtonVisible:k,isLoggedIn:n,onLogOut:Ve,savedNews:Ne,onDelete:function(e){Z.removeBookmark(e._id).then((function(t){var n=Ne.filter((function(t){return t._id!==e._id}));ke(n)})).catch((function(e){me(e),K(!0)}))},isNothingFound:G,errorMessage:he}),Object(s.jsx)(u.b,{path:"/",children:Object(s.jsx)(C,{onBookmarkClick:function(e){var t=Ne.find((function(t){return t.title===e.title}));void 0!==t?Z.removeBookmark(t._id).then((function(){e.isBookmarked=!1,L(I),localStorage.setItem("storedArticles",JSON.stringify(I));var n=Ne.filter((function(e){return e._id!==t._id}));ke(n)})).catch((function(e){me(e),K(!0)})):Z.addBookmark(e).then((function(t){e.isBookmarked=!0,t.isBookmarked=!0,L(I),localStorage.setItem("storedArticles",JSON.stringify(I)),ke([t].concat(Object(i.a)(Ne)))})).catch((function(e){me(e),K(!0)}))},errorMessage:he,isShowMoreVisible:ue,onShowMore:function(){!function(e,t){var n=I.slice(e,t);se([].concat(Object(i.a)(ne),Object(i.a)(n)))}(re,re+3),oe(re+3),re>=M-1&&de(!1)},isNothingFound:G,onSearch:function(e){localStorage.removeItem("storedArticles"),K(!1),de(!0),R(!0),oe(3),X.searchNews(e).then((function(t){var n=t.articles;0===n.length?(R(!1),K(!0),T(!1),me(te)):(n.forEach((function(t){t.keyword=e,t.isBookmarked=!1,t.source=t.source.name})),L(n),se(n.slice(0,3)),localStorage.setItem("storedArticles",JSON.stringify(n)),R(!1),T(!0))})).catch((function(e){K(!0),R(!1),de(!1),T(!1),me(ee)}))},onSignIn:qe,menuButtonVisible:k,isLoggedIn:n,articles:ne,isSearching:E,isLoading:J,onLogOut:Ve})})]})}),Object(s.jsx)(D,{}),p&&Object(s.jsx)(Y,{onClose:De,isOpen:!0,onSignUpClick:function(){O(!1),g(!0)},onLogin:function(e){Te(!0),Z.authorize(e).then((function(e){localStorage.setItem("jwt",e.token),Z.setToken(e.token)})).then((function(){c(!0),Te(!1),De()})).catch((function(e){Fe(e),Te(!1)}))},serverMessage:Me,isDisabledInput:Ae}),v&&Object(s.jsx)(U,{onClose:De,isOpen:!0,onSignInClick:qe,onRegister:function(e){Te(!0),Z.register(e).then((function(){De(),b(!0),Te(!1)})).catch((function(e){Fe(e),Te(!1)}))},serverMessage:Me,isDisabledInput:Ae}),Object(s.jsx)(P,{onClose:De,isOpen:d,onSignInClick:qe})]})}));o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(d.a,{children:Object(s.jsx)(ne,{})})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.0a44e5a6.chunk.js.map