(this["webpackJsonpcocktail-recipes"]=this["webpackJsonpcocktail-recipes"]||[]).push([[0],{116:function(e,t,n){e.exports=n(146)},121:function(e,t,n){},146:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),i=n(34),u=n.n(i),o=(n(121),n(27)),l=n(38),s=n(197),d=n(17),f=n(5),p=n(29),b=Object(p.createAsyncAction)("recipeList/GET_RECIPE_LIST","recipeList/GET_RECIPE_LIST_SUCCESS","recipeList/GET_RECIPE_LIST_ERROR")(),E=function(e){return{loading:!1,data:e||null,error:null}},m=function(e){return{loading:!0,data:e||null,error:null}},v=function(e){return{loading:!1,data:e,error:null}},O=function(e){return{loading:!1,data:null,error:e}},g=E(),j=Object(p.createReducer)(g,(r={},Object(f.a)(r,"recipeList/GET_RECIPE_LIST",(function(){return m()})),Object(f.a)(r,"recipeList/GET_RECIPE_LIST_SUCCESS",(function(e,t){return v(t.payload)})),Object(f.a)(r,"recipeList/GET_RECIPE_LIST_ERROR",(function(e,t){return O(t.payload)})),r)),h=n(20),k=n.n(h),x=n(71),w=n(51),I=n.n(w);function T(e){return R.apply(this,arguments)}function R(){return(R=Object(x.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("https://exprestestserver.herokuapp.com/recipes/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=function(){var e=Object(x.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("https://exprestestserver.herokuapp.com/ingredients");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(x.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("https://exprestestserver.herokuapp.com/recipesList");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=n(25),_=k.a.mark(D),L=k.a.mark(G);function D(){var e;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(C.a)(S);case 3:return e=t.sent,t.next=6,Object(C.b)(b.success(e));case 6:t.next=13;break;case 8:if(t.prev=8,t.t0=t.catch(0),!I.a.isAxiosError(t.t0)){t.next=13;break}return t.next=13,Object(C.b)(b.failure(t.t0));case 13:case"end":return t.stop()}}),_,null,[[0,8]])}function G(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.c)("recipeList/GET_RECIPE_LIST",D);case 2:case"end":return e.stop()}}),L)}var N,P=n(14),A=n(23),q=Object(p.createAsyncAction)("recipe/GET_RECIPE","recipe/GET_RECIPE_SUCCESS","recipe/GET_RECIPE_ERROR")(),B=Object(p.createAction)("recipe/RECIPE_INIT")(),U={recipe:E()},F=Object(p.createReducer)(U,(N={},Object(f.a)(N,"recipe/GET_RECIPE",(function(e){return Object(A.a)(Object(A.a)({},e),{},{recipe:m()})})),Object(f.a)(N,"recipe/GET_RECIPE_SUCCESS",(function(e,t){return Object(A.a)(Object(A.a)({},e),{},{recipe:v(t.payload)})})),Object(f.a)(N,"recipe/GET_RECIPE_ERROR",(function(e,t){return Object(A.a)(Object(A.a)({},e),{},{recipe:O(t.payload)})})),Object(f.a)(N,"recipe/RECIPE_INIT",(function(e){return Object(A.a)(Object(A.a)({},e),{},{recipe:E()})})),N)),M=k.a.mark(H),J=k.a.mark(W);function H(e){var t;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(C.a)(T,e.payload);case 3:return t=n.sent,n.next=6,Object(C.b)(q.success(t));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(C.b)(q.failure(n.t0));case 12:case"end":return n.stop()}}),M,null,[[0,8]])}function W(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.c)("recipe/GET_RECIPE",H);case 2:case"end":return e.stop()}}),J)}var z=n(193),Y=n(195),Z=n(196),K=n(198),Q=n(190),V=n(98),X=n.n(V);var $=function(e){var t,n=e.recipe,r=e.parent,a=Object(d.c)((function(e){return e.ingredients.ingredients.data}));return a?c.a.createElement(z.a,{sx:{width:"100%",height:"100%"}},c.a.createElement(Y.a,{component:"img",height:"200vh",image:X.a}),c.a.createElement(Z.a,null,c.a.createElement(s.a,{gutterBottom:!0,variant:"h5",component:"div"},"Cocktail : ",null!==(t=null===n||void 0===n?void 0:n.cocktailName)&&void 0!==t?t:""),c.a.createElement(K.a,null,null===n||void 0===n?void 0:n.ingredient.map((function(e,t){var i=function(e){switch(e){case 0:return a.base;case 1:return a.liquor;case 2:return a.beverage;case 3:return a.other;default:return null===a||void 0===a?void 0:a.base}}(e.ingredientType),u=e.id;return c.a.createElement(Q.a,{key:"".concat(r,"/ingredient.").concat(u,".").concat(e.ingredientType),sx:{padding:"1px"}},i[u].name," : ",n.ingredientAmountOZ[t]," ","(",n.ingredientAmountML[t],")")}))),c.a.createElement(s.a,{variant:"h6"},"\ubbf9\uc2a4 \ubc29\ubc95"),c.a.createElement(s.a,{variant:"body1"},null===n||void 0===n?void 0:n.mixing))):c.a.createElement("div",null,"data not loaded")};var ee=function(e){var t=e.drinkId,n=Object(d.c)((function(e){return e.recipe.recipe})),r=n.data,i=n.loading,u=n.error,o=Object(d.b)(),l=Object(a.useState)(),s=Object(P.a)(l,2),f=s[0],p=s[1],b=Object(a.useState)(!1),E=Object(P.a)(b,2),m=E[0],v=E[1];return Object(a.useEffect)((function(){v(!1),o(q.request(t))}),[t]),Object(a.useEffect)((function(){r&&(p((function(e){return r})),v(!0))}),[m?t:r]),Object(a.useEffect)((function(){m&&o(B(null))}),[m]),i&&!m?c.a.createElement("div",null,"\ub85c\ub529\uc911..."):u?c.a.createElement("div",null,"\uc5d0\ub7ec \ubc1c\uc0dd"):c.a.createElement($,{parent:"TodatDrink",recipe:f})},te=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.recipeList})),n=t.data,r=t.loading,i=t.error;if(Object(a.useEffect)((function(){e(b.request(null))}),[]),r)return c.a.createElement("div",null,"\ub85c\ub529\uc911...");if(i)return c.a.createElement("div",null,"\uc5d0\ub7ec \ubc1c\uc0dd");if(!n)return c.a.createElement("div",null,"NO DATA");var u=806*parseInt(function(){var e=new Date,t="".concat(e.getMonth()+1),n="".concat(e.getDate()),r=e.getFullYear();t.length<2&&(t="0".concat(t)),n.length<2&&(n="0".concat(n));var a=[r,t,n].join("");return"".concat(a)}())%n.length;return c.a.createElement("div",null,c.a.createElement(s.a,{variant:"h2"},"Today Drink"),c.a.createElement(ee,{drinkId:u}))},ne=n(18),re=n(100),ae=n(187),ce=n(186),ie=n(181),ue=n(188),oe=n(192),le=n(182),se=n(199);var de=function(e){var t=e.drinksList,n=Object(d.c)((function(e){return e.recipe.recipe})),r=n.data,i=n.loading,u=n.error,o=Object(d.b)(),l=Object(a.useState)([]),s=Object(P.a)(l,2),f=s[0],p=s[1];return Object(a.useEffect)((function(){p([]),t.forEach((function(e){o(q.request(e))}))}),[t]),Object(a.useEffect)((function(){r&&(i||0!==t.length&&p((function(e){return[].concat(Object(ne.a)(e),[r])})))}),[r]),Object(a.useEffect)((function(){f.length===t.length&&o(B(null))}),[f]),i?c.a.createElement("div",null,"\ub85c\ub529\uc911..."):u?c.a.createElement("div",null,"\uc5d0\ub7ec \ubc1c\uc0dd"):c.a.createElement("div",null,c.a.createElement(K.a,null,f.map((function(e){return c.a.createElement(Q.a,{key:"SearchModalCocktailList/recipe.".concat(e.id,":").concat(e.cocktailName)},c.a.createElement($,{parent:"SearchModalCocktailList",recipe:e}))}))))},fe={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"35%",bgcolor:"background.paper",boxShadow:24,maxHeight:"60%",overflow:"scroll",p:4};var pe,be=function(e){var t=e.filterdData,n=Object(a.useState)(!1),r=Object(P.a)(n,2),i=r[0],u=r[1],o=Object(a.useState)({}),l=Object(P.a)(o,2),d=l[0],f=l[1];return c.a.createElement("div",null,0===t.length?c.a.createElement(Q.a,null,"\uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."):t.map((function(e,t){return c.a.createElement(Q.a,{key:t,disablePadding:!0},c.a.createElement(ie.a,{onClick:function(){!function(e){f((function(t){return e})),u(!0)}(e)}},e.name))}))," ",c.a.createElement(ue.a,{open:i,onClose:function(){u(!1)},closeAfterTransition:!0,BackdropComponent:oe.a,BackdropProps:{timeout:500}},c.a.createElement(le.a,{in:i},c.a.createElement(se.a,{sx:fe},c.a.createElement(s.a,{component:"span",id:"drink-name"},d.name),c.a.createElement(s.a,{component:"span",id:"drink-list",sx:{mt:2}},d.includedDrinks?c.a.createElement(de,{drinksList:d.includedDrinks}):c.a.createElement("div",null,"error"))))))},Ee=function(){var e=Object(d.c)((function(e){return e.recipeList})),t=Object(d.c)((function(e){return e.ingredients.ingredients})),n=Object(a.useState)(!1),r=Object(P.a)(n,2),i=r[0],u=r[1],o=c.a.useRef(null),l=Object(a.useState)(""),s=Object(P.a)(l,2),f=s[0],p=s[1],b=Object(a.useState)([]),E=Object(P.a)(b,2),m=E[0],v=E[1];if(Object(a.useEffect)((function(){0!==f.length?v((function(e){return O.filter((function(e){return re.search(e.name,f)>-1}))})):v([])}),[f]),e.loading||t.loading)return c.a.createElement("div",null,"\ub85c\ub529\uc911...");if(e.error||t.error)return c.a.createElement("div",null,"\uc5d0\ub7ec \ubc1c\uc0dd");if(!e.data||!t.data)return c.a.createElement("div",null,"NO DATA");var O=[].concat(Object(ne.a)(e.data.map((function(e,t){return{id:t,name:e,includedDrinks:[t]}}))),Object(ne.a)(t.data.base.map((function(e){return e}))),Object(ne.a)(t.data.beverage.map((function(e){return e}))),Object(ne.a)(t.data.liquor.map((function(e){return e}))),Object(ne.a)(t.data.other.map((function(e){return e}))));return c.a.createElement("div",null,c.a.createElement(ae.a,{ref:o,id:"standard-basic",label:"\uc544\ubb34\uac70\ub098 \uac80\uc0c9\ud574\ubcf4\uc138\uc694!",fullWidth:!0,margin:"dense",variant:"standard",onChange:function(e){p((function(t){return e.target.value})),0!==e.target.value&&u(!0)},onClick:function(e){u((function(e){return!0}))},value:f}),0===f.length?null:c.a.createElement(ce.a,{onClickAway:function(e){var t;(null===(t=o.current)||void 0===t?void 0:t.contains(e.target))||u(!1)}},i?c.a.createElement(K.a,{sx:{maxWidth:"57.1vw",width:1,bgcolor:"background.paper",position:"absolute",zIndex:10,overflow:"auto",maxHeight:300,backgroundColor:"#fafafa"}},c.a.createElement(be,{filterdData:m})):c.a.createElement("div",null)))},me=n(50),ve=Object(me.b)({name:"drinks",initialState:[],reducers:{setDrinksList:function(e,t){t.payload}}}),Oe=ve.actions.setDrinksList,ge=ve.reducer,je=Object(p.createAsyncAction)("ingredients/GET_INGREDIENT","ingredients/GET_INGREDIENT_SUCCESS","ingredients/GET_INGREDIENT_ERROR")(),he={ingredients:E()},ke=Object(p.createReducer)(he,(pe={},Object(f.a)(pe,"ingredients/GET_INGREDIENT",(function(e){return Object(A.a)(Object(A.a)({},e),{},{ingredients:m()})})),Object(f.a)(pe,"ingredients/GET_INGREDIENT_SUCCESS",(function(e,t){return Object(A.a)(Object(A.a)({},e),{},{ingredients:v(t.payload)})})),Object(f.a)(pe,"ingredients/GET_INGREDIENT_ERROR",(function(e,t){return Object(A.a)(Object(A.a)({},e),{},{ingredients:O(t.payload)})})),pe)),xe=k.a.mark(Ie),we=k.a.mark(Te);function Ie(){var e;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(C.a)(y);case 3:return e=t.sent,t.next=6,Object(C.b)(je.success(e));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(C.b)(je.failure(t.t0));case 12:case"end":return t.stop()}}),xe,null,[[0,8]])}function Te(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.c)("ingredients/GET_INGREDIENT",Ie);case 2:case"end":return e.stop()}}),we)}var Re=n(200),ye=n(189),Se=n(201),Ce=Object(me.b)({name:"checklist",initialState:{base:[],beverage:[],liquor:[]},reducers:{addList:function(e,t){var n=t.payload,r=n.type,a=n.data;e[r].push(a),e[r].sort()},delList:function(e,t){var n=t.payload,r=n.type,a=n.data,c=e[r].findIndex((function(e){return e===a}));e[r].splice(c,1)}}}),_e=Ce.actions,Le=_e.addList,De=_e.delList,Ge=Ce.reducer;var Ne=function(e){var t=e.data,n=e.type,r=Object(d.c)((function(e){return e.checklist[n]})),a=Object(d.b)();return c.a.createElement(Re.a,null,c.a.createElement(K.a,{sx:{width:"40vw",display:"flex",flexDirection:"row",overflow:"scroll",marginTop:"5vw",marginBottom:"5vw"}},t.map((function(e,i){return c.a.createElement(Q.a,{disablePadding:!0,key:"ingredient.".concat(e.id,":").concat(e.name),sx:{boxShadow:1,margin:1,width:"min-content",height:"10vh"}},c.a.createElement(ie.a,{onClick:(u=i,function(){var e=r.indexOf(u);a(-1===e?Le({data:t[u].id,type:n}):De({data:t[u].id,type:n}))}),sx:{height:"100%"},dense:!0},c.a.createElement(ye.a,{edge:"start",checked:r.includes(i),tabIndex:-1,disableRipple:!0}),c.a.createElement(Se.a,{id:"".concat(i),primary:"".concat(e.name),sx:{width:"max-content"}})));var u}))))};var Pe,Ae,qe,Be,Ue,Fe,Me,Je=function(){var e=Object(d.c)((function(e){return e.ingredients.ingredients})),t=e.data,n=e.loading,r=e.error,i=Object(d.b)();return Object(a.useEffect)((function(){i(je.request(null))}),[i]),n?c.a.createElement("div",null,"\ub85c\ub529\uc911..."):r?c.a.createElement("div",null,"\uc5d0\ub7ec \ubc1c\uc0dd"):t?c.a.createElement("div",null,c.a.createElement(Ne,{data:t.base,type:"base"}),c.a.createElement(Ne,{data:t.liquor,type:"liquor"}),c.a.createElement(Ne,{data:t.beverage,type:"beverage"})):c.a.createElement("div",null,"NO DATA")},He=function(){var e=Object(d.c)((function(e){return e.drinksList})),t=Object(d.b)(),n=Object(d.c)((function(e){return e.checklist})),r=Object(d.c)((function(e){return e.ingredients.ingredients.data})),i=function(e,t){return r?e.map((function(e){return r[t][e]})):[]},u=function(e,t,n){return 0===n?t:t.filter((function(t){return e.includes(t)}))};return Object(a.useEffect)((function(){var r=i(n.base,"base").map((function(e){return e.includedDrinks})),a=i(n.beverage,"beverage").map((function(e){return e.includedDrinks})),c=i(n.liquor,"liquor").map((function(e){return e.includedDrinks})),o=r.concat(a).concat(c).reduce(u,[]);JSON.stringify(o)!==JSON.stringify(e)&&t(Oe(o))}),[n]),c.a.createElement("div",null,c.a.createElement(Je,null))},We=l.a.div(Pe||(Pe=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n"]))),ze=function(e){var t=e.drinksList,n=Object(d.c)((function(e){return e.recipe.recipe})),r=n.data,i=n.loading,u=n.error,o=Object(d.b)(),l=Object(a.useState)([]),s=Object(P.a)(l,2),f=s[0],p=s[1],b=Object(a.useState)(!1),E=Object(P.a)(b,2),m=E[0],v=E[1];return Object(a.useEffect)((function(){p([]),v(!1),t.forEach((function(e){o(q.request(e))}))}),[t]),Object(a.useEffect)((function(){r&&0!==t.length&&(m||p((function(e){return[].concat(Object(ne.a)(e),[r])})))}),[r]),Object(a.useEffect)((function(){f.length===t.length&&(o(B(null)),v(!0))}),[f]),i&&!m?c.a.createElement(We,null,"\ub85c\ub529\uc911..."):u?c.a.createElement("div",null,"\uc5d0\ub7ec \ubc1c\uc0dd"):c.a.createElement(K.a,{sx:{width:"100%",display:"flex"}},f.map((function(e){return c.a.createElement(Q.a,{key:"DrinkList/recipe.".concat(e.id,":").concat(e.cocktailName),sx:{width:"40vw",height:"100%",marginLeft:"3vw",marginRight:"3vw"}},c.a.createElement($,{parent:"DrinkList",recipe:e}))})))},Ye=l.a.h1(Ae||(Ae=Object(o.a)(["\n  grid-column: 3/5;\n  grid-row: 1/2;\n  place-self: center;\n"]))),Ze=l.a.div(qe||(qe=Object(o.a)(["\n  grid-column: 3/5;\n  grid-row: 2/3;\n"]))),Ke=l.a.div(Be||(Be=Object(o.a)(["\n  grid-column: 2/4;\n  grid-row: 3/5;\n  padding-left: 5vw;\n  padding-right: 5vw;\n"]))),Qe=l.a.div(Ue||(Ue=Object(o.a)(["\n  display: grid;\n  grid-column: 4/6;\n  grid-row: 3/5;\n"]))),Ve=l.a.div(Fe||(Fe=Object(o.a)(["\n  display: grid;\n  grid-column: 2/6;\n  grid-row: 6/7;\n  overflow: auto;\n"]))),Xe=l.a.div(Me||(Me=Object(o.a)(["\n  display: grid;\n  grid-template-columns: 0.5fr 1fr 2fr 2fr 1fr 0.5fr;\n  grid-template-rows: 0.7fr 1fr 2fr 2fr 0.5fr max-content 0.5fr;\n  /* grid-auto-flow: dense; */\n  align-items: center;\n  justify-items: stretch;\n"])));var $e=function(){var e=Object(d.c)((function(e){return e.drinksList}));return c.a.createElement(Xe,null,c.a.createElement(Ye,null,"\uce75\ud14c\uc77c \ub808\uc2dc\ud53c"),c.a.createElement(Ze,null,c.a.createElement(Ee,null)),c.a.createElement(Ke,null,c.a.createElement(te,null)),c.a.createElement(Qe,null,c.a.createElement(He,null)),c.a.createElement(Ve,null,c.a.createElement(ze,{drinksList:e})))},et=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,202)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},tt=n(104),nt=n(62),rt=n(26),at=k.a.mark(ct);function ct(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(nt.a)([Te(),W(),G()]);case 2:case"end":return e.stop()}}),at)}var it=Object(rt.b)({ingredients:ke,recipe:F,recipeList:j,checklist:Ge,drinksList:ge}),ut=Object(tt.a)(),ot=Object(me.a)({reducer:it,middleware:[ut]});ut.run(ct),u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d.a,{store:ot},c.a.createElement($e,null))),document.getElementById("root")),et()},98:function(e,t,n){e.exports=n.p+"static/media/cocktail.3d7c8dfd.jpg"}},[[116,1,2]]]);
//# sourceMappingURL=main.389642b3.chunk.js.map