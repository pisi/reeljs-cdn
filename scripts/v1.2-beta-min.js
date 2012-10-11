/*
 Copyright (c) 2009-2012 Petr Vostrel (http://petr.vostrel.cz/)
 Dual licensed under the MIT (MIT-LICENSE.txt)
 and GPL (GPL-LICENSE.txt) licenses.

 jQuery Reel
 http://jquery.vostrel.cz/reel
 Version: 1.2-beta
 Updated: 2012-02-17

 Requires jQuery 1.5 or higher
*/
jQuery.reel||function(l,Pb,Ba,o){function Qb(g){return p.instances.push(g[0])&&g}function Rb(g){return(p.instances=p.instances.not(Ca(g.attr(fa))))&&g}function Y(g){return p.instances.length?p.instances.first().data(g):null}function Sb(g){return"data:image/gif;base64,R0lGODlh"+g}function T(g){return"<"+g+"/>"}function s(g){return"."+(g||"")}function Da(g){return p.cdn+g}function Ea(g){return"url("+g+")"}function na(g,k,r){return ob(g,Wa(k,r))}function Tb(g){function k(){l.fn[this]||(l.fn[this]=function(){return this})}
l.each(g,k)}function Xa(g,k){return N(g)*(k?-1:1)}function Fa(g){return Ga?g.touch||g.originalEvent.touches[0]:g}function z(g){return g===o?0:typeof g==pb?g:g+"px"}function Ca(g){return"#"+g}function qb(g){try{console.warn("Deprecation - Please consult https://github.com/pisi/Reel/wiki/Deprecations")}catch(k){}return g}if(+l().jquery.replace(s(),"").substr(0,2)<15)throw"VersionError: far too old jQuery for running Reel";var p=l.reel={version:"1.2-beta",def:{area:o,brake:0.23,clickfree:false,cw:false,
delay:-1,directional:false,draggable:true,footage:6,entry:o,frame:1,frames:36,graph:o,hint:"",horizontal:true,image:o,images:[],indicator:0,inversed:false,klass:"",laziness:6,loops:true,monitor:o,opening:0,orbital:0,path:"",preloader:2,rebound:0.5,revolution:o,row:1,rows:0,spacing:0,speed:0,step:o,steps:o,stitched:0,suffix:"-reel",tempo:36,timeout:2,throwable:true,vertical:false,wheelable:true,annotations:o,attr:{},cursor:o,preload:"fidelity",scrollable:true,steppable:true,sequence:"",velocity:0},
fn:{reel:function(){var g=arguments,k=l(this),r=k.data(),u=g[0],v=g[1];if(g.length==2){if(v!==o){try{v=p.normal[u](v,r)}catch(J){}if(r[u]!==v)k.trigger(u+"Change",[o,r[u]=v])}return k.trigger("store",[u,v])}else if(typeof u=="string"){v=r[u];k.trigger("recall",[u,v]);return v}else{var a=l.extend({},p.def,u);g=function(j){var e=[];j.filter(Ya).each(function(){var b=l(this),w=a.images.length&&a.images||a.sequence||a.image||a.attr.src||b.attr("src"),D=oa(a.attr.width||b.css(Za)),A=oa(a.attr.height||
b.css(rb));w&&w!=K&&D&&A&&e.push(b)});j.filter(s(y)).each(function(){e.push(l(this).unreel())});return l(e)}(this);var O=[];a.step&&(a.frame=a.step);a.steps&&(a.frames=a.steps);g.each(function(){var j=l(this),e=function(d,c){return j.reel(d,c)&&c},b=function(d){return j.reel(d)},w={setup:function(){if(!j.hasClass(y)){e(Ha,a);var d=j.attr(a.attr).attr("src"),c=e(fa,j.attr(fa)||j.attr(fa,y+"-"+ +new Date).attr(fa)),f=j.attr(pa),h=l.extend({},j.data()),i=p.re.sequence.exec(a.sequence);i=e(Z,i?p.sequence(i,
a,b):a.images);var m=a.stitched,n=a.loops,q={x:oa(j.css(Za)||a.attr.width),y:oa(j.css(rb)||a.attr.height)},ga=e(G,a.orbital&&a.footage||a.rows<=1&&i.length||a.frames),E=m?1:qa(ga/a.footage);c=Ca(c+a.suffix);var $=j[0].className||K,L=l(T(ra),{id:c.substr(1),"class":$+B+Ub+B+sb+"0"});L=j.wrap(L.addClass(a.klass)).attr({"class":y});O.push(Qb(L)[0]);L=L.parent().bind(w.instance);e($a,i.length?K:a.image||d.replace(p.re.image,"$1"+a.suffix+".$2"));e(tb,[]);e(ub,a.spacing);e(ab,E);e(H,q);e(Ia,a.revolution||
m/2||q.x*2);e(Ja,1/(ga-(n&&!m?0:1)));e(bb,m);e(vb,m-(n?0:q.x));e(cb,0);e(wb,c);e(P,e(sa,a.speed)<0);e(ha,a.velocity||0);e(ia,a.vertical);e(Q,0);e(ja,Xa(1,!a.cw&&!m));e(db,{});e(ta,false);e(Ka,e(eb,0));e(La,e(Ma,0));e(ua,false);e(U,false);e(xb,a.brake);e(fb,!!a.orbital);e(aa,a.tempo/(p.lazy?a.laziness:1));e(ka,-1);e(Na,a.annotations||L.unbind(s(Na))&&{});e(yb,{src:d,classes:$,style:f||K,data:h});a.steppable||L.unbind("click.steppable");a.indicator||L.unbind(".indicator");C(K,{width:q.x,height:q.y,
overflow:gb,position:"relative"});C(ba+B+s(y),{display:zb});R.bind(w.pool);j.trigger("setup")}},instance:{teardown:function(){var d=j.data(yb);j.parent().unbind(w.instance);b(pa).remove();b(hb).enableTextSelect();Rb(j.unbind(V).removeData().siblings().unbind(V).remove().end().attr({"class":d.classes,src:d.src,style:d.style}).data(d.data).unwrap());Oa();R.unbind(w.pool);S.unbind(W)},setup:function(){function d(i){return function(m){if(m.button==Vb)return m.preventDefault()||j.trigger("down",[Fa(m).clientX,
Fa(m).clientY])&&i}}var c=b(H);b(G);j.attr(fa);var f=j.parent();area=e(hb,l(a.area||f));if(Ga){C(B+s(y),{WebkitUserSelect:Pa,WebkitBackgroundSize:b(Z).length?o:b(bb)&&z(b(bb))+B+z(c.y)||z(c.x*a.footage)+B+z(c.y*b(ab)*(a.rows||1)*(a.directional?2:1))});area.bind(Wb,d())}else{c=a.cursor==Ab?Xb:a.cursor||Yb;var h=a.cursor==Ab?Zb+B+"!important":o;C(K,{cursor:c});C(s(ib),{cursor:"wait"});C(s(Qa)+ba+s(Qa)+" *",{cursor:h||c},true);area.bind(a.wheelable?$b:K,function(i,m){return i.preventDefault()||!m||j.trigger("wheel",
[m])&&false}).bind(a.clickfree?ac:bc,d()).disableTextSelect()}a.hint&&area.attr("title",a.hint);a.indicator&&f.append(va("x"));a.rows>1&&a.indicator&&f.append(va("y"));a.monitor&&f.append(Bb=l(T(ra),{"class":Cb}))&&C(B+s(Cb),{position:Ra,left:0,top:0});C(B+s(Db),{display:Pa})},preload:function(){function d(L,Eb){setTimeout(function(){Eb.parent().length&&Eb.attr({src:L})},(ga-q.length)*2)}var c=b(H),f=j.parent(),h=b(Z),i=!h.length,m=b(G),n=p.preload[a.preload]||p.preload[p.def.preload],q=i?[b($a)]:
n(h.slice(0),a,b),ga=q.length;e(Q,i?0.5:0);h=[];f.addClass(ib).append(la());e(pa,l("<"+pa+' type="text/css">'+C.rules.join("\n")+"</"+pa+">").prependTo(jb));for(j.trigger("stop");q.length;){n=a.path+q.shift();var E=c.x*(!i?1:a.footage),$=c.y*(!i?1:m/a.footage)*(!a.directional?1:2);E=l(T(Ya)).attr({"class":Db,width:E,height:$}).appendTo(f);E.bind("load error abort",function(){return!!l(this).parent().length&&j.trigger("preloaded")&&false});d(n,E);h.push(n)}e(tb,h)},preloaded:function(){var d=b(Z).length||
1,c=e(Q,Wa(b(Q)+1,d));if(c===d){j.parent().removeClass(ib).unbind(Q,w.instance.preloaded);j.trigger("loaded")}c===1&&j.trigger("frameChange",[o,b(X)])},loaded:function(){b(Z).length>1||j.css({backgroundImage:Ea(a.path+b($a))}).attr({src:cc})},opening:function(){if(!a.opening)return j.trigger("openingDone");e(U,true);e(Sa,!b(sa));var d=a.entry||a.speed,c=b(x),f=a.opening;e(x,c-d*a.opening);e(ka,qa(f*Y(aa)))},openingDone:function(){e(wa,false);e(U,false);var d=ma+s(U);R.unbind(d,w.pool[d]);if(a.delay>
0)M=setTimeout(function(){j.trigger("play")},a.delay*1E3);else j.trigger("play")},play:function(d,c){c=e(sa,c||b(sa));d=e(wa,!!c);e(Sa,!d);ca()},pause:function(){e(wa,false);F()},stop:function(){var d=e(Sa,true);e(wa,!d)},down:function(d,c,f){function h(m){return function(n){n.preventDefault();j.trigger("pan",[Fa(n).clientX,Fa(n).clientY,n]);return m}}function i(m){return function(n){n.preventDefault();j.trigger("up");return m}}if(a.draggable){e(ta,b(X));e(ha,0);d=!b(ua)||a.rows<=1||!a.orbital||a.scrollable;
Ta=Ua(b(Ia),c,f);F();Oa();t=false;l(Fb,S).addClass(Qa);Ga?S.bind(dc,h(!d)).bind(ec+B+fc,i()):(a.clickfree?b(hb):S).bind(gc,h()).bind(a.clickfree?hc:ic,i())}},up:function(){if(a.draggable){e(ta,false);e(ua,false);da=e(ha,!a.throwable?0:N(xa[0]+xa[1])/60)?1:0;F();Oa();b(Sa)||j.trigger("play");l(Fb,S).removeClass(Qa);S.unbind(W)}},pan:function(d,c,f,h){if(a.draggable&&kb){kb=false;F();d=h&&!l(h.currentTarget).is(R)&&jc.offset()||{left:0,top:0};c-=d.left;f-=d.top;var i={x:c-Ta.x,y:f-Ta.y};if(N(i.x)>0||
N(i.y)>0){t=true;Ta={x:c,y:f};d=b(Ia);h=b(db);var m=b(ia),n=e(x,Gb(m?f-h.y:c-h.x,b(Ka),d,b(La),b(Ma),b(ja),m?f-h.y:c-h.x));e(ua,b(ua)||b(X)!=b(ta));(i=Hb(m?i.y:i.x||0))&&e(P,i<0);if(a.orbital&&b(fb)){e(ia,N(f-h.y)>N(c-h.x));h=Ua(d,c,f)}if(a.rows>1){i=b(H).y;i=a.rows>3?i:i/(5-a.rows);m=b(eb);var q=-m*i;e(ya,p.math.envelope(f-h.y,m,i,q,q+i,-1))}!(n%1)&&!a.loops&&Ua(d,c,f)}}},wheel:function(d,c){if(c){d=qa(ea.sqrt(N(c))/2);d=Xa(d,c>0);c=0.0833*b(Ia);Ua(c);d&&e(P,d<0);e(ha,0);e(x,Gb(d,b(Ka),c,b(La),b(Ma),
b(ja)));F();j.trigger("up");return false}},fractionChange:function(d,c,f){if(c!==o)return qb(e(x,c));d=1+Va(f/b(Ja));c=a.rows>1;f=a.orbital;e(fb,!!f&&(d<=f||d>=a.footage-f+2));if(c)d+=(b(za)-1)*b(G);e(X,d)},tierChange:function(d,c,f){if(c===o){d=e(za,I(Aa(f,1,a.rows)));c=b(G);f=b(X)%c||c;e(X,f+d*c-c)}},rowChange:function(d,c,f){if(c!==o)return e(za,c);e(ya,1/(a.rows-1)*(f-1))},frameChange:function(d,c,f){if(c!==o)return qb(e(X,c));this.className=this.className.replace(p.re.frame_klass,sb+f);c=b(G);
var h=f%c||c;d=!!b(Q);var i=((f-h)/c+1-1)/(a.rows-1),m=I(Aa(i,1,a.rows));d&&m===b(za)?b(ya):e(ya,i);i=Wa((h-1)/(c-1),0.9999);h=b(za)*c-c;c=I(Aa(i,h+1,h+c));h=N((b(x)||0)-i)<1/(b(G)-1);d&&c===f&&h?b(x):e(x,i);var n=a.footage;if(a.orbital&&b(ia)){f=a.inversed?n+1-f:f;f+=n}c=a.horizontal;h=b(Z);var q=!h.length;m=b(H);if(q){if(a.stitched){f=e(cb,I(Aa(i,0,b(vb)))%a.stitched);f=[z(-f),z(0)]}else{d=f%n-1;d=d<0?n-1:d;i=Va((f-0.1)/n);i+=a.rows>1?0:b(P)?0:b(ab);f=b(ub);i=i*((c?m.y:m.x)+f);f=d*((c?m.x:m.y)+
f);f=h.length?[0,0]:c?[z(-f),z(-i)]:[z(-i),z(-f)]}j.css({backgroundPosition:f.join(B)})}else{f=h[f-1];d&&j.attr({src:a.path+f})}},"click.steppable":function(d){if(t)return D(d,false);j.trigger(d.clientX-j.offset().left>0.5*b(H).x?"stepRight":"stepLeft")},"stepLeft stepRight":function(){F()},stepLeft:function(){e(P,false);e(x,b(x)-b(Ja)*b(ja))},stepRight:function(){e(P,true);e(x,b(x)+b(Ja)*b(ja))},"fractionChange.indicator":function(d,c,f){if(c===o&&a.indicator){d=b(H);d=a.orbital&&b(ia)?d.y:d.x;var h=
a.orbital?a.footage:a.images.length||b(G);c=a.indicator;h=qa(d/h);d-=h;f=I(Aa(f,0,d));f=!a.cw||a.stitched?f:d-f;va.$x.css(b(ia)?{left:0,top:z(f),bottom:Ib,width:c,height:h}:{bottom:0,left:z(f),top:Ib,width:h,height:c})}},"tierChange.indicator":function(d,c,f){if(c===o&&a.rows>1&&a.indicator){var h=b(H).y;d=a.indicator;c=qa(h/a.rows);h-=c;f=I(f*h);va.$y.css({left:0,top:f,width:d,height:c})}},"setup.annotations":function(){b(H);var d=j.parent();l.each(b(Na),function(c,f){var h=typeof f.node==pb?l(f.node):
f.node||{};h=h.jquery?h:l(T(ra),h);h=h.attr({id:c}).addClass(kc);var i=f.image?l(T(Ya),f.image):l(),m=f.link?l(T("a"),f.link):l();C(Ca(c),{display:Pa,position:Ra},true);h.bind({"click.annotations":function(n){n.stopPropagation()}});f.image||f.link&&h.append(m);f.link||f.image&&h.append(i);f.link&&f.image&&h.append(m.append(i));h.appendTo(d)})},"frameChange.annotations":function(d,c,f){b(Q)&&c===o&&l.each(b(Na),function(h,i){h=l(Ca(h));var m=i.start||1,n=i.end,q=f-1,ga=i.at?i.at[q]=="+":false;q=i.at?
q:q-m+1;var E=typeof i.x!=Jb?i.x:i.x[q],$=typeof i.y!=Jb?i.y:i.y[q];i=E!==o&&$!==o&&(i.at?ga:q>=0&&(!n||q<=n-m));E=!a.stitched?E:E-b(cb);i={display:i?zb:Pa,left:z(E),top:z($)};h.css(i)})},"setup.fu":function(){e(X,a.frame+(a.row-1)*b(G));j.trigger("preload")},"loaded.fu":function(){j.trigger("opening")}},pool:{"tick.reel.preload":function(){var d=b(H),c=oa(la.$.css(Za)),f=b(Z).length||1,h=I(1/f*b(Q)*d.x);la.$.css({width:c+(h-c)/3+1});if(b(Q)===f&&c>d.x-1){la.$.fadeOut(300,function(){la.$.remove()});
R.unbind(ma+s(Kb),w.pool[ma+s(Kb)])}},"tick.reel":function(d){var c=b(ha),f=Y(aa);if(da){c=c-b(xb)/f*da;c=e(ha,c>0.1?c:(da=A=0))}a.monitor&&Bb.text(b(a.monitor));c&&da++;A&&A++;Hb(0);kb=true;if(A&&!c)return D(d);if(b(ta))return D(d,F());if(!(b(ka)>0)){if(!a.loops&&a.rebound){!A&&!(b(x)%1)?lb++:(lb=0);lb>=a.rebound*1E3/f&&e(P,!b(P))}d=b(ja)*Xa(1,b(P));c=(!b(wa)?c:N(b(sa))+c)/Y(aa);e(x,b(x)-c*d)}},"tick.reel.opening":function(){if(b(U)){var d=(a.entry||a.speed)/Y(aa)*(a.cw?-1:1),c=e(ka,b(ka)-1);e(x,
b(x)+d);c||j.trigger("openingDone")}}}},D=function(d,c){return d.stopImmediatePropagation()||c},A,da=0,ca=function(){return A=0},F=function(){clearTimeout(M);R.unbind(ma+s(U),w.pool[ma+s(U)]);e(ka,0);return A=-a.timeout*Y(aa)},t=false,M,Bb=l(),la=function(){C(B+s(Lb),{position:Ra,left:0,top:b(H).y-a.preloader,height:a.preloader,overflow:gb,backgroundColor:"#000"});return la.$=l(T(ra),{"class":Lb})},va=function(d){C(B+s(Mb)+s(d),{position:Ra,width:0,height:0,overflow:gb,backgroundColor:"#000"});return va["$"+
d]=l(T(ra),{"class":Mb+B+d})},C=function(d,c,f){function h(i){var m=[];l.each(i,function(n,q){m.push(n.replace(/([A-Z])/g,"-$1").toLowerCase()+":"+z(q)+";")});return"{"+m.join(K)+"}"}f=f?K:b(wb);d=d.replace(/^/,f).replace(ba,ba+f);return C.rules.push(d+h(c))&&c},lb=0,Ta={x:0,y:0},Hb=function(d){return xa.push(d)&&xa.shift()&&d},Oa=function(){return xa=[0,0]},xa=Oa(),Gb=a.graph||p.math[a.loops?"hatch":"envelope"],Ua=function(d,c,f){var h=e(Ka,b(x));e(eb,b(ya));e(La,a.loops?0:-h*d);e(Ma,a.loops?d:d-
h*d);return c&&e(db,{x:c,y:f})||o},kb=true,S;try{S=l.unique(R.add(Pb.top.document))}catch(mc){S=R}var jc=top===self?l():function(d){l("iframe",S.last()).each(function(){try{if(l(this).contents().find(jb).html()==l(jb).html())return(d=l(this))&&false}catch(c){}});return d}();C.rules=[];w.setup()});Nb=Nb||function j(){var e=+new Date,b=Y(aa),w;if(b){R.trigger(ma);p.cost=(+new Date+p.cost-e)/2;w=setTimeout(j,ob(4,1E3/b-p.cost))}return w}();return l(O)}},unreel:function(){return this.trigger("teardown")}},
re:{image:/^(.*)\.(jpg|jpeg|png|gif)$/,touchy_agent:/iphone|ipod|ipad|android/i,lazy_agent:/iphone|ipod|android/i,frame_klass:/frame-\d+/,sequence:/(^[^#|]*([#]+)[^#|]*)($|[|]([0-9]+)\.\.([0-9]+))($|[|]([0-9]+)$)/},cdn:"http://code.vostrel.cz/",math:{envelope:function(g,k,r,u,v,J){return k+na(u,v,-g*J)/r},hatch:function(g,k,r,u,v,J){g=(g<u?v:0)+g%v;g=k+-g*J/r;return g-Va(g)},interpolate:function(g,k,r){return k+g*(r-k)}},preload:{linear:function(g){return g},fidelity:function(g,k,r){function u(j,
e,b){function w(M){for(;!(M>=1&&M<=ca);)M+=M<1?+ca:-ca;return O[b+M]||(O[b+M]=!!D.push(M))}if(!j.length)return[];var D=[],A=4*e,da=k.frame,ca=j.length;e=true;for(var F=ca/A,t=0;t<A;t++)w(da+I(t*F));for(;F>1;){t=0;A=D.length;F/=2;for(e=!e;t<A;t++)w(D[t]+(e?1:-1)*I(F))}for(t=0;t<=ca;t++)w(t);for(t=0;t<D.length;t++)D[t]=j[D[t]-1];return D}var v=k.orbital?2:k.rows||1,J=k.orbital?k.footage:r(G);r=(k.row-1)*J;var a=[].concat(g),O=new Array(g.length+1);g=v<2?[]:a.slice(r,r+J);return u(g,1,r).concat(u(a,
v,0))}},normal:{fraction:function(g,k){return k[Ha].loops?g-Va(g):na(0,1,g)},tier:function(g){return na(0,1,g)},row:function(g,k){return I(na(1,k[Ha].rows,g))},frame:function(g,k){var r=k[Ha];k=k[G]*(r.orbital?2:r.rows||1);g=I(r.loops?g%k||k:na(1,k,g));return g<0?g+k:g}},sequence:function(g,k){function r(j,e,b){for(;j.length<e;)j=b+j;return j}if(g.length<=1)return k.images;var u=[],v=g[1],J=g[2],a=+g[4]||1,O=k.orbital?2:k.rows||1;k=k.orbital?k.footage:k.frames;O=+(g[5]||O*k);g=+g[7]||1;for(k=0;k<
O;){u.push(v.replace(J,r(a+k+K,J.length,"0")));k+=g}return u},instances:l(),leader:Y,cost:0},R=l(Ba);Ba=+l.browser.version.split(s()).slice(0,2).join(s());var mb=l.browser.msie,lc=!mb||mb&&Ba>6,Ob=navigator.userAgent,Nb,y="reel",Ub=y+"-overlay",Mb=y+"-indicator",Lb=y+"-preloader",Db=y+"-cached",Cb=y+"-monitor",kc=y+"-annotation",Qa=y+"-panning",ib=y+"-loading",sb="frame-",ea=Math,I=ea.round,Va=ea.floor,qa=ea.ceil,Wa=ea.min,ob=ea.max,N=ea.abs,oa=parseInt,Aa=p.math.interpolate,Na="annotations",hb="area",
Ib="auto",yb="backup",P="backwards",Ja="bit",xb="brake",tb="cached",fb="center",ta="clicked",db="clicked_location",Ka="clicked_on",eb="clicked_tier",ja="cwish",H="dimensions",x="fraction",X="frame",G="frames",Ma="hi",gb="hidden",$a="image",Z="images",U="opening",ka=U+"_ticks",La="lo",Ha="options",wa="playing",Q="preloaded",ua="reeling",Ia="revolution",za="row",ab="rows",ub="spacing",sa="speed",wb="stage",bb="stitched",cb="stitched_shift",vb="stitched_travel",Sa="stopped",pa="style",aa="tempo",ya=
"tier",ha="velocity",ia="vertical",V=s(y),W=".pan"+V,bc="mousedown"+V,ac="mouseenter"+V,hc="mouseleave"+W,gc="mousemove"+W,ic="mouseup"+W,$b="mousewheel"+V,ma="tick"+V,fc="touchcancel"+W,ec="touchend"+W,Wb="touchstart"+V,dc="touchmove"+W,K="",B=" ",ba=",",Ra="absolute",zb="block",ra="div",Ab="hand",jb="head",rb="height",Fb="html",fa="id",Ya="img",nb="jquery."+y,Pa="none",Jb="object",Kb="preload",pb="string",Za="width",cc=lc?Sb("CAAIAIAAAAAAAAAAACH5BAEAAAAALAAAAAAIAAgAAAIHhI+py+1dAAA7"):Da("blank.gif"),
Yb=Ea(Da(nb+".cur"))+ba+"move",Xb=Ea(Da(nb+"-drag.cur"))+ba+"move",Zb=Ea(Da(nb+"-drag-down.cur"))+ba+"move",Ga=p.touchy=p.re.touchy_agent.test(Ob);p.lazy=p.re.lazy_agent.test(Ob);var Vb=Ga?o:mb&&Ba<=8?1:0;Tb("disableTextSelect enableTextSelect".split(/ /));l.extend(l.fn,p.fn)}(jQuery,window,document);