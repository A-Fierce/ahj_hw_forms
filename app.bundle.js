!function(){"use strict";new class{constructor(){this.createWindow()}createWindow(){const e=document.querySelector("body"),t=document.createElement("div");t.className="widget-window",e.append(t);const n=document.createElement("button");n.className="widget-button",n.textContent="Click to toggle popOver",t.append(n)}},new class{constructor(){this.chargePopUp()}chargePopUp(){const e=document.querySelector(".widget-button");e.addEventListener("click",(()=>{const t=document.createElement("div");t.className="widget-hint";const n=document.createElement("header");n.className="widget-hint-header",n.textContent="Popover title",t.append(n);const o=document.createElement("p");o.className="widget-hint-content",o.textContent="And here's some amazing content. It's very engaging. Right?",t.append(o),document.body.appendChild(t);const{top:c,left:d}=e.getBoundingClientRect();t.style.top=window.scrollY+c-t.clientHeight+"px",t.style.left=window.scrollX+d-(t.clientWidth-e.clientWidth)/2+"px",setTimeout((()=>{t.remove()}),1500)}))}}}();