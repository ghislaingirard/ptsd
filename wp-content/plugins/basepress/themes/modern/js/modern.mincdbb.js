FixedSticky.tests.sticky=!1;
jQuery(document).ready(function(){function e(){var a=jQuery(window).height()-c;b.css({"max-height":a+"px",width:"calc(100% + "+f+"px)","overflow-y":"scroll","padding-bottom":"25px"})}function d(){b.css({"max-height":"initial",width:"100%","overflow-y":"hidden","padding-bottom":"initial"})}function g(){var a=document.createElement("p");a.style.width="100%";a.style.height="200px";var b=document.createElement("div");b.style.position="absolute";b.style.top="0px";b.style.left="0px";b.style.visibility=
"hidden";b.style.width="200px";b.style.height="150px";b.style.overflow="hidden";b.appendChild(a);document.body.appendChild(b);var c=a.offsetWidth;b.style.overflow="scroll";a=a.offsetWidth;c==a&&(a=b.clientWidth);document.body.removeChild(b);return c-a}var a=jQuery(".bpress-sidebar");if("sticky"==a.css("position")){var b=jQuery(".hide-scrollbars");if(b.length){var f=g(),c=parseInt(a.css("top"),10)||0;a.fixedsticky();a.on("classChanged",function(){a.hasClass("fixedsticky-on")?e():d()});a.mouseenter(function(){a.hasClass("fixedsticky-on")&&
e()});a.mouseleave(function(){d()})}}});var equalheight=function(e){var d=0,g=0,a=[],b,f=0,c;jQuery(e).each(function(){b=jQuery(this);jQuery(b).height("auto");f=b.position().top;if(g!=f){for(c=0;c<a.length;c++)a[c].height(d);a.length=0;g=f;d=b.height();a.push(b)}else a.push(b),d=d<b.height()?b.height():d;for(c=0;c<a.length;c++)a[c].height(d)})};jQuery(window).load(function(){var e=jQuery(".bpress-grid").data("cols");if("undefined"==typeof e||1<e)equalheight(".fix-height"),jQuery(window).resize(function(){equalheight(".fix-height")})});
