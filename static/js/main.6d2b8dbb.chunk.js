(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,n){e.exports=n(170)},170:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),i=n.n(c),l=n(12),o=n(41),u=n(95),s=n(34),p=n(111),h=n(10),m=n(35),d=n(7),g=n(172),f=n(201),E=n(207),b=n(203),v=n(204),O=n(200),y=n(202),w=n(70),x=n(206),j=n(205),D=n(102),C=n.n(D),S=n(105),k=n.n(S),T=n(104),_=n.n(T),H=n(197),N=n(198),B=n(199),I=n(106),R=n.n(I),A=n(108),P=n.n(A),U=n(107),K=n.n(U),M=n(109),F=n.n(M),L=n(50),z=n(19),G=n(14),W=n(22),$=n(20),V=n(21),X=n(4),J=n(5),q=n(25),Y=n.n(q),Q=n(53),Z=n(38),ee=n.n(Z),te=ee.a.create({baseURL:"https://rest.coinapi.io/",headers:{"X-CoinAPI-Key":"D684FDE7-8C62-4E87-AA88-5CA4B3630316"}}),ne=ee.a.create({baseURL:"https://free.currconv.com"}),ae=ee.a.create({baseURL:"https://api.coincap.io/v2"}),re=ee.a.create({baseURL:"https://cryptocontrol.io",headers:{"x-api-key":"dd8378e9cdb6a3042efb7a74aaad9108"}}),ce=function(){return{type:"SIGN_IN"}},ie=function(){return function(){var e=Object(Q.a)(Y.a.mark(function e(t){var n;return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"2a0cfbcaf9a179566ac5",e.next=3,ne.get("/api/v7/convert?q=USD_HKD,HKD_USD&compact=ultra&apiKey=".concat("2a0cfbcaf9a179566ac5"));case 3:n=e.sent,t({type:"GET_EXCHANGE_RATE",payload:n.data});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()};function le(){var e=Object(X.a)(["\n  font-size: 0.8em;\n\tcolor: #888;\n"]);return le=function(){return e},e}function oe(){var e=Object(X.a)(["\n\tposition: absolute;\n\tbottom: 0;\n\tleft: 0;\n\tmargin-left: 5%;\n\tfont-size: 1.2em\n\tfont-weight: bold;\n\n\t@media only screen and (min-width: 1024px) {\n\t\tfont-size: 1em\n\t}\n"]);return oe=function(){return e},e}function ue(){var e=Object(X.a)(["\n\twidth: 100%;\n\tmax-width: 100%;\n"]);return ue=function(){return e},e}function se(){var e=Object(X.a)(["\n\tposition: relative;\n\tcolor: #FFF;\n"]);return se=function(){return e},e}function pe(){var e=Object(X.a)(["\n\tdisplay: grid;\n\t\n\t@media only screen and (min-width: 768px) {\n\t\tgrid-template-columns: 1fr 1fr;\n\t}\n\n\t@media only screen and (min-width: 1024px) {\n\t\tgrid-template-columns: 1fr 1fr 1fr 1fr;\n\t}\n"]);return pe=function(){return e},e}function he(){var e=Object(X.a)(["\n  color: rgba(0, 0, 0, 0.54);\n\tfont-size: 1.5em;\n\tfont-weight: bold;\n\tmargin-top: 0;\n"]);return he=function(){return e},e}var me=J.a.p(he()),de=J.a.div(pe()),ge=J.a.a(se()),fe=J.a.img(ue()),Ee=J.a.p(oe()),be=J.a.span(le()),ve=function(e){function t(){return Object(z.a)(this,t),Object(W.a)(this,Object($.a)(t).apply(this,arguments))}return Object(V.a)(t,e),Object(G.a)(t,[{key:"componentDidMount",value:function(){this.props.getNews()}},{key:"renderNews",value:function(){if(null!==this.props.newsData.newsData)return this.props.newsData.newsData.slice(31,this.length)}},{key:"renderLocalDate",value:function(e){return new Date(e).toDateString()}},{key:"render",value:function(){var e=this;return console.log(this.renderNews()),r.a.createElement(a.Fragment,null,r.a.createElement(me,null,"Lastest News"),r.a.createElement(de,null,void 0===this.renderNews()?null:this.renderNews().map(function(t){return r.a.createElement(ge,{key:t.title,href:t.url},r.a.createElement(fe,{src:t.thumbnail}),r.a.createElement(Ee,null,t.title,r.a.createElement("br",null),r.a.createElement(be,null,e.renderLocalDate(t.publishedAt))))})))}}]),t}(r.a.Component),Oe=Object(l.b)(function(e){return{newsData:e.newsData}},{getNews:function(){return function(){var e=Object(Q.a)(Y.a.mark(function e(t){var n;return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re.get("/api/v1/public/news");case 2:n=e.sent,t({type:"GET_NEWS",payload:n.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(ve),ye=n(58),we=n.n(ye),xe=n(196);function je(){var e=Object(X.a)(["\n  color: red;\n"]);return je=function(){return e},e}function De(){var e=Object(X.a)(["\n  color: green;\n"]);return De=function(){return e},e}function Ce(){var e=Object(X.a)(["\n  padding: 12px;\t\n\n\t&:first-child {\n\t\ttext-align: center;\n\t}\n\n\t&:nth-child(2) {\n\t\ttext-align: left\n\t}\n\n\t&:nth-child(n+3) {\n\t\ttext-align: right;\n\t}\n\t\n\t@media only screen and (max-width: 767px) {\n\t\tpadding: 12px 0;\n\n\t\t&:nth-child(1),\n\t\t&:nth-child(4),\n\t\t&:nth-child(5),\n\t\t&:nth-child(6),\n\t\t&:nth-child(7) {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n"]);return Ce=function(){return e},e}function Se(){var e=Object(X.a)(["\n\tfont-weight: bold;\n\tbackground-color: rgb(240, 240, 240);\n\tpadding: 12px;\t\n\n\t&:first-child {\n\t\ttext-align: center;\n\t}\n\n\t&:nth-child(2) {\n\t\ttext-align: left\n\t}\n\n\t&:nth-child(n+3) {\n\t\ttext-align: right;\n\t}\n\n\t@media only screen and (max-width: 767px) {\n\t\tpadding: 12px 6px;\n\t\t\n\t\t&:nth-child(1),\n\t\t&:nth-child(4),\n\t\t&:nth-child(5),\n\t\t&:nth-child(6),\n\t\t&:nth-child(7) {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n"]);return Se=function(){return e},e}function ke(){var e=Object(X.a)(["\n  text-align: center;\n"]);return ke=function(){return e},e}function Te(){var e=Object(X.a)(["\n\tborder-collapse: separate;\n\tborder-spacing: 0;\n"]);return Te=function(){return e},e}function _e(){var e=Object(X.a)(["\n\tborder: 2px solid rgb(240,240,240);\n\tborder-spacing: 0;\n\tborder-radius: 5px;\n  width: 100%;\n  white-space: nowrap;\n"]);return _e=function(){return e},e}function He(){var e=Object(X.a)(["\n  margin-top: 100px;\n\ttext-align: center;\n"]);return He=function(){return e},e}var Ne=J.a.div(He()),Be=J.a.table(_e()),Ie=J.a.thead(Te()),Re=J.a.tr(ke()),Ae=J.a.th(Se()),Pe=J.a.td(Ce()),Ue=J.a.span(De()),Ke=J.a.span(je()),Me=function(e){function t(){return Object(z.a)(this,t),Object(W.a)(this,Object($.a)(t).apply(this,arguments))}return Object(V.a)(t,e),Object(G.a)(t,[{key:"componentDidMount",value:function(){this.props.getExchangeRate(),this.props.getTableArray(),console.log(this.props)}},{key:"renderWholeNumber",value:function(e){return null===this.props.exchangeData.exchangeRate?null:"HKD"===this.props.settings.defaultCurrency?we()(e*this.props.exchangeData.exchangeRate.USD_HKD).format("$0,0.00"):we()(e).format("$0,0.00")}},{key:"renderBigNumber",value:function(e){return null===this.props.exchangeData.exchangeRate?null:"HKD"===this.props.settings.defaultCurrency?we()(e*this.props.exchangeData.exchangeRate.USD_HKD).format("$0.00a"):we()(e).format("$0.00a")}},{key:"renderPercentage",value:function(e){var t=we()(e).format("0.00%");return e>0?r.a.createElement(Ue,null,t):e<0?r.a.createElement(Ke,null,t):{newNumber:t}}},{key:"renderTable",value:function(){var e=this;return console.log(this.props.exchangeData.exchangeRate),r.a.createElement(Be,null,r.a.createElement(Ie,null,r.a.createElement(Re,null,r.a.createElement(Ae,{colSpan:1},"Rank"),r.a.createElement(Ae,{colSpan:2},"Name"),r.a.createElement(Ae,{colSpan:1},"Price"),r.a.createElement(Ae,{colSpan:1},"Market Cap"),r.a.createElement(Ae,{colSpan:1},"VWAP (24h)"),r.a.createElement(Ae,{colSpan:1},"Supply"),r.a.createElement(Ae,{colSpan:1},"Volume (24h)"),r.a.createElement(Ae,{colSpan:1},"Change (24h)"))),r.a.createElement("tbody",null,this.props.tableData.data.map(function(t){return r.a.createElement("tr",{key:t.name},r.a.createElement(Pe,null,t.rank),r.a.createElement(Pe,{colSpan:2},t.name),r.a.createElement(Pe,null,e.renderWholeNumber(t.priceUsd)),r.a.createElement(Pe,null,e.renderBigNumber(t.marketCapUsd)),r.a.createElement(Pe,null,e.renderWholeNumber(t.vwap24Hr)),r.a.createElement(Pe,null,e.renderBigNumber(t.supply)),r.a.createElement(Pe,null,e.renderBigNumber(t.volumeUsd24Hr)),r.a.createElement(Pe,null,e.renderPercentage(t.changePercent24Hr/100)))})))}},{key:"render",value:function(){return null===this.props.tableData?r.a.createElement(Ne,null,r.a.createElement(xe.a,null)):r.a.createElement("div",{className:"content"},this.renderTable())}}]),t}(r.a.Component),Fe=Object(l.b)(function(e){return{tableData:e.table.tableData,exchangeData:e.exchangeData,settings:e.settings}},{getTableArray:function(){return function(){var e=Object(Q.a)(Y.a.mark(function e(t){var n;return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.get("/assets?limit=20");case 2:n=e.sent,t({type:"GET_TABLE_ARRAY",payload:n.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},getExchangeRate:ie})(Me),Le=n(99),ze=n.n(Le),Ge=n(44);n(157);function We(){var e=Object(X.a)(["\n\tmargin: 0 auto;\n\tpadding: 30px 0;\n"]);return We=function(){return e},e}var $e=Object(J.a)(Ge.a)(We()),Ve=function(e){function t(){var e,n;Object(z.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(W.a)(this,(e=Object($.a)(t)).call.apply(e,[this].concat(r)))).data=n.props.currencies.map(function(e){return{x:new Date(e.time_period_start),y:e.price_close}}),n}return Object(V.a)(t,e),Object(G.a)(t,[{key:"tooltipPosition",value:function(){return{x:this.props.datapoint.x,y:this.props.datapoint.y}}},{key:"parseDate",value:function(e){var t=e.getFullYear(),n=e.getMonth()+1,a=e.getDate();return"".concat(a,"/").concat(n,", ").concat(t)}},{key:"render",value:function(){var e=this;return r.a.createElement($e,{xType:"time",margin:{left:50},height:300},r.a.createElement(Ge.c,null),r.a.createElement(Ge.e,null),r.a.createElement(Ge.d,{data:this.data,lineStyle:{stroke:"#737373"},markStyle:{stroke:"#444444",fill:"#444444"},onValueMouseOver:function(t){e.props.showTooltip(),e.props.getDatapoint(t)},onValueMouseOut:function(){e.props.closeTooltip()}}),this.props.isShownTooltip?r.a.createElement(Ge.b,{value:this.tooltipPosition()},r.a.createElement("div",{style:{background:"#e2e2e2",padding:"0 10px"}},r.a.createElement("p",{style:{marginTop:"1.8em",color:"black",fontWeight:"bold",padding:"5px 0"}},"US$",this.props.datapoint.y," ",r.a.createElement("br",null),r.a.createElement("span",{style:{opacity:"0.7",fontSize:"0.8em",fontWeight:"normal"}},this.parseDate(this.props.datapoint.x)," ",r.a.createElement("br",null),this.props.datapoint.x.getHours(),":00:00 GMT+8")))):null,r.a.createElement(Ge.f,{tickTotal:4}),r.a.createElement(Ge.g,{tickTotal:6}))}}]),t}(r.a.Component),Xe=Object(l.b)(function(e){return{currencies:e.priceChart.currency,isShownTooltip:e.priceChart.showTooltip,datapoint:e.priceChart.datapoint}},{showTooltip:function(){return{type:"SHOW_TOOLTIP"}},closeTooltip:function(){return{type:"CLOSE_TOOLTIP"}},getDatapoint:function(e){return{type:"GET_DATAPOINT",payload:e}}})(Ve);function Je(){var e=Object(X.a)(["\n  font-size: 0.8em;\n  font-weight: normal;\n\tmargin: 0 0 0 auto;\n\talign-self: flex-end;\n"]);return Je=function(){return e},e}function qe(){var e=Object(X.a)(["\n\tcolor: #5CBB26;\n\tfont-size: 0.9em;\n"]);return qe=function(){return e},e}function Ye(){var e=Object(X.a)(["\n\tcolor: #F03800;\n\tfont-size: 0.9em;\n"]);return Ye=function(){return e},e}function Qe(){var e=Object(X.a)(["\n  margin-right: 10px;\n"]);return Qe=function(){return e},e}function Ze(){var e=Object(X.a)(["\n  margin: 0;\n"]);return Ze=function(){return e},e}function et(){var e=Object(X.a)(["\n  margin-right: 5px;\n"]);return et=function(){return e},e}function tt(){var e=Object(X.a)(["\n\tdisplay: flex;\n\tfont-size: 1.2em;\n\tfont-weight: bold;\n"]);return tt=function(){return e},e}function nt(){var e=Object(X.a)(["\n  margin-top: 20px;\n"]);return nt=function(){return e},e}function at(){var e=Object(X.a)(["\n  margin-top: 100px;\n\ttext-align: center;\n"]);return at=function(){return e},e}var rt=J.a.div(at()),ct=J.a.div(nt()),it=J.a.div(tt()),lt=J.a.div(et()),ot=J.a.p(Ze()),ut=J.a.span(Qe()),st=J.a.span(Ye()),pt=J.a.span(qe()),ht=J.a.div(Je()),mt=function(e){function t(){return Object(z.a)(this,t),Object(W.a)(this,Object($.a)(t).apply(this,arguments))}return Object(V.a)(t,e),Object(G.a)(t,[{key:"componentDidMount",value:function(){this.props.getBitcoin(),this.props.getExchangeRate()}},{key:"renderHKD",value:function(){var e=this.props.exchangeData.exchangeRate.USD_HKD;return"USD"===this.props.settings.defaultCurrency?r.a.createElement(ut,null,"US$",this.props.priceChart.currency[0].price_close):"HKD"===this.props.settings.defaultCurrency?r.a.createElement(ut,null,"HK$",Math.round(this.props.priceChart.currency[0].price_close*e*100)/100," "):void 0}},{key:"renderPriceAndPercentage",value:function(e){var t=e[e.length-1].price_close,n=e[0].price_close,a=Math.round((n-t)/t*1e4)/100;return a>0?r.a.createElement("div",null,r.a.createElement(ot,null,"Bitcoin Price(BTC)"),r.a.createElement(ot,null,this.renderHKD(),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"11",className:"price-arrow"},r.a.createElement("path",{fill:"#5CBB26",fillRule:"evenodd",d:"M6 0L0 11h12L6 0z"})),r.a.createElement(pt,null,a,"%"))):a<0?r.a.createElement("div",null,r.a.createElement(ot,null,"Bitcoin Price(BTC)"),r.a.createElement(ot,null,this.renderHKD(),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"11",className:"price-arrow"},r.a.createElement("path",{fill:"#F03800",fillRule:"evenodd",d:"M6 11l6-11H0z"})),r.a.createElement(st,null,a,"%"))):r.a.createElement("div",null,r.a.createElement(ot,null,"Bitcoin Price(BTC)"),r.a.createElement(ot,null,this.renderHKD(),a,"%"))}},{key:"render",value:function(){return null===this.props.priceChart.currency?r.a.createElement(rt,null,r.a.createElement(xe.a,null)):r.a.createElement(ct,null,r.a.createElement(it,null,r.a.createElement(lt,null,r.a.createElement("img",{src:"https://img.icons8.com/color/48/000000/bitcoin.png",alt:"bitcoin"})),this.renderPriceAndPercentage(this.props.priceChart.currency),r.a.createElement(ht,null,"Last 24h")),r.a.createElement(Xe,null))}}]),t}(r.a.Component),dt=Object(l.b)(function(e){return{priceChart:e.priceChart,settings:e.settings,exchangeData:e.exchangeData}},{getBitcoin:function(){return function(){var e=Object(Q.a)(Y.a.mark(function e(t){var n,a,r;return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=(new Date).toISOString(),a=n.replace(/([.])\w+/g,""),e.next=4,te.get("/v1/ohlcv/BTC/USD/history?period_id=1HRS&time_end=".concat(a,"&limit=24"));case 4:r=e.sent,t({type:"FETCH_BITCOIN",payload:r.data});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},getExchangeRate:ie})(mt);function gt(){var e=Object(X.a)(["\n  font-size: 0.8em;\n  font-weight: normal;\n\tmargin: 0 0 0 auto;\n\talign-self: flex-end;\n"]);return gt=function(){return e},e}function ft(){var e=Object(X.a)(["\n\tcolor: #5CBB26;\n\tfont-size: 0.9em;\n"]);return ft=function(){return e},e}function Et(){var e=Object(X.a)(["\n\tcolor: #F03800;\n\tfont-size: 0.9em;\n"]);return Et=function(){return e},e}function bt(){var e=Object(X.a)(["\n  margin-right: 10px;\n"]);return bt=function(){return e},e}function vt(){var e=Object(X.a)(["\n  margin: 0;\n"]);return vt=function(){return e},e}function Ot(){var e=Object(X.a)(["\n  margin-right: 5px;\n"]);return Ot=function(){return e},e}function yt(){var e=Object(X.a)(["\n\tdisplay: flex;\n\tfont-size: 1.2em;\n\tfont-weight: bold;\n"]);return yt=function(){return e},e}function wt(){var e=Object(X.a)(["\n  margin-top: 20px;\n"]);return wt=function(){return e},e}function xt(){var e=Object(X.a)(["\n  margin-top: 100px;\n\ttext-align: center;\n"]);return xt=function(){return e},e}var jt=J.a.div(xt()),Dt=J.a.div(wt()),Ct=J.a.div(yt()),St=J.a.div(Ot()),kt=J.a.p(vt()),Tt=J.a.span(bt()),_t=J.a.span(Et()),Ht=J.a.span(ft()),Nt=J.a.div(gt()),Bt=function(e){function t(){return Object(z.a)(this,t),Object(W.a)(this,Object($.a)(t).apply(this,arguments))}return Object(V.a)(t,e),Object(G.a)(t,[{key:"componentDidMount",value:function(){this.props.getEthereum(),this.props.getExchangeRate()}},{key:"renderHKD",value:function(){var e=this.props.exchangeData.exchangeRate.USD_HKD;return"USD"===this.props.settings.defaultCurrency?r.a.createElement(Tt,null,"US$",this.props.priceChart.currency[0].price_close):"HKD"===this.props.settings.defaultCurrency?r.a.createElement(Tt,null,"HK$",Math.round(this.props.priceChart.currency[0].price_close*e*100)/100," "):void 0}},{key:"renderPriceAndPercentage",value:function(e){var t=e[e.length-1].price_close,n=e[0].price_close,a=Math.round((n-t)/t*1e4)/100;return a>0?r.a.createElement("div",null,r.a.createElement(kt,null,"Ethereum Price(ETH)"),r.a.createElement(kt,null,this.renderHKD(),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"11",className:"price-arrow"},r.a.createElement("path",{fill:"#5CBB26",fillRule:"evenodd",d:"M6 0L0 11h12L6 0z"})),r.a.createElement(Ht,null,a,"%"))):a<0?r.a.createElement("div",null,r.a.createElement(kt,null,"Ethereum Price(ETH)"),r.a.createElement(kt,null,this.renderHKD(),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"11",className:"price-arrow"},r.a.createElement("path",{fill:"#F03800",fillRule:"evenodd",d:"M6 11l6-11H0z"})),r.a.createElement(_t,null,a,"%"))):r.a.createElement("div",null,r.a.createElement(kt,null,"Ethereum Price(ETH)"),r.a.createElement(kt,null,this.renderHKD(),a,"%"))}},{key:"render",value:function(){return console.log(this.props),null===this.props.priceChart.currency?r.a.createElement(jt,null,r.a.createElement(xe.a,null)):r.a.createElement(Dt,null,r.a.createElement(Ct,null,r.a.createElement(St,null,r.a.createElement("img",{src:"https://img.icons8.com/color/48/000000/ethereum.png",alt:"ethereum"})),this.renderPriceAndPercentage(this.props.priceChart.currency),r.a.createElement(Nt,null,"Last 24h")),r.a.createElement(Xe,null))}}]),t}(r.a.Component),It=Object(l.b)(function(e){return{priceChart:e.priceChart,settings:e.settings,exchangeData:e.exchangeData}},{getEthereum:function(){return function(){var e=Object(Q.a)(Y.a.mark(function e(t){var n,a,r;return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=(new Date).toISOString(),a=n.replace(/([.])\w+/g,""),e.next=4,te.get("/v1/ohlcv/ETH/USD/history?period_id=1HRS&time_end=".concat(a,"&limit=24"));case 4:r=e.sent,t({type:"FETCH_ETHEREUM",payload:r.data});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},getExchangeRate:ie})(Bt);function Rt(){var e=Object(X.a)(["\n  font-size: 0.8em;\n  font-weight: normal;\n\tmargin: 0 0 0 auto;\n\talign-self: flex-end;\n"]);return Rt=function(){return e},e}function At(){var e=Object(X.a)(["\n\tcolor: #5CBB26;\n\tfont-size: 0.9em;\n"]);return At=function(){return e},e}function Pt(){var e=Object(X.a)(["\n\tcolor: #F03800;\n\tfont-size: 0.9em;\n"]);return Pt=function(){return e},e}function Ut(){var e=Object(X.a)(["\n  margin-right: 10px;\n"]);return Ut=function(){return e},e}function Kt(){var e=Object(X.a)(["\n  margin: 0;\n"]);return Kt=function(){return e},e}function Mt(){var e=Object(X.a)(["\n  margin-right: 5px;\n"]);return Mt=function(){return e},e}function Ft(){var e=Object(X.a)(["\n\tdisplay: flex;\n\tfont-size: 1.2em;\n\tfont-weight: bold;\n"]);return Ft=function(){return e},e}function Lt(){var e=Object(X.a)(["\n  margin-top: 20px;\n"]);return Lt=function(){return e},e}function zt(){var e=Object(X.a)(["\n  margin-top: 100px;\n\ttext-align: center;\n"]);return zt=function(){return e},e}var Gt=J.a.div(zt()),Wt=J.a.div(Lt()),$t=J.a.div(Ft()),Vt=J.a.div(Mt()),Xt=J.a.p(Kt()),Jt=J.a.span(Ut()),qt=J.a.span(Pt()),Yt=J.a.span(At()),Qt=J.a.div(Rt()),Zt=function(e){function t(){return Object(z.a)(this,t),Object(W.a)(this,Object($.a)(t).apply(this,arguments))}return Object(V.a)(t,e),Object(G.a)(t,[{key:"componentDidMount",value:function(){this.props.getBitcoinCash(),this.props.getExchangeRate()}},{key:"renderHKD",value:function(){var e=this.props.exchangeData.exchangeRate.USD_HKD;return"USD"===this.props.settings.defaultCurrency?r.a.createElement(Jt,null,"US$",this.props.priceChart.currency[0].price_close):"HKD"===this.props.settings.defaultCurrency?r.a.createElement(Jt,null,"HK$",Math.round(this.props.priceChart.currency[0].price_close*e*100)/100," "):void 0}},{key:"renderPriceAndPercentage",value:function(e){var t=e[e.length-1].price_close,n=e[0].price_close,a=Math.round((n-t)/t*1e4)/100;return a>0?r.a.createElement("div",null,r.a.createElement(Xt,null,"BitcoinCash Price(BTH)"),r.a.createElement(Xt,null,this.renderHKD(),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"11",className:"price-arrow"},r.a.createElement("path",{fill:"#5CBB26",fillRule:"evenodd",d:"M6 0L0 11h12L6 0z"})),r.a.createElement(Yt,null,a,"%"))):a<0?r.a.createElement("div",null,r.a.createElement(Xt,null,"BitcoinCash Price(BTH)"),r.a.createElement(Xt,null,this.renderHKD(),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"11",className:"price-arrow"},r.a.createElement("path",{fill:"#F03800",fillRule:"evenodd",d:"M6 11l6-11H0z"})),r.a.createElement(qt,null,a,"%"))):r.a.createElement("div",null,r.a.createElement(Xt,null,"BitcoinCash Price(BTH)"),r.a.createElement(Xt,null,this.renderHKD(),a,"%"))}},{key:"render",value:function(){return console.log(this.props),null===this.props.priceChart.currency?r.a.createElement(Gt,null,r.a.createElement(xe.a,null)):r.a.createElement(Wt,null,r.a.createElement($t,null,r.a.createElement(Vt,null,r.a.createElement("img",{src:"https://i.imgur.com/MJ4hg8G.png",alt:"bitcoin_cash"})),this.renderPriceAndPercentage(this.props.priceChart.currency),r.a.createElement(Qt,null,"Last 24h")),r.a.createElement(Xe,null))}}]),t}(r.a.Component),en=Object(l.b)(function(e){return{priceChart:e.priceChart,settings:e.settings,exchangeData:e.exchangeData}},{getBitcoinCash:function(){return function(){var e=Object(Q.a)(Y.a.mark(function e(t){var n,a,r;return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=(new Date).toISOString(),a=n.replace(/([.])\w+/g,""),e.next=4,te.get("/v1/ohlcv/BTH/USD/history?period_id=1HRS&time_end=".concat(a,"&limit=24"));case 4:r=e.sent,t({type:"FETCH_BITCOIN_CASH",payload:r.data});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},getExchangeRate:ie})(Zt);function tn(){var e=Object(X.a)(["\n  padding-bottom: 10px;\n  font-weight: bold;\n  text-decoration: none;\n"]);return tn=function(){return e},e}function nn(){var e=Object(X.a)(["\n\tmargin-top: 10px;\t\n\n  @media (min-width: 768px) {\n\t\tvertical-align: middle;\n\t\tmargin-top: 0;\n\t\tmargin-right: 10px;\n\t}\n"]);return nn=function(){return e},e}function an(){var e=Object(X.a)(["\n\tdisplay: grid;\n\tgrid-gap: 10px;\n\tjustify-items: center;\n\tborder: 1px solid #737373;\n\tborder-radius: 10px;\n\tcolor: #000000;\n\ttext-align: center;\n\ttext-decoration: none;\n\n\t&:hover {\n\t\tbackground-color: #c5c5c5;\n\t}\n\n\t@media (min-width: 768px) {\n\t\tdisplay: block;\n\t\tjustify-items: initial;\n\t\tpadding: 10px 0;\n\t}\n"]);return an=function(){return e},e}function rn(){var e=Object(X.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr 1fr;\n\tgrid-gap: 5px;\n\n\t@media (min-width: 768px) {\n\t\twidth: 70%;\n\t\tmargin: 0 auto;\n\t}\n"]);return rn=function(){return e},e}function cn(){var e=Object(X.a)(["\n\tfill: rgba(0, 0, 0, 0.54) !important;\n\tmargin-right: 10px;\n"]);return cn=function(){return e},e}function ln(){var e=Object(X.a)(["\n\tdisplay: flex;\n\tbackground-color: #FFCEC6;\n\tcolor: rgba(0, 0, 0, 0.54);\n\ttext-align: center;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 20px;\n"]);return ln=function(){return e},e}var on=J.a.div(ln()),un=Object(J.a)(ze.a)(cn()),sn=J.a.div(rn()),pn=Object(J.a)(s.b)(an()),hn=J.a.img(nn()),mn=J.a.span(tn()),dn=Object(l.b)(function(e){return{auth:e.auth,priceChart:e.priceChart}},{signIn:ce})(function(e){return null===e.auth.isSignedIn||!1===e.auth.isSignedIn?r.a.createElement(on,null,r.a.createElement(un,null),"Please login in your Google account to access the price chart"):r.a.createElement("div",{className:"content"},r.a.createElement(sn,null,r.a.createElement(pn,{to:"/price-chart/bitcoin"},r.a.createElement(hn,{src:"https://img.icons8.com/color/48/000000/bitcoin.png"}),r.a.createElement(mn,null,"Bitcoin")),r.a.createElement(pn,{to:"/price-chart/ethereum"},r.a.createElement(hn,{src:"https://img.icons8.com/color/48/000000/ethereum.png"}),r.a.createElement(mn,null,"Ethereum")),r.a.createElement(pn,{to:"/price-chart/bitcoin-cash"},r.a.createElement(hn,{src:"https://i.imgur.com/MJ4hg8G.png"}),r.a.createElement(mn,null,"BitcoinCash"))),r.a.createElement(L.c,null,r.a.createElement(L.a,{path:"/",exact:!0}),r.a.createElement(L.a,{path:"/price-chart/bitcoin",component:dt}),r.a.createElement(L.a,{path:"/price-chart/ethereum",component:It}),r.a.createElement(L.a,{path:"/price-chart/bitcoin-cash",component:en})))}),gn=n(110),fn={option:function(e){return Object(h.a)({},e,{backgroundColor:"#FFFFFF",color:"#000000"})}},En=[{value:"USD",label:"USD"},{value:"HKD",label:"HKD"}],bn=Object(l.b)(function(e){return{settings:e.settings}},{setHKD:function(){return{type:"SET_HKD"}},setUSD:function(){return{type:"SET_USD"}}})(function(e){return r.a.createElement("div",null,r.a.createElement("p",null,"Default Currency"),r.a.createElement(gn.a,{styles:fn,options:En,onChange:function(t){e.settings.defaultCurrency!==t.value&&("USD"===t.value?e.setUSD():e.setHKD())},defaultValue:{value:e.settings.defaultCurrency,label:e.settings.defaultCurrency}}))}),vn=n(81),On=n.n(vn),yn=function(e){function t(){var e,n;Object(z.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(W.a)(this,(e=Object($.a)(t)).call.apply(e,[this].concat(r)))).onAuthChange=function(e){e?n.props.signIn():n.props.signOut()},n.onClickSignIn=function(){n.auth.signIn()},n.onClickSignOut=function(){n.auth.signOut()},n}return Object(V.a)(t,e),Object(G.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",function(){window.gapi.client.init({clientId:"839328378204-jjqt2aer47ltfp46b7fi3do4r7g7o3df.apps.googleusercontent.com",scope:"email"}).then(function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)})})}},{key:"renderButton",value:function(){return null===this.props.isSignedIn?null:this.props.isSignedIn?r.a.createElement(H.a,{onClick:this.onClickSignOut,button:!0,key:"sign-out"},r.a.createElement(N.a,null,r.a.createElement(On.a,null)),r.a.createElement(B.a,{primary:"Sign Out"})):r.a.createElement(H.a,{onClick:this.onClickSignIn,button:!0,key:"sign-in"},r.a.createElement(N.a,null,r.a.createElement(On.a,null)),r.a.createElement(B.a,{primary:"Sign In"}))}},{key:"render",value:function(){return r.a.createElement(O.a,null,this.renderButton())}}]),t}(r.a.Component),wn=Object(l.b)(function(e){return{isSignedIn:e.auth.isSignedIn}},{signIn:ce,signOut:function(){return{type:"SIGN_OUT"}}})(yn),xn=Object(g.a)(function(e){return{root:{display:"flex"},appBar:{backgroundColor:"rgba(0, 0, 0, 0.54)",boxShadow:"none",zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(m.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(h.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)},link:{color:"initial",textDecoration:"none"},googleAuth:{padding:0}}});var jn=function(){var e,t,n=xn(),a=Object(f.a)(),c=r.a.useState(!1),i=Object(p.a)(c,2),l=i[0],o=i[1];return r.a.createElement("div",{className:n.root},r.a.createElement(y.a,null),r.a.createElement(b.a,{position:"fixed",className:Object(d.a)(n.appBar,Object(m.a)({},n.appBarShift,l))},r.a.createElement(v.a,null,r.a.createElement(j.a,{color:"inherit","aria-label":"Open drawer",onClick:function(){o(!0)},edge:"start",className:Object(d.a)(n.menuButton,Object(m.a)({},n.hide,l))},r.a.createElement(C.a,null)),r.a.createElement(w.a,{variant:"h6",noWrap:!0},"Cryptocurrency Dashboard"))),r.a.createElement(E.a,{variant:"permanent",className:Object(d.a)(n.drawer,(e={},Object(m.a)(e,n.drawerOpen,l),Object(m.a)(e,n.drawerClose,!l),e)),classes:{paper:Object(d.a)((t={},Object(m.a)(t,n.drawerOpen,l),Object(m.a)(t,n.drawerClose,!l),t))},open:l},r.a.createElement("div",{className:n.toolbar},r.a.createElement(j.a,{onClick:function(){o(!1)}},"rtl"===a.direction?r.a.createElement(_.a,null):r.a.createElement(k.a,null))),r.a.createElement(x.a,null),r.a.createElement(s.b,{to:"/",className:n.link},r.a.createElement(O.a,null,["Home"].map(function(e){return r.a.createElement(H.a,{button:!0,key:e},r.a.createElement(N.a,null,r.a.createElement(R.a,null)),r.a.createElement(B.a,{primary:e}))}))),r.a.createElement(s.b,{to:"/table",className:n.link},r.a.createElement(O.a,null,["Table"].map(function(e){return r.a.createElement(H.a,{button:!0,key:e},r.a.createElement(N.a,null,r.a.createElement(K.a,null)),r.a.createElement(B.a,{primary:e}))}))),r.a.createElement(s.b,{to:"/price-chart",className:n.link},r.a.createElement(O.a,null,["Price Chart"].map(function(e){return r.a.createElement(H.a,{button:!0,key:e},r.a.createElement(N.a,null,r.a.createElement(P.a,null)),r.a.createElement(B.a,{primary:e}))}))),r.a.createElement(x.a,null),r.a.createElement(s.b,{to:"#",className:n.link},r.a.createElement(wn,{className:n.googleAuth})),r.a.createElement(s.b,{to:"/settings",className:n.link},r.a.createElement(O.a,null,["Settings"].map(function(e){return r.a.createElement(H.a,{button:!0,key:e},r.a.createElement(N.a,null,r.a.createElement(F.a,null)),r.a.createElement(B.a,{primary:e}))})))),r.a.createElement("main",{className:n.content},r.a.createElement("div",{className:n.toolbar}),r.a.createElement(L.c,null,r.a.createElement(L.a,{path:"/",exact:!0,component:Oe}),r.a.createElement(L.a,{path:"/price-chart",component:dn}),r.a.createElement(L.a,{path:"/table",component:Fe}),r.a.createElement(L.a,{path:"/settings",component:bn}))))},Dn=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(jn,null)))},Cn={isSignedIn:null},Sn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Cn;switch((arguments.length>1?arguments[1]:void 0).type){case"SIGN_IN":return Object(h.a)({},e,{isSignedIn:!0});case"SIGN_OUT":return Object(h.a)({},e,{isSignedIn:!1});default:return e}},kn={currency:null,showTooltip:!1,datapoint:null},Tn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{defaultCurrency:"USD"};switch((arguments.length>1?arguments[1]:void 0).type){case"SET_HKD":return Object(h.a)({},e,{defaultCurrency:"HKD"});case"SET_USD":return Object(h.a)({},e,{defaultCurrency:"USD"});default:return e}},_n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{exchangeRate:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_EXCHANGE_RATE":return Object(h.a)({},e,{exchangeRate:t.payload});default:return e}},Hn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{tableData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TABLE_ARRAY":return Object(h.a)({},e,{tableData:t.payload});default:return e}},Nn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{newsData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_NEWS":return Object(h.a)({},e,{newsData:t.payload});default:return e}},Bn=Object(o.c)({auth:Sn,priceChart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BITCOIN":case"FETCH_ETHEREUM":case"FETCH_BITCOIN_CASH":return Object(h.a)({},e,{currency:t.payload});case"SHOW_TOOLTIP":return Object(h.a)({},e,{showTooltip:!0});case"CLOSE_TOOLTIP":return Object(h.a)({},e,{showTooltip:!1});case"GET_DATAPOINT":return Object(h.a)({},e,{datapoint:t.payload});default:return e}},settings:Tn,exchangeData:_n,table:Hn,newsData:Nn}),In=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,Rn=Object(o.e)(Bn,In(Object(o.a)(u.a)));i.a.render(r.a.createElement(l.a,{store:Rn},r.a.createElement(Dn,null)),document.querySelector("#root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.6d2b8dbb.chunk.js.map