!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");console.log(r);var a=null;e.setAttribute("disabled",""),t.addEventListener("click",(function(){t.setAttribute("disabled",""),e.removeAttribute("disabled"),a=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));r.style.backgroundColor="".concat(t)}),1e3)})),e.addEventListener("click",(function(){clearInterval(a),t.removeAttribute("disabled"),e.setAttribute("disabled","")}))}();
//# sourceMappingURL=01-color-switcher.c77563f2.js.map
