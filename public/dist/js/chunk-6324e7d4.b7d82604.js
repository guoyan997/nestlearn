(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6324e7d4"],{"53aa":function(e,t,a){},"5bc8":function(e,t,a){"use strict";var r=a("53aa"),n=a.n(r);n.a},7219:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"gain-page-content"},[a("div",{staticClass:"header-content"},[a("page-title",{attrs:{title:e.pageName}})],1),a("div",{staticClass:"main-content"},[a("div",{staticClass:"block-content-table"},[a("min-title",{attrs:{nameVal:"毛利概览-店铺",show:"3"}}),a("table-list",{attrs:{tableData:e.mlglTableData}})],1),a("div",{staticClass:"block-content-table"},[a("min-title",{attrs:{nameVal:"毛利分析-店铺",tabsData:e.blockSwitchList,show:"1",type:"gain-mlfx"},on:{tabsType:e.tabsType}}),a("table-list",{attrs:{tableData:e.mlfxTableData,type:"gain-mlfx",needClick:!1,defaultSelected:!0},on:{changeTableOrder:e.changeTableOrder,changeTableRow:e.changeTableRow}})],1),a("div",{staticClass:"block-content-chart"},[a("min-title",{attrs:{nameVal:e.qsfxTitle,show:"3"}}),a("div",{staticClass:"block-chart"},[a("BarLineChart",{attrs:{"chart-data":e.qsfxdpLineData,option:e.qsfxdpLineOption(e.qsfxdpLineData)}})],1)],1),a("div",{staticClass:"block-content-chart"},[a("min-title",{attrs:{nameVal:e.ystbfxTitle,tabsData:e.blockSwitchList,show:"1",type:"gain-ystbfx"},on:{tabsType:e.tabsType}}),a("div",{staticClass:"block-chart"},[a("BarLineChart",{attrs:{"chart-data":e.ystbfxLineData,option:e.ystbfxLineOption(e.ystbfxLineData)}})],1)],1),a("div",{staticClass:"block-content-chart"},[a("min-title",{attrs:{nameVal:e.ysqsfxTitle,tabsData:e.blockSwitchList_Ysfx,show:"1",type:"gain-ysqsfx"},on:{tabsType:e.tabsType}}),a("div",{staticClass:"block-chart"},[a("BarLineChart",{attrs:{"chart-data":e.ysqsfxdpLineData,option:e.ysqsfxdpLineOption(e.ysqsfxdpLineData)}})],1)],1),a("div",{staticClass:"block-content-table"},[a("min-title",{attrs:{nameVal:e.jgfxTitle,show:"3"}}),a("type-list",{attrs:{tabsData:e.jgfxTypeList,switchType:"gain-jgfx-type"},on:{activeTypeName:e.changeJgfxType}}),a("div",{staticClass:"switch-btn"},[a("div",{staticClass:"switch-btn-core"},[a("tabs",{attrs:{tabsData:e.blockSwitchList,switchType:"gain-jgfx-up"},on:{tabsType:e.tabsType}})],1)]),a("table-list",{attrs:{tableData:e.jgfxdpTableData,type:"gain-jgfx"},on:{changeTableOrder:e.changeTableOrder}})],1)])])},n=[],i=(a("db97"),a("96cf"),a("3b8d")),s=(a("55dd"),a("7f7f"),a("ac4d"),a("8a81"),a("ac6a"),a("a170")),o=a("202d"),l=a("385b"),d=a("e0d8"),c=a("79b7"),p=a("0e1c"),f=a("4c3e"),b=a("2ef0"),h=a.n(b),x=a("2d87"),y=a("a474"),u={name:"",data:function(){return{pageName:"扣前毛利(万元)",mlglTableData:{tableHeader:[{name:"时间",prop:"sj",needOrder:!1,order:"0",isPresent:!1,needArrow:!1},{name:"收入",prop:"sr",needOrder:!1,order:"1",isPresent:!1,needArrow:!1},{name:"毛利",prop:"ml",needOrder:!1,order:"0",isPresent:!1,needArrow:!1},{name:"毛利率",prop:"mll",needOrder:!1,order:"0",isPresent:!0,needArrow:!1},{name:"差异",prop:"tb",needOrder:!1,order:"0",isPresent:!0,needArrow:!0}],tableContent:[]},blockSwitchList:[{name:"月",value:"M"},{name:"季",value:"J"},{name:"年累",value:"NL"}],blockSwitchList_Ysfx:[{name:"收入",value:"收入"},{name:"成本",value:"成本"}],mlfxTableData:{tableHeader:[{name:"店铺",prop:"dp",needOrder:!1,order:"0",isPresent:!1,needArrow:!1},{name:"毛利率",prop:"mll",needOrder:!0,order:"2",isPresent:!0,needArrow:!1},{name:"毛利率排名",prop:"mllpm",needOrder:!0,order:"0",isPresent:!1,needArrow:!1},{name:"毛利率差异",prop:"mllcy",needOrder:!0,order:"0",isPresent:!0,needArrow:!0},{name:"差异排名",prop:"cypm",needOrder:!0,order:"0",isPresent:!1,needArrow:!1}],tableContent:[]},qsfxdpLineData:[],ystbfxLineData:[],ysqsfxdpLineData:[],qsfxTitle:"趋势分析",ystbfxTitle:"因素同比分析",ysqsfxTitle:"因素趋势分析",jgfxTitle:"结构分析",jgfxIndex:0,mlfxDpIndex:0,ystbfxDpIndex:0,ysqsfxDpTypeIndex:0,jgfxdpTypeIndex:0,jgfxdpIndex:0,mlfxDpTableDataInit:[],qsfxDpLineDataInit:[],ystbfxDpBarLineDataInit:[],ysqsfxDpLineDataInit:[],jgfxDpTableDataInit:[],zgsName:"南京子公司",jgfxTypeList:[{name:"大类",value:"大类"},{name:"SPU",value:"SPU"}],jgfxdpTableData:{tableHeader:[{name:"大类",prop:"dl",needOrder:!1,order:"0",isPresent:!1,needArrow:!1},{name:"收入同比",prop:"srtb",needOrder:!0,order:"2",isPresent:!0,needArrow:!1,newLine:!0},{name:"成本同比",prop:"cbtb",needOrder:!0,order:"0",isPresent:!0,needArrow:!0,newLine:!0},{name:"毛利率",prop:"mll",needOrder:!0,order:"0",isPresent:!0,needArrow:!1,newLine:!0},{name:"同期",prop:"tq",needOrder:!0,order:"0",isPresent:!0,needArrow:!1},{name:"差异",prop:"cy",needOrder:!0,order:"0",isPresent:!0,needArrow:!0},{name:"占比",prop:"zb",needOrder:!0,order:"0",isPresent:!0,needArrow:!1}],tableContent:[]}}},computed:{dateStr:function(){return this.$store.state.dateStr},dateStrM:function(){return this.$store.getters.dateStrM},dateStrJ:function(){return this.$store.getters.dateStrJ},userIdentityInit:function(){return this.$store.state.userIdentityInit},selectedDwName:function(){var e=this.$store.state.authList,t="";if("2"===this.userIdentityInit){var a=!0,r=!1,n=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var o=i.value;if(o.shop===this.selectedDpName){t=o.role;break}}}catch(h){r=!0,n=h}finally{try{a||null==s.return||s.return()}finally{if(r)throw n}}}else if("3"===this.userIdentityInit){var l=!0,d=!1,c=void 0;try{for(var p,f=e[Symbol.iterator]();!(l=(p=f.next()).done);l=!0){var b=p.value;if(b.role===this.selectedDpName){t=b.zgs;break}}}catch(h){d=!0,c=h}finally{try{l||null==f.return||f.return()}finally{if(d)throw c}}}return t},selectedDpName:function(){return this.$store.state.selectedDpName}},methods:{tabsType:function(e){e.activeValue,e.name;var t=e.type,a=e.index;"gain-mlfx"===t?(this.mlfxDpIndex=a,this.dealDpMlfxTableData()):"gain-ystbfx"===t?(this.ystbfxDpIndex=a,this.dealDpYstbfxBarLineData()):"gain-ysqsfx"===t?(this.ysqsfxDpTypeIndex=a,this.dealDpYsqsfxBarLineData()):"gain-jgfx-up"===t&&(this.jgfxdpIndex=a,this.dealJgfxDpTableData())},changeTableOrder:function(e){var t=e.header,a=e.type,r={tableHeader:[],tableContent:[]};"gain-mlfx"===a?r=h.a.cloneDeep(this.mlfxTableData):"gain-jgfx"===a&&(r=h.a.cloneDeep(this.jgfxdpTableData));var n=[],i=[],s=!0,o=!1,l=void 0;try{for(var d,c=r.tableHeader[Symbol.iterator]();!(s=(d=c.next()).done);s=!0){var p=d.value;"0"===t.order?p.needOrder&&t.prop===p.prop?p.order="1":p.needOrder&&t.prop!==p.prop&&(p.order="0"):"1"===t.order?p.needOrder&&t.prop===p.prop?p.order="2":p.needOrder&&t.prop!==p.prop&&(p.order="0"):"2"===t.order&&(p.needOrder&&t.prop===p.prop?p.order="1":p.needOrder&&t.prop!==p.prop&&(p.order="0")),n.push(p)}}catch(f){o=!0,l=f}finally{try{s||null==c.return||c.return()}finally{if(o)throw l}}"0"===t.order?i=r.tableContent.sort(Object(x["a"])(t.prop,!0)):"1"===t.order?i=r.tableContent.sort(Object(x["a"])(t.prop,!1)):"2"===t.order&&(i=r.tableContent.sort(Object(x["a"])(t.prop,!0))),"gain-mlfx"===a?(this.mlfxTableData.tableHeader=n,this.mlfxTableData.tableContent=i):"gain-jgfx"===a&&(this.jgfxdpTableData.tableHeader=n,this.jgfxdpTableData.tableContent=i)},changeTableRow:function(e){e.row;var t=e.name;e.type;this.qsfxTitle="趋势分析-"+t,this.ystbfxTitle="因素同比分析-"+t,this.ysqsfxTitle="因素趋势分析-"+t,this.getDpYsqsfxBarLineData(t),this.jgfxTitle="结构分析-"+t},changeJgfxType:function(e){e.activeValue,e.name;var t=e.type,a=e.index;"gain-jgfx-type"===t&&(this.jgfxdpTypeIndex=a,this.dealJgfxDpTableData())},changeJgfxSubType:function(e){e.btn,e.index},qsfxdpLineOption:function(e){var t={legend:{show:!0,textStyle:{fontFamily:"PingFangSC-Regular",color:"#71768C",fontSize:Object(f["a"])(24)}},xAxis:[{type:"category",name:"",interval:0,nameLocation:"start",nameTextStyle:{color:"#71768C",fontSize:Object(f["a"])(24),padding:[0,0,Object(f["a"])(-30),Object(f["a"])(-80)]},data:[],axisPointer:{type:"shadow"},axisLabel:{show:!0,interval:0,textStyle:{color:"#71768C"},fontSize:Object(f["a"])(24)},axisLine:{show:!1},axisTick:{show:!1}}],yAxis:[{type:"value",name:"",nameTextStyle:{color:"#71768C",fontSize:Object(f["a"])(24)},axisLabel:{show:!0,fontSize:Object(f["a"])(24),textStyle:{color:"#71768C"},formatter:"{value}%"},axisLine:{show:!1,lineStyle:{color:"#ECEFF2"}},splitLine:{show:!1,lineStyle:{color:"#7d838b"}},axisTick:{show:!1}},{type:"value",name:"",nameTextStyle:{color:"#71768C",fontSize:Object(f["a"])(24)},show:!0,axisLabel:{show:!0,fontSize:Object(f["a"])(24),textStyle:{color:"#71768C"},formatter:"{value}%"},axisLine:{show:!1,lineStyle:{color:"#ECEFF2"}},splitLine:{show:!1,lineStyle:{color:"#213A6B"}},axisTick:{show:!1}}],series:[{type:"bar",name:"毛利率差异",barWidth:Object(f["a"])(20),itemStyle:{color:"#34C9F8 "},data:[]},{type:"line",name:"毛利率",symbol:"none",smooth:!0,yAxisIndex:1,itemStyle:{color:"#0000FF"},lineStyle:{color:"#0000FF",type:"solid",width:Object(f["a"])(4)},data:[]},{type:"line",name:"同期毛利率",yAxisIndex:1,smooth:!0,symbol:"none",itemStyle:{color:"#FFD700"},lineStyle:{color:"#FFD700",type:"solid",width:Object(f["a"])(4)},data:[]}]},a=[],r=[],n=[],i=[],s=!0,o=!1,l=void 0;try{for(var d,c=this.qsfxdpLineData[Symbol.iterator]();!(s=(d=c.next()).done);s=!0){var p=d.value;a.push(p.label),r.push(p.mllcy),n.push(p.mll),i.push(p.tqmll)}}catch(h){o=!0,l=h}finally{try{s||null==c.return||c.return()}finally{if(o)throw l}}t.xAxis[0].data=a;for(var b=0;b<r.length;b++)t.series[0].data[b]={value:r[b],itemStyle:{color:parseFloat(r[b])>0?"#34C9F8":"#FF0000"}};return t.series[1].data=n,t.series[2].data=i,t},ystbfxLineOption:function(e){var t=[],a=[],r=!0,n=!1,i=void 0;try{for(var s,o=this.ystbfxLineData[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){var l=s.value;t.push(l.label),a.push(l.value)}}catch(c){n=!0,i=c}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}var d={legend:{show:!0,textStyle:{fontFamily:"PingFangSC-Regular",color:"#71768C",fontSize:Object(f["a"])(24)}},xAxis:[{type:"category",name:"",interval:0,nameLocation:"start",nameTextStyle:{color:"#71768C",fontSize:Object(f["a"])(24),padding:[0,0,Object(f["a"])(-30),Object(f["a"])(-80)]},data:[],axisPointer:{type:"shadow"},axisLabel:{show:!0,interval:0,textStyle:{color:"#71768C"},fontSize:Object(f["a"])(24)},axisLine:{show:!0,lineStyle:{color:"#98FB98"}},axisTick:{show:!1}}],yAxis:[{type:"value",name:"",nameTextStyle:{color:"#71768C",fontSize:Object(f["a"])(24)},position:"right",axisLabel:{show:!0,fontSize:Object(f["a"])(24),textStyle:{color:"#71768C"},formatter:"{value}%"},axisLine:{show:!1,lineStyle:{color:"#ECEFF2"}},splitLine:{show:!1,lineStyle:{color:"#7d838b"}},axisTick:{show:!1}}],series:[{type:"bar",name:"收入同比",smooth:!0,barWidth:Object(f["a"])(80),symbol:"none",yAxisIndex:0,label:{show:!0,position:"top",fontFamily:"PingFangSC-Regular",color:"#71768C",fontSize:Object(f["a"])(24),formatter:function(e){return 0===Object(x["f"])(e.value)?"":e.value+"%"}},barGap:"-100%",itemStyle:{color:"#FFAB00"},data:[]},{type:"bar",name:"成本同比",smooth:!0,label:{show:!0,position:"top",fontFamily:"PingFangSC-Regular",color:"#71768C",fontSize:Object(f["a"])(24),formatter:function(e){return 0===Object(x["f"])(e.value)?"":e.value+"%"}},barWidth:Object(f["a"])(80),symbol:"none",yAxisIndex:0,itemStyle:{color:"#0000FF"},data:[]},{type:"bar",name:"毛利率差异",smooth:!0,label:{show:!0,position:"top",fontFamily:"PingFangSC-Regular",color:"#71768C",fontSize:Object(f["a"])(24),formatter:function(e){return 0===Object(x["f"])(e.value)?"":e.value+"%"}},barWidth:Object(f["a"])(80),symbol:"none",yAxisIndex:0,itemStyle:{color:"#87CEFA"},data:[]}]};return d.xAxis[0].data=t,d.series[0].data[0]={value:a[0],itemStyle:{barBorderRadius:parseFloat(a[0])>0?[Object(f["a"])(40),Object(f["a"])(40),0,0]:[0,0,Object(f["a"])(40),Object(f["a"])(40)]}},d.series[0].data[1]={value:a[1],itemStyle:{barBorderRadius:parseFloat(a[1])>0?[Object(f["a"])(40),Object(f["a"])(40),0,0]:[0,0,Object(f["a"])(40),Object(f["a"])(40)],color:"#0000FF"}},d.series[0].data[2]={value:a[2],itemStyle:{barBorderRadius:parseFloat(a[2])>0?[Object(f["a"])(40),Object(f["a"])(40),0,0]:[0,0,Object(f["a"])(40),Object(f["a"])(40)],color:"#87CEFA"}},d},ysqsfxdpLineOption:function(e){var t={color:["#326DFF","#FFBE14","#FF0200"],legend:{show:!0,selectedMode:!1,textStyle:{fontFamily:"PingFangSC-Regular",color:"#71768C",fontSize:Object(f["a"])(24)}},xAxis:[{type:"category",name:"",interval:0,nameLocation:"start",nameTextStyle:{color:"#71768C",fontSize:Object(f["a"])(24),padding:[0,0,Object(f["a"])(-30),Object(f["a"])(-80)]},data:[],axisPointer:{type:"shadow"},axisLabel:{show:!0,interval:0,textStyle:{color:"#71768C"},fontSize:Object(f["a"])(24)},axisLine:{show:!1},axisTick:{show:!1}}],yAxis:[{type:"value",name:"(万元)",nameTextStyle:{color:"#71768C",fontSize:Object(f["a"])(24)},axisLabel:{show:!0,fontSize:Object(f["a"])(24),textStyle:{color:"#71768C"}},axisLine:{show:!1,lineStyle:{color:"#ECEFF2"}},splitLine:{show:!1,lineStyle:{color:"#7d838b"}},axisTick:{show:!1}},{type:"value",name:"同比",nameTextStyle:{color:"#71768C",fontSize:Object(f["a"])(24)},show:!0,axisLabel:{show:!0,fontSize:Object(f["a"])(24),textStyle:{color:"#71768C"},formatter:"{value}%"},axisLine:{show:!1,lineStyle:{color:"#ECEFF2"}},splitLine:{show:!0,lineStyle:{color:"#213A6B"}}}],series:[{type:"bar",name:0===this.ysqsfxDpTypeIndex?"收入":"成本",barWidth:Object(f["a"])(40),itemStyle:{},data:[]},{type:"line",name:0===this.ysqsfxDpTypeIndex?"收入同比":"成本同比",smooth:!0,symbol:"none",yAxisIndex:1,lineStyle:{type:"solid",width:Object(f["a"])(4)},data:[]},{type:"line",name:"同比0%",smooth:!0,symbol:"none",yAxisIndex:1,lineStyle:{type:"dashed",width:Object(f["a"])(4)},data:[]}]},a=[],r=[],n=[],i=[],s=!0,o=!1,l=void 0;try{for(var d,c=this.ysqsfxdpLineData[Symbol.iterator]();!(s=(d=c.next()).done);s=!0){var p=d.value;a.push(p.label),r.push(p.sr),n.push(p.srtb),i.push(p.tb)}}catch(b){o=!0,l=b}finally{try{s||null==c.return||c.return()}finally{if(o)throw l}}return t.xAxis[0].data=a,t.series[0].data=r,t.series[1].data=n,t.series[2].data=i,t},getAllData:function(){this.getDpMlfxTableData(this.selectedDwName),this.getDpMlglTableData(this.selectedDpName),this.getDpQsfxBarLineData(this.selectedDpName),this.getDpYstbfxBarLineData(this.selectedDpName),this.getDpYsqsfxBarLineData(this.selectedDpName),this.getJgfxDpTableData(this.selectedDpName),this.qsfxTitle="趋势分析-"+this.selectedDpName,this.ystbfxTitle="因素同比分析-"+this.selectedDpName,this.jgfxTitle="结构分析-"+this.selectedDpName,this.ysqsfxTitle="因素趋势分析-"+this.selectedDpName},getDpMlglTableData:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var a,r,n,i,s,o,l,d,c,p,f,b;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y["a"].getDataFromInterface(y["a"].gainShop.getDpMlglTableData,{dateStrD:this.dateStr,dateStrM:this.dateStrM,cusName:t,subName:this.selectedDwName});case 2:if(a=e.sent,r=a.__statusCode,n=a.data,!Object.is(r,"1")){e.next=28;break}for(i=JSON.parse(n),s=[],o=!0,l=!1,d=void 0,e.prev=11,c=i.res[Symbol.iterator]();!(o=(p=c.next()).done);o=!0)f=p.value,b={},b.sj=f.period_wid,b.sr=Object(x["c"])(Object(x["f"])(f.income_amt),2),b.ml=Object(x["c"])(Object(x["f"])(f.margin_amt),2),b.mll=Object(x["g"])(f.margin_rate),b.tb=(100*Object(x["f"])(f.margin_yoy)).toFixed(1),s.push(b);e.next=19;break;case 15:e.prev=15,e.t0=e["catch"](11),l=!0,d=e.t0;case 19:e.prev=19,e.prev=20,o||null==c.return||c.return();case 22:if(e.prev=22,!l){e.next=25;break}throw d;case 25:return e.finish(22);case 26:return e.finish(19);case 27:this.mlglTableData.tableContent=s;case 28:case"end":return e.stop()}},e,this,[[11,15,19,27],[20,,22,26]])}));function t(t){return e.apply(this,arguments)}return t}(),getDpMlfxTableData:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var a,r,n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y["a"].getDataFromInterface(y["a"].gainShop.getDpMlfxTableData,{dateStrM:this.dateStrM,subName:t});case 2:a=e.sent,r=a.__statusCode,n=a.data,Object.is(r,"1")&&(i=JSON.parse(n),this.mlfxDpTableDataInit=i,this.dealDpMlfxTableData());case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),dealDpMlfxTableData:function(){var e=[],t=[];0===this.mlfxDpIndex?t=this.mlfxDpTableDataInit.resM||[]:1===this.mlfxDpIndex?t=this.mlfxDpTableDataInit.resJ||[]:2===this.mlfxDpIndex&&(t=this.mlfxDpTableDataInit.resNl||[]);var a=!0,r=!1,n=void 0;try{for(var i,s=t[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var o=i.value,l={};l.dp=o.customer_name,l.mll=Object(x["g"])(o.margin_rate),l.mllpm=o.order_margin_rate,l.mllcy=Object(x["g"])(o.deviation),l.cypm=o.order_deviation,e.push(l)}}catch(d){r=!0,n=d}finally{try{a||null==s.return||s.return()}finally{if(r)throw n}}this.mlfxTableData={tableHeader:[{name:"店铺",prop:"dp",needOrder:!1,order:"0",isPresent:!1,needArrow:!1},{name:"毛利率",prop:"mll",needOrder:!0,order:"2",isPresent:!0,needArrow:!1},{name:"毛利率排名",prop:"mllpm",needOrder:!0,order:"0",isPresent:!1,needArrow:!1},{name:"毛利率差异",prop:"mllcy",needOrder:!0,order:"0",isPresent:!0,needArrow:!0},{name:"差异排名",prop:"cypm",needOrder:!0,order:"0",isPresent:!1,needArrow:!1}],tableContent:e.sort(Object(x["a"])("mll",!1))}},getDpQsfxBarLineData:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var a,r,n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y["a"].getDataFromInterface(y["a"].gainCompany.getDpqsfxBarLineData,{cusName:t,dateStrM:this.dateStrM});case 2:a=e.sent,r=a.__statusCode,n=a.data,Object.is(r,"1")&&(i=JSON.parse(n),this.qsfxDpLineDataInit=i.res,this.dealDpQsfxBarLineData());case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),dealDpQsfxBarLineData:function(){var e=[],t=[];t=this.qsfxDpLineDataInit||[];var a=!0,r=!1,n=void 0;try{for(var i,s=t[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var o=i.value,l={};l.label=o.period_wid,l.mll=(100*Object(x["f"])(o.margin_rate)).toFixed(1),l.tqmll=(100*Object(x["f"])(o.margin_yoy)).toFixed(1),l.mllcy=(100*Object(x["f"])(o.deviation)).toFixed(1),e.push(l)}}catch(d){r=!0,n=d}finally{try{a||null==s.return||s.return()}finally{if(r)throw n}}this.qsfxdpLineData=e},getDpYstbfxBarLineData:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var a,r,n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y["a"].getDataFromInterface(y["a"].gainCompany.getDpYstbfxBarLineData,{cusName:t,dateStrM:this.dateStrM});case 2:a=e.sent,r=a.__statusCode,n=a.data,Object.is(r,"1")&&(i=JSON.parse(n),this.ystbfxDpBarLineDataInit=i,this.dealDpYstbfxBarLineData());case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),dealDpYstbfxBarLineData:function(){var e=[],t=[];if(0===this.ystbfxDpIndex?t=this.ystbfxDpBarLineDataInit.resM||[]:1===this.ystbfxDpIndex?t=this.ystbfxDpBarLineDataInit.resJ||[]:2===this.ystbfxDpIndex&&(t=this.ystbfxDpBarLineDataInit.resNl||[]),t.length>0){var a=t[0],r={},n={},i={};r.label="收入",r.value=(100*Object(x["f"])(a.income_yoy)).toFixed(1),n.label="成本",n.value=(100*Object(x["f"])(a.cost_yoy)).toFixed(1),i.label="毛利率差异",i.value=(100*Object(x["f"])(a.deviation)).toFixed(1),e[0]=r,e[1]=n,e[2]=i,this.ystbfxLineData=e}else this.ystbfxLineData=[]},getDpYsqsfxBarLineData:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var a,r,n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y["a"].getDataFromInterface(y["a"].gainCompany.getDpYsqsfxBarLineData,{cusName:t,dateStrM:this.dateStrM});case 2:a=e.sent,r=a.__statusCode,n=a.data,Object.is(r,"1")&&(i=JSON.parse(n),this.ysqsfxDpLineDataInit=i.res,this.dealDpYsqsfxBarLineData());case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),dealDpYsqsfxBarLineData:function(){var e=[],t=[];t=this.ysqsfxDpLineDataInit||[];var a=!0,r=!1,n=void 0;try{for(var i,s=t[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var o=i.value,l={};l.label=o.period_wid,l.tb=(100*Object(x["f"])(o.target_yoy)).toFixed(1),0===this.ysqsfxDpTypeIndex?(l.sr=Object(x["f"])(o.income_amt).toFixed(1),l.srtb=(100*Object(x["f"])(o.income_yoy)).toFixed(1)):1===this.ysqsfxDpTypeIndex&&(l.sr=Object(x["f"])(o.cost_amt).toFixed(1),l.srtb=(100*Object(x["f"])(o.cost_yoy)).toFixed(1)),e.push(l)}}catch(d){r=!0,n=d}finally{try{a||null==s.return||s.return()}finally{if(r)throw n}}this.ysqsfxdpLineData=e},getJgfxDpTableData:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var a,r,n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y["a"].getDataFromInterface(y["a"].gainCompany.getDpjgfxTableData,{cusName:t,dateStrM:this.dateStrM});case 2:a=e.sent,r=a.__statusCode,n=a.data,Object.is(r,"1")&&(i=JSON.parse(n),this.jgfxDpTableDataInit=i,this.dealJgfxDpTableData());case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),dealJgfxDpTableData:function(){var e=[],t=[];0===this.jgfxdpTypeIndex?0===this.jgfxdpIndex?t=this.jgfxDpTableDataInit.resDM||[]:1===this.jgfxdpIndex?t=this.jgfxDpTableDataInit.resDJ||[]:2===this.jgfxdpIndex&&(t=this.jgfxDpTableDataInit.resDNl||[]):1===this.jgfxdpTypeIndex&&(0===this.jgfxdpIndex?t=this.jgfxDpTableDataInit.resSpuM||[]:1===this.jgfxdpIndex?t=this.jgfxDpTableDataInit.resSpuJ||[]:2===this.jgfxdpIndex&&(t=this.jgfxDpTableDataInit.resSpuNl||[]));var a=!0,r=!1,n=void 0;try{for(var i,s=t[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var o=i.value,l={};l.dl=o.type_name,l.srtb=Object(x["g"])(o.income_yoy),l.cbtb=Object(x["g"])(o.cost_yoy),l.mll=Object(x["g"])(o.margin_rate),l.tq=Object(x["g"])(o.margin_yoy),l.cy=Object(x["g"])(o.deviation),l.zb=Object(x["g"])(o.rotio_rate),e.push(l)}}catch(d){r=!0,n=d}finally{try{a||null==s.return||s.return()}finally{if(r)throw n}}this.jgfxdpTableData={tableHeader:[{name:"大类",prop:"dl",needOrder:!1,order:"0",isPresent:!1,needArrow:!1},{name:"收入同比",prop:"srtb",needOrder:!0,order:"2",isPresent:!0,needArrow:!1,newLine:!0},{name:"成本同比",prop:"cbtb",needOrder:!0,order:"0",isPresent:!0,needArrow:!0,newLine:!0},{name:"毛利率",prop:"mll",needOrder:!0,order:"0",isPresent:!0,needArrow:!1,newLine:!0},{name:"同期",prop:"tq",needOrder:!0,order:"0",isPresent:!0,needArrow:!1},{name:"差异",prop:"cy",needOrder:!0,order:"0",isPresent:!0,needArrow:!0},{name:"占比",prop:"zb",needOrder:!0,order:"0",isPresent:!0,needArrow:!1}],tableContent:e.sort(Object(x["a"])("srtb",!1))}}},created:function(){this.$store.commit("updateHeaderTitle","扣前毛利"),this.$store.commit("updateShowIcon",!0),this.$store.commit("updateDateStr",this.$store.state.dateStrInit),this.$store.dispatch("updateUserOption",{USER_ACCOUNT:window.userAccount,EXAMINATION_SUBJECT:"直营",LEVEL:"店铺",URL:"毛利"}),""!==this.dateStr&&this.getAllData()},mounted:function(){this.$eventBus.$on("userSelected",this.getAllData)},beforeDestroy:function(){this.$eventBus.$off("userSelected",this.getAllData)},components:{pageTitle:s["a"],MinTitle:o["a"],BarLineChart:l["a"],TableList:d["a"],TypeList:c["a"],Tabs:p["a"]}},m=u,D=(a("f053"),a("2877")),g=Object(D["a"])(m,r,n,!1,null,"14b5ced5",null);t["default"]=g.exports},"79b7":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tabs"},[a("ul",{staticClass:"tabs-item"},e._l(e.tabsData,function(t,r){return a("li",{key:r,class:r===e.activeIndex?"active":"",style:e.withObj,on:{click:function(a){return e.changeType(r,t)}}},[e._v(e._s(t.name))])}),0)])},n=[],i={name:"Title",props:{tabsData:{type:Array,default:function(){return[{name:"考核主体分析",value:"考核主体"},{name:"大类分析",value:"大类"}]}},switchType:{type:String,default:""},defaultIndex:{type:String,default:"0"}},data:function(){return{activeIndex:0,activeTypeName:""}},computed:{withObj:function(){return{width:100/this.tabsData.length+"%"}}},methods:{changeType:function(e,t){this.activeIndex=e,this.activeTypeName=t.value,this.$emit("activeTypeName",{activeTypeName:this.activeTypeName,index:this.activeIndex,type:this.switchType})}},created:function(){var e=this;this.$eventBus.$on("resetTypeList",function(){e.tabsData.length>0&&(e.activeIndex=0,e.activeTypeName=e.tabsData[0].value)})}},s=i,o=(a("5bc8"),a("2877")),l=Object(o["a"])(s,r,n,!1,null,"1bc23b3a",null);t["a"]=l.exports},e05a:function(e,t,a){},f053:function(e,t,a){"use strict";var r=a("e05a"),n=a.n(r);n.a}}]);
//# sourceMappingURL=chunk-6324e7d4.b7d82604.js.map