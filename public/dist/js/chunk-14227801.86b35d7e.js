(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14227801"],{"53aa":function(e,t,a){},"5a91":function(e,t,a){"use strict";var r=a("f31c"),n=a.n(r);n.a},"5bc8":function(e,t,a){"use strict";var r=a("53aa"),n=a.n(r);n.a},"79b7":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tabs"},[a("ul",{staticClass:"tabs-item"},e._l(e.tabsData,function(t,r){return a("li",{key:r,class:r===e.activeIndex?"active":"",style:e.withObj,on:{click:function(a){return e.changeType(r,t)}}},[e._v(e._s(t.name))])}),0)])},n=[],i={name:"Title",props:{tabsData:{type:Array,default:function(){return[{name:"考核主体分析",value:"考核主体"},{name:"大类分析",value:"大类"}]}},switchType:{type:String,default:""},defaultIndex:{type:String,default:"0"}},data:function(){return{activeIndex:0,activeTypeName:""}},computed:{withObj:function(){return{width:100/this.tabsData.length+"%"}}},methods:{changeType:function(e,t){this.activeIndex=e,this.activeTypeName=t.value,this.$emit("activeTypeName",{activeTypeName:this.activeTypeName,index:this.activeIndex,type:this.switchType})}},created:function(){var e=this;this.$eventBus.$on("resetTypeList",function(){e.tabsData.length>0&&(e.activeIndex=0,e.activeTypeName=e.tabsData[0].value)})}},s=i,o=(a("5bc8"),a("2877")),l=Object(o["a"])(s,r,n,!1,null,"1bc23b3a",null);t["a"]=l.exports},ddd0:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"gain-content"},[a("div",{staticClass:"header-content"},[a("pageTitle",{attrs:{title:e.pageName}})],1),a("div",{staticClass:"main-content"},[a("div",{staticClass:"block-content-table"},[a("min-title",{attrs:{nameVal:"毛利概览-直营",show:"3",type:"gain-zy-mlglfx"},on:{tabsType:e.tabsType}}),a("table-list",{attrs:{tableData:e.mlglTableData,type:"gain-mlgl"}})],1),a("div",{staticClass:"block-content-table"},[a("min-title",{attrs:{nameVal:e.mlfxTitle,show:"1",type:"gain-zy-mlfx",tabsData:e.blockSwitchList},on:{tabsType:e.tabsType}}),a("table-list",{attrs:{tableData:e.mlfxTableData,type:"gain-mlfx",needClick:!0},on:{changeTableOrder:e.changeTableOrder,changeTableRow:e.changeTableRow}})],1),a("div",{staticClass:"block-content-chart"},[a("min-title",{attrs:{nameVal:e.qsfxTitle,show:"3"}}),a("div",{staticClass:"block-chart"},[a("BarLineChart",{attrs:{"chart-data":e.qsfxLineData,option:e.qsfxLineOption(e.qsfxLineData)}})],1)],1),a("div",{staticClass:"block-content-chart"},[a("min-title",{attrs:{nameVal:e.ystbfxTitle,tabsData:e.blockSwitchList,show:"1",type:"gain-zy-ystbfx"},on:{tabsType:e.tabsType}}),a("div",{staticClass:"block-chart"},[a("BarLineChart",{attrs:{"chart-data":e.ystbfxLineData,option:e.ystbfxBarLineOption(e.ystbfxLineData)}})],1)],1),a("div",{staticClass:"block-content-table"},[a("min-title",{attrs:{nameVal:e.pmfxTitle,tabsData:e.blockSwitchList,type:"gain-zy-pmfx",show:"1"},on:{tabsType:e.tabsType}}),a("type-list",{attrs:{tabsData:e.pmfxTypeList},on:{activeTypeName:e.changePmfxType}}),a("table-list",{attrs:{tableData:e.pmfxTableData,type:"gain-pmfx"},on:{changeTableOrder:e.changeTableOrder}})],1)])])},n=[],i=(a("db97"),a("96cf"),a("3b8d")),s=(a("55dd"),a("ac4d"),a("8a81"),a("ac6a"),a("7f7f"),a("a170")),o=a("202d"),l=a("e0d8"),d=a("79b7"),c=a("385b"),b=a("2ef0"),p=a.n(b),f=a("4c3e"),m=a("2d87"),x=a("a474"),h={name:"",data:function(){return{pageName:"扣前毛利(万元)",mlfxTitle:"毛利分析-子公司",qsfxTitle:"趋势分析",ystbfxTitle:"因素同比分析",pmfxTitle:"排名分析",mlfxZgsTableDataInit:[],qsfxBarLineDataInit:[],ystbfxBarLineDataInit:[],pmfxTableDataInit:[],pmfxIndex:0,pmfxTypeIndex:0,mlfxZgsIndex:0,ystbfxIndex:0,pmfxTypeList:[{name:"店铺",value:"店铺"},{name:"大类",value:"大类"}],pmfxTableData:{tableHeader:[{name:"店铺",prop:"dp",needOrder:!1,order:"0",isPresent:!1,needArrow:!1},{name:"收入同比",prop:"srtb",needOrder:!0,order:"2",isPresent:!0,needArrow:!0,newLine:!0},{name:"成本同比",prop:"cbtb",needOrder:!0,order:"0",isPresent:!0,needArrow:!0,newLine:!0},{name:"毛利率",prop:"mll",needOrder:!0,order:"0",isPresent:!0,needArrow:!1,newLine:!0},{name:"同期",prop:"tq",needOrder:!0,order:"0",isPresent:!0,needArrow:!0},{name:"差异",prop:"cy",needOrder:!0,order:"0",isPresent:!0,needArrow:!0},{name:"占比",prop:"zb",needOrder:!0,order:"0",isPresent:!0,needArrow:!1}],tableContent:[]},blockSwitchList:[{name:"月",value:"M"},{name:"季",value:"J"},{name:"年累",value:"NL"}],ystbfxLineData:[],qsfxLineData:[],mlglTableData:{tableHeader:[{name:"时间",prop:"sj",needOrder:!1,order:"0",isPresent:!1,needArrow:!1},{name:"收入",prop:"sr",needOrder:!1,order:"1",isPresent:!1,needArrow:!1},{name:"毛利",prop:"ml",needOrder:!1,order:"0",isPresent:!1,needArrow:!1},{name:"毛利率",prop:"mll",needOrder:!1,order:"0",isPresent:!0,needArrow:!1},{name:"差异",prop:"cy",needOrder:!1,order:"0",isPresent:!0,needArrow:!0}],tableContent:[]},mlfxTableData:{tableHeader:[{name:"子公司",prop:"zgs",needOrder:!1,order:"0",isPresent:!1,needArrow:!1},{name:"收入",prop:"sr",needOrder:!0,order:"2",isPresent:!1,needArrow:!1},{name:"毛利",prop:"ml",needOrder:!0,order:"0",isPresent:!1,needArrow:!1},{name:"毛利率",prop:"mll",needOrder:!0,order:"0",isPresent:!0,needArrow:!1,newLine:!1},{name:"同期",prop:"tq",needOrder:!0,order:"0",isPresent:!0,needArrow:!0},{name:"差异",prop:"cy",needOrder:!0,order:"0",isPresent:!0,needArrow:!0},{name:"占比",prop:"zb",needOrder:!0,order:"0",isPresent:!0,needArrow:!1}],tableContent:[]}}},computed:{dateStr:function(){return this.$store.state.dateStr},dateStrM:function(){return this.$store.getters.dateStrM},dateStrJ:function(){return this.$store.getters.dateStrJ}},components:{pageTitle:s["a"],MinTitle:o["a"],TableList:l["a"],BarLineChart:c["a"],TypeList:d["a"]},created:function(){this.$store.commit("updateHeaderTitle","扣前毛利"),this.$store.commit("updateShowIcon",!0),""!==this.dateStr&&this.getAllData(),this.$store.commit("updateDateStr",this.$store.state.dateStrInit),this.$store.dispatch("updateUserOption",{USER_ACCOUNT:window.userAccount,EXAMINATION_SUBJECT:"直营",LEVEL:"总监",URL:"毛利"})},mounted:function(){this.$eventBus.$on("userSelected",this.getAllData)},beforeDestroy:function(){this.$eventBus.$off("userSelected",this.getAllData)},methods:{tabsType:function(e){e.activeValue,e.name;var t=e.type,a=e.index;"gain-zy-mlfx"===t&&(this.mlfxZgsIndex=a,this.dealMlfxZgsTableData()),"gain-zy-ystbfx"===t&&(this.ystbfxIndex=a,this.dealYstbfxBarLineData()),"gain-zy-pmfx"===t&&(this.pmfxIndex=a,this.dealPmfxTableData())},changePmfxType:function(e){var t=e.index;e.activeTypeName;this.pmfxTypeIndex=t,this.dealPmfxTableData()},ystbfxBarLineOption:function(e){var t=[],a=[],r=!0,n=!1,i=void 0;try{for(var s,o=this.ystbfxLineData[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){var l=s.value;t.push(l.label),a.push(l.value)}}catch(c){n=!0,i=c}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}var d={legend:{show:!0,textStyle:{fontFamily:"PingFangSC-Regular",color:"#71768C",fontSize:Object(f["a"])(24)}},xAxis:[{type:"category",name:"",interval:0,nameLocation:"start",nameTextStyle:{color:"#71768C",fontSize:Object(f["a"])(24),padding:[0,0,Object(f["a"])(-30),Object(f["a"])(-80)]},data:[],axisPointer:{type:"shadow"},axisLabel:{show:!0,interval:0,textStyle:{color:"#71768C"},fontSize:Object(f["a"])(24)},axisLine:{show:!0,lineStyle:{color:"#98FB98"}},axisTick:{show:!1}}],yAxis:[{type:"value",name:"",nameTextStyle:{color:"#71768C",fontSize:Object(f["a"])(24)},position:"right",axisLabel:{show:!1,fontSize:Object(f["a"])(24),textStyle:{color:"#71768C"},formatter:"{value}%"},axisLine:{show:!1,lineStyle:{color:"#ECEFF2"}},splitLine:{show:!1,lineStyle:{color:"#7d838b"}},axisTick:{show:!1}}],series:[{type:"bar",name:"收入同比",smooth:!0,barWidth:Object(f["a"])(80),symbol:"none",yAxisIndex:0,label:{show:!0,position:"top",fontFamily:"PingFangSC-Regular",color:"#71768C",fontSize:Object(f["a"])(24),formatter:function(e){return 0===Object(m["f"])(e.value)?"":e.value+"%"}},barGap:"-100%",itemStyle:{color:"#FFAB00"},data:[]},{type:"bar",name:"成本同比",smooth:!0,label:{show:!0,position:"top",fontFamily:"PingFangSC-Regular",color:"#71768C",fontSize:Object(f["a"])(24),formatter:function(e){return 0===Object(m["f"])(e.value)?"":e.value+"%"}},barWidth:Object(f["a"])(80),symbol:"none",yAxisIndex:0,itemStyle:{color:"#0000FF"},data:[]},{type:"bar",name:"毛利率差异",smooth:!0,label:{show:!0,position:"top",fontFamily:"PingFangSC-Regular",color:"#71768C",fontSize:Object(f["a"])(24),formatter:function(e){return 0===Object(m["f"])(e.value)?"":e.value+"%"}},barWidth:Object(f["a"])(80),symbol:"none",yAxisIndex:0,itemStyle:{color:"#87CEFA"},data:[]}]};return d.xAxis[0].data=t,d.series[0].data[0]={value:a[0],itemStyle:{barBorderRadius:parseFloat(a[0])>0?[Object(f["a"])(40),Object(f["a"])(40),0,0]:[0,0,Object(f["a"])(40),Object(f["a"])(40)]}},d.series[0].data[1]={value:a[1],itemStyle:{barBorderRadius:parseFloat(a[1])>0?[Object(f["a"])(40),Object(f["a"])(40),0,0]:[0,0,Object(f["a"])(40),Object(f["a"])(40)],color:"#0000FF"}},d.series[0].data[2]={value:a[2],itemStyle:{barBorderRadius:parseFloat(a[2])>0?[Object(f["a"])(40),Object(f["a"])(40),0,0]:[0,0,Object(f["a"])(40),Object(f["a"])(40)],color:"#87CEFA"}},d},qsfxLineOption:function(e){var t={legend:{show:!0,textStyle:{fontFamily:"PingFangSC-Regular",color:"#71768C",fontSize:Object(f["a"])(24)}},xAxis:[{type:"category",name:"",interval:0,nameLocation:"start",nameTextStyle:{color:"#71768C",fontSize:Object(f["a"])(24),padding:[0,0,Object(f["a"])(-30),Object(f["a"])(-80)]},data:[],axisPointer:{type:"shadow"},axisLabel:{show:!0,interval:0,textStyle:{color:"#71768C"},fontSize:Object(f["a"])(24)},axisLine:{show:!1},axisTick:{show:!1}}],yAxis:[{type:"value",name:"",nameTextStyle:{color:"#71768C",fontSize:Object(f["a"])(24)},axisLabel:{show:!0,fontSize:Object(f["a"])(24),textStyle:{color:"#71768C"},formatter:"{value}%"},axisLine:{show:!1,lineStyle:{color:"#ECEFF2"}},splitLine:{show:!1,lineStyle:{color:"#7d838b"}},axisTick:{show:!1}},{type:"value",name:"",nameTextStyle:{color:"#71768C",fontSize:Object(f["a"])(24)},show:!0,axisLabel:{show:!0,fontSize:Object(f["a"])(24),textStyle:{color:"#71768C"},formatter:"{value}%"},axisLine:{show:!1,lineStyle:{color:"#ECEFF2"}},splitLine:{show:!1,lineStyle:{color:"#213A6B"}},axisTick:{show:!1}}],series:[{type:"bar",name:"毛利率差异",barWidth:Object(f["a"])(20),itemStyle:{color:"#34C9F8 "},data:[]},{type:"line",name:"毛利率",symbol:"none",smooth:!0,yAxisIndex:1,itemStyle:{color:"#0000FF"},lineStyle:{color:"#0000FF",type:"solid",width:Object(f["a"])(4)},data:[]},{type:"line",name:"同期毛利率",yAxisIndex:1,smooth:!0,symbol:"none",itemStyle:{color:"#FFD700"},lineStyle:{color:"#FFD700",type:"solid",width:Object(f["a"])(4)},data:[]}]},a=[],r=[],n=[],i=[],s=!0,o=!1,l=void 0;try{for(var d,c=this.qsfxLineData[Symbol.iterator]();!(s=(d=c.next()).done);s=!0){var b=d.value;a.push(b.label),r.push(b.mllcy),n.push(b.mll),i.push(b.tqmll)}}catch(m){o=!0,l=m}finally{try{s||null==c.return||c.return()}finally{if(o)throw l}}t.xAxis[0].data=a;for(var p=0;p<r.length;p++)t.series[0].data[p]={value:r[p],itemStyle:{color:parseFloat(r[p])>0?"#34C9F8":"#FF0000"}};return t.series[1].data=n,t.series[2].data=i,t},changeTableRow:function(e){e.row;var t=e.name;e.type;this.qsfxTitle="趋势分析-"+t,this.getQsfxBarLineData(t),this.ystbfxTitle="因素同比分析-"+t,this.getYstbfxBarLineData(t),this.pmfxTitle="排名分析-"+t,this.getPmfxTableData(t)},changeTableOrder:function(e){var t=e.header,a=e.type,r={tableHeader:[],tableContent:[]};"gain-mlfx"===a&&(r=p.a.cloneDeep(this.mlfxTableData)),"gain-pmfx"===a&&(r=p.a.cloneDeep(this.pmfxTableData));var n=[],i=[],s=!0,o=!1,l=void 0;try{for(var d,c=r.tableHeader[Symbol.iterator]();!(s=(d=c.next()).done);s=!0){var b=d.value;"0"===t.order?b.needOrder&&t.prop===b.prop?b.order="1":b.needOrder&&t.prop!==b.prop&&(b.order="0"):"1"===t.order?b.needOrder&&t.prop===b.prop?b.order="2":b.needOrder&&t.prop!==b.prop&&(b.order="0"):"2"===t.order&&(b.needOrder&&t.prop===b.prop?b.order="1":b.needOrder&&t.prop!==b.prop&&(b.order="0")),n.push(b)}}catch(f){o=!0,l=f}finally{try{s||null==c.return||c.return()}finally{if(o)throw l}}"0"===t.order?i=r.tableContent.sort(Object(m["a"])(t.prop,!0)):"1"===t.order?i=r.tableContent.sort(Object(m["a"])(t.prop,!1)):"2"===t.order&&(i=r.tableContent.sort(Object(m["a"])(t.prop,!0))),"gain-mlfx"===a&&(this.mlfxTableData.tableHeader=n,this.mlfxTableData.tableContent=i),"gain-pmfx"===a&&(this.pmfxTableData.tableHeader=n,this.pmfxTableData.tableContent=i)},getAllData:function(){this.getMlglTableData(),this.getMlfxZgsTableData()},getMlglTableData:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,a,r,n,i,s,o,l,d,c,b,p;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x["a"].getDataFromInterface(x["a"].gain.getMlglTableData,{dateStrM:this.dateStrM});case 2:if(t=e.sent,a=t.__statusCode,r=t.data,!Object.is(a,"1")){e.next=28;break}for(n=JSON.parse(r),i=[],s=!0,o=!1,l=void 0,e.prev=11,d=n.res[Symbol.iterator]();!(s=(c=d.next()).done);s=!0)b=c.value,p={},p.sj=b.period_wid,p.sr=Object(m["c"])(Object(m["f"])(b.income_amt).toFixed(0),0),p.ml=Object(m["c"])(Object(m["f"])(b.margin_amt).toFixed(0),0),p.mll=(100*Object(m["f"])(b.margin_rate)).toFixed(1),p.cy=(100*Object(m["f"])(b.margin_yoy)).toFixed(1),i.push(p);e.next=19;break;case 15:e.prev=15,e.t0=e["catch"](11),o=!0,l=e.t0;case 19:e.prev=19,e.prev=20,s||null==d.return||d.return();case 22:if(e.prev=22,!o){e.next=25;break}throw l;case 25:return e.finish(22);case 26:return e.finish(19);case 27:this.mlglTableData.tableContent=i;case 28:case"end":return e.stop()}},e,this,[[11,15,19,27],[20,,22,26]])}));function t(){return e.apply(this,arguments)}return t}(),getMlfxZgsTableData:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,a,r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x["a"].getDataFromInterface(x["a"].gain.getMlfxZgsTableData,{dateStrM:this.dateStrM});case 2:t=e.sent,a=t.__statusCode,r=t.data,Object.is(a,"1")&&(n=JSON.parse(r),this.mlfxZgsTableDataInit=n,this.dealMlfxZgsTableData());case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),dealMlfxZgsTableData:function(){var e=[],t=[];0===this.mlfxZgsIndex?t=this.mlfxZgsTableDataInit.resM||[]:1===this.mlfxZgsIndex?t=this.mlfxZgsTableDataInit.resJ||[]:2===this.mlfxZgsIndex&&(t=this.mlfxZgsTableDataInit.resNl||[]);var a=!0,r=!1,n=void 0;try{for(var i,s=t[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var o=i.value,l={};l.zgs=o.distribution_name,l.sr=Object(m["c"])(Object(m["f"])(o.income_amt).toFixed(0),0),l.ml=Object(m["c"])(Object(m["f"])(o.margin_amt).toFixed(0),0),l.mll=Object(m["g"])(o.margin_rate),l.tq=Object(m["g"])(o.margin_yoy),l.cy=Object(m["g"])(o.deviation),l.zb=Object(m["g"])(o.rotio_rate),e.push(l)}}catch(d){r=!0,n=d}finally{try{a||null==s.return||s.return()}finally{if(r)throw n}}this.mlfxTableData={tableHeader:[{name:"子公司",prop:"zgs",needOrder:!1,order:"0",isPresent:!1,needArrow:!1},{name:"收入",prop:"sr",needOrder:!0,order:"2",isPresent:!1,needArrow:!1},{name:"毛利",prop:"ml",needOrder:!0,order:"0",isPresent:!1,needArrow:!1},{name:"毛利率",prop:"mll",needOrder:!0,order:"0",isPresent:!0,needArrow:!1,newLine:!1},{name:"同期",prop:"tq",needOrder:!0,order:"0",isPresent:!0,needArrow:!0},{name:"差异",prop:"cy",needOrder:!0,order:"0",isPresent:!0,needArrow:!0},{name:"占比",prop:"zb",needOrder:!0,order:"0",isPresent:!0,needArrow:!1}],tableContent:e.sort(Object(m["a"])("sr",!1))},this.mlfxTableData.tableContent.length>0?(this.qsfxTitle="趋势分析-"+this.mlfxTableData.tableContent[0].zgs,this.ystbfxTitle="因素同比分析-"+this.mlfxTableData.tableContent[0].zgs,this.pmfxTitle="排名分析-"+this.mlfxTableData.tableContent[0].zgs,this.$eventBus.$emit("resetSelectedRow",{type:"gain-mlfx",name:this.mlfxTableData.tableContent[0].zgs}),this.getQsfxBarLineData(this.mlfxTableData.tableContent[0].zgs),this.getYstbfxBarLineData(this.mlfxTableData.tableContent[0].zgs),this.getPmfxTableData(this.mlfxTableData.tableContent[0].zgs)):(this.qsfxTitle="趋势分析",this.ystbfxTitle="因素同比分析",this.pmfxTitle="排名分析",this.qsfxLineData=[],this.ystbfxLineData=[],this.pmfxTableData.tableContent=[])},getQsfxBarLineData:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var a,r,n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x["a"].getDataFromInterface(x["a"].gain.getQsfxZgsBarLineData,{subName:t,dateStrM:this.dateStrM});case 2:a=e.sent,r=a.__statusCode,n=a.data,Object.is(r,"1")&&(i=JSON.parse(n),this.qsfxBarLineDataInit=i.res,this.dealQsfxBarLineData());case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),dealQsfxBarLineData:function(){var e=[],t=[];t=this.qsfxBarLineDataInit||[];var a=!0,r=!1,n=void 0;try{for(var i,s=t[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var o=i.value,l={};l.label=o.period_wid,l.mll=Object(m["g"])(o.margin_rate),l.tqmll=Object(m["g"])(o.margin_yoy),l.mllcy=Object(m["g"])(o.deviation),e.push(l)}}catch(d){r=!0,n=d}finally{try{a||null==s.return||s.return()}finally{if(r)throw n}}this.qsfxLineData=e},getYstbfxBarLineData:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var a,r,n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x["a"].getDataFromInterface(x["a"].gain.getYstbfxBarLineData,{subName:t,dateStrM:this.dateStrM});case 2:a=e.sent,r=a.__statusCode,n=a.data,Object.is(r,"1")&&(i=JSON.parse(n),this.ystbfxBarLineDataInit=i,this.dealYstbfxBarLineData());case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),dealYstbfxBarLineData:function(){var e=[],t=[];if(0===this.ystbfxIndex?t=this.ystbfxBarLineDataInit.resM||[]:1===this.ystbfxIndex?t=this.ystbfxBarLineDataInit.resJ||[]:2===this.ystbfxIndex&&(t=this.ystbfxBarLineDataInit.resNl||[]),t.length>0){var a=t[0],r={},n={},i={};r.label="收入",r.value=(100*Object(m["f"])(a.income_yoy)).toFixed(1),n.label="成本",n.value=(100*Object(m["f"])(a.cost_yoy)).toFixed(1),i.label="毛利率差异",i.value=(100*Object(m["f"])(a.deviation)).toFixed(1),e[0]=r,e[1]=n,e[2]=i,this.ystbfxLineData=e}else this.ystbfxLineData=[]},getPmfxTableData:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var a,r,n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x["a"].getDataFromInterface(x["a"].gain.getPmfxTableData,{subName:t,dateStrM:this.dateStrM});case 2:a=e.sent,r=a.__statusCode,n=a.data,Object.is(r,"1")&&(i=JSON.parse(n),this.pmfxTableDataInit=i,this.dealPmfxTableData());case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),dealPmfxTableData:function(){var e=[],t=[];0===this.pmfxTypeIndex?0===this.pmfxIndex?t=this.pmfxTableDataInit.resshopM||[]:1===this.pmfxIndex?t=this.pmfxTableDataInit.resshopJ||[]:2===this.pmfxIndex&&(t=this.pmfxTableDataInit.resshopNl||[]):1===this.pmfxTypeIndex&&(0===this.pmfxIndex?t=this.pmfxTableDataInit.resstM||[]:1===this.pmfxIndex?t=this.pmfxTableDataInit.resstJ||[]:2===this.pmfxIndex&&(t=this.pmfxTableDataInit.resstNl||[]));var a=!0,r=!1,n=void 0;try{for(var i,s=t[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var o=i.value,l={};l.dp=o.type_name,l.srtb=(100*Object(m["f"])(o.income_yoy)).toFixed(1),l.cbtb=(100*Object(m["f"])(o.cost_yoy)).toFixed(1),l.mll=(100*Object(m["f"])(o.margin_rate)).toFixed(1),l.tq=(100*Object(m["f"])(o.margin_yoy)).toFixed(1),l.cy=(100*Object(m["f"])(o.deviation)).toFixed(1),l.zb=(100*Object(m["f"])(o.rotio_rate)).toFixed(1),e.push(l)}}catch(d){r=!0,n=d}finally{try{a||null==s.return||s.return()}finally{if(r)throw n}}this.pmfxTableData={tableHeader:[{name:0===this.pmfxTypeIndex?"店铺":"大类",prop:"dp",needOrder:!1,order:"0",isPresent:!1,needArrow:!1},{name:"收入同比",prop:"srtb",needOrder:!0,order:"2",isPresent:!0,needArrow:!0,newLine:!0},{name:"成本同比",prop:"cbtb",needOrder:!0,order:"0",isPresent:!0,needArrow:!0,newLine:!0},{name:"毛利率",prop:"mll",needOrder:!0,order:"0",isPresent:!0,needArrow:!1,newLine:!0},{name:"同期",prop:"tq",needOrder:!0,order:"0",isPresent:!0,needArrow:!0},{name:"差异",prop:"cy",needOrder:!0,order:"0",isPresent:!0,needArrow:!0},{name:"占比",prop:"zb",needOrder:!0,order:"0",isPresent:!0,needArrow:!1}],tableContent:e.sort(Object(m["a"])("srtb",!1))}}}},u=h,y=(a("5a91"),a("2877")),g=Object(y["a"])(u,r,n,!1,null,"49d731f0",null);t["default"]=g.exports},f31c:function(e,t,a){}}]);
//# sourceMappingURL=chunk-14227801.86b35d7e.js.map