/* Do not modify this file directly. It is compiled from other files. */
!function(){function t(){if(this.complete){var e=this.getAttribute("data-lazy-src");if(e&&this.src!==e)this.addEventListener("onload",t);else{var d=this.width,n=this.height;d&&d>0&&n&&n>0&&(this.setAttribute("width",d),this.setAttribute("height",n),i(this))}}else this.addEventListener("onload",t)}var e=function(){for(var e=document.querySelectorAll("img[data-recalc-dims]"),i=0;i<e.length;i++)t.call(e[i])},i=function(t){t.removeAttribute("data-recalc-dims"),t.removeAttribute("scale")};"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()),document.body.addEventListener("is.post-load",e)}();;
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=175)}({175:function(e,t){var n=document.querySelectorAll(".coblocks-animate");if("IntersectionObserver"in window){var r=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(e.target.classList.add(e.target.dataset.coblocksAnimation),r.unobserve(e.target))}))}),{threshold:[.15]});n.forEach((function(e){r.observe(e)}))}else n.forEach((function(e){e.classList.remove("coblocks-animate"),delete e.dataset.coblocksAnimation}))}});;
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=569)}({569:function(e,t){!function(){"use strict";var e=coblocksLigthboxData,t=e.closeLabel,n=e.leftLabel,o=e.rightLabel,c=document.getElementsByClassName("has-lightbox");Array.from(c).forEach((function(e,c){e.className+=" lightbox-"+c+" ",function(e){var c=document.createElement("div");c.setAttribute("class","coblocks-lightbox");var r=document.createElement("div");r.setAttribute("class","coblocks-lightbox__background");var a=document.createElement("div");a.setAttribute("class","coblocks-lightbox__heading");var i=document.createElement("button");i.setAttribute("class","coblocks-lightbox__close"),i.setAttribute("aria-label",t);var l=document.createElement("span");l.setAttribute("class","coblocks-lightbox__count");var s=document.createElement("div");s.setAttribute("class","coblocks-lightbox__image");var u=document.createElement("img"),b=document.createElement("figcaption");b.setAttribute("class","coblocks-lightbox__caption");var d=document.createElement("button");d.setAttribute("class","coblocks-lightbox__arrow coblocks-lightbox__arrow--left");var g=document.createElement("button");g.setAttribute("class","coblocks-lightbox__arrow coblocks-lightbox__arrow--right");var f=document.createElement("div");f.setAttribute("class","arrow-right"),f.setAttribute("aria-label",o);var m=document.createElement("div");m.setAttribute("class","arrow-left"),m.setAttribute("aria-label",n);var h,v=[".has-lightbox.lightbox-".concat(e," > :not(.carousel-nav) figure img"),"figure.has-lightbox.lightbox-".concat(e," > img"),".has-lightbox.lightbox-".concat(e,' > figure[class^="align"] img')].join(", "),p=[".has-lightbox.lightbox-".concat(e," > :not(.carousel-nav) figure figcaption")].join(", "),x=document.querySelectorAll(v),y=document.querySelectorAll(p);a.append(l,i),s.append(u,b),d.append(m),g.append(f),c.append(r,a,s,d,g),x.length>0&&(document.getElementsByTagName("BODY")[0].append(c),1===x.length&&(g.remove(),d.remove()));y.length>0&&Array.from(y).forEach((function(e,t){e.addEventListener("click",(function(){E(t)}))}));Array.from(x).forEach((function(e,t){e.closest("figure").addEventListener("click",(function(){E(t)}))})),d.addEventListener("click",(function(){E(h=0===h?x.length-1:h-1)})),g.addEventListener("click",(function(){E(h=h===x.length-1?0:h+1)})),r.addEventListener("click",(function(){c.style.display="none"})),i.addEventListener("click",(function(){c.style.display="none"}));var k={preloaded:!1,setPreloadImages:function(){k.preloaded||(k.preloaded=!0,Array.from(x).forEach((function(e,t){k["img-".concat(t)]=new window.Image,k["img-".concat(t)].src=e.attributes.src.value,k["img-".concat(t)]["data-caption"]=x[t]&&x[t].nextElementSibling?function(e){for(var t=e.nextElementSibling;t;){if(t.matches("figcaption"))return t.innerHTML;t=t.nextElementSibling}return""}(x[t]):""})),document.onkeydown=function(e){if(void 0!==c&&"none"!==c)switch((e=e||window.event).keyCode){case 27:i.click();break;case 37:case 65:d.click();break;case 39:case 68:g.click()}})}};function E(e){k.setPreloadImages(),h=e,c.style.display="flex",r.style.backgroundImage="url(".concat(k["img-".concat(h)].src,")"),u.src=k["img-".concat(h)].src,b.innerHTML=k["img-".concat(h)]["data-caption"],l.textContent="".concat(h+1," / ").concat(x.length)}}(c)}))}()}});;
/**
 * File primary-navigation.js.
 *
 * This files only gets added to themes that support the mobile nav on side
 */
( function() {

	/**
	 * Menu Toggle Behaviors
	 *
	 * @param {Element} element
	 */
	var navMenu = function ( buttonId, inputId ) {
		var wrapper = document.body;

		var toggleButton = document.getElementById( buttonId );
		var toggleInput  = document.getElementById( inputId );

		if ( toggleButton ) {
			toggleButton.onclick = function() {
				if ( true == toggleInput.checked ) {
					wrapper.classList.remove( 'lock-scrolling' );
				} else {
					wrapper.classList.add( 'lock-scrolling' );
				}

				toggleButton.focus();
			}
		}

		document.addEventListener( 'click', function( event ) {
			// If target onclick is <a> with # within the href attribute
			if ( event.target.hash && event.target.hash.includes( '#' ) ) {
				wrapper.classList.remove( 'lock-scrolling' );
				if (toggleInput) {
					toggleInput.checked = false;
				}
				// Wait 550 and scroll to the anchor.
				setTimeout(function () {
					var anchor = document.getElementById(event.target.hash.slice(1));
					anchor.scrollIntoView();
				}, 550);
			}
		} );
	}

	window.addEventListener( 'load', function() {
		navMenu(  'toggle-menu', 'toggle' );
		navMenu(  'toggle-cart', 'woocommerce-toggle' );
	} );
} )();;

/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */