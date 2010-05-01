/*** jquery.reel: ***/

/* Copyright (c) 2009-2010 Petr Vostrel (http://www.pisi.cz/)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://www.vostrel.cz/jquery/reel/
 * Version: 1.0.4 "Touchy"
 * Updated: 2010-04-24
 *
 * Requires jQuery 1.4.x or higher
 */
(function(l){function r(q){return parseInt(q)}function u(q){l.each(q,function(){l.fn[this]||(l.fn[this]=function(){return this})})}l.fn.reel=function(q){var v={footage:6,frame:1,frames:36,horizontal:true,hotspot:undefined,hint:"",indicator:0,klass:"",loops:true,reversed:false,saves:false,sensitivity:20,spacing:0,stitched:undefined,suffix:"-reel",tooltip:""},w=function(b){var a=[];b.filter("img").each(function(){var n=l(this),g=n.attr("src"),j=r(n.css("width")),o=r(n.css("height"));!g||g==""||!j||
!o||a.push(n)});b.filter("div.jquery-reel").each(function(){a.push(l(this))});return l(a)}(this),t=[],s=/iphone|ipod|ipad|android/i.test(navigator.userAgent);u("mousewheel disableTextSelect".split(/ /));w.each(function(){var b=l(this),a=l.extend(v,q),n=l(document),g=function(e,c){b.data(e,c);b.trigger("store");return c},j=function(e){e=b.data(e);b.trigger("recall");return e},o={setup:function(){if(!b.hasClass("jquery-reel")){var e=b.attr("src"),c=b.attr("id"),d=b.attr("class"),h=b.attr("style");e=
e.replace(/^(.*)\.(jpg|jpeg|png|gif)$/,"$1"+a.suffix+".$2");var k={x:r(b.css("width")),y:r(b.css("height"))},p=l("<div>").attr("class",d).addClass("jquery-reel").addClass(a.klass),i=s||!a.saves?{display:"none"}:{opacity:0};t.push((b=b.attr("id","").wrap(p).css(i).parent().attr("id",c).bind(o).css({display:"block",width:k.x+"px",height:k.y+"px",backgroundImage:"url("+e+")"}))[0]);g("frames",a.frames);g("spacing",a.spacing);g("offset",b.offset());g("dimensions",k);g("backup",{id:c,"class":d||"",style:h||
""});b.trigger("start")}},teardown:function(){b=b.unbind(o).find(".indicator").remove().end().find("img").attr(b.data("backup")).unwrap().bind("setup",function(){b.unbind("setup");o.setup()})},start:function(){b.css({position:"relative"});var e=a.hotspot?a.hotspot:b,c=j("dimensions");e.css({cursor:"ew-resize"}).mouseenter(function(){b.trigger("enter")}).mouseleave(function(){b.trigger("leave")}).mousemove(function(d){b.trigger("over",[d.clientX,d.clientY])}).mousewheel(function(d,h){b.trigger("wheel",
[h]);return false}).dblclick(function(){b.trigger("animate")}).mousedown(function(d){b.trigger("down",[d.clientX,d.clientY])}).disableTextSelect().each(function(){function d(f,m){l.each(m,function(x){f.addEventListener(x,this,false)})}function h(f){f.cancelable&&f.preventDefault();return false}function k(f){var m=f.touches[0];g("clicked",true);g("clicked_location",m.clientX);g("last_frame",g("clicked_on_frame",j("frame")));return h(f)}function p(f){var m=f.touches[0];b.trigger("drag",[m.clientX,m.clientY]);
return h(f)}function i(f){g("clicked",false);return h(f)}s&&d(this,{touchstart:k,touchmove:p,touchend:i,touchcancel:i,click:h,gesturestart:h,gesturechange:h,gestureend:h})});(a.hint||a.tooltip)&&e.attr("title",a.hint||a.tooltip);a.indicator&&b.append(l("<div/>").addClass("indicator").css({width:a.indicator+"px",height:a.indicator+"px",top:c.y-a.indicator+"px",position:"absolute",backgroundColor:"#000"}));b.trigger("frameChange",a.frame)},animate:function(){},down:function(e,c){g("clicked",true);g("clicked_location",
c);g("last_frame",g("clicked_on_frame",j("frame")));n.mousemove(function(d){b.trigger("drag",[d.clientX,d.clientY])}).mouseup(function(){b.trigger("up")})},up:function(){g("clicked",false);n.unbind("mousemove mouseup")},drag:function(e,c){var d=j("clicked_location");e=j("clicked_on_frame");j("frames");c=Math.round((d-c)/(s?a.sensitivity*0.6:a.sensitivity));g("frame",e-(a.reversed?-1:1)*(a.stitched?-1:1)*c);b.trigger("frameChange")},wheel:function(e,c){e=j("frame");j("frames");var d=Math.ceil(Math.sqrt(Math.abs(c)));
d=c<0?-d:d;g("frame",e-(a.reversed?-1:1)*d);b.trigger("frameChange");return false},frameChange:function(e,c){c=!c?j("frame"):g("frame",c);var d=j("last_frame");e=j("frames");var h=j("dimensions"),k=j("spacing");c=!a.loops&&c>e?e:c;c=!a.loops&&c<1?1:c;c-=Math.floor(c/e)*e;c=g("last_frame",g("frame",c<1?e:c));d=c-d;d=Math.abs(d)>10?0-d:d;d=g("reversed",d!=0?d>0:j("reversed"));if(a.stitched){i=Math.round((c-1)*((a.loops?a.stitched:a.stitched-h.x)/(a.loops?e:e-1)));f=0;k=-i+"px "+f+"px"}else{i=Math.floor(c/
a.footage);f=c-i*a.footage-1;i=f==-1?i+f:i;f=f==-1?a.footage+f:f;var p=a.horizontal?h.y:h.x,i=-i*(k+p),f=-f*(k+(a.horizontal?h.x:h.y)),m=Math.ceil(e/a.footage);k=m*p+(m-1)*k;i=d&&a.horizontal?i-k:i;f=d&&!a.horizontal?f-k:f;k=a.horizontal?f+"px "+i+"px":i+"px "+f+"px"}c=(h.x-a.indicator)/(e-1)*(c-1)+"px";b.css({backgroundPosition:k}).find(".indicator").css({left:c})}};b.ready(o.setup)});return l(t)}})(jQuery);


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