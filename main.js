"use strict";(self.webpackChunkgethired_base=self.webpackChunkgethired_base||[]).push([[179],{4070:(e,t,n)=>{var r=n(7294),a=n(3935),i=n(8216),o=n(8603),l=n(9443),c=n(9711),u=n(6974),s=n(8152),m=n(5248),f=n(7034),p=n(7139),d=n(3931),h=n(8885),y=n(3972),g=n(5316),b=n(1508),v=n(6574),E=n(4445),C=n(9684),x=n(5697),Z=n.n(x),P=function(e){var t=e.children,n=e.value,a=e.index;return r.createElement("div",{role:"tabpanel",hidden:n!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},n===a&&r.createElement(b.Z,{sx:{py:3}},t))};P.propTypes={children:Z().node.isRequired,value:Z().number.isRequired,index:Z().number.isRequired};const O=P;var S=n(4942),w=n(6651),k=n(5056),j=n(7462),_=n(2623),R=n(3776),D=n(2715),q=n(5987),L=n(3640),T=n(4509),F=n(76),I=n(3106),M=["helperText","options","id","label","value","onChange","multiple","disabled","name","fullWidth","width","children"],N=(0,r.forwardRef)((function(e,t){var n=e.helperText,a=e.options,i=e.id,o=e.label,l=e.value,c=e.onChange,u=e.multiple,s=e.disabled,m=e.name,f=e.fullWidth,p=e.width,h=e.children,y=(0,q.Z)(e,M);return r.createElement(L.Z,{variant:"filled",sx:{my:1,width:p},fullWidth:f,disabled:s},r.createElement(F.Z,{id:i},o),r.createElement(I.Z,(0,j.Z)({labelId:i,value:l,onChange:c,multiple:u,name:m},y,{ref:t}),h||(null==a?void 0:a.map((function(e){return r.createElement(d.Z,{key:e,value:e},e)})))),!!n&&r.createElement(T.Z,null,n))}));N.propTypes={onChange:Z().func.isRequired,multiple:Z().bool,name:Z().string.isRequired,disabled:Z().bool,id:Z().string.isRequired,helperText:Z().string,options:Z().arrayOf(Z().string),label:Z().string.isRequired,fullWidth:Z().bool,value:Z().oneOfType([Z().string,Z().arrayOf(Z().string)]),width:Z().number,children:Z().node},N.defaultProps={helperText:"",multiple:!1,disabled:!1,value:"",fullWidth:!0,width:null,children:null,options:[]};const W=N;var V=n(1023),A=n(3926),B=n(2927),J=function(e){var t=e.title,n=e.texts,a=e.infoLink,i=(0,r.useState)(!1),o=(0,s.Z)(i,2),l=o[0],c=o[1],u=function(){c(!1)};return r.createElement(A.Z,{onClickAway:u},r.createElement("div",null,r.createElement(V.Z,{PopperProps:{disablePortal:!0},onClose:u,open:l,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,title:r.createElement(r.Fragment,null,r.createElement(y.Z,{color:"inherit"},t),n.map((function(e){var t=e.level,n=e.description;return r.createElement("p",{key:t}," ",r.createElement("b",null,t,":")," ",n)})),a&&r.createElement("b",null,r.createElement("a",{rel:"noreferrer",target:"_blank",style:{color:"white"},href:a},"more info...")))},r.createElement(B.Z,{onClick:function(){c(!0)},color:"primary",fontSize:"large"}))))};J.propTypes={title:Z().string,texts:Z().arrayOf(Z().shape({level:Z().string,description:Z().string})),infoLink:Z().string},J.defaultProps={title:"",texts:[],infoLink:null};var $=n(573),z=(0,$.P1)((function(e){return e.ListData.list.Technologies}),(function(e){return e})),U=(0,$.P1)((function(e){return e.ListData.list.Jobs}),(function(e){return e})),G=(0,$.P1)((function(e){return e.ListData.list.Seniority}),(function(e){return e})),H=(0,$.P1)((function(e){return e.ListData.list.English}),(function(e){return e})),Q=(0,$.P1)((function(e){return e.ListData.list.Currencies}),(function(e){return e.map((function(e){return e.currency}))})),Y=(0,$.P1)((function(e){return e.ListData.list}),(function(e){return e})),K=n(5861),X=n(7757),ee=n.n(X),te=n(6403);function ne(e){return fetch(e,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return e}))}var re="MISSING_ENV_VAR".SALARIES_API_URL,ae=function(e){return ne("".concat(re).concat(e))},ie=function(e,t){return function(e,t){return fetch(e,{method:"POST",body:t,headers:arguments.length>2&&void 0!==arguments[2]?arguments[2]:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return e}))}("".concat(re).concat(e),JSON.stringify(t))},oe="MISSING_ENV_VAR".SALARIES_API_URL,le=function(){var e=(0,K.Z)(ee().mark((function e(t,n){var r,a;return ee().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(oe,"exchange?Code%20Name=").concat(t,"&Value%20to%20exchange=").concat(n),e.next=3,ne(r);case 3:return a=e.sent,e.abrupt("return",a.converted_currency[0]);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ce="MISSING_ENV_VAR".COMPANIES_API_URL,ue=function(){var e=(0,K.Z)(ee().mark((function e(){var t;return ee().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne("".concat(ce,"companies/select"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=(0,K.Z)(ee().mark((function e(){var t;return ee().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne("".concat(ce,"types-work"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),me=function(){var e=(0,K.Z)(ee().mark((function e(){var t;return ee().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne("".concat(ce,"vacancies-job-location"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fe=(0,te.hg)("post/fetchListData",(0,K.Z)(ee().mark((function e(){return ee().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae("technologies");case 2:return e.t0=e.sent,e.next=5,ae("titles");case 5:return e.t1=e.sent,e.next=8,ae("english");case 8:return e.t2=e.sent,e.next=11,ae("seniority");case 11:return e.t3=e.sent,e.next=14,ne("".concat(oe,"currencies"));case 14:return e.t4=e.sent,e.next=17,ue();case 17:return e.t5=e.sent,e.next=20,se();case 20:return e.t6=e.sent,e.next=23,me();case 23:return e.t7=e.sent,e.abrupt("return",{Technologies:e.t0,Jobs:e.t1,English:e.t2,Seniority:e.t3,Currencies:e.t4,Companies:e.t5,TypeWork:e.t6,Locations:e.t7});case 25:case"end":return e.stop()}}),e)}))));(0,te.hg)("post/fetchJobs",function(){var e=(0,K.Z)(ee().mark((function e(t){return ee().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());const pe=(0,te.oM)({name:"ListData",initialState:{list:{Technologies:[],Jobs:[],English:{level:"",texts:[],description:""},Seniority:{level:"",texts:[],description:""},Currencies:[],Companies:[],TypeWork:[],Locations:[]}},extraReducers:(0,S.Z)({},fe.fulfilled,(function(e,t){e.list=t.payload}))}).reducer;var de=function(e){var t,n=e.onChange,a=e.title,i=e.values,o=e.listTechnologies,l=e.listJobs,c=e.listSeniority,u=e.listEnglish,s=e.children,m=e.addListData,f=i.title_name,p=i.technologies,h=i.seniority,g=i.english_level;return(0,r.useEffect)((function(){m()}),[m]),r.createElement(_.Z,{sx:{pr:4,pl:0,pt:4,pb:2,boxShadow:3,mt:2}},r.createElement(w.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"end"},r.createElement(w.ZP,{item:!0,xs:10.5},!!a&&r.createElement(y.Z,{variant:"h2"},a)),r.createElement(w.ZP,{item:!0,xs:10.5},r.createElement(R.Z,{sx:{my:1},options:l,isOptionEqualToValue:function(e,t){return e===t},onChange:function(e,t){return n(e,t,"title_name")},value:f,renderInput:function(e){return r.createElement(D.Z,(0,j.Z)({},e,{variant:"filled",label:"Job Title"}))}})),r.createElement(w.ZP,{item:!0,xs:10.5},r.createElement(R.Z,{multiple:!0,sx:{my:1},options:o,isOptionEqualToValue:function(e,t){return e===t},onChange:function(e,t){return n(e,t,"technologies")},ChipProps:{color:"primary",variant:"outlined",size:"small"},defaultValue:[],value:p,renderInput:function(e){return r.createElement(D.Z,(0,j.Z)({},e,{variant:"filled",label:"Technologies"}))}})),r.createElement(w.ZP,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"end"},r.createElement(w.ZP,{item:!0,sx:{mr:1},xs:1,sm:1},r.createElement(J,c)),r.createElement(w.ZP,{item:!0,xs:10.5},r.createElement(W,{label:"Seniority",value:h||"",onChange:n,id:"label-seniority",name:"seniority",options:c.texts.map((function(e){return e.level}))},null===(t=c.texts)||void 0===t?void 0:t.map((function(e,t){var n=e.level;return r.createElement(d.Z,{key:n,value:Number(t+1)},n)}))))),r.createElement(w.ZP,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"end"},r.createElement(w.ZP,{item:!0,sx:{mr:1},xs:1,sm:1},r.createElement(J,u)),r.createElement(w.ZP,{item:!0,xs:10.5},r.createElement(W,{label:"English Level",value:g,onChange:n,id:"label-englishLevel",name:"english_level",options:u.texts.map((function(e){return e.level}))})))),r.createElement(w.ZP,{item:!0,xs:12,container:!0,direction:"row",alignItems:"center",justifyContent:"end"},r.createElement(w.ZP,{item:!0,xs:10.5},s)))};de.propTypes={values:Z().shape({title_name:Z().string,technologies:Z().arrayOf(Z().string),seniority:Z().number,english_level:Z().string}).isRequired,children:Z().node,listTechnologies:Z().arrayOf(Z().string).isRequired,listJobs:Z().arrayOf(Z().string).isRequired,listSeniority:Z().shape({title:Z().string,texts:Z().arrayOf(Z().shape({level:Z().string,description:Z().string})),infoLink:Z().string}).isRequired,listEnglish:Z().shape({title:Z().string,texts:Z().arrayOf(Z().shape({level:Z().string,description:Z().string})),infoLink:Z().string}).isRequired,onChange:Z().func.isRequired,title:Z().string,addListData:Z().func.isRequired},de.defaultProps={title:null,children:null};const he=(0,i.$j)((function(e){return{listTechnologies:z(e),listJobs:U(e),listSeniority:G(e),listEnglish:H(e)}}),(function(e){return{addListData:function(){return e(fe())}}}))(de);var ye=n(2181),ge=n(5376);ye.kL.register(ye.uw,ye.f$,ye.od,ye.jn,ye.u,ye.De);var be=function(e){var t=e.values,n=e.currencyName,a=e.currencyValue,i=t.map((function(e){return{top:e.top*a,bottom:e.bottom*a,average:e.average*a}})),o={scales:{y:{ticks:{display:!1}},x:{ticks:{callback:function(e,t,n){return t===Math.floor(n.length/2)?["$".concat(e," "),"(~median)"]:"$".concat(e)}}}},plugins:{legend:{position:"bottom",labels:{boxHeight:3}},tooltip:{callbacks:{title:function(e){var t=(0,s.Z)(e,1)[0].dataIndex;return"Averege Salary for the ".concat([0,20,50,80,100][t],"% range")},label:function(e){var t=e.label;return"".concat(n,"$ ").concat(t)}}}},aspectRatio:1.5},c=[l.COLORS.secondary,l.COLORS.contrast1],u={datasets:i.map((function(e,t){var n=e.bottom,r=e.average,a=e.top;return{label:1===i.length?"Your Profile":"Profile ".concat(t+1),showLine:!0,borderColor:c[t]||l.COLORS.error,backgroundColor:c[t]||l.COLORS.error,borderWidth:4,tension:.4,data:[{x:n-.6*(a-n),y:0},{x:n,y:20},{x:r,y:50},{x:a,y:20},{x:a+.6*(a-n),y:0}]}}))};return r.createElement(r.Fragment,null,r.createElement("h2",null,"Normal distribution of salaries (".concat(n||"USD",")")),r.createElement(ge.bp,{options:o,data:u}))};be.propTypes={values:Z().arrayOf(Z().object),currencyName:Z().string,currencyValue:Z().number},be.defaultProps={values:[],currencyName:"USD",currencyValue:1};const ve=be;var Ee;function Ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function xe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ce(Object(n),!0).forEach((function(t){(0,S.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ze={formMain:{title_name:"",technologies:[],seniority:null,english_level:"",is_remote:!0,location:""},formComparison:{title_name:"",technologies:[],seniority:null,english_level:"",is_remote:!0,location:""},chartData:[],currency:"USD",comparisonChartData:[],snackbarShow:!1,loadingButtonsState:{formCalculate:!1,formCompare:!1}},Pe=(0,te.hg)("post/fetchChartData",function(){var e=(0,K.Z)(ee().mark((function e(t,n){var r,a;return ee().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.next=3,ie("salaries",t);case 3:if((a=e.sent).average){e.next=6;break}return e.abrupt("return",r(a));case 6:return e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),Oe=(0,te.hg)("post/fetComparisonchChartData",function(){var e=(0,K.Z)(ee().mark((function e(t,n){var r,a,i,o,l,c;return ee().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,s.Z)(t,2),a=r[0],i=r[1],o=n.rejectWithValue,e.next=4,ie("salaries",a);case 4:return l=e.sent,e.next=7,ie("salaries",i);case 7:if(c=e.sent,l.average){e.next=10;break}return e.abrupt("return",o(l));case 10:if(c.average){e.next=12;break}return e.abrupt("return",o(c));case 12:return e.abrupt("return",[l,c]);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),Se=(0,te.oM)({name:"CalculateSalary",initialState:Ze,reducers:{changesForm:function(e,t){e.formMain=xe(xe({},e.formMain),t.payload.changes)},changesFormComparison:function(e,t){e.formComparison=xe(xe({},e.formComparison),t.payload.changes)},clearFormMain:function(e){e.formMain=Ze.formMain},deleteChip:function(e,t){e.formMain.technologies=e.formMain.technologies.filter((function(e){return e!==t.payload}))},changeCurrency:function(e,t){e.currency=t.payload},closeSnackbar:function(e){e.snackbarShow=!1}},extraReducers:(Ee={},(0,S.Z)(Ee,Pe.fulfilled,(function(e,t){e.chartData=[t.payload],e.loadingButtonsState.formCalculate=!1})),(0,S.Z)(Ee,Pe.pending,(function(e){e.loadingButtonsState.formCalculate=!0})),(0,S.Z)(Ee,Pe.rejected,(function(e){e.snackbarShow=!0,e.loadingButtonsState.formCalculate=!1})),(0,S.Z)(Ee,Oe.fulfilled,(function(e,t){e.comparisonChartData=t.payload,e.loadingButtonsState.formCompare=!1})),(0,S.Z)(Ee,Oe.pending,(function(e){e.loadingButtonsState.formCompare=!0})),(0,S.Z)(Ee,Oe.rejected,(function(e){e.snackbarShow=!0,e.loadingButtonsState.formCompare=!1})),Ee)}),we=Se.actions,ke=we.changesForm,je=we.changesFormComparison,_e=we.clearFormMain,Re=(we.deleteChip,we.changeCurrency),De=we.closeSnackbar;we.changeFilter;const qe=Se.reducer;var Le=(0,$.P1)((function(e){return e.Calculate.formMain}),(function(e){return e})),Te=(0,$.P1)((function(e){return e.Calculate.formComparison}),(function(e){return e})),Fe=(0,$.P1)((function(e){return e.Calculate.chartData}),(function(e){return e})),Ie=(0,$.P1)((function(e){return e.Calculate.comparisonChartData}),(function(e){return e})),Me=(0,$.P1)((function(e){return e.Calculate.currency}),(function(e){return e})),Ne=(0,$.P1)((function(e){return e.Calculate.snackbarShow}),(function(e){return e})),We=(0,$.P1)((function(e){return e.Calculate.loadingButtonsState.formCalculate}),(function(e){return e})),Ve=(0,$.P1)((function(e){return e.Calculate.loadingButtonsState.formCompare}),(function(e){return e})),Ae=(0,$.P1)((function(e){return e.Calculate.vacancies}),(function(e){return e})),Be=function(e){var t=e.title_name,n=e.technologies,r=e.seniority,a=e.english_level;return Boolean(!(t&&n.length&&r&&a))};const Je=function(e){var t=(0,r.useState)(1),n=(0,s.Z)(t,2),a=n[0],i=n[1],o=(0,r.useCallback)(function(){var e=(0,K.Z)(ee().mark((function e(t){var n;return ee().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le(t,1);case 2:n=e.sent,i(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return(0,r.useEffect)((function(){o(e)}),[e,o]),{currencyValue:a}};var $e=function(e){var t=e.addChartData,n=e.comparisonChartData,a=e.formMain,i=e.formComparison,o=e.handleCalculate,l=e.handleCompare,c=e.currency,u=e.loadingFormComparison,s=Boolean(Be(a)||Be(i)),m=Je(c).currencyValue;return r.createElement(r.Fragment,null,r.createElement(w.ZP,{container:!0,spacing:2},r.createElement(w.ZP,{item:!0,xs:12,sm:12,md:5},r.createElement(he,{values:a,onChange:function(e,t,n){if(n)o((0,S.Z)({},n,t));else{var r=e.target,a=r.name,i=r.value;o((0,S.Z)({},a,i))}},title:"Primary Profile"})),r.createElement(w.ZP,{item:!0,xs:12,sm:12,md:2,sx:{display:"grid",placeItems:"center",mt:{xs:1}}},r.createElement(E.Switch,{sx:{fontSize:{sm:60,md:80},transform:{xs:"rotate(90deg)",md:"none"}},color:"primary"})),r.createElement(w.ZP,{item:!0,xs:12,sm:12,md:5},r.createElement(he,{values:i,onChange:function(e,t,n){if(n)l((0,S.Z)({},n,t));else{var r=e.target,a=r.name,i=r.value;l((0,S.Z)({},a,i))}},title:"Secondary Profile"}))),r.createElement(w.ZP,{container:!0},r.createElement(w.ZP,{item:!0,xs:12,sx:{mt:2}},r.createElement(k.Z,{variant:"contained",fullWidth:!0,size:"large",onClick:function(){t([a,i])},loading:u,disabled:s},"Compare salary"))),r.createElement(w.ZP,{container:!0,sx:{display:"flex",justifyContent:"center"},spacing:2},r.createElement(w.ZP,{item:!0,xs:12,md:6,sx:{mt:2}},r.createElement(ve,{values:n,currencyName:c,currencyValue:m}))))},ze={english_level:Z().string,seniority:Z().string,is_remote:Z().bool,location:Z().string,title_id:Z().string,technologies:Z().arrayOf(Z().string)};$e.propTypes={addChartData:Z().func.isRequired,comparisonChartData:Z().arrayOf(Z().shape({average:Z().number,top:Z().number,bottom:Z().number})),formMain:Z().shape(ze).isRequired,formComparison:Z().shape(ze).isRequired,handleCalculate:Z().func.isRequired,handleCompare:Z().func.isRequired,loadingFormComparison:Z().bool.isRequired,currency:Z().string.isRequired},$e.defaultProps={comparisonChartData:[{average:0,top:0,bottom:0}]};const Ue=(0,i.$j)((function(e){return{comparisonChartData:Ie(e),formMain:Le(e),formComparison:Te(e),currency:Me(e),listCurrencies:Q(e),loadingFormComparison:Ve(e)}}),(function(e){return{addChartData:function(t){return e(Oe(t))},handleCalculate:function(t){return e(ke({changes:t}))},handleCompare:function(t){return e(je({changes:t}))}}}))($e);var Ge=n(9397),He=n(7536);function Qe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ye(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Qe(Object(n),!0).forEach((function(t){(0,S.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ke={filters:{typeWork:"","company[]":null,job_location:null,min_salary:null,max_salary:null}},Xe=(0,te.oM)({name:"Filters",initialState:Ke,reducers:{changeFilter:function(e,t){e.filters=Ye(Ye({},e.filters),t.payload)}}}),et=Xe.actions.changeFilter;const tt=Xe.reducer;var nt=["company"],rt=["value","ref","onChange"],at=["ref","onChange"];function it(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ot(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?it(Object(n),!0).forEach((function(t){(0,S.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):it(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var lt={typeWork:"",company:null,job_location:null,min_salary:null,max_salary:null},ct=function(e){var t=e.list,n=e.setFilters,a=(0,He.cI)({defaultValues:lt}),i=a.register,o=a.handleSubmit,l=a.formState,c=a.control,u=a.getValues,s=a.reset,m=l.errors;return r.createElement(_.Z,{sx:{p:2,boxShadow:3,mt:2}},r.createElement(b.Z,{component:"form",onSubmit:o((function(e){var t=e.company,r=ot(ot({},(0,q.Z)(e,nt)),{},{"company[]":null==t?void 0:t.id});n(r)}))},r.createElement(y.Z,{sx:{mb:2},variant:"h2"},"Filters"),r.createElement(He.Qr,{name:"typeWork",control:c,render:function(e){var n,a=e.field;return r.createElement(W,(0,j.Z)({label:"Type Work"},a,{id:"Type Work"}),null===(n=t.TypeWork)||void 0===n?void 0:n.map((function(e){var t=e.id,n=e.name;return r.createElement(d.Z,{key:t,value:t},n)})))}}),r.createElement(He.Qr,{name:"company",control:c,render:function(e){var n=e.field,a=(n.value,n.ref),i=n.onChange,o=(0,q.Z)(n,rt);return r.createElement(R.Z,(0,j.Z)({},o,{onChange:function(e,t){return i(t)},freeSolo:!0,disableClearable:!0,options:t.Companies,getOptionLabel:function(e){return(null==e?void 0:e.name)||""},renderInput:function(e){return r.createElement(D.Z,(0,j.Z)({variant:"filled",inputRef:a},e,{label:"Companies"}))}}))}}),r.createElement(He.Qr,{name:"job_location",control:c,render:function(e){var n,a=e.field,i=a.ref,o=a.onChange,l=(0,q.Z)(a,at);return r.createElement(R.Z,(0,j.Z)({},l,{onChange:function(e,t){return o(t)},freeSolo:!0,sx:{mt:1},disableClearable:!0,options:null===(n=t.Locations)||void 0===n?void 0:n.map((function(e){return e.job_location})),renderInput:function(e){return r.createElement(D.Z,(0,j.Z)({variant:"filled",inputRef:i},e,{label:"Job Location"}))}}))}}),r.createElement(L.Z,{sx:{my:2,display:"flex",gap:"10px",flexDirection:"inherit"}},r.createElement(D.Z,(0,j.Z)({fullWidth:!0,label:"Min Price",InputProps:{inputProps:{min:"0"}},type:"number",variant:"filled",error:!(null==m||!m.min_salary),helperText:(null==m?void 0:m.min_salary)&&"Minimum price less at max price"},i("min_salary",{validate:function(){return!Number(u("max_salary"))||Number(u("max_salary"))>=Number(u("min_salary"))}}))),r.createElement(D.Z,(0,j.Z)({fullWidth:!0,label:"Max Price",InputProps:{inputProps:{min:"0"}},type:"number",variant:"filled",error:!(null==m||!m.max_salary),helperText:(null==m?void 0:m.max_salary)&&"Max price greater at minimum price"},i("max_salary",{validate:function(){return!!Number(u("min_salary"))||Number(u("min_salary"))<=Number(u("max_salary"))}})))),r.createElement(Ge.Z,{sx:{mb:2},disabled:!l.isDirty,variant:"contained",size:"large",fullWidth:!0,type:"submit"},"Filter"),r.createElement(Ge.Z,{fullWidth:!0,onClick:function(){s(lt),n(lt)}},"Clear Filters")))};ct.propTypes={list:Z().shape({TypeWork:Z().arrayOf(Z().shape({id:Z().number,name:Z().string})),Companies:Z().arrayOf(Z().shape({id:Z().number,name:Z().string})),Locations:Z().arrayOf(Z().shape({job_location:Z().string}))}).isRequired,setFilters:Z().func.isRequired};const ut=(0,i.$j)((function(e){return{list:Y(e)}}),(function(e){return{setFilters:function(t){return e(et(t))}}}))(ct);function st(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function mt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?st(Object(n),!0).forEach((function(t){(0,S.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):st(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ft=function(e,t,n){return e[t]?mt(mt({},e),{},(0,S.Z)({},t,e[t]*n)):e},pt=(0,$.P1)((function(e){return e.Filters.filters}),(function(e){return e})),dt=n(9669),ht=n.n(dt),yt="MISSING_ENV_VAR".COMPANIES_API_URL,gt=function(){var e=(0,K.Z)(ee().mark((function e(t){var n,r,a;return ee().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ht().post("".concat(yt,"filter"),null,{params:t});case 2:return n=e.sent,r=n.data.data,a=null==r?void 0:r.filter((function(e){return!0===e.status})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),bt=function(e){var t,n=e.job,a=e.onClick;return r.createElement(_.Z,{sx:{p:2,boxShadow:3,mt:2}},r.createElement(w.ZP,{container:!0,spacing:4},r.createElement(w.ZP,{item:!0,xs:12,sm:12,md:10},r.createElement(y.Z,{sx:{mb:4},variant:"h2"},n.name),r.createElement(y.Z,{sx:{mb:4}},n.description),r.createElement(y.Z,null,(t=n.salary,"$ ".concat(Intl.NumberFormat().format(t))))),r.createElement(w.ZP,{item:!0,xs:12,sm:12,md:2,sx:{display:"flex",alignItems:"center"}},r.createElement(Ge.Z,{onClick:a,variant:"contained",color:"primary",size:"large"},"Apply"))))};bt.propTypes={job:Z().shape({name:Z().string.isRequired,description:Z().string.isRequired,salary:Z().number.isRequired}).isRequired,onClick:Z().func.isRequired};const vt=bt;var Et=function(e){var t=e.currency,n=e.filters,a=(0,r.useState)([]),i=(0,s.Z)(a,2),o=i[0],l=i[1],c=(0,r.useState)(!0),u=(0,s.Z)(c,2),m=u[0],f=u[1],p=Je(t).currencyValue,d=(0,r.useCallback)(function(){var e=(0,K.Z)(ee().mark((function e(t){var n;return ee().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,gt(t);case 2:n=e.sent,l(n.map((function(e){return ft(e,"salary",p)})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[p]);(0,r.useEffect)((function(){f(!0),d(n),f(!1)}),[d,n]);var h=function(){console.log("clicked")};return r.createElement(r.Fragment,null,!o&&!m&&r.createElement(y.Z,{variant:"h4",component:"h4"},"Loading..."),o<1&&m&&r.createElement(y.Z,{variant:"h4",component:"h4"},"No jobs found"),o&&o.map((function(e){return r.createElement(vt,{key:e.id,job:e,onClick:h})})))};Et.propTypes={currency:Z().string.isRequired,filters:Z().shape({typeWork:Z().number,company:Z().string,job_location:Z().string,min_salary:Z().number,max_salary:Z().number}).isRequired};const Ct=(0,i.$j)((function(e){return{vacancies:Ae(e),currency:Me(e),filters:pt(e)}}))(Et),xt=function(){return r.createElement(w.ZP,{container:!0,spacing:2},r.createElement(w.ZP,{item:!0,xs:12,sm:12},r.createElement(y.Z,{variant:"h2",sx:{mt:4}},"Work offers")),r.createElement(w.ZP,{item:!0,xs:12,sm:12,md:4},r.createElement(ut,null)),r.createElement(w.ZP,{item:!0,xs:12,sm:12,md:8},r.createElement(Ct,null)))};var Zt=function(e){var t=e.handleCalculate,n=e.formCalculate,a=e.clearForm,i=e.addChartData,o=e.chartData,l=e.currency,c=e.loadingFormCalculate,u=Je(l).currencyValue,s=Be(n);return r.createElement(r.Fragment,null,r.createElement(w.ZP,{container:!0,spacing:2},r.createElement(w.ZP,{item:!0,xs:12,sm:12,md:6},r.createElement(he,{values:n,onChange:function(e,n,r){if(r)t((0,S.Z)({},r,n));else{var a=e.target,i=a.name,o=a.value;t((0,S.Z)({},i,o))}},title:"Calculate Salary"},r.createElement(k.Z,{sx:{mt:2},fullWidth:!0,variant:"contained",size:"large",onClick:function(){i(n)},disabled:s,loading:c},"Calculate Salary"),r.createElement(Ge.Z,{onClick:a,sx:{mt:2,display:"flex",justifyContent:"center",mx:"auto"}},"Clear form"))),r.createElement(w.ZP,{item:!0,xs:12,sm:12,md:6},r.createElement(ve,{values:o,currencyName:l,currencyValue:u}))),r.createElement(xt,null))};Zt.propTypes={clearForm:Z().func.isRequired,handleCalculate:Z().func.isRequired,formCalculate:Z().shape({english_level:Z().string,seniority:Z().string,is_remote:Z().bool,location:Z().string,title_id:Z().string,technologies:Z().arrayOf(Z().string)}).isRequired,addChartData:Z().func.isRequired,chartData:Z().arrayOf(Z().shape({average:Z().number,top:Z().number,bottom:Z().number})),currency:Z().string.isRequired,loadingFormCalculate:Z().bool.isRequired},Zt.defaultProps={chartData:[{average:0,top:0,bottom:0}]};const Pt=(0,i.$j)((function(e){return{formCalculate:Le(e),chartData:Fe(e),currency:Me(e),listCurrencies:Q(e),loadingFormCalculate:We(e)}}),(function(e){return{handleCalculate:function(t){return e(ke({changes:t}))},clearForm:function(){return e(_e())},addChartData:function(t){return e(Pe(t))}}}))(Zt);var Ot=n(9820),St=n(2588),wt=function(e){var t=e.snackbarShow,n=e.handleCloseSnackbar;return r.createElement(Ot.Z,{open:t,autoHideDuration:6e3,onClose:n},r.createElement(St.Z,{onClose:n,severity:"error",sx:{width:"100%"},variant:"filled"},"Something went wrong. If the problem persists please contact support"))};wt.propTypes={snackbarShow:Z().bool.isRequired,handleCloseSnackbar:Z().func.isRequired};const kt=(0,i.$j)((function(e){return{snackbarShow:Ne(e)}}),(function(e){return{handleCloseSnackbar:function(){return e(De())}}}))(wt);var jt=function(e){var t=e.handleCurrency,n=e.currency,a=e.listCurrencies;return r.createElement(R.Z,{value:n,disableClearable:!0,options:a,onChange:function(e,n){return t(n)},isOptionEqualToValue:function(e,t){return e===t},renderInput:function(e){return r.createElement(D.Z,(0,j.Z)({},e,{variant:"filled",label:"Selected currency"}))}})};jt.propTypes={handleCurrency:Z().func.isRequired,currency:Z().string.isRequired,listCurrencies:Z().arrayOf(Z().string).isRequired};const _t=(0,i.$j)((function(e){return{currency:Me(e),listCurrencies:Q(e)}}),(function(e){return{handleCurrency:function(t){return e(Re(t))}}}))(jt),Rt=function(){var e=(0,r.useState)(0),t=(0,s.Z)(e,2),n=t[0],a=t[1];return r.createElement(r.Fragment,null,r.createElement(C.Header,{isLogged:!0},r.createElement(p.Z,{sx:{display:{sm:"initial",md:"flex"}}},r.createElement(d.Z,null,r.createElement(f.Z,{sx:{flexDirection:{sm:"row",md:"column"},alignItems:"center",gap:"5px",display:"flex",textDecoration:"none"},href:"https://www.get-hired.work/"},r.createElement(h.Z,{sx:{justifyContent:"center"}},r.createElement(E.Home,{color:"secondary"})),r.createElement(y.Z,{color:"secondary",sx:{fontSize:{sm:"16px",md:"13px"}}},"Home"))))),r.createElement(v.Z,{sx:{mt:5}},r.createElement(b.Z,{sx:{width:"100%"}},r.createElement(b.Z,{sx:{borderBottom:1,borderColor:"divider",mb:2}},r.createElement(m.Z,{value:n,onChange:function(e,t){return a(t)},"aria-label":"Job placement - Salaries",textColor:"secondary",indicatorColor:"secondary"},r.createElement(g.Z,{icon:r.createElement(E.Currency,null),label:"Calculate Salary",iconPosition:"start"}),r.createElement(g.Z,{icon:r.createElement(E.Switch,null),label:"Compare Salary",iconPosition:"start"}))),r.createElement(_t,null),r.createElement(O,{value:n,index:0},r.createElement(Pt,null)),r.createElement(O,{value:n,index:1},r.createElement(Ue,null)))),r.createElement(kt,null))},Dt=function(){return r.createElement("div",null,r.createElement("h3",null,"Not Found Page"),r.createElement(c.Link,{to:"/"},"Go home"))},qt=function(){return r.createElement(c.BrowserRouter,null,r.createElement(u.Z5,null,r.createElement(u.AW,{path:"*",element:r.createElement(Dt,null)}),r.createElement(u.AW,{path:"/",element:r.createElement(Rt,null)})))};var Lt,Tt,Ft=n(9244),It=n(6734),Mt=(Lt=(0,n(7779).UY)({ListData:pe,Calculate:qe,Filters:tt}),Tt={key:"Salaries",storage:It.Z,whitelist:["Calculate"]},(0,Ft.OJ)(Tt,Lt)),Nt=(0,te.xC)({reducer:Mt,middleware:function(e){return e({serializableCheck:!1})}}),Wt=(0,Ft.p5)(Nt);const Vt=function(){return r.createElement(r.StrictMode,null,r.createElement(i.zt,{store:Nt},r.createElement(o.r,{loading:null,persistor:Wt},r.createElement(l.ThemeProvider,null,r.createElement(qt,null)))))};var At=document.getElementById("root");a.render(r.createElement(Vt,null),At)}},e=>{e.O(0,[264,216],(()=>(4070,e(e.s=4070)))),e.O()}]);