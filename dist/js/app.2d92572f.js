(function(){"use strict";var e={2133:function(e,t,n){var s=n(9242),i=n(3396);function r(e,t,n,s,r,o){const l=(0,i.up)("HelloWorld");return(0,i.wg)(),(0,i.j4)(l)}var o=n(7139);const l=e=>((0,i.dD)("data-v-466a6c4a"),e=e(),(0,i.Cn)(),e),c={class:"game"},a=l((()=>(0,i._)("h1",null,"Tic-Tac-toe",-1))),u=l((()=>(0,i._)("div",{class:"inform"},[(0,i._)("span",null,[(0,i.Uk)("Computer - "),(0,i._)("span",{class:"selectedComputer"},"o")]),(0,i._)("span",null,[(0,i.Uk)("You - "),(0,i._)("span",{class:"selectedUser"},"x")])],-1))),d={id:"game-board"},h=["onClick","textContent"],p={class:"answer"};function f(e,t,n,s,r,l){const f=(0,i.up)("v-btn"),m=(0,i.up)("answers");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("section",c,[a,(0,i.Wm)(f,{onClick:t[0]||(t[0]=e=>l.restart()),class:"button-restart"},{default:(0,i.w5)((()=>[(0,i.Uk)("Restart")])),_:1}),u,(0,i._)("div",d,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(9,((e,t)=>(0,i._)("div",{class:(0,o.C_)(["box",{selectedUser:"x"===l.checkSelected(t),selectedComputer:"o"===l.checkSelected(t)}]),key:e.id,onClick:e=>l.selectBlock(t),textContent:(0,o.zw)(l.checkSelected(t))},null,10,h))),64))]),r.winner?((0,i.wg)(),(0,i.iD)("h1",{key:0,class:(0,o.C_)(["winner",{"winner-user":"You"===r.winner,"winner-computer":"Computer"===r.winner,"winner-draw":"DRAW"===r.winner}])},"Winner: "+(0,o.zw)(r.winner),3)):(0,i.kq)("",!0)]),(0,i._)("section",p,[(0,i.Wm)(m)])],64)}n(7658);const m=e=>((0,i.dD)("data-v-d2ad5b10"),e=e(),(0,i.Cn)(),e),k=m((()=>(0,i._)("h3",{class:"title"},"Cайты других игровых компаний. Приведите пример 5 новостных публикаций, которые очень понравились вам по подаче информации.",-1))),w=["href"],v=m((()=>(0,i._)("h3",{class:"title"},"Самая главная статья каждого месяца — патч-ноут, «обновление».",-1))),b={class:"answer"},g=m((()=>(0,i._)("h3",{class:"title"},"Анализ страницы «Об игре»",-1)));function _(e,t,n,s,r,l){const c=(0,i.up)("v-expansion-panel-title"),a=(0,i.up)("v-expansion-panel-text"),u=(0,i.up)("v-expansion-panel"),d=(0,i.up)("v-expansion-panels");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(d,{variant:"popout"},{default:(0,i.w5)((()=>[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[k])),_:1}),(0,i.Wm)(a,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.feedback,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"answer",key:e.id},[(0,i._)("a",{href:e.link,target:"_blank"},"Link",8,w),(0,i._)("span",null,"2. "+(0,o.zw)(e.decideTask),1),(0,i._)("span",null,"3. "+(0,o.zw)(e.feedbackDesign),1)])))),128))])),_:1})])),_:1})])),_:1}),(0,i.Wm)(d,{variant:"popout"},{default:(0,i.w5)((()=>[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[v])),_:1}),(0,i.Wm)(a,null,{default:(0,i.w5)((()=>[(0,i._)("div",b,[(0,i._)("span",null,(0,o.zw)(r.mainArticle),1)])])),_:1})])),_:1})])),_:1}),(0,i.Wm)(d,{variant:"popout"},{default:(0,i.w5)((()=>[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[g])),_:1}),(0,i.Wm)(a,null,{default:(0,i.w5)((()=>[(0,i._)("span",null,(0,o.zw)(r.mainArticle),1)])),_:1})])),_:1})])),_:1})],64)}var C={name:"answers",data(){return{feedback:[{link:"https://www.rockstargames.com/gta-online?info=6937",decideTask:"Рассказывает фанатам про новый виток игры с новыми фичами и бонусами за выполнение миссий.",feedbackDesign:"Оформление сделано в стиле игры и есть ощущение, что ты не покидаешь вселенную игры а внутри ее читаешь новости."},{link:"https://korabli.su/ru/news/general-news/early-access-to-british-submarines/",decideTask:"можно узнать о добавлении возможностей для новичков и демонстрация оснащения лодок",feedbackDesign:"Все выполнено в одной стилистике, отлично спроектированна страница, так как все интуитивно понятно и доступно."},{link:"https://wargaming.com/en/news/wows-blitz-released/",decideTask:"информирует нас о старте игры на мобильных платформах",feedbackDesign:"это не несет в себе изменения внутри игры, по этому простой дизайн отлично подходит для этой новости."},{link:"https://korabli.su/ru/news/history/armada-alliance/",decideTask:"из этой новости узнаем, что эта ветка игры создана на базе исторических событий.",feedbackDesign:"Мне понравилось то как добавили стили к заголовками в стиле морских кораблей."},{link:"https://korabli.su/ru/news/sales-and-events/armory-121-british-submarines/",decideTask:"Инструкция как можно получить Британскую лодку.",feedbackDesign:"Отлично подобнные изображения и визуализация жетонов, все интуитивно понятно."}],mainArticle:"Мне понравилось в более новом новосном посте, проработанная цветопередача картинок, все в одном стиле, так как в более старой новости были картинки которые выбивались из основного стиля, так же темы которые заинтересовали можно расстянуть и прочитать детали, так более удобно и читабельно чем в старом посте информация расстянута на всю страницу.  Минусы: переход на другие новости работает при клике вне стрелки так же эти стрелки разъезжаются при наведении рядом возле стрелки.    Что бы изменил: На подтемах изменил бы или убрал стрелку что бы развернуть новость и шрифт выбивается из основного стиля,  так же этот блок при нажатии открытие сделал бы более плавым. Внутри темы есть картинки при наведение на которые появляется скролл нижний, я бы изменил на возможность прокрутки колесиком и стрелки по бокам. Убрал бы просмотр картинок, так как размер картинки практически не изменяется.",analysisPage:"По моему мнение нужно убрать консоль логи и консоль варны.  В мобильной версии: блок с деталями не скрывается при нажатии вне блока.  При переходе на страницу системные требования отсутсвует кнопка возврата на страницу об игре.  В версии десктоп:   так же на странице про системные требования отсутсвует возможность возврата. В блоке про погоду видео запускается при наведении на этот блок, я бы запускал его по дефолту при запуске, это бы добавило странице больше интерактивности. Так же набор картинок со скролом добавил бы автоскрол, что бы картинки сами переключались."}}},B=n(89);const U=(0,B.Z)(C,[["render",_],["__scopeId","data-v-d2ad5b10"]]);var W=U;const y=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];var D={name:"HelloWorld",components:{answers:W},props:{},data(){return{isActiveBoard:!0,winner:"",winnerCombination:[],selectedBlocksUser:[],selectedBlocksComputer:[],userUsingCombination:y,computerUsingCombination:y,chooseKindGame:""}},methods:{restart(){this.winner="",this.selectedBlocksUser=[],this.selectedBlocksComputer=[],this.userUsingCombination=y,this.computerUsingCombination=y},selectBlock(e){if(this.selectedBlocksUser.includes(e)||this.selectedBlocksComputer.includes(e)||this.winner||!this.isActiveBoard)return!1;this.selectedBlocksUser.push(e),this.handelSelection(e)},checkSelected(e){return this.selectedBlocksUser.includes(e)?"x":this.selectedBlocksComputer.includes(e)?"o":""},handelSelection(e){let t,n;if(this.computerUsingCombination=this.computerUsingCombination.filter((t=>!t.includes(e))),this.userUsingCombination=y.filter((t=>t.includes(e))),this.selectedBlocksUser.length>=2&&(t=this.findMethodUser(),n=this.findMethodComputer()),!this.winner){let e=n||t||this.computerUsingCombination[0];this.isActiveBoard=!1,setTimeout((()=>{this.selectBlockComputer(e),this.checkWinner(n,"Computer"),this.isActiveBoard=!0}),500)}},findMethodUser(){let e=y.filter((e=>{let t=this.selectedBlocksUser.filter((t=>e.includes(t)));return 3===t.length?(this.checkWinner(e,"You"),e):2===t.length&&!this.selectedBlocksComputer.some((t=>e.includes(t)))}));return this.winner?e:e[0]},findMethodComputer(){return this.computerUsingCombination.find((e=>{let t=this.selectedBlocksComputer.filter((t=>e.includes(t)));return 2===t.length&&e}))},selectBlockComputer(e){this.isActiveBoard=!1;try{e.some((e=>{if(!this.selectedBlocksComputer.includes(e)&&!this.selectedBlocksUser.includes(e))return this.selectedBlocksComputer.push(e),!0}))}catch{this.winner="DRAW"}this.isActiveBoard=!0},checkWinner(e,t){if(!e)return!1;let n="Computer"===t?this.selectedBlocksComputer:this.selectedBlocksUser,s=n.filter((t=>e.includes(t)));3===s.length&&(this.winner=t)}}};const x=(0,B.Z)(D,[["render",f],["__scopeId","data-v-466a6c4a"]]);var O=x,T={name:"App",components:{HelloWorld:O}};const A=(0,B.Z)(T,[["render",r]]);var S=A,j=(n(9773),n(8957)),z=n(1850),H=n(8600);const M=(0,j.Rd)({components:z,directives:H});(0,s.ri)(S).use(M,{iconfont:"mdi"}).mount("#app")}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,s,i,r){if(!s){var o=1/0;for(u=0;u<e.length;u++){s=e[u][0],i=e[u][1],r=e[u][2];for(var l=!0,c=0;c<s.length;c++)(!1&r||o>=r)&&Object.keys(n.O).every((function(e){return n.O[e](s[c])}))?s.splice(c--,1):(l=!1,r<o&&(o=r));if(l){e.splice(u--,1);var a=i();void 0!==a&&(t=a)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[s,i,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var i,r,o=s[0],l=s[1],c=s[2],a=0;if(o.some((function(t){return 0!==e[t]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(c)var u=c(n)}for(t&&t(s);a<o.length;a++)r=o[a],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},s=self["webpackChunktic_tac_toe"]=self["webpackChunktic_tac_toe"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(2133)}));s=n.O(s)})();
//# sourceMappingURL=app.2d92572f.js.map