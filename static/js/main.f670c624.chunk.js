(this["webpackJsonpcocktail-recipes"]=this["webpackJsonpcocktail-recipes"]||[]).push([[0],{115:function(e,t,n){e.exports=n(145)},120:function(e,t,n){},145:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),i=n(34),u=n.n(i),o=(n(120),n(27)),l=n(38),s=n(196),d=n(17),f=n(5),p=n(29),b=Object(p.createAsyncAction)("recipeList/GET_RECIPE_LIST","recipeList/GET_RECIPE_LIST_SUCCESS","recipeList/GET_RECIPE_LIST_ERROR")(),E=function(e){return{loading:!1,data:e||null,error:null}},m=function(e){return{loading:!0,data:e||null,error:null}},v=function(e){return{loading:!1,data:e,error:null}},O=function(e){return{loading:!1,data:null,error:e}},g=E(),j=Object(p.createReducer)(g,(r={},Object(f.a)(r,"recipeList/GET_RECIPE_LIST",(function(){return m()})),Object(f.a)(r,"recipeList/GET_RECIPE_LIST_SUCCESS",(function(e,t){return v(t.payload)})),Object(f.a)(r,"recipeList/GET_RECIPE_LIST_ERROR",(function(e,t){return O(t.payload)})),r)),h=n(20),k=n.n(h),x=n(71),w=n(51),I=n.n(w);function T(e){return R.apply(this,arguments)}function R(){return(R=Object(x.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("https://exprestestserver.herokuapp.com/recipes/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=function(){var e=Object(x.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("https://exprestestserver.herokuapp.com/ingredients");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(x.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("https://exprestestserver.herokuapp.com/recipesList");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=n(25),_=k.a.mark(D),L=k.a.mark(G);function D(){var e;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(C.a)(S);case 3:return e=t.sent,t.next=6,Object(C.b)(b.success(e));case 6:t.next=13;break;case 8:if(t.prev=8,t.t0=t.catch(0),!I.a.isAxiosError(t.t0)){t.next=13;break}return t.next=13,Object(C.b)(b.failure(t.t0));case 13:case"end":return t.stop()}}),_,null,[[0,8]])}function G(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.c)("recipeList/GET_RECIPE_LIST",D);case 2:case"end":return e.stop()}}),L)}var N,P=n(14),A=n(23),q=Object(p.createAsyncAction)("recipe/GET_RECIPE","recipe/GET_RECIPE_SUCCESS","recipe/GET_RECIPE_ERROR")(),B=Object(p.createAction)("recipe/RECIPE_INIT")(),U={recipe:E()},F=Object(p.createReducer)(U,(N={},Object(f.a)(N,"recipe/GET_RECIPE",(function(e){return Object(A.a)(Object(A.a)({},e),{},{recipe:m()})})),Object(f.a)(N,"recipe/GET_RECIPE_SUCCESS",(function(e,t){return Object(A.a)(Object(A.a)({},e),{},{recipe:v(t.payload)})})),Object(f.a)(N,"recipe/GET_RECIPE_ERROR",(function(e,t){return Object(A.a)(Object(A.a)({},e),{},{recipe:O(t.payload)})})),Object(f.a)(N,"recipe/RECIPE_INIT",(function(e){return Object(A.a)(Object(A.a)({},e),{},{recipe:E()})})),N)),M=k.a.mark(H),J=k.a.mark(W);function H(e){var t;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(C.a)(T,e.payload);case 3:return t=n.sent,n.next=6,Object(C.b)(q.success(t));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(C.b)(q.failure(n.t0));case 12:case"end":return n.stop()}}),M,null,[[0,8]])}function W(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.c)("recipe/GET_RECIPE",H);case 2:case"end":return e.stop()}}),J)}var z=n(192),Y=n(194),Z=n(195),K=n(197),Q=n(189);var V=function(e){var t,n=e.recipe,r=e.parent,a=Object(d.c)((function(e){return e.ingredients.ingredients.data}));return a?c.a.createElement(z.a,{sx:{width:"100%",height:"100%"}},c.a.createElement(Y.a,{component:"img",height:"200vh",image:"https://exprestestserver.herokuapp.com/images/".concat(null===n||void 0===n?void 0:n.id,".png")}),c.a.createElement(Z.a,null,c.a.createElement(s.a,{gutterBottom:!0,variant:"h5",component:"div"},"Cocktail : ",null!==(t=null===n||void 0===n?void 0:n.cocktailName)&&void 0!==t?t:""),c.a.createElement(K.a,null,null===n||void 0===n?void 0:n.ingredient.map((function(e,t){var i=function(e){switch(e){case 0:return a.base;case 1:return a.liquor;case 2:return a.beverage;case 3:return a.other;default:return null===a||void 0===a?void 0:a.base}}(e.ingredientType),u=e.id;return c.a.createElement(Q.a,{key:"".concat(r,"/ingredient.").concat(u,".").concat(e.ingredientType),sx:{padding:"1px"}},i[u].name," : ",n.ingredientAmountOZ[t]," ","(",n.ingredientAmountML[t],")")}))),c.a.createElement(s.a,{variant:"h6"},"\ubbf9\uc2a4 \ubc29\ubc95"),c.a.createElement(s.a,{variant:"body1"},null===n||void 0===n?void 0:n.mixing))):c.a.createElement("div",null,"data not loaded")};var X=function(e){var t=e.drinkId,n=Object(d.c)((function(e){return e.recipe.recipe})),r=n.data,i=n.loading,u=n.error,o=Object(d.b)(),l=Object(a.useState)(),s=Object(P.a)(l,2),f=s[0],p=s[1],b=Object(a.useState)(!1),E=Object(P.a)(b,2),m=E[0],v=E[1];return Object(a.useEffect)((function(){v(!1),o(q.request(t))}),[t]),Object(a.useEffect)((function(){r&&(p((function(e){return r})),v(!0))}),[m?t:r]),Object(a.useEffect)((function(){m&&o(B(null))}),[m]),i&&!m?c.a.createElement("div",null,"\ub85c\ub529\uc911..."):u?c.a.createElement("div",null,"\uc5d0\ub7ec \ubc1c\uc0dd"):c.a.createElement(V,{parent:"TodatDrink",recipe:f})},$=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.recipeList})),n=t.data,r=t.loading,i=t.error;if(Object(a.useEffect)((function(){e(b.request(null))}),[]),r)return c.a.createElement("div",null,"\ub85c\ub529\uc911...");if(i)return c.a.createElement("div",null,"\uc5d0\ub7ec \ubc1c\uc0dd");if(!n)return c.a.createElement("div",null,"NO DATA");var u=806*parseInt(function(){var e=new Date,t="".concat(e.getMonth()+1),n="".concat(e.getDate()),r=e.getFullYear();t.length<2&&(t="0".concat(t)),n.length<2&&(n="0".concat(n));var a=[r,t,n].join("");return"".concat(a)}())%n.length;return c.a.createElement("div",null,c.a.createElement(s.a,{variant:"h2"},"Today Drink"),c.a.createElement(X,{drinkId:u}))},ee=n(18),te=n(99),ne=n(186),re=n(185),ae=n(180),ce=n(187),ie=n(191),ue=n(181),oe=n(198);var le=function(e){var t=e.drinksList,n=Object(d.c)((function(e){return e.recipe.recipe})),r=n.data,i=n.loading,u=n.error,o=Object(d.b)(),l=Object(a.useState)([]),s=Object(P.a)(l,2),f=s[0],p=s[1];return Object(a.useEffect)((function(){p([]),t.forEach((function(e){o(q.request(e))}))}),[t]),Object(a.useEffect)((function(){r&&(i||0!==t.length&&p((function(e){return[].concat(Object(ee.a)(e),[r])})))}),[r]),Object(a.useEffect)((function(){f.length===t.length&&o(B(null))}),[f]),i?c.a.createElement("div",null,"\ub85c\ub529\uc911..."):u?c.a.createElement("div",null,"\uc5d0\ub7ec \ubc1c\uc0dd"):c.a.createElement("div",null,c.a.createElement(K.a,null,f.map((function(e){return c.a.createElement(Q.a,{key:"SearchModalCocktailList/recipe.".concat(e.id,":").concat(e.cocktailName)},c.a.createElement(V,{parent:"SearchModalCocktailList",recipe:e}))}))))},se={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"35%",bgcolor:"background.paper",boxShadow:24,maxHeight:"60%",overflow:"scroll",p:4};var de,fe=function(e){var t=e.filterdData,n=Object(a.useState)(!1),r=Object(P.a)(n,2),i=r[0],u=r[1],o=Object(a.useState)({}),l=Object(P.a)(o,2),d=l[0],f=l[1];return c.a.createElement("div",null,0===t.length?c.a.createElement(Q.a,null,"\uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."):t.map((function(e,t){return c.a.createElement(Q.a,{key:t,disablePadding:!0},c.a.createElement(ae.a,{onClick:function(){!function(e){f((function(t){return e})),u(!0)}(e)}},e.name))}))," ",c.a.createElement(ce.a,{open:i,onClose:function(){u(!1)},closeAfterTransition:!0,BackdropComponent:ie.a,BackdropProps:{timeout:500}},c.a.createElement(ue.a,{in:i},c.a.createElement(oe.a,{sx:se},c.a.createElement(s.a,{component:"span",id:"drink-name"},d.name),c.a.createElement(s.a,{component:"span",id:"drink-list",sx:{mt:2}},d.includedDrinks?c.a.createElement(le,{drinksList:d.includedDrinks}):c.a.createElement("div",null,"error"))))))},pe=function(){var e=Object(d.c)((function(e){return e.recipeList})),t=Object(d.c)((function(e){return e.ingredients.ingredients})),n=Object(a.useState)(!1),r=Object(P.a)(n,2),i=r[0],u=r[1],o=c.a.useRef(null),l=Object(a.useState)(""),s=Object(P.a)(l,2),f=s[0],p=s[1],b=Object(a.useState)([]),E=Object(P.a)(b,2),m=E[0],v=E[1];if(Object(a.useEffect)((function(){0!==f.length?v((function(e){return O.filter((function(e){return te.search(e.name,f)>-1}))})):v([])}),[f]),e.loading||t.loading)return c.a.createElement("div",null,"\ub85c\ub529\uc911...");if(e.error||t.error)return c.a.createElement("div",null,"\uc5d0\ub7ec \ubc1c\uc0dd");if(!e.data||!t.data)return c.a.createElement("div",null,"NO DATA");var O=[].concat(Object(ee.a)(e.data.map((function(e,t){return{id:t,name:e,includedDrinks:[t]}}))),Object(ee.a)(t.data.base.map((function(e){return e}))),Object(ee.a)(t.data.beverage.map((function(e){return e}))),Object(ee.a)(t.data.liquor.map((function(e){return e}))),Object(ee.a)(t.data.other.map((function(e){return e}))));return c.a.createElement("div",null,c.a.createElement(ne.a,{ref:o,id:"standard-basic",label:"\uc544\ubb34\uac70\ub098 \uac80\uc0c9\ud574\ubcf4\uc138\uc694!",fullWidth:!0,margin:"dense",variant:"standard",onChange:function(e){p((function(t){return e.target.value})),0!==e.target.value&&u(!0)},onClick:function(e){u((function(e){return!0}))},value:f}),0===f.length?null:c.a.createElement(re.a,{onClickAway:function(e){var t;(null===(t=o.current)||void 0===t?void 0:t.contains(e.target))||u(!1)}},i?c.a.createElement(K.a,{sx:{maxWidth:"57.1vw",width:1,bgcolor:"background.paper",position:"absolute",zIndex:10,overflow:"auto",maxHeight:300,backgroundColor:"#fafafa"}},c.a.createElement(fe,{filterdData:m})):c.a.createElement("div",null)))},be=n(50),Ee=Object(be.b)({name:"drinks",initialState:{drinks:[]},reducers:{setDrinksList:function(e,t){e.drinks=t.payload}}}),me=Ee.actions.setDrinksList,ve=Ee.reducer,Oe=Object(p.createAsyncAction)("ingredients/GET_INGREDIENT","ingredients/GET_INGREDIENT_SUCCESS","ingredients/GET_INGREDIENT_ERROR")(),ge={ingredients:E()},je=Object(p.createReducer)(ge,(de={},Object(f.a)(de,"ingredients/GET_INGREDIENT",(function(e){return Object(A.a)(Object(A.a)({},e),{},{ingredients:m()})})),Object(f.a)(de,"ingredients/GET_INGREDIENT_SUCCESS",(function(e,t){return Object(A.a)(Object(A.a)({},e),{},{ingredients:v(t.payload)})})),Object(f.a)(de,"ingredients/GET_INGREDIENT_ERROR",(function(e,t){return Object(A.a)(Object(A.a)({},e),{},{ingredients:O(t.payload)})})),de)),he=k.a.mark(xe),ke=k.a.mark(we);function xe(){var e;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(C.a)(y);case 3:return e=t.sent,t.next=6,Object(C.b)(Oe.success(e));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(C.b)(Oe.failure(t.t0));case 12:case"end":return t.stop()}}),he,null,[[0,8]])}function we(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.c)("ingredients/GET_INGREDIENT",xe);case 2:case"end":return e.stop()}}),ke)}var Ie=n(199),Te=n(188),Re=n(200),ye=Object(be.b)({name:"checklist",initialState:{base:[],beverage:[],liquor:[]},reducers:{addList:function(e,t){var n=t.payload,r=n.type,a=n.data;e[r].push(a),e[r].sort()},delList:function(e,t){var n=t.payload,r=n.type,a=n.data,c=e[r].findIndex((function(e){return e===a}));e[r].splice(c,1)}}}),Se=ye.actions,Ce=Se.addList,_e=Se.delList,Le=ye.reducer;var De=function(e){var t=e.data,n=e.type,r=Object(d.c)((function(e){return e.checklist[n]})),a=Object(d.b)();return c.a.createElement(Ie.a,null,c.a.createElement(K.a,{sx:{width:"40vw",display:"flex",flexDirection:"row",overflow:"scroll",marginTop:"5vw",marginBottom:"5vw"}},t.map((function(e,i){return c.a.createElement(Q.a,{disablePadding:!0,key:"ingredient.".concat(e.id,":").concat(e.name),sx:{boxShadow:1,margin:1,width:"min-content",height:"10vh"}},c.a.createElement(ae.a,{onClick:(u=i,function(){var e=r.indexOf(u);a(-1===e?Ce({data:t[u].id,type:n}):_e({data:t[u].id,type:n}))}),sx:{height:"100%"},dense:!0},c.a.createElement(Te.a,{edge:"start",checked:r.includes(i),tabIndex:-1,disableRipple:!0}),c.a.createElement(Re.a,{id:"".concat(i),primary:"".concat(e.name),sx:{width:"max-content"}})));var u}))))};var Ge,Ne,Pe,Ae,qe,Be,Ue,Fe=function(){var e=Object(d.c)((function(e){return e.ingredients.ingredients})),t=e.data,n=e.loading,r=e.error,i=Object(d.b)();return Object(a.useEffect)((function(){i(Oe.request(null))}),[i]),n?c.a.createElement("div",null,"\ub85c\ub529\uc911..."):r?c.a.createElement("div",null,"\uc5d0\ub7ec \ubc1c\uc0dd"):t?c.a.createElement("div",null,c.a.createElement(De,{data:t.base,type:"base"}),c.a.createElement(De,{data:t.liquor,type:"liquor"}),c.a.createElement(De,{data:t.beverage,type:"beverage"})):c.a.createElement("div",null,"NO DATA")},Me=function(){var e=Object(d.c)((function(e){return e.drinksList})),t=Object(d.b)(),n=Object(d.c)((function(e){return e.checklist})),r=Object(d.c)((function(e){return e.ingredients.ingredients.data})),i=function(e,t){return r?e.map((function(e){return r[t][e]})):[]},u=function(e,t,n){return 0===n?t:t.filter((function(t){return e.includes(t)}))};return Object(a.useEffect)((function(){var r=i(n.base,"base").map((function(e){return e.includedDrinks})),a=i(n.beverage,"beverage").map((function(e){return e.includedDrinks})),c=i(n.liquor,"liquor").map((function(e){return e.includedDrinks})),o=r.concat(a).concat(c).reduce(u,[]);JSON.stringify(o)!==JSON.stringify(e)&&t(me(o))}),[n]),c.a.createElement("div",null,c.a.createElement(Fe,null))},Je=l.a.div(Ge||(Ge=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n"]))),He=function(e){var t=e.drinksList,n=Object(d.c)((function(e){return e.recipe.recipe})),r=n.data,i=n.loading,u=n.error,o=Object(d.b)(),l=Object(a.useState)([]),s=Object(P.a)(l,2),f=s[0],p=s[1],b=Object(a.useState)(!1),E=Object(P.a)(b,2),m=E[0],v=E[1];return Object(a.useEffect)((function(){p([]),v(!1),t.forEach((function(e){o(q.request(e))}))}),[t]),Object(a.useEffect)((function(){r&&0!==t.length&&(m||p((function(e){return[].concat(Object(ee.a)(e),[r])})))}),[r]),Object(a.useEffect)((function(){f.length===t.length&&(o(B(null)),v(!0))}),[f]),i&&!m?c.a.createElement(Je,null,"\ub85c\ub529\uc911..."):u?c.a.createElement("div",null,"\uc5d0\ub7ec \ubc1c\uc0dd"):c.a.createElement(K.a,{sx:{width:"100%",display:"flex"}},f.map((function(e){return c.a.createElement(Q.a,{key:"DrinkList/recipe.".concat(e.id,":").concat(e.cocktailName),sx:{width:"40vw",height:"100%",marginLeft:"3vw",marginRight:"3vw"}},c.a.createElement(V,{parent:"DrinkList",recipe:e}))})))},We=l.a.h1(Ne||(Ne=Object(o.a)(["\n  grid-column: 3/5;\n  grid-row: 1/2;\n  place-self: center;\n"]))),ze=l.a.div(Pe||(Pe=Object(o.a)(["\n  grid-column: 3/5;\n  grid-row: 2/3;\n"]))),Ye=l.a.div(Ae||(Ae=Object(o.a)(["\n  grid-column: 2/4;\n  grid-row: 3/5;\n  padding-left: 5vw;\n  padding-right: 5vw;\n"]))),Ze=l.a.div(qe||(qe=Object(o.a)(["\n  display: grid;\n  grid-column: 4/6;\n  grid-row: 3/5;\n"]))),Ke=l.a.div(Be||(Be=Object(o.a)(["\n  display: grid;\n  grid-column: 2/6;\n  grid-row: 6/7;\n  overflow: auto;\n"]))),Qe=l.a.div(Ue||(Ue=Object(o.a)(["\n  display: grid;\n  grid-template-columns: 0.5fr 1fr 2fr 2fr 1fr 0.5fr;\n  grid-template-rows: 0.7fr 1fr 2fr 2fr 0.5fr max-content 0.5fr;\n  /* grid-auto-flow: dense; */\n  align-items: center;\n  justify-items: stretch;\n"])));var Ve=function(){var e=Object(d.c)((function(e){return e.drinksList.drinks}));return c.a.createElement(Qe,null,c.a.createElement(We,null,"\uce75\ud14c\uc77c \ub808\uc2dc\ud53c"),c.a.createElement(ze,null,c.a.createElement(pe,null)),c.a.createElement(Ye,null,c.a.createElement($,null)),c.a.createElement(Ze,null,c.a.createElement(Me,null)),c.a.createElement(Ke,null,c.a.createElement(He,{drinksList:e})))},Xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,201)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},$e=n(103),et=n(62),tt=n(26),nt=k.a.mark(rt);function rt(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.a)([we(),W(),G()]);case 2:case"end":return e.stop()}}),nt)}var at=Object(tt.b)({ingredients:je,recipe:F,recipeList:j,checklist:Le,drinksList:ve}),ct=Object($e.a)(),it=Object(be.a)({reducer:at,middleware:[ct]});ct.run(rt),u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d.a,{store:it},c.a.createElement(Ve,null))),document.getElementById("root")),Xe()}},[[115,1,2]]]);
//# sourceMappingURL=main.f670c624.chunk.js.map