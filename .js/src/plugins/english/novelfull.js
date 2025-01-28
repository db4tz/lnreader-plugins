var e=this&&this.__awaiter||function(e,t,a,l){return new(a||(a=Promise))((function(n,r){function o(e){try{u(l.next(e))}catch(e){r(e)}}function i(e){try{u(l.throw(e))}catch(e){r(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,i)}u((l=l.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var a,l,n,r={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]},o=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return o.next=i(0),o.throw=i(1),o.return=i(2),"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(u){return function(i){if(a)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(r=0)),r;)try{if(a=1,l&&(n=2&i[0]?l.return:i[0]?l.throw||((n=l.return)&&n.call(l),0):l.next)&&!(n=n.call(l,i[1])).done)return n;switch(l=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,l=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(!(n=r.trys,(n=n.length>0&&n[n.length-1])||6!==i[0]&&2!==i[0])){r=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){r.label=i[1];break}if(6===i[0]&&r.label<n[1]){r.label=n[1],n=i;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(i);break}n[2]&&r.ops.pop(),r.trys.pop();continue}i=t.call(e,r)}catch(e){i=[6,e],l=0}finally{a=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(exports,"__esModule",{value:!0});var a=require("cheerio"),l=require("@libs/fetch"),n=require("@libs/filterInputs"),r=function(){function r(){this.id="novelfull",this.name="NovelFull",this.version="1.0.2",this.icon="src/en/novelfull/icon.png",this.site="https://novelfull.com/",this.filters={sort:{value:"most-popular",label:"Sort by",options:[{label:"Latest Release",value:"latest-release-novel"},{label:"Hot Novel",value:"hot-novel"},{label:"Completed Novel",value:"completed-novel"},{label:"Most Popular",value:"most-popular"}],type:n.FilterTypes.Picker},genre:{value:"",label:"Genres",options:[{label:"None",value:""},{label:"Shounen",value:"Shounen"},{label:"Harem",value:"Harem"},{label:"Comedy",value:"Comedy"},{label:"Martial Arts",value:"Martial+Arts"},{label:"School Life",value:"School+Life"},{label:"Mystery",value:"Mystery"},{label:"Shoujo",value:"Shoujo"},{label:"Romance",value:"Romance"},{label:"Sci-fi",value:"Sci-fi"},{label:"Gender Bender",value:"Gender+Bender"},{label:"Mature",value:"Mature"},{label:"Fantasy",value:"Fantasy"},{label:"Horror",value:"Horror"},{label:"Drama",value:"Drama"},{label:"Tragedy",value:"Tragedy"},{label:"Supernatural",value:"Supernatural"},{label:"Ecchi",value:"Ecchi"},{label:"Xuanhuan",value:"Xuanhuan"},{label:"Adventure",value:"Adventure"},{label:"Action",value:"Action"},{label:"Psychological",value:"Psychological"},{label:"Xianxia",value:"Xianxia"},{label:"Wuxia",value:"Wuxia"},{label:"Historical",value:"Historical"},{label:"Slice of Life",value:"Slice+of+Life"},{label:"Seinen",value:"Seinen"},{label:"Lolicon",value:"Lolicon"},{label:"Adult",value:"Adult"},{label:"Josei",value:"Josei"},{label:"Sports",value:"Sports"},{label:"Smut",value:"Smut"},{label:"Mecha",value:"Mecha"},{label:"Yaoi",value:"Yaoi"},{label:"Shounen Ai",value:"Shounen+Ai"},{label:"History",value:"History"},{label:"Martial",value:"Martial"}],type:n.FilterTypes.Picker}}}return r.prototype.parseNovels=function(e){var t=this,a=[];return e(".col-truyen-main .list-truyen .row").each((function(l,n){var r,o,i=e(n).find("h3.truyen-title > a").text(),u=null!==(r=e(n).find("img").attr("src"))&&void 0!==r?r:e(n).find("img").attr("data-cfsrc");u=u?t.site+u.slice(1):void 0;var s=null===(o=e(n).find("h3.truyen-title > a").attr("href"))||void 0===o?void 0:o.slice(1);if(s){var c={name:i,cover:u,path:s};a.push(c)}})),a},r.prototype.popularNovels=function(n,r){return e(this,arguments,void 0,(function(e,n){var r,o,i,u=n.filters;return t(this,(function(t){switch(t.label){case 0:return r=this.site,""!==u.genre.value?r+="genre/".concat(u.genre.value):r+=u.sort.value,r+="?page=".concat(e),[4,(0,l.fetchApi)(r).then((function(e){return e.text()}))];case 1:return o=t.sent(),i=(0,a.load)(o),[2,this.parseNovels(i)]}}))}))},r.prototype.parseNovel=function(n){return e(this,void 0,void 0,(function(){var r,o,i,u,s,c,v,h,p,f,b,d=this;return t(this,(function(y){switch(y.label){case 0:return[4,(0,l.fetchApi)(this.site+n)];case 1:return[4,y.sent().text()];case 2:return r=y.sent(),o=(0,a.load)(r),i=(i=null!==(b=null!==(f=null!==(p=o("div.book > img").attr("src"))&&void 0!==p?p:o("div.book > img").attr("data-cfsrc"))&&void 0!==f?f:o("div.book > noscript > img").attr("src"))&&void 0!==b?b:o('meta[name="image"]').attr("content"))?this.site+i.slice(1):void 0,(u={path:n,name:o("div.book > img").attr("alt")||"Untitled",cover:i,summary:o("div.desc-text").text().trim(),status:o('h3:contains("Status")').next().text(),chapters:[]}).author=o('h3:contains("Author")').parent().contents().text().replace("Author:",""),u.genres=o('h3:contains("Genre")').siblings().map((function(e,t){return o(t).text()})).toArray().join(","),s=o("#rating").attr("data-novel-id"),c=[],v=function(n){return e(d,void 0,void 0,(function(){var e,r;return t(this,(function(t){switch(t.label){case 0:return e=this.site+"ajax/chapter-option?novelId="+n,[4,(0,l.fetchApi)(e)];case 1:return[4,t.sent().text()];case 2:return r=t.sent(),(o=(0,a.load)(r))("select > option").each((function(){var e,t=o(this).text(),a=null===(e=o(this).attr("value"))||void 0===e?void 0:e.slice(1);a&&c.push({name:t,path:a})})),[2,c]}}))}))},h=u,[4,v(s)];case 3:return h.chapters=y.sent(),[2,u]}}))}))},r.prototype.parseChapter=function(n){return e(this,void 0,void 0,(function(){var e,r;return t(this,(function(t){switch(t.label){case 0:return[4,(0,l.fetchApi)(this.site+n)];case 1:return[4,t.sent().text()];case 2:return e=t.sent(),(r=(0,a.load)(e))("#chapter-content div.ads").remove(),[2,(r("#chapter-content").html()||"").replace(/If you find any errors \(\s*Ads popup, ads redirect, broken links, non-standard content, etc\.\.\s*\), Please let us know \S* report chapter \S* so we can fix it as soon as possible\./,"")]}}))}))},r.prototype.searchNovels=function(n,r){return e(this,void 0,void 0,(function(){var e,o,i;return t(this,(function(t){switch(t.label){case 0:return e="".concat(this.site,"search?keyword=").concat(n,"&page=").concat(r),[4,(0,l.fetchApi)(e)];case 1:return[4,t.sent().text()];case 2:return o=t.sent(),i=(0,a.load)(o),[2,this.parseNovels(i)]}}))}))},r}();exports.default=new r;