/*** jquery.reel: ***/

/*
 Copyright (c) 2009-2010 Petr Vostrel (http://petr.vostrel.cz/)
 Dual licensed under the MIT (MIT-LICENSE.txt)
 and GPL (GPL-LICENSE.txt) licenses.

 jQuery Reel
 http://jquery.vostrel.cz/reel
 Version: 1.1
 Updated: 2010-11-27

 Requires jQuery 1.4.2 or higher
*/
jQuery.reel||function(k,ea,$a,o){function ab(l){return"<"+l+"/>"}function fa(l){return"."+l}function ga(l){return"url("+l+")"}function G(l){return+l.toFixed(4)}function S(l,a,v){return T(l,Ea(a,v))}function bb(l){function a(){k.fn[this]||(k.fn[this]=function(){return this})}k.each(l,a)}function ha(l,a){return w(l)*(a?-1:1)}function U(l){return l.originalEvent.touches[0]}k.reel={version:"1.1",def:{footage:6,frame:1,frames:36,hint:"",horizontal:true,hotspot:o,indicator:0,klass:"",loops:true,reversed:o,
spacing:0,stitched:o,suffix:"-reel",tooltip:"",area:o,brake:0.5,clickfree:false,cw:false,delay:-1,directional:false,draggable:true,entry:o,graph:o,image:o,images:[],inversed:false,laziness:8,monitor:o,opening:0,orbital:0,path:"",preloader:4,rebound:0.5,revolution:o,row:1,rows:0,speed:0,step:o,steps:o,tempo:36,timeout:2,throwable:true,vertical:false,wheelable:true}};k.fn.reel=function(l){var a=k.extend({},k.reel.def,l);l=function(g){var e=[];g.filter(cb).each(function(){var c=k(this),r=a.images.length&&
a.images||a.image||c.attr(Fa),m=V(c.css(Ga)),x=V(c.css(Ha));!r||r==Ia||!m||!x||e.push(c)});g.filter(Ja+fa(y)).each(function(){e.push(k(this))});return k(e)}(this);var v=[],H=a.tempo/=db?a.laziness:1,I=1E3/H;a.reversed&&(a.cw=true);a.tooltip&&(a.hint=a.tooltip);a.hotspot&&(a.area=a.hotspot);ia=ia||function g(){z.trigger(E);return setTimeout(g,I)}();l.each(function(){var g=k(this),e=function(f,b){g.data(f,b);g.trigger("store",[f,b]);return b},c=function(f){var b=g.data(f);g.trigger("recall",[f,b]);
return b},r={setup:function(f){if(g.hasClass(y))return m.call(f);var b=g.attr(Fa),d=g.attr(eb),h=g.attr("style"),i=a.images,j=a.stitched,q=a.loops,t={x:V(g.css(Ga)),y:V(g.css(Ha))},s=e(Ka,a.orbital&&a.footage||a.rows<=1&&i.length||a.frames),B=j?1:La(s/a.footage),u={display:"block",width:t.x,height:t.y};d="#"+d+a.suffix;var Ma=g.attr("className"),ja={position:"relative",width:t.x,height:t.y};ja=k(N,{id:d.substr(1),className:Ma+W+fb,css:ja});u=g.wrap(ja).attr({className:y}).css(u).bind(r);v.push(u[0]);
e(ka,i.length&&i.length||a.image||b.replace(/^(.*)\.(jpg|jpeg|png|gif)$/,"$1"+a.suffix+".$2"));e(Na,Ma);e(C,a.frame);e(Oa,a.spacing);e(D,t);e(n,0);e(la,a.steps||a.frames);e(X,a.revolution||j/2||t.x*2);e(ma,B);e(Y,1/(s-(q&&!j?0:1)));e(gb,1/T(s,c(la)));e(na,j);e(Pa,j-(q?0:t.x));e(Z,d);e(F,e(oa,a.speed)<0);e(J,0);e(K,a.vertical);e(A,(a.row-1)/(a.rows-1));e($,ha(1,!a.cw&&!j));e(Qa,{src:b,style:h||Ia});ia&&z.bind(E,r.tick);m.call(f);g.trigger("start")},teardown:function(f){g.unbind(p).unbind(r);var b=
g.data("events"),d=g.clone().attr(g.data(Qa)).removeClass(y).addClass(c(Na));for(var h in b)k.each(b[h],function(i,j){d.bind(h+"."+j.namespace,j.handler,j.data)});k("img:hidden",g.parent()).remove();k(c(Z)).before(d).detach();aa();z.unbind(pa).unbind(qa).unbind(E,r.tick).unbind(E,r.opening_tick);m.call(f)},start:function(){var f=c(D),b=c(Ka),d=T(b,c(la));d=e(n,1/d*((a.step||a.frame)-1));e(C,d*b+1);g.attr("id");b=g.parent();d=k(N,{className:hb,css:{position:ba,left:0,top:0,width:f.x,height:f.y,background:ra,
opacity:0}}).appendTo(b);d=e(Ra,k(a.area||d));if(ib){g.css({WebkitUserSelect:"none",WebkitBackgroundSize:a.images.length?"auto":c(na)&&c(na)+"px "+f.y+"px"||f.x*a.footage+"px "+f.y*c(ma)*(a.rows||1)*(a.directional?2:1)+"px"});d.bind(jb,function(h){g.trigger("down",[U(h).clientX,U(h).clientY,true]);return false}).bind(kb,function(h){g.trigger("slide",[U(h).clientX,U(h).clientY,true]);return false}).bind(lb,function(){g.trigger("up",[true]);return false}).bind(mb,function(){g.trigger("up",[true]);return false})}else d.css({cursor:"url("+
Sa+"), "+sa}).bind(nb,function(h,i){g.trigger("wheel",[i]);return false}).bind(ob,function(){g.trigger("play")}).bind(a.clickfree?pb:qb,function(h){g.trigger("down",[h.clientX,h.clientY]);return false}).bind(a.clickfree?rb:"",function(){g.trigger("up");return false}).disableTextSelect();a.hint&&d.attr(sb,a.hint);a.monitor&&b.append(ta=k(N,{className:tb,css:{position:ba,left:0,top:0}}))||(ta=k());a.indicator&&b.append(Ta("x"));a.rows>1&&a.indicator&&b.append(Ta("y"));g.trigger("preload")},preload:function(f){var b=
c(D),d=g.parent(),h=c(ka),i=a.images;h=!i.length?[h]:[].concat(i);var j=g[0];j.frames=h.length;j.preloaded=0;g.trigger("stop");for(d.append(ua=k(N,{className:ub,css:{position:ba,left:0,top:b.y-a.preloader,height:a.preloader,backgroundColor:ra}}));h.length;){i=a.path+h.shift();var q=k(new Image).bind("load"+p,function(){j.preloaded++;k(this).unbind(p);ua.css({width:1/j.frames*j.preloaded*b.x});if(j.frames==j.preloaded){ua.remove();g.trigger(a.rows>1&&!a.stitched?"rowChange":"frameChange");g.attr({src:vb}).trigger("loaded");
g.trigger("opening");m.call(f)}});d.append(q.hide().attr({src:i}))}},tick:function(f){var b=c(J);if(O){var d=G(b-wb*O);b=!(b*d<=0||b<w(d))&&e(J,b>w(c(oa))?d:(O=x=0))}ta.text(c(a.monitor));b&&O++;x&&x++;Ua(0);slidable=true;if(x&&!b)return m.call(f);if(c(va))return m.call(f,L());d=c($)*ha(1,c(F));var h=(c(wa)?b:w(c(oa))+b)/a.tempo;b=c(n);d=e(n,b-h*d);m.call(f);d!=b&&g.trigger("fractionChange")},opening:function(){var f=a.entry||a.speed,b=c(n),d=a.opening;e(n,b-f*a.opening);e(xa,d*H);z.bind(E,r.opening_tick)},
opening_tick:function(f){var b=(a.entry||a.speed)/a.tempo*(a.cw?-1:1),d=c(n);e(n,G(d+b));b=e(xa,c(xa)-1);g.trigger("fractionChange");m.call(f);if(!(b>1)){z.unbind(E,r.opening_tick);xb()}},play:function(f){var b=e(ya,true);e(wa,!b);Va();m.call(f)},pause:function(f){e(ya,false);L();m.call(f)},stop:function(f){var b=e(wa,true);e(ya,!b);m.call(f)},down:function(f,b,d,h){if(a.draggable){e(va,true);e(J,0);ca=da(b,d,c(n),c(X),c(A));L();aa();if(!h){z.css({cursor:ga(yb)+", "+sa}).bind(qa,function(i){g.trigger("slide",
[i.clientX,i.clientY]);m.call(i);return false});a.clickfree||z.bind(pa,function(i){g.trigger("up");m.call(i)})}}m.call(f)},up:function(f,b){if(!a.draggable)return m.call(f);e(va,false);var d=e(J,!a.throwable?0:w(P[0]+P[1])/60);O=d?1:0;d?Va():L();aa();!b&&z.unbind(pa).unbind(qa)&&c(Ra).css({cursor:ga(Sa)+", "+sa});m.call(f)},slide:function(f,b,d){if(a.draggable&&slidable){slidable=false;L();var h={x:b-ca.x,y:d-ca.y};if(w(h.x)>0||w(h.y)>0){ca={x:b,y:d};var i=c(X),j=c(Wa),q=c(K),t=e(n,Xa(q?d-j.y:b-j.x,
c(za),i,c(Aa),c(Ba),c($)));(h=Ua(q?h.y:h.x||0))&&e(F,h<0);if(a.orbital)var s=a.orbital,B=a.footage,u=c(C);if(a.orbital&&(u<=s||u>=B-s+2&&u<=B+s-1||u==2*B-s+2)){e(K,w(d-j.y)>w(b-j.x));j=da(b,d,t,i,c(A))}if(a.rows>1){s=c(D).y;B=c(Ya);u=-B*s;e(A,G(k.reel.math.envelope(d-j.y,B,s,u,u+s,-1)))}!(t%1)&&!a.loops&&da(b,d,t,i,c(A));g.trigger("fractionChange")}}m.call(f)},wheel:function(f,b){if(!a.wheelable)return m.call(f);var d=La(zb(w(b))/2);d=ha(d,b>0);b=0.2*c(X);da(o,o,c(n),b,c(A));e(n,Xa(d,c(za),b,c(Aa),
c(Ba),c($)));d&&e(F,d<0);e(J,0);L();m.call(f);g.trigger("fractionChange");return false},fractionChange:function(f,b){b=!b?c(n):e(n,b);b=a.loops?b-Q(b):S(0,1,b);b=e(n,G(b));var d=c(C),h=e(C,1+Q(b/c(Y)));if(!a.loops&&a.rebound){!x&&!(b%1)?Ca++:(Ca=0);Ca>=a.rebound*1E3/a.tempo&&e(F,!c(F))}var i=c(D),j=(c(K)?i.y:i.x)-a.indicator;b=S(0,j,R(k.reel.math.interpolate(b,-1,j+2)));b=!a.cw||a.stitched?b:j-b;k(fa(Da+".x"),c(Z)).css(c(K)?{left:0,top:b}:{left:b,top:i.y-a.indicator});if(a.rows>1){i=c(D).y-a.indicator;
i=S(0,i,R(k.reel.math.interpolate(c(A),-1,i+2)));k(fa(Da+".y"),c(Z)).css({top:i})}if(h==d)return m.call(f);g.trigger(a.rows>1?"rowChange":"frameChange");m.call(f)},rowChange:function(f,b){var d=Q(c(n)/c(Y))+1;b=e(A,S(0,1,G(b!=o?(b-1)/(a.rows-1):c(A))));e(C,d+(a.rows<=1?0:R(b*(a.rows-1))*a.frames));m.call(f);g.trigger("frameChange")},frameChange:function(f,b){var d=!b?c(n):e(n,G(c(Y)*(b-1)));b=e(C,R(b?b:c(C)));var h=a.images,i=a.footage,j=c(D),q=a.horizontal;if(c(K)){b=a.inversed?i+1-b:b;b+=i}if(h.length){h=
h[b-1];g.attr({src:a.path+h})}else{if(a.stitched)q=[-R(d*c(Pa))+M,0+M];else{d=b%i-1;d=d<0?i-1:d;i=Q((b-0.1)/i);i+=a.rows>1?0:c(F)?0:c(ma);b=c(Oa);i=i*((q?j.y:j.x)+b);j=d*((q?j.x:j.y)+b);q=h.length?[0,0]:q?[-j+M,-i+M]:[-i+M,-j+M]}h=c(ka);g.css({background:ga(a.path+h)+W+q.join(W)})}m.call(f)}},m=function(f){Ab||delete this;return f},x,O=0,Va=function(){return x=0},L=function(){clearTimeout(Za);z.unbind(E,r.opening_tick);g.trigger("play");return x=-a.timeout*a.tempo},Za,xb=function(){Za=setTimeout(function(){g.trigger("play")},
a.delay*1E3||0)},ta,ua,Ta=function(f){return k(N,{className:[Da,f].join(W),css:{width:a.indicator,height:a.indicator,top:c(D).y-a.indicator,left:0,position:ba,backgroundColor:ra}})},Ca=0,ca={x:0,y:0},Ua=function(f){return P.push(f)&&P.shift()&&f},aa=function(){return P=[0,0]},P=aa(),wb=a.brake/a.tempo,Xa=a.graph||k.reel.math[a.loops?"hatch":"envelope"],da=function(f,b,d,h,i){e(za,d);e(Ya,i);e(Aa,a.loops?0:-d*h);e(Ba,a.loops?h:h-d*h);return f&&e(Wa,{x:f,y:b})||o};r.setup()});return k(v)};k.reel.math=
{envelope:function(l,a,v,H,I,g){return a+T(H,Ea(I,-l*g))/v},hatch:function(l,a,v,H,I,g){l=(l<H?I:0)+l%I;l=a+-l*g/v;return l-Q(l)},interpolate:function(l,a,v){return a+l*(v-a)}};bb("mousewheel disableTextSelect enableTextSelect".split(/ /));var z=k($a);ea=navigator.userAgent;var ib=/iphone|ipod|ipad|android/i.test(ea),db=/iphone|ipod|ipad/i.test(ea),Ab=k.browser.msie,sa="ew-resize",ia,y="jquery-reel",fb=y+"-overlay",Da=y+"-indicator",ub=y+"-preloader",tb=y+"-monitor",hb=y+"-interface",vb="data:image/gif;base64,R0lGODlhCAAIAIAAAAAAAAAAACH5BAEAAAAALAAAAAAIAAgAAAIHhI+py+1dAAA7",
Sa="data:image/gif;base64,R0lGODlhEAAQAJECAAAAAP///////wAAACH5BAEAAAIALAAAAAAQABAAQAI3lC8AeBDvgosQxQtne7yvLWGStVBelXBKqDJpNzLKq3xWBlU2nUs4C/O8cCvU0EfZGUwt19FYAAA7",yb="data:image/gif;base64,R0lGODlhEAAQAJECAAAAAP///////wAAACH5BAEAAAIALAAAAAAQABAAQAIslI95EB3MHECxNjBVdE/5b2zcRV1QBabqhwltq41St4hj5konmVioZ6OtEgUAOw==",R=Math.round,Q=Math.floor,La=Math.ceil,Ea=Math.min,T=Math.max,w=Math.abs,zb=Math.sqrt,V=parseInt,Ra="area",Qa="backup",F="backwards",Y="bit",Na="classes",va="clicked",Wa="clicked_location",
za="clicked_on",Ya="clicked_row",$="cwish",D="dimensions",n="fraction",C="frame",Ka="frames",Ba="hi",ka="image",xa="opening_ticks",Aa="lo",ya="playing",X="revolution",A="row",ma="rows",Oa="spacing",oa="speed",Z="stage",la="steps",na="stitched",Pa="stitched_travel",wa="stopped",J="velocity",K="vertical",gb="wheel_step",p=".reel",ob="dblclick"+p,qb="mousedown"+p,pb="mouseenter"+p,rb="mouseleave"+p,qa="mousemove"+p,pa="mouseup"+p,nb="mousewheel"+p,E="tick"+p,mb="touchcancel"+p,lb="touchend"+p,jb="touchstart"+
p,kb="touchmove"+p,Ia="",W=" ",ba="absolute",Ja="div",N=ab(Ja),Ha="height",ra="#000",eb="id",cb="img",M="px",Fa="src",sb="title",Ga="width"}(jQuery,window,document);

/*** jquery.mousewheel: ***/

/* Copyright (c) 2009 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 *
 * Version: 3.0.2
 * 
 * Requires: 1.2.2+
 */
(function(c){var a=["DOMMouseScroll","mousewheel"];c.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var d=a.length;d;){this.addEventListener(a[--d],b,false)}}else{this.onmousewheel=b}},teardown:function(){if(this.removeEventListener){for(var d=a.length;d;){this.removeEventListener(a[--d],b,false)}}else{this.onmousewheel=null}}};c.fn.extend({mousewheel:function(d){return d?this.bind("mousewheel",d):this.trigger("mousewheel")},unmousewheel:function(d){return this.unbind("mousewheel",d)}});function b(f){var d=[].slice.call(arguments,1),g=0,e=true;f=c.event.fix(f||window.event);f.type="mousewheel";if(f.wheelDelta){g=f.wheelDelta/120}if(f.detail){g=-f.detail/3}d.unshift(f,g);return c.event.handle.apply(this,d)}})(jQuery);

/*** jquery.disabletextselect: ***/

/**
 * .disableTextSelect - Disable Text Select Plugin
 *
 * Version: 1.1
 * Updated: 2007-11-28
 *
 * Used to stop users from selecting text
 *
 * Copyright (c) 2007 James Dempster (letssurf@gmail.com, http://www.jdempster.com/category/jquery/disabletextselect/)
 *
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 **/
(function(a){if(a.browser.mozilla){a.fn.disableTextSelect=function(){return this.each(function(){a(this).css({MozUserSelect:"none"})})};a.fn.enableTextSelect=function(){return this.each(function(){a(this).css({MozUserSelect:""})})}}else if(a.browser.msie){a.fn.disableTextSelect=function(){return this.each(function(){a(this).bind("selectstart.disableTextSelect",function(){return false})})};a.fn.enableTextSelect=function(){return this.each(function(){a(this).unbind("selectstart.disableTextSelect")})}}else{a.fn.disableTextSelect=
function(){return this.each(function(){a(this).bind("mousedown.disableTextSelect",function(){return false})})};a.fn.enableTextSelect=function(){return this.each(function(){a(this).unbind("mousedown.disableTextSelect")})}}})(jQuery);