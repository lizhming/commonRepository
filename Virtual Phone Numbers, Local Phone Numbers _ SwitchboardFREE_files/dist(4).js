"undefined"==typeof carouselWidget&&(carouselWidget=function(e,t){if("gatsbylady-london"==t.store)return!1;var n=document.getElementById(e),a="https://widget.reviews.co.uk/carousel/widget",i="elementId="+e+"&version=3b&";for(c in t)i.length>0&&(i+="&"),"object"!=typeof t[c]?i+=c+"="+encodeURIComponent(t[c]):i+=c+"="+encodeURIComponent(JSON.stringify(t[c]));if(a+="?"+i,i.length>2e3){var d=document.createElement("IFRAME");d.setAttribute("frameborder",0),d.id=e+"-frame",d.name=e+"-frame",d.width="100%",d.title="Reviews Carousel Widget",n.innerHTML="",n.appendChild(d);var r,o;r=document.createElement("form"),r.action=a,r.target=e+"-frame",o=document.createElement("input"),o.type="hidden",o.name="elementId",o.value=e,r.appendChild(o);for(var c in t)o=document.createElement("input"),o.type="hidden",o.name=c,"object"!=typeof t[c]?o.value=t[c]:o.value=JSON.stringify(t[c]),r.appendChild(o);document.body.appendChild(r),r.submit()}else{var d=document.createElement("IFRAME");d.setAttribute("src",a),d.setAttribute("frameborder",0),d.width="100%",d.title="Reviews Carousel Widget",n.innerHTML="",n.appendChild(d)}var l=function(t){try{var n=JSON.parse(t.data);if(void 0!=n.action)switch(n.action){case"resize":n.elementId==e&&(d.height=n.height)}}catch(e){}};window.addEventListener?addEventListener("message",l,!1):attachEvent("onmessage",l)},"function"==typeof carouselWidgetCallback&&carouselWidgetCallback());