$(function(){placeholders();handheldNav();megaMenus();handheldSwitch();$('.tabs').tabs({activate:function(event,ui){setGalleryHeight();}});formValidation();$('article.post:has(.comments article)').addClass('hascomments');$('form[role="search"] select, .tagsfilter select').selectBoxIt();});$(window).load(function(){setGalleryHeight();});$(window).resize(function(){setGalleryHeight();});function setGalleryHeight(){equalheight('.latestreviews li');equalheight('.galleryview article.set > .mainimg');equalheight('.galleryview article.set .meta .tags');equalheight('.galleryview article.set');equalheight('.minifiglist li.item ul li.tags');equalheight('.minifiglist li.item');equalheight('.partlist li.item');equalheight('.colourlist li.item');equalheight('body.mycollection div.graph');equalheight('body.search section.sets li.set > .mainimg');equalheight('body.search section.minifigs li.set > .mainimg');equalheight('body.search section.bricklists li.set > .mainimg');equalheight('body.search section.news li.set > .mainimg');equalheight('body.library section.main div.catalogue');equalheight('body.library section.main div.catalogue div');equalheight('body.buy div.catawiki article > .mainimg');equalheight('body.buy div.catawiki article');}
function formValidation(){$('input, textarea').one('blur keydown',function(){$(this).addClass('touched');});}
function megaMenus(){$(document).one('mousemove',function(){$('.no-touch header[role="banner"] > .wrap .primarynav > ul > li').hoverIntent({over:function(){$(this).addClass('hover');},out:function(){$(this).removeClass('hover');},timeout:150});});$pnavli='.touch header[role="banner"] > .wrap .primarynav > ul > li.haschildren';$($pnavli).bind('touchstart',function(e){if(!$(this).hasClass('hover')&&$('#bannernavtoggle').is(':hidden')){e.preventDefault();e.stopPropagation();$($pnavli).removeClass('hover');$(this).addClass('hover');$('> .subnav',this).prepend('<span class="close">x</span>');$('> .subnav .close',this).bind('touchstart',function(e){e.preventDefault();e.stopPropagation();$($pnavli).removeClass('hover');$(this).remove();});$('html').on('touchstart',function(e){if($($pnavli).has(e.target).length===0){$($pnavli).removeClass('hover');$('> .subnav .close',$pnavli).remove();$(this).off(e);}});}});}
function placeholders(){if(!Modernizr.input.placeholder){$('[placeholder]').focus(function(){var input=$(this);if(input.val()==input.attr('placeholder')){input.val('');input.removeClass('placeholder');}}).blur(function(){var input=$(this);if(input.val()==''||input.val()==input.attr('placeholder')){input.addClass('placeholder');input.val(input.attr('placeholder'));}}).blur();$('[placeholder]').parents('form').submit(function(){$(this).find('[placeholder]').each(function(){var input=$(this);if(input.val()==input.attr('placeholder')){input.val('');}});});}}
function handheldNav(){$('header[role="banner"] > .wrap .primarynav').prepend('<span id="bannernavtoggle"><span>Menu</span></span>');$('#bannernavtoggle').click(function(){$(this).toggleClass('open');if($(this).hasClass('open')){$('header[role="banner"] > .wrap .primarynav > ul').removeClass('jshidden');}
$('header[role="banner"] > .wrap .primarynav > ul').slideToggle('fast',function(){if(!$('#bannernavtoggle').hasClass('open')){$(this).addClass('jshidden');}});});}
function handheldSwitch(){if('ontouchstart'in document){if($.cookie('desktopSiteSwitch')=='1'){$('#viewport').attr('content','width=1001, minimum-scale=0.25, maximum-scale=1.6');$('footer[role="contentinfo"] > .wrap').append('<a href="#" class="handheldSiteSwitch">Switch to handheld site</a><a href="#" class="desktopSiteSwitch">Switch to desktop site</a>');$('footer a.desktopSiteSwitch').hide();}else if($(window).width()<=1024){$('footer[role="contentinfo"] > .wrap').append('<a href="#" class="handheldSiteSwitch">Switch to handheld site</a><a href="#" class="desktopSiteSwitch">Switch to desktop site</a>');$('footer a.handheldSiteSwitch').hide();}
$('footer a.desktopSiteSwitch').click(function(){$('#viewport').attr('content','width=1001, minimum-scale=0.25, maximum-scale=1.6');$.cookie('desktopSiteSwitch','1',{expires:365,path:'/'});$(this).hide();$('footer a.handheldSiteSwitch').show();return false;});$('footer a.handheldSiteSwitch').click(function(){$.cookie('desktopSiteSwitch','0',{expires:365,path:'/'});window.location.reload();return false;});}}
equalheight=function(container){var currentTallest=0,currentRowStart=0,rowDivs=new Array(),$el,topPosition=0;$(container).each(function(){$el=$(this);$($el).height('auto')
topPostion=$el.position().top;if(currentRowStart!=topPostion){for(currentDiv=0;currentDiv<rowDivs.length;currentDiv++){rowDivs[currentDiv].height(currentTallest);}
rowDivs.length=0;currentRowStart=topPostion;currentTallest=$el.height();rowDivs.push($el);}else{rowDivs.push($el);currentTallest=(currentTallest<$el.height())?($el.height()):(currentTallest);}
for(currentDiv=0;currentDiv<rowDivs.length;currentDiv++){rowDivs[currentDiv].height(currentTallest);}});};(function(){var method;var noop=function(){};var methods=['assert','clear','count','debug','dir','dirxml','error','exception','group','groupCollapsed','groupEnd','info','log','markTimeline','profile','profileEnd','table','time','timeEnd','timeStamp','trace','warn'];var length=methods.length;var console=(window.console=window.console||{});while(length--){method=methods[length];if(!console[method]){console[method]=noop;}}}());/*! jquery Selectboxit - v3.3.0 - 2013-03-19
* http://www.selectboxit.com
* Copyright (c) 2013 Greg Franko; Licensed MIT */(function(e){"use strict";e(window.jQuery,window,document)})(function(e,t,n,r){"use strict";e.widget("selectBox.selectBoxIt",{VERSION:"3.3.0",options:{showEffect:"none",showEffectOptions:{},showEffectSpeed:"medium",hideEffect:"none",hideEffectOptions:{},hideEffectSpeed:"medium",showFirstOption:!0,defaultText:"",defaultIcon:"",downArrowIcon:"",theme:"default",keydownOpen:!0,isMobile:function(){var e=navigator.userAgent||navigator.vendor||t.opera;return /iPhone|iPod|iPad|Android|BlackBerry|Opera Mini|IEMobile/.test(e)},"native":!1,aggressiveChange:!1,selectWhenHidden:!0,viewport:e(t),similarSearch:!1,copyAttributes:["title","rel"],copyClasses:"button",nativeMousedown:!1,customShowHideEvent:!1,autoWidth:!0,html:!0},getThemes:function(){var t=this,n=e(t.element).attr("data-theme")||"c";return{bootstrap:{focus:"active",hover:"",disabled:"disabled",arrow:"caret",button:"btn",list:"dropdown-menu",container:"bootstrap",open:"open"},jqueryui:{focus:"ui-state-focus",hover:"ui-state-hover",disabled:"ui-state-disabled",arrow:"ui-icon ui-icon-triangle-1-s",button:"ui-widget ui-state-default",list:"ui-widget ui-widget-content",container:"jqueryui",open:"selectboxit-open"},jquerymobile:{focus:"ui-btn-down-"+n,hover:"ui-btn-hover-"+n,disabled:"ui-disabled",arrow:"ui-icon ui-icon-arrow-d ui-icon-shadow",button:"ui-btn ui-btn-icon-right ui-btn-corner-all ui-shadow ui-btn-up-"+n,list:"ui-btn ui-btn-icon-right ui-btn-corner-all ui-shadow ui-btn-up-"+n,container:"jquerymobile",open:"selectboxit-open"},"default":{focus:"selectboxit-focus",hover:"selectboxit-hover",disabled:"selectboxit-disabled",arrow:"selectboxit-default-arrow",button:"selectboxit-btn",list:"selectboxit-list",container:"selectboxit-container",open:"selectboxit-open"}}},_create:function(){var t=this;if(!t.element.is("select"))return;return t.element.hide(),t.originalElem=t.element[0],t.selectBox=t.element,t.selectItems=t.element.find("option"),t.firstSelectItem=t.selectItems.slice(0,1),t.documentHeight=e(n).height(),t.theme=t.getThemes()[t.options.theme]||t.getThemes()["default"],t.currentFocus=0,t.blur=!0,t.textArray=[],t.currentIndex=0,t.currentText="",t.flipped=!1,t._createDropdownButton()._createUnorderedList()._copyAttributes()._replaceSelectBox()._addClasses(t.theme)._eventHandlers(),t.originalElem.disabled&&t.disable&&t.disable(),t._ariaAccessibility&&t._ariaAccessibility(),t._mobile&&t._mobile(),t.options["native"]&&this._applyNativeSelect(),t.triggerEvent("create"),t},_createDropdownButton:function(){var t=this,n=t.originalElem.id||"",r=t.options.copyClasses,i=t.selectBox.attr("class")||"";return t.dropdownText=e("<span/>",{id:n&&n+"SelectBoxItText","class":"selectboxit-text",unselectable:"on",text:t.firstSelectItem.text()}).attr("data-val",t.originalElem.value),t.dropdownImageContainer=e("<span/>",{"class":"selectboxit-option-icon-container"}),t.dropdownImage=e("<i/>",{id:n&&n+"SelectBoxItDefaultIcon","class":"selectboxit-default-icon",unselectable:"on"}),t.dropdown=e("<span/>",{id:n&&n+"SelectBoxIt","class":"selectboxit "+(r==="button"?i:""),name:t.originalElem.name,tabindex:t.selectBox.attr("tabindex")||"0",unselectable:"on"}).append(t.dropdownImageContainer.append(t.dropdownImage)).append(t.dropdownText),t.dropdownContainer=e("<span/>",{id:n&&n+"SelectBoxItContainer","class":"selectboxit-container "+(r==="container"?i:"")}).append(t.dropdown),t},_createUnorderedList:function(){var t=this,n,r,i,s,o,u,a,f="",l=t.originalElem.id||"",c=e("<ul/>",{id:l&&l+"SelectBoxItOptions","class":"selectboxit-options",tabindex:-1}),h,p;t.options.showFirstOption||(t.selectItems=t.selectBox.find("option").slice(1)),t.selectItems.each(function(l){r="",i="",n=e(this).prop("disabled"),s=e(this).data("icon")||"",o=e(this).data("iconurl")||"",u=o?"selectboxit-option-icon-url":"",a=o?"style=\"background-image:url('"+o+"');\"":"",h=e(this).attr("data-text"),p=h?h:e(this).text(),e(this).parent().is("optgroup")&&(r="selectboxit-optgroup-option",e(this).index()===0&&(i='<span class="selectboxit-optgroup-header" data-disabled="true">'+e(this).parent().first().attr("label")+"</span>")),f+=i+'<li id="'+l+'" data-val="'+this.value+'" data-disabled="'+n+'" class="'+r+" selectboxit-option "+(e(this).attr("class")||"")+'"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon '+s+" "+(u||t.theme.container)+'"'+a+"></i></span>"+(t.options.html?p:t.htmlEscape(p))+"</a></li>",t.textArray[l]=n?"":p,this.selected&&(t._setText(t.dropdownText,p),t.currentFocus=l)});if((t.options.defaultText||t.selectBox.data("text"))&&!t.selectBox.find("option[selected]").length){var d=t.options.defaultText||t.selectBox.data("text");t._setText(t.dropdownText,d),t.options.defaultText=d}return c.append(f),t.list=c,t.dropdownContainer.append(t.list),t.listItems=t.list.find("li"),t.listItems.first().addClass("selectboxit-option-first"),t.listItems.last().addClass("selectboxit-option-last"),t.list.find("li[data-disabled='true']").not(".optgroupHeader").addClass(t.theme.disabled),t.dropdownImage.addClass(t.selectBox.data("icon")||t.options.defaultIcon||t.listItems.eq(t.currentFocus).find("i").attr("class")),t.dropdownImage.attr("style",t.listItems.eq(t.currentFocus).find("i").attr("style")),t},_replaceSelectBox:function(){var t=this,n,r=t.originalElem.id||"";return t.selectBox.css("display","none").after(t.dropdownContainer),n=t.dropdown.height(),t.downArrow=e("<i/>",{id:r&&r+"SelectBoxItArrow","class":"selectboxit-arrow",unselectable:"on"}),t.downArrowContainer=e("<span/>",{id:r&&r+"SelectBoxItArrowContainer","class":"selectboxit-arrow-container",unselectable:"on"}).append(t.downArrow),t.dropdown.append(t.downArrowContainer),t.listItems.removeClass("selectboxit-selected").eq(t.currentFocus).addClass("selectboxit-selected"),t.dropdownImageContainer.width()||t.dropdownImageContainer.remove(),t.options.autoWidth&&t.dropdown.css({width:"auto"}).css({width:t.list.outerWidth(!0)+t.downArrowContainer.outerWidth(!0)+t.dropdownImage.outerWidth(!0)}),t.dropdownText.css({"max-width":t.dropdownContainer.width()-(t.downArrowContainer.outerWidth(!0)+t.dropdownImage.outerWidth(!0))}),t},_scrollToView:function(e){var t=this,n=t.listItems.eq(t.currentFocus),r=t.list.scrollTop(),i=n.height(),s=n.position().top,o=Math.abs(s),u=t.list.height(),a;return e==="search"?u-s<i?t.list.scrollTop(r+(s-(u-i))):s<-1&&t.list.scrollTop(s-i):e==="up"?s<-1&&t.list.scrollTop(r-o):e==="down"&&u-s<i&&t.list.scrollTop(r+(o-u+i)),t},_callbackSupport:function(t){var n=this;return e.isFunction(t)&&t.call(n,n.dropdown),n},_setText:function(e,t){var n=this;return n.options.html?e.html(t):e.text(t),n},open:function(e){var t=this,n=t.options.showEffect,r=t.options.showEffectSpeed,i=t.options.showEffectOptions,s=t.options["native"],o=t.options.isMobile();return t.listItems.length?(!s&&!o&&!this.list.is(":visible")&&(t.triggerEvent("open"),t._dynamicPositioning&&t._dynamicPositioning(),n==="none"?t.list.show():n==="show"?t.list.show(r):n==="slideDown"?t.list.slideDown(r):n==="fadeIn"?t.list.fadeIn(r):t.list.show(n,i,r),t.list.promise().done(function(){t._scrollToView("search")})),t._callbackSupport(e),t):t},close:function(e){var t=this,n=t.options.hideEffect,r=t.options.hideEffectSpeed,i=t.options.hideEffectOptions,s=t.options["native"],o=t.options.isMobile();return!s&&!o&&this.list.is(":visible")&&(t.triggerEvent("close"),n==="none"?t.list.hide():n==="hide"?t.list.hide(r):n==="slideUp"?t.list.slideUp(r):n==="fadeOut"?t.list.fadeOut(r):t.list.hide(n,i,r)),t._callbackSupport(e),t},toggle:function(){var e=this,t=e.list.is(":visible");t?e.close():t||e.open()},_keyMappings:{38:"up",40:"down",13:"enter",8:"backspace",9:"tab",32:"space",27:"esc"},_keydownMethods:function(){var e=this,t=e.list.is(":visible")||!e.options.keydownOpen;return{down:function(){e.moveDown&&t&&e.moveDown()},up:function(){e.moveUp&&t&&e.moveUp()},enter:function(){var t=e.list.find("li."+e.focusClass);t.length||(t=e.listItems.first()),e._update(t),e.list.is(":visible")&&e.close(),e.triggerEvent("enter")},tab:function(){e.triggerEvent("tab-blur"),e.close()},backspace:function(){e.triggerEvent("backspace")},esc:function(){e.close()}}},_eventHandlers:function(){var t=this,n=t.options.nativeMousedown,r=t.options.customShowHideEvent,i,s;return this.dropdown.bind({"click.selectBoxIt":function(){t.dropdown.trigger("focus",!0),t.originalElem.disabled||(t.triggerEvent("click"),!n&&!r&&t.toggle())},"mousedown.selectBoxIt":function(){e(this).data("mdown",!0),t.triggerEvent("mousedown"),n&&!r&&t.toggle()},"mouseup.selectBoxIt":function(){t.triggerEvent("mouseup")},"blur.selectBoxIt":function(){t.blur&&(t.triggerEvent("blur"),t.list.is(":visible")&&t.close())},"focus.selectBoxIt":function(n,r){var i=e(this).data("mdown");e(this).removeData("mdown"),!i&&!r&&setTimeout(function(){t.triggerEvent("tab-focus")},0),r||t.triggerEvent("focus")},"keydown.selectBoxIt":function(e){var n=t._keyMappings[e.keyCode],r=t._keydownMethods()[n];r&&(r(),t.options.keydownOpen&&(n==="up"||n==="down")&&t.open()),r&&n!=="tab"&&e.preventDefault()},"keypress.selectBoxIt":function(e){var n=e.charCode||e.keyCode,r=String.fromCharCode(n);t.search&&t.search(r,!0,!0),n===32&&e.preventDefault()},"mouseenter.selectBoxIt":function(){t.triggerEvent("mouseenter")},"mouseleave.selectBoxIt":function(){t.triggerEvent("mouseleave")}}),t.list.bind({"mouseover.selectBoxIt":function(){t.blur=!1},"mouseout.selectBoxIt":function(){t.blur=!0},"focusin.selectBoxIt":function(){t.dropdown.trigger("focus",!0)}}).delegate("li","click.selectBoxIt",function(){t._update(e(this)),t.triggerEvent("option-click"),e(this).attr("data-disabled")==="false"&&t.close()}).delegate("li","focusin.selectBoxIt",function(){t.listItems.not(e(this)).removeAttr("data-active"),e(this).attr("data-active","");var n=t.list.is(":hidden");(t.options.searchWhenHidden&&n||t.options.aggressiveChange||n&&t.options.selectWhenHidden)&&t._update(e(this))}).delegate("li","mouseup.selectBoxIt",function(){n&&!r&&(t._update(e(this)),t.triggerEvent("option-mouseup"),e(this).attr("data-disabled")==="false"&&t.close())}),t.selectBox.bind({"change.selectBoxIt, internal-change.selectBoxIt":function(e,n){var r;n||(r=t.list.find('li[data-val="'+t.originalElem.value+'"]'),r.length&&(t.listItems.eq(t.currentFocus).removeClass(t.focusClass),t.currentFocus=+r.attr("id"))),r=t.listItems.eq(t.currentFocus),i=r.attr("data-text"),s=i?i:r.find("a").text(),t._setText(t.dropdownText,s),t.dropdownText.attr("data-val",t.originalElem.value),r.find("i").attr("class")&&(t.dropdownImage.attr("class",r.find("i").attr("class")).addClass("selectboxit-default-icon"),t.dropdownImage.attr("style",r.find("i").attr("style"))),t.triggerEvent("changed")},"disable.selectBoxIt":function(){t.dropdown.addClass(t.theme.disabled)},"enable.selectBoxIt":function(){t.dropdown.removeClass(t.theme.disabled)}}),t},_update:function(e){var t=this,n,r,i=t.options.defaultText||t.selectBox.attr("data-text");e.attr("data-disabled")==="false"&&(n=t.listItems.eq(t.currentFocus).attr("data-text"),r=n?n:t.listItems.eq(t.currentFocus).text(),(i&&t.options.html?t.dropdownText.html()===i:t.dropdownText.text()===i)&&t.selectBox.val()===e.attr("data-val")?(t._setText(t.dropdownText,r),t.dropdownText.trigger("internal-change")):(t.selectBox.val(e.attr("data-val")),t.currentFocus=+e.attr("id"),t.originalElem.value!==t.dropdownText.attr("data-val")&&t.triggerEvent("change")))},_addClasses:function(t){var n=this,r=t.focus,i=t.hover,s=t.button,o=t.list,u=t.arrow,a=t.container,f=t.open;return n.focusClass=r,n.openClass=f,n.selectedClass="selectboxit-selected",n.downArrow.addClass(n.selectBox.data("downarrow")||n.options.downArrowIcon||u),n.dropdownContainer.addClass(a),n.dropdown.addClass(s),n.list.addClass(o),n.listItems.bind({"focusin.selectBoxIt":function(){e(this).addClass(r)},"blur.selectBoxIt":function(){e(this).removeClass(r)}}),n.selectBox.bind({"open.selectBoxIt":function(){var e=n.list.find("li[data-val='"+n.dropdownText.attr("data-val")+"']"),t;e.length||(n.currentFocus===0&&!n.options.showFirstOption&&n.listItems.eq(0).hasClass(n.theme.disabled)?e=n.listItems.not("[data-disabled=true]").first():e=n.listItems.first()),n.currentFocus=+e.attr("id"),t=n.listItems.eq(n.currentFocus),n.dropdown.addClass(f),n.dropdown.removeClass(i).addClass(r),n.listItems.removeClass(n.selectedClass),n.listItems.removeAttr("data-active").not(t).removeClass(r),t.addClass(r).addClass(n.selectedClass)},"close.selectBoxIt":function(){n.dropdown.removeClass(f)},"blur.selectBoxIt":function(){n.dropdown.removeClass(r)},"mouseenter.selectBoxIt":function(){n.dropdown.addClass(i)},"mouseleave.selectBoxIt":function(){n.dropdown.removeClass(i)}}),n.listItems.bind({"mouseenter.selectBoxIt":function(){e(this).attr("data-disabled")==="false"&&(n.listItems.removeAttr("data-active"),e(this).addClass(r).attr("data-active",""),n.listItems.not(e(this)).removeClass(r),e(this).addClass(r),n.currentFocus=+e(this).attr("id"))},"mouseleave.selectBoxIt":function(){e(this).attr("data-disabled")==="false"&&(n.listItems.not(e(this)).removeClass(r).removeAttr("data-active"),e(this).addClass(r),n.currentFocus=+e(this).attr("id"))}}),n},refresh:function(e){var t=this;return t._destroySelectBoxIt&&(t._destroySelectBoxIt()._create(!0)._callbackSupport(e),t.triggerEvent("refresh")),t},htmlEscape:function(e){return String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},triggerEvent:function(e){var t=this,n=t.options.showFirstOption?t.currentFocus:t.currentFocus-1>=0?t.currentFocus:0;return t.selectBox.trigger(e,{elem:t.selectBox.eq(n),"dropdown-elem":t.listItems.eq(t.currentFocus)}),t},_copyAttributes:function(){var e=this;return e._addSelectBoxAttributes&&e._addSelectBoxAttributes(),e}});var i=e.selectBox.selectBoxIt.prototype;i._ariaAccessibility=function(){var t=this;return t.dropdown.attr({role:"combobox","aria-autocomplete":"list","aria-expanded":"false","aria-owns":t.list.attr("id"),"aria-activedescendant":t.listItems.eq(t.currentFocus).attr("id"),"aria-label":e("label[for='"+t.originalElem.id+"']").text()||"","aria-live":"assertive"}).bind({"disable.selectBoxIt":function(){t.dropdown.attr("aria-disabled","true")},"enable.selectBoxIt":function(){t.dropdown.attr("aria-disabled","false")}}),t.list.attr({role:"listbox","aria-hidden":"true"}),t.listItems.attr({role:"option"}),t.selectBox.bind({"change.selectBoxIt":function(){t.dropdownText.attr("aria-label",t.originalElem.value)},"open.selectBoxIt":function(){t.list.attr("aria-hidden","false"),t.dropdown.attr("aria-expanded","true")},"close.selectBoxIt":function(){t.list.attr("aria-hidden","true"),t.dropdown.attr("aria-expanded","false")}}),t},i._addSelectBoxAttributes=function(){var t=this;return t._addAttributes(t.selectBox.prop("attributes"),t.dropdown),t.selectItems.each(function(n){t._addAttributes(e(this).prop("attributes"),t.listItems.eq(n))}),t},e.selectBox.selectBoxIt.prototype._addAttributes=function(t,n){var r=this,i=r.options.copyAttributes;return t.length&&e.each(t,function(t,r){var s=r.name.toLowerCase(),o=r.value;o!=="null"&&(e.inArray(s,i)!==-1||s.indexOf("data")!==-1)&&n.attr(s,o)}),r},i.destroy=function(t){var n=this;return n._destroySelectBoxIt(),e.Widget.prototype.destroy.call(n),n._callbackSupport(t),n},i._destroySelectBoxIt=function(){var t=this;return t.dropdown.unbind(".selectBoxIt").undelegate(".selectBoxIt"),e.contains(t.dropdownContainer[0],t.originalElem)&&t.dropdownContainer.before(t.selectBox),t.dropdownContainer.remove(),t.selectBox.removeAttr("style").show(),t.triggerEvent("destroy"),t},i.disable=function(t){var n=this;return n.options.disabled||(n.close(),n.selectBox.attr("disabled","disabled"),n.dropdown.removeAttr("tabindex").addClass("selectboxit-disabled"),e.Widget.prototype.disable.call(n),n.triggerEvent("disable")),n._callbackSupport(t),n},i.disableOption=function(e,t){var n=this,r,i,s;return(typeof e).toLowerCase()==="number"&&(n.close(),r=n.selectBox.find("option").eq(e),n.triggerEvent("disable-option"),r.attr("disabled","disabled"),n.listItems.eq(e).attr("data-disabled","true").addClass(n.theme.disabled),n.currentFocus===e&&(i=n.listItems.eq(n.currentFocus).nextAll("li").not("[data-disabled='true']").first().length,s=n.listItems.eq(n.currentFocus).prevAll("li").not("[data-disabled='true']").first().length,i?n.moveDown():s?n.moveUp():n.disable())),n._callbackSupport(t),n},i._isDisabled=function(e){var t=this;return t.originalElem.disabled&&t.disable(),t},i._dynamicPositioning=function(){var t=this,n=t.dropdown.offset().top,r=t.list.data("max-height")||t.list.outerHeight(),i=t.dropdown.outerHeight(),s=t.options.viewport,o=s.height(),u=e.isWindow(s.get(0))?s.scrollTop():s.offset().top,a=n+i+r<=o+u,f=!a;t.list.data("max-height")||t.list.data("max-height",t.list.outerHeight());if(!f)t.list.css("max-height",r),t.list.css("top","auto");else if(t.dropdown.offset().top-u>=r)t.list.css("max-height",r),t.list.css("top",t.dropdown.position().top-t.list.outerHeight());else{var l=Math.abs(n+i+r-(o+u)),c=Math.abs(t.dropdown.offset().top-u-r);l<c?(t.list.css("max-height",r-l-i/2),t.list.css("top","auto")):(t.list.css("max-height",r-c-i/2),t.list.css("top",t.dropdown.position().top-t.list.outerHeight()))}return t},i.enable=function(t){var n=this;return n.options.disabled&&(n.triggerEvent("enable"),n.selectBox.removeAttr("disabled"),n.dropdown.attr("tabindex",0).removeClass(n.disabledClasses),e.Widget.prototype.enable.call(n),n._callbackSupport(t)),n},i.enableOption=function(e,t){var n=this,r,i=0,s,o;return(typeof e).toLowerCase()==="number"&&(r=n.selectBox.find("option").eq(e),n.triggerEvent("enable-option"),r.removeAttr("disabled"),n.listItems.eq(e).attr("data-disabled","false").removeClass(n.disabledClasses)),n._callbackSupport(t),n},i.moveDown=function(e){var t=this;t.currentFocus+=1;var n=t.listItems.eq(t.currentFocus).attr("data-disabled")==="true"?!0:!1,r=t.listItems.eq(t.currentFocus).nextAll("li").not("[data-disabled='true']").first().length;if(t.currentFocus===t.listItems.length)t.currentFocus-=1;else{if(n&&r){t.listItems.eq(t.currentFocus-1).blur(),t.moveDown();return}n&&!r?t.currentFocus-=1:(t.listItems.eq(t.currentFocus-1).blur().end().eq(t.currentFocus).focusin(),t._scrollToView("down"),t.triggerEvent("moveDown"))}return t._callbackSupport(e),t},i.moveUp=function(e){var t=this;t.currentFocus-=1;var n=t.listItems.eq(t.currentFocus).attr("data-disabled")==="true"?!0:!1,r=t.listItems.eq(t.currentFocus).prevAll("li").not("[data-disabled='true']").first().length;if(t.currentFocus===-1)t.currentFocus+=1;else{if(n&&r){t.listItems.eq(t.currentFocus+1).blur(),t.moveUp();return}n&&!r?t.currentFocus+=1:(t.listItems.eq(this.currentFocus+1).blur().end().eq(t.currentFocus).focusin(),t._scrollToView("up"),t.triggerEvent("moveUp"))}return t._callbackSupport(e),t},i._setCurrentSearchOption=function(e){var t=this;return(t.options.aggressiveChange||t.options.selectWhenHidden||t.listItems.eq(e).is(":visible"))&&t.listItems.eq(e).data("disabled")!==!0&&(t.listItems.eq(t.currentFocus).blur(),t.currentIndex=e,t.currentFocus=e,t.listItems.eq(t.currentFocus).focusin(),t._scrollToView("search"),t.triggerEvent("search")),t},i._searchAlgorithm=function(e,t){var n=this,r=!1,i,s,o,u,a=n.textArray,f=n.currentText;for(i=e,o=a.length;i<o;i+=1){u=a[i];for(s=0;s<o;s+=1)a[s].search(t)!==-1&&(r=!0,s=o);r||(n.currentText=n.currentText.charAt(n.currentText.length-1).replace(/[|()\[{.+*?$\\]/g,"\\$0"),f=n.currentText),t=new RegExp(f,"gi");if(f.length<3){t=new RegExp(f.charAt(0),"gi");if(u.charAt(0).search(t)!==-1){n._setCurrentSearchOption(i);if(u.substring(0,f.length).toLowerCase()!==f.toLowerCase()||n.options.similarSearch)n.currentIndex+=1;return!1}}else if(u.search(t)!==-1)return n._setCurrentSearchOption(i),!1;if(u.toLowerCase()===n.currentText.toLowerCase())return n._setCurrentSearchOption(i),n.currentText="",!1}return!0},i.search=function(e,t,n){var r=this;n?r.currentText+=e.replace(/[|()\[{.+*?$\\]/g,"\\$0"):r.currentText=e.replace(/[|()\[{.+*?$\\]/g,"\\$0");var i=r._searchAlgorithm(r.currentIndex,new RegExp(r.currentText,"gi"));return i&&r._searchAlgorithm(0,r.currentText),r._callbackSupport(t),r},i._applyNativeSelect=function(){var e=this,t,n,r;e.dropdownContainer.append(e.selectBox),e.selectBox.css({display:"block",width:e.dropdown.outerWidth(),height:e.dropdown.outerHeight(),opacity:"0",position:"absolute",top:"0",left:"0",cursor:"pointer","z-index":"999999",margin:e.dropdown.css("margin"),padding:"0","-webkit-appearance":"menulist-button"}).bind({"changed.selectBoxIt":function(){t=e.selectBox.find("option").filter(":selected"),n=t.attr("data-text"),r=n?n:t.text(),e._setText(e.dropdownText,r),e.list.find('li[data-val="'+t.val()+'"]').find("i").attr("class")&&e.dropdownImage.attr("class",e.list.find('li[data-val="'+t.val()+'"]').find("i").attr("class")).addClass("selectboxit-default-icon")}})},i._mobile=function(e){var t=this;return t.options.isMobile()&&t._applyNativeSelect(),this},i.selectOption=function(e,t){var n=this;return(typeof e).toLowerCase()==="number"?n.selectBox.val(n.selectBox.find("option").eq(e).val()).change():(typeof e).toLowerCase()==="string"&&n.selectBox.val(e).change(),n._callbackSupport(t),n},i.setOption=function(t,n,r){var i=this,s=i.listItems.eq(0);return t==="showFirstOption"&&!n?s.hide():t==="showFirstOption"&&n?s.show():t==="defaultIcon"&&n?i.dropdownImage.attr("class",n+" selectboxit-arrow"):t==="downArrowIcon"&&n?i.downArrow.attr("class",n+" selectboxit-arrow"):t==="defaultText"&&i._setText(i.dropdownText,n),e.Widget.prototype._setOption.apply(i,arguments),i._callbackSupport(r),i},i.setOptions=function(t,n){var r=this,i=r.listItems.eq(0);return e.Widget.prototype._setOptions.apply(r,arguments),r.options.showFirstOption?i.show():i.hide(),r.options.defaultIcon&&r.dropdownImage.attr("class",r.options.defaultIcon+" selectboxit-arrow"),r.options.downArrowIcon&&r.downArrow.attr("class",r.options.downArrowIcon+" selectboxit-arrow"),r.options.defaultText&&r._setText(r.dropdownText,r.options.defaultText),r._callbackSupport(n),r},i.wait=function(e,t){var n=this,r=this.returnTimeout(e);return r.then(function(){n._callbackSupport(t)}),n},i.returnTimeout=function(t){return e.Deferred(function(e){setTimeout(e.resolve,t)})}});/*!
* hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
* http://cherne.net/brian/resources/jquery.hoverIntent.html
*
* You may use hoverIntent under the terms of the MIT license. Basically that
* means you are free to use hoverIntent as long as this header is left intact.
* Copyright 2007, 2013 Brian Cherne
*/(function(e){e.fn.hoverIntent=function(t,n,r){var i={interval:100,sensitivity:7,timeout:0};if(typeof t==="object"){i=e.extend(i,t)}else if(e.isFunction(n)){i=e.extend(i,{over:t,out:n,selector:r})}else{i=e.extend(i,{over:t,out:t,selector:n})}var s,o,u,a;var f=function(e){s=e.pageX;o=e.pageY};var l=function(t,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);if(Math.abs(u-s)+Math.abs(a-o)<i.sensitivity){e(n).off("mousemove.hoverIntent",f);n.hoverIntent_s=1;return i.over.apply(n,[t])}else{u=s;a=o;n.hoverIntent_t=setTimeout(function(){l(t,n)},i.interval)}};var c=function(e,t){t.hoverIntent_t=clearTimeout(t.hoverIntent_t);t.hoverIntent_s=0;return i.out.apply(t,[e])};var h=function(t){var n=jQuery.extend({},t);var r=this;if(r.hoverIntent_t){r.hoverIntent_t=clearTimeout(r.hoverIntent_t)}if(t.type=="mouseenter"){u=n.pageX;a=n.pageY;e(r).on("mousemove.hoverIntent",f);if(r.hoverIntent_s!=1){r.hoverIntent_t=setTimeout(function(){l(n,r)},i.interval)}}else{e(r).off("mousemove.hoverIntent",f);if(r.hoverIntent_s==1){r.hoverIntent_t=setTimeout(function(){c(n,r)},i.timeout)}}};return this.on({"mouseenter.hoverIntent":h,"mouseleave.hoverIntent":h},i.selector)}})(jQuery);/*!
* jQuery Cookie Plugin v1.4.0
* https://github.com/carhartl/jquery-cookie
*
* Copyright 2013 Klaus Hartl
* Released under the MIT license
*/(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function r(e){return u.raw?e:decodeURIComponent(e)}function i(e){return n(u.json?JSON.stringify(e):String(e))}function s(e){if(e.indexOf('"')===0){e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}try{e=decodeURIComponent(e.replace(t," "));return u.json?JSON.parse(e):e}catch(n){}}function o(t,n){var r=u.raw?t:s(t);return e.isFunction(n)?n(r):r}var t=/\+/g;var u=e.cookie=function(t,s,a){if(s!==undefined&&!e.isFunction(s)){a=e.extend({},u.defaults,a);if(typeof a.expires==="number"){var f=a.expires,l=a.expires=new Date;l.setDate(l.getDate()+f)}return document.cookie=[n(t),"=",i(s),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}var c=t?undefined:{};var h=document.cookie?document.cookie.split("; "):[];for(var p=0,d=h.length;p<d;p++){var v=h[p].split("=");var m=r(v.shift());var g=v.join("=");if(t&&t===m){c=o(g,s);break}if(!t&&(g=o(g))!==undefined){c[m]=g}}return c};u.defaults={};e.removeCookie=function(t,n){if(e.cookie(t)===undefined){return false}e.cookie(t,"",e.extend({},n,{expires:-1}));return!e.cookie(t)}});