(()=>{"use strict";const e=document.querySelector("#content"),t=()=>{const t=document.createElement("div");t.classList.add("main");const n=document.createElement("div");n.classList.add("img");const a=document.createElement("img"),c=document.createElement("h2");c.classList.add("headline");const d=document.createElement("p");d.classList.add("about");const o=document.createElement("div");o.classList.add("overlay");const s=document.createElement("h1");a.src="../assets/chef1.jpg",n.appendChild(a),t.appendChild(n),c.textContent="The best Sushi in the 'ALL BLUE'",t.appendChild(c),d.textContent="If you are hungry come! Eat! Have your fill! We serve everyone equally, at our low affordable prices",t.appendChild(d),s.textContent="Baratie",t.prepend(s),e.appendChild(t),e.appendChild(o)},n=document.querySelector("#content");let a="home";const c=document.querySelector("#header"),d=document.createElement("ul"),o=document.createElement("li"),s=document.createElement("a");s.setAttribute("href","#home"),s.textContent="Home",o.appendChild(s);const r=document.createElement("li"),l=document.createElement("a");l.setAttribute("href","#menu"),l.textContent="Menu",r.appendChild(l);const m=document.createElement("li"),i=document.createElement("a");i.setAttribute("href","#contact"),i.textContent="Contact",m.appendChild(i),d.appendChild(o),d.appendChild(r),d.appendChild(m),c.appendChild(d),o.addEventListener("click",(()=>{"home"!==a&&(t(),a="home",p())})),r.addEventListener("click",(()=>{"menu"!==a&&(menu(),a="menu",p())})),m.addEventListener("click",(()=>{"contact"!==a&&(n.textContent="",a="contact",p())}));const p=()=>{"home"===a&&(s.classList.add("page-marker"),l.classList.remove("page-marker"),i.classList.remove("page-marker")),"menu"===a&&(l.classList.add("page-marker"),s.classList.remove("page-marker"),i.classList.remove("page-marker")),"contact"===a&&(i.classList.add("page-marker"),s.classList.remove("page-marker"),l.classList.remove("page-marker"))};p(),t(),console.log("Hello World!")})();