if(typeof $domob=="undefined"){var $domob=function(){var e="http://r.domob.cn/a.php";var c=new Date().getTime();var b=domob_vars.ua?domob_vars.ua:navigator.userAgent;var a={};var d=0;getHeightAndWidth=function(f){var g=f.split("x");return g};return{init:function(k){if(!domob_vars.docks||!(domob_vars.docks instanceof Array)){if(domob_vars.test_mode){alert("测试模式消息：domob_vars.docks 未定义或者不是数组")}return}var f=0;var j=[];for(var g=0;g<domob_vars.docks.length;g++){var h=document.getElementById(domob_vars.docks[g]);if(h!=null){f++;j[j.length]=h}}if(f>0){$domob.drawDomobAd(j,f)}},drawDomobAd:function(f,m){var p=domob_vars.size||"320x48";var l=getHeightAndWidth(p);var g=l[0];var o=l[1];var n="jsframe";if(domob_vars.style&&domob_vars.style=="inline"){n="jsinline"}var h={tn:n,ipb:domob_vars.pub_id,dim:p,m:domob_vars.test_mode?"test":"",k:domob_vars.keywords||"",ts:c,sw:window.screen.width,sh:window.screen.height,so:0,sd:1,gender:0,longtitude:"",latitude:"",birthday:"",ua:b,referer:document.referrer,v:"20111020-JS",num:m};for(var k=0;k<f.length;k++){var j=f[k];if(n=="jsframe"){$domob.createBlockAd(j,h,g,o)}else{$domob.createInlineAd(j,h)}}$domob.sajax.request({url:e,params:h})},createBlockAd:function(g,k,i,f){var h=$domob.domHelper.createElement("iframe",{frameborder:0,src:"about:blank",scrolling:"no",marginheight:0,marginwidth:0},{width:i+"px",height:"0",position:"absolute"});var j=$domob.domHelper.createElement("div",{},{margin:"0",padding:"0",border:"none",width:"100%",position:"static",height:0});g.style.display="none";g.appendChild(j);g.appendChild(h);a[d]={ad:h,dock:j,height:f,style:"block"};d++},createInlineAd:function(f,h){var g=$domob.domHelper.createElement("span",{},{margin:"0",padding:"0",border:"none",width:"100%",position:"static",height:"auto"});f.style.display="none";f.appendChild(g);a[d]={ad:g,style:"inline"};d++},DOMOB_RENDER_AD:function(h){var f=[];for(var j=0;j<h.html.length;j++){var g=a[j].style;var l=a[j].ad;f[j]=l;if(g=="inline"){l.innerHTML=h.html[j];l.parentNode.style.display="";if(screen.width>320){var k=l.getElementsByTagName("IMG");if(k.length>0){$domob.domHelper.fitScreen(k[0])}}continue}var n=a[j].dock;var m=a[j].height;var i=l.contentDocument;i.open();i.write(h.html[j]);i.close();l.style.height=m+"px";l.parentNode.style.display="";$domob.resize(l,n);n.style.height=m+"px"}if(domob_vars.onSuccess){domob_vars.onSuccess(f)}},resize:function(f,g){f.style.top=$domob.domHelper.findTop(g)+"px";f.style.left="50%";f.style.marginLeft=(0-f.offsetWidth/2)+"px"}}}();$domob.domHelper=function(){return{createElement:function(c,b,h,f){var i=document.createElement(c);for(var d in b){i.setAttribute(d,b[d])}for(var g in h){i.style[g]=h[g]}return i},findTop:function(b){var a=0;if(b.offsetParent){do{a+=b.offsetTop}while(b=b.offsetParent)}return a},fitScreen:function(a){a.width=screen.width;a.height=parseInt(screen.width*3/20)}}}();$domob.sajax=function(){var a=0;var b={};return{request:function(d){var c=a;var i=[];var f=d.timeout||10000;for(var g in d.params){i.push(g+"="+encodeURIComponent(d.params[g]))}i=i.join("&");var h=d.url+((d.url.indexOf("?")==-1)?"?":"&")+i;var e=$domob.domHelper.createElement("script",{src:h,type:"text/javascript"});document.body.appendChild(e)}}}();if(window.addEventListener){window.addEventListener("load",function(){$domob.init.apply($domob)},false)}else{window.attachEvent("onload",function(){$domob.init.apply($domob)})}};