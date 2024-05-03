!function(t){function i(t,i){return"function"==typeof t?t.call(i):t}function e(i,e){this.$element=t(i),this.options=e,this.enabled=!0,this.fixTitle()}e.prototype={show:function(){var e=this.getTitle();if(e&&this.enabled){var s=this.tip();s.find(".tipsy-inner")[this.options.html?"html":"text"](e),s[0].className="tipsy",s.remove().css({top:0,left:0,visibility:"hidden",display:"block"}).prependTo(document.body);var n,o=t.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight}),l=s[0].offsetWidth,a=s[0].offsetHeight,f=i(this.options.gravity,this.$element[0]);switch(f.charAt(0)){case"n":n={top:o.top+o.height+this.options.offset,left:o.left+o.width/2-l/2};break;case"s":n={top:o.top-a-this.options.offset,left:o.left+o.width/2-l/2};break;case"e":n={top:o.top+o.height/2-a/2,left:o.left-l-this.options.offset};break;case"w":n={top:o.top+o.height/2-a/2,left:o.left+o.width+this.options.offset}}2==f.length&&("w"==f.charAt(1)?n.left=o.left+o.width/2-15:n.left=o.left+o.width/2-l+15),s.css(n).addClass("tipsy-"+f),s.find(".tipsy-arrow")[0].className="tipsy-arrow tipsy-arrow-"+f.charAt(0),this.options.className&&s.addClass(i(this.options.className,this.$element[0])),this.options.fade?s.stop().css({opacity:0,display:"block",visibility:"visible"}).animate({opacity:this.options.opacity}):s.css({visibility:"visible",opacity:this.options.opacity})}},hide:function(){this.options.fade?this.tip().stop().fadeOut(function(){t(this).remove()}):this.tip().remove()},fixTitle:function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("original-title"))&&t.attr("original-title",t.attr("title")||"").removeAttr("title")},getTitle:function(){var t,i=this.$element,e=this.options;return this.fixTitle(),"string"==typeof(e=this.options).title?t=i.attr("title"==e.title?"original-title":e.title):"function"==typeof e.title&&(t=e.title.call(i[0])),(t=(""+t).replace(/(^\s*|\s*$)/,""))||e.fallback},tip:function(){return this.$tip||(this.$tip=t('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>'),this.$tip.data("tipsy-pointee",this.$element[0])),this.$tip},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled}},t.fn.tipsy=function(i){if(!0===i)return this.data("tipsy");if("string"==typeof i){var s=this.data("tipsy");return s&&s[i](),this}function n(s){var n=t.data(s,"tipsy");return n||(n=new e(s,t.fn.tipsy.elementOptions(s,i)),t.data(s,"tipsy",n)),n}if((i=t.extend({},t.fn.tipsy.defaults,i)).live||this.each(function(){n(this)}),"manual"!=i.trigger){var o=i.live?"live":"bind",l="hover"==i.trigger?"mouseenter":"focus",a="hover"==i.trigger?"mouseleave":"blur";this[o](l,function(){var t=n(this);t.hoverState="in",0==i.delayIn?t.show():(t.fixTitle(),setTimeout(function(){"in"==t.hoverState&&t.show()},i.delayIn))})[o](a,function(){var t=n(this);t.hoverState="out",0==i.delayOut?t.hide():setTimeout(function(){"out"==t.hoverState&&t.hide()},i.delayOut)})}return this},t.fn.tipsy.defaults={className:null,delayIn:0,delayOut:0,fade:!1,fallback:"",gravity:"n",html:!1,live:!1,offset:0,opacity:.8,title:"title",trigger:"hover"},t.fn.tipsy.revalidate=function(){t(".tipsy").each(function(){var i=t.data(this,"tipsy-pointee");i&&function(t){for(;t=t.parentNode;)if(t==document)return!0;return!1}(i)||t(this).remove()})},t.fn.tipsy.elementOptions=function(i,e){return t.metadata?t.extend({},e,t(i).metadata()):e},t.fn.tipsy.autoNS=function(){return t(this).offset().top>t(document).scrollTop()+t(window).height()/2?"s":"n"},t.fn.tipsy.autoWE=function(){return t(this).offset().left>t(document).scrollLeft()+t(window).width()/2?"e":"w"},t.fn.tipsy.autoBounds=function(i,e){return function(){var s={ns:e[0],ew:e.length>1&&e[1]},n=t(document).scrollTop()+i,o=t(document).scrollLeft()+i,l=t(this);return l.offset().top<n&&(s.ns="n"),l.offset().left<o&&(s.ew="w"),t(window).width()+t(document).scrollLeft()-l.offset().left<i&&(s.ew="e"),t(window).height()+t(document).scrollTop()-l.offset().top<i&&(s.ns="s"),s.ns+(s.ew?s.ew:"")}}}(jQuery);